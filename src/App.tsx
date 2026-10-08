import { useEffect, useMemo, useState } from "react";
import { BookOpen, Check, ChevronRight, CircleHelp, Code2, Copy, Filter, Flame, Github, LayoutDashboard, Menu, Play, RotateCcw, Search, Sparkles, Terminal, Trash2, X, Zap } from "lucide-react";
import { exercises, type Exercise } from "./data/exercises";
import { CodeEditor } from "./components/CodeEditor";
import { loadPython, runPython } from "./services/pythonRunner";

const categories = ["Todos", "Fundamentos", "Entrada de dados", "Condicionais", "Loops", "Listas", "Tuplas", "Dicionários", "Práticos"];
const storage = { completed: "pnp-completed", codes: "pnp-codes", last: "pnp-last" };

export function App() {
  const [selectedId, setSelectedId] = useState(localStorage.getItem(storage.last) || exercises[0].id);
  const [page, setPage] = useState<"dashboard" | "exercise" | "about">("dashboard");
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todos");
  const [difficulty, setDifficulty] = useState("Todos os níveis");
  const [completed, setCompleted] = useState<string[]>(JSON.parse(localStorage.getItem(storage.completed) || "[]"));
  const [codes, setCodes] = useState<Record<string, string>>(JSON.parse(localStorage.getItem(storage.codes) || "{}"));
  const [inputText, setInputText] = useState("");
  const [output, setOutput] = useState("Pronto para executar seu código.");
  const [running, setRunning] = useState(false);
  const [pythonStatus, setPythonStatus] = useState<"loading" | "ready" | "error">("loading");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [codeVariant, setCodeVariant] = useState<"corrected" | "original">("corrected");
  const current = exercises.find((exercise) => exercise.id === selectedId) || exercises[0];

  useEffect(() => { loadPython().then(() => setPythonStatus("ready")).catch(() => setPythonStatus("error")); }, []);
  useEffect(() => { localStorage.setItem(storage.completed, JSON.stringify(completed)); }, [completed]);
  useEffect(() => { localStorage.setItem(storage.codes, JSON.stringify(codes)); }, [codes]);

  const filtered = useMemo(() => exercises.filter((exercise) => {
    const haystack = [exercise.title, exercise.category, exercise.difficulty, ...exercise.concepts].join(" ").toLowerCase();
    return haystack.includes(query.toLowerCase()) && (category === "Todos" || exercise.category === category) && (difficulty === "Todos os níveis" || exercise.difficulty === difficulty);
  }), [query, category, difficulty]);
  const progress = Math.round((completed.length / exercises.length) * 100);
  const code = codes[current.id] ?? (codeVariant === "original" ? current.originalCode : current.correctedCode);

  function openExercise(id: string) { setSelectedId(id); localStorage.setItem(storage.last, id); setPage("exercise"); setSidebarOpen(false); setOutput("Pronto para executar seu código."); setCodeVariant("corrected"); }
  function updateCode(value: string) { setCodes((previous) => ({ ...previous, [current.id]: value })); }
  async function execute() { setRunning(true); setOutput(pythonStatus === "ready" ? "Executando Python…" : "Preparando o ambiente Python…"); try { const result = await runPython(code, inputText); setOutput(result.output); } catch (error) { setOutput(String(error)); } finally { setRunning(false); } }
  function restore() { setCodes((previous) => { const next = { ...previous }; delete next[current.id]; return next; }); setOutput("Código restaurado. Pronto para executar."); }
  function toggleComplete() { setCompleted((items) => items.includes(current.id) ? items.filter((id) => id !== current.id) : [...items, current.id]); }
  async function copy(value: string) { await navigator.clipboard?.writeText(value); setOutput("Código copiado para a área de transferência."); }
  function resetProgress() { if (window.confirm("Resetar exercícios concluídos e códigos personalizados?")) { setCompleted([]); setCodes({}); setOutput("Progresso resetado."); } }

  return <div className="app-shell">
    <aside className={`sidebar ${sidebarOpen ? "is-open" : ""}`}>
      <div className="brand"><span className="brand-icon">🐍</span><div><strong>Python na Prática</strong><small>laboratório de estudos</small></div><button className="close-menu" onClick={() => setSidebarOpen(false)} aria-label="Fechar menu"><X size={18} /></button></div>
      <nav className="primary-nav"><button className={page === "dashboard" ? "active" : ""} onClick={() => { setPage("dashboard"); setSidebarOpen(false); }}><LayoutDashboard size={17} /> Dashboard</button><button className={page === "about" ? "active" : ""} onClick={() => { setPage("about"); setSidebarOpen(false); }}><CircleHelp size={17} /> Sobre o projeto</button></nav>
      <div className="sidebar-heading"><span>EXERCÍCIOS</span><span className="count-badge">{exercises.length}</span></div>
      <div className="exercise-list">{filtered.map((exercise) => <button key={exercise.id} className={`exercise-link ${exercise.id === selectedId && page === "exercise" ? "selected" : ""}`} onClick={() => openExercise(exercise.id)}><span className="exercise-number">{String(exercise.order).padStart(2, "0")}</span><span>{exercise.title}</span>{completed.includes(exercise.id) && <Check size={14} className="done-icon" />}</button>)}</div>
      <div className="sidebar-progress"><div className="sidebar-heading"><span>SEU PROGRESSO</span><strong>{progress}%</strong></div><div className="progress-track"><span style={{ width: `${progress}%` }} /></div><small>{completed.length} de {exercises.length} concluídos</small></div>
      <button className="reset-progress" onClick={resetProgress}><RotateCcw size={14} /> Resetar meu progresso</button>
    </aside>
    {sidebarOpen && <button className="drawer-backdrop" onClick={() => setSidebarOpen(false)} aria-label="Fechar menu" />}
    <main className="main-content">
      <header className="topbar"><button className="menu-button" onClick={() => setSidebarOpen(true)} aria-label="Abrir menu"><Menu size={21} /></button><div className="breadcrumbs"><span>Python na Prática</span><ChevronRight size={15} /><strong>{page === "dashboard" ? "Dashboard" : page === "about" ? "Sobre" : current.title}</strong></div><div className="python-status"><span className={`status-dot ${pythonStatus}`} />{pythonStatus === "loading" ? "Preparando Python…" : pythonStatus === "ready" ? "Python pronto" : "Tentar novamente"}</div></header>
      {page === "dashboard" && <Dashboard progress={progress} completed={completed.length} onContinue={() => openExercise(localStorage.getItem(storage.last) || exercises[0].id)} />}
      {page === "about" && <About />}
      {page === "exercise" && <section className="exercise-page"><div className="exercise-intro"><div><span className="eyebrow">EXERCÍCIO {String(current.order).padStart(2, "0")} · {current.category}</span><h1>{current.title}</h1><p>{current.description}</p></div><button className={`complete-button ${completed.includes(current.id) ? "completed" : ""}`} onClick={toggleComplete}>{completed.includes(current.id) ? <><Check size={17} /> Concluído</> : <><Check size={17} /> Marcar como concluído</>}</button></div><div className="tag-row">{current.concepts.map((concept) => <span key={concept} className="tag">{concept}</span>)}<span className="difficulty-tag">{current.difficulty}</span></div><div className="learning-note"><Sparkles size={18} /><div><strong>O que você vai aprender</strong><p>{current.objective}</p></div></div><div className="workspace-grid"><section className="panel editor-panel"><div className="panel-header"><div><span className="panel-kicker"><Code2 size={14} /> EDITOR PYTHON</span><small>{current.file}</small></div><div className="panel-actions"><button onClick={() => copy(code)} title="Copiar código"><Copy size={15} /></button><button onClick={restore} title="Restaurar código"><RotateCcw size={15} /></button></div></div><div className="variant-switch"><button className={codeVariant === "corrected" ? "active" : ""} onClick={() => setCodeVariant("corrected")}>Versão corrigida</button><button className={codeVariant === "original" ? "active" : ""} onClick={() => setCodeVariant("original")}>Código original</button>{current.hasCorrection && <span>Original preservado com problemas didáticos</span>}</div><CodeEditor key={`${current.id}-${codeVariant}`} value={code} onChange={updateCode} /><div className="editor-footer"><button className="run-button" onClick={execute} disabled={running}><Play size={16} fill="currentColor" /> {running ? "Executando…" : "Executar"}</button><button className="ghost-button" onClick={restore}><RotateCcw size={15} /> Restaurar</button></div></section><section className="panel terminal-panel"><div className="panel-header"><div><span className="panel-kicker"><Terminal size={14} /> TERMINAL</span><small>Pyodide · Python 3.x</small></div><button className="clear-button" onClick={() => setOutput("")}><Trash2 size={15} /> Limpar</button></div><pre className={output.includes("Error") || output.includes("Traceback") ? "error-output" : ""}>{output}</pre><div className="input-box"><label htmlFor="program-input">Entradas do programa <span>uma por linha</span></label><textarea id="program-input" value={inputText} onChange={(event) => setInputText(event.target.value)} placeholder="Ex.:\n25\n10" rows={3} /></div></section></div><div className="bottom-grid"><div className="info-card"><span className="card-label">EXPLICAÇÃO</span><p>{current.explanation}</p></div><div className="challenge-card"><Zap size={18} /><div><span className="card-label">DESAFIO</span><p>{current.challenge}</p></div></div></div></section>}
    </main>
  </div>;
}

