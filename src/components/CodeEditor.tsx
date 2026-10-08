import { useEffect, useRef } from "react";
import { basicSetup } from "codemirror";
import { EditorView, keymap } from "@codemirror/view";
import { EditorState } from "@codemirror/state";
import { indentWithTab } from "@codemirror/commands";
import { python } from "@codemirror/lang-python";
import { oneDark } from "@codemirror/theme-one-dark";

interface CodeEditorProps { value: string; onChange: (value: string) => void; }

export function CodeEditor({ value, onChange }: CodeEditorProps) {
  const container = useRef<HTMLDivElement>(null);
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  useEffect(() => {
    if (!container.current) return;
    const state = EditorState.create({ doc: value, extensions: [basicSetup, python(), oneDark, keymap.of([indentWithTab]), EditorView.updateListener.of((update) => { if (update.docChanged) onChangeRef.current(update.state.doc.toString()); })] });
    const view = new EditorView({ state, parent: container.current });
    return () => view.destroy();
  }, []);

  return <div className="code-editor" ref={container} aria-label="Editor de código Python" />;
}
