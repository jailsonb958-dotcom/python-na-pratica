interface PyodideRuntime { setStdout: (options: { batched: (message: string) => void }) => void; setStderr: (options: { batched: (message: string) => void }) => void; setStdin: (options: { stdin: () => string }) => void; runPythonAsync: (code: string) => Promise<unknown>; }

let pyodidePromise: Promise<PyodideRuntime> | null = null;

export function loadPython() {
  const dynamicImport = new Function("url", "return import(url)") as (url: string) => Promise<{ loadPyodide: (options: { indexURL: string }) => Promise<PyodideRuntime> }>;
  pyodidePromise ??= dynamicImport("https://cdn.jsdelivr.net/pyodide/v0.26.2/full/pyodide.mjs").then((module) => module.loadPyodide({ indexURL: "https://cdn.jsdelivr.net/pyodide/v0.26.2/full/" }));
  return pyodidePromise;
}

export async function runPython(code: string, inputText: string) {
  const pyodide = await loadPython();
  const inputs = inputText.split("\n");
  const output: string[] = [];
  pyodide.setStdout({ batched: (message: string) => output.push(message) });
  pyodide.setStderr({ batched: (message: string) => output.push(message) });
  pyodide.setStdin({ stdin: () => inputs.shift() ?? "" });
  try {
    await pyodide.runPythonAsync(code);
    return { output: output.join("\n") || "Execução concluída sem saída.", error: false };
  } catch (error) {
    return { output: `${output.join("\n")}${output.length ? "\n" : ""}${String(error)}`, error: true };
  }
}
