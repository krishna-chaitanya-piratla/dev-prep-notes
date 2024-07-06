import { EditorView } from '@codemirror/view';
import {tags} from "@lezer/highlight";
import { Extension } from '@codemirror/state';
import {HighlightStyle, syntaxHighlighting} from "@codemirror/language";

const codeblockTheme = EditorView.theme({
  "&": {
    backgroundColor: "#f5f6f9",
    color: "var(--page-text-color);",
    padding: "1.5rem",
    borderRadius: "0.5rem",
  },
  "&.cm-focused": {
    outline: "none",
  },
  ".cm-content": {
    fontFamily: "Source Code Pro, Fira Mono, monospace",
    fontSize: "0.95rem",
    caretColor: "brown",
  },
  
}, { dark: false });

const codeblockHighlightStyle = HighlightStyle.define([
  { tag: tags.keyword, color: "#651fff", fontWeight: "bold" }, // done: const, class
  { tag: tags.operator, color: "#651fff" }, 
  { tag: tags.string, color: "#682929" },
  { tag: tags.variableName, color: "deeppink" },
  { tag: tags.comment, color: "#6272a4", fontStyle: "italic" },
  { tag: tags.number, color: "#651fff" },
  { tag: tags.function(tags.variableName), color: "#aa00ff" },
  { tag: tags.definition(tags.variableName), color: "#000000" }, //done
  { tag: tags.typeName, color: "#da0079", fontWeight: "bold" },
  { tag: tags.angleBracket, color: "#da0079", fontWeight: "bold"},
  { tag: tags.propertyName, color: "#da0079"},
  { tag: tags.className, color: "#000000" },
  {tag: tags.paren, color: "#000000"},
]);

const defaultCodeBlockTheme: Extension = [codeblockTheme, syntaxHighlighting(codeblockHighlightStyle)];

export default defaultCodeBlockTheme;