function Dashboard({ progress, completed, onContinue }: { progress: number; completed: number; onContinue: () => void }) { return <section className="dashboard"><div className="hero"><div><span className="eyebrow">SEU LABORATÓRIO DE PYTHON</span><h1>Aprenda Python<br /><em>praticando.</em></h1><p>Estude fundamentos executando código diretamente no navegador — sem instalar nada.</p><button className="run-button" onClick={onContinue}>Continuar estudando <ChevronRight size={16} /></button></div><div className="hero-art"><div className="code-orbit"><span>def</span> aprender():<br /><i>return</i> "feito"<br /><b>▶</b></div></div></div><div className="stats-grid"><Stat icon={<BookOpen />} value={"25"} label="Exercícios disponíveis" /><Stat icon={<Check />} value={String(completed)} label="Exercícios concluídos" /><Stat icon={<Flame />} value={`${progress}%`} label="Progresso geral" /><Stat icon={<Sparkles />} value="10+" label="Conceitos estudados" /></div><div className="section-heading"><div><span className="eyebrow">COMECE PELO BÁSICO</span><h2>Trilha de fundamentos</h2></div><span className="section-muted">{completed} concluídos</span></div><div className="category-cards"><CategoryCard label="Fundamentos" detail="Entrada, variáveis e tipos" color="violet" /><CategoryCard label="Loops" detail="for, while e range" color="blue" /><CategoryCard label="Coleções" detail="Listas, tuplas e dicionários" color="green" /></div></section> }
function Stat({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) { return <div className="stat-card"><span className="stat-icon">{icon}</span><strong>{value}</strong><span>{label}</span></div> }
function CategoryCard({ label, detail, color }: { label: string; detail: string; color: string }) { return <div className={`category-card ${color}`}><Code2 size={19} /><strong>{label}</strong><span>{detail}</span><ChevronRight size={17} /></div> }
function About() { return <section className="about-page"><span className="eyebrow">SOBRE O PROJETO</span><h1>Um laboratório para aprender<br /><em>fazendo.</em></h1><p className="about-lead">Python na Prática é uma coleção de exercícios desenvolvidos durante os estudos de fundamentos de Python, agora transformada em uma experiência interativa para o navegador.</p><div className="about-grid"><div className="info-card"><BookOpen size={20} /><h3>Aprenda no seu ritmo</h3><p>Leia a explicação, edite o exemplo e execute Python real usando Pyodide e WebAssembly, sem backend.</p></div><div className="info-card"><Code2 size={20} /><h3>Conceitos essenciais</h3><p>Variáveis, tipos, entrada e saída, operadores, condicionais, loops, listas, tuplas, dicionários e importações.</p></div><div className="info-card"><Github size={20} /><h3>Aberto e evolutivo</h3><p>O projeto é estático, está pronto para GitHub e Netlify e guarda seu progresso apenas no navegador.</p></div></div></section> }
