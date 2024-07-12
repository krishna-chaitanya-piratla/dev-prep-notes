import React, { useCallback, useEffect } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $getSelection, $isRangeSelection, FORMAT_TEXT_COMMAND, LexicalCommand, TextFormatType } from 'lexical';
import { INSERT_ORDERED_LIST_COMMAND, INSERT_UNORDERED_LIST_COMMAND, REMOVE_LIST_COMMAND } from '@lexical/list';
import { $createHeadingNode, HeadingNode } from '@lexical/rich-text';
import { $isTextNode, $createParagraphNode } from 'lexical';
import './Toolbar.css';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import CodeIcon from '@mui/icons-material/Code';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import LinkIcon from '@mui/icons-material/Link';

const Toolbar: React.FC = () => {
  const [editor] = useLexicalComposerContext();

  const applyStyleText = useCallback((styles: Record<string, string>) => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        selection.getNodes().forEach(node => {
          if ($isTextNode(node)) {
            Object.keys(styles).forEach(style => {
              node.setStyle(style);
            });
          }
        });
      }
    });
  }, [editor]);

  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          const anchor = selection.anchor.getNode();
          const element = anchor.getKey() === 'root' ? anchor : anchor.getTopLevelElementOrThrow();
        }
      });
    });
  }, [editor]);

  const toggleHeading = (level: 1 | 2 | 3) => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        const nodes = selection.getNodes();
        nodes.forEach((node) => {
          if ($isTextNode(node)) {
            const parent = node.getParent();
            if (parent) {
              if (parent instanceof HeadingNode && parent.getTag() === `h${level}`) {
                const paragraph = $createParagraphNode();
                parent.replace(paragraph);
                paragraph.append(...parent.getChildren());
              } else {
                const heading = $createHeadingNode(`h${level}`);
                parent.replace(heading);
                heading.append(node);
              }
            }
          }
        });
      }
    });
  };

//   const insertLink = () => {
//     editor.dispatchCommand<string>(INSERT_LINK_COMMAND, 'https://example.com');
//   };

  return (
    <div className="toolbar">
      <button onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold' as TextFormatType)}><FormatBoldIcon /></button>
      <button onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic' as TextFormatType)}><FormatItalicIcon /></button>
      <button onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline' as TextFormatType)}><FormatUnderlinedIcon /></button>
      <button onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'code' as TextFormatType)}><CodeIcon /></button>
      {/* <button onClick={() => applyStyleText({ textAlign: 'left' })}><FormatAlignLeftIcon /></button>
      <button onClick={() => applyStyleText({ textAlign: 'center' })}><FormatAlignCenterIcon /></button>
      <button onClick={() => applyStyleText({ textAlign: 'right' })}><FormatAlignRightIcon /></button>
      <button onClick={() => applyStyleText({ textAlign: 'justify' })}><FormatAlignJustifyIcon /></button>
      <button onClick={() => applyStyleText({ color: 'red' })}><FormatColorTextIcon /></button>
      <button onClick={() => applyStyleText({ backgroundColor: 'yellow' })}><FormatColorFillIcon /></button>
      <button onClick={() => editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined)}><FormatListNumberedIcon /></button>
      <button onClick={() => editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined)}><FormatListBulletedIcon /></button>
      <button onClick={() => editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined)}>Remove List</button> */}
      <button onClick={() => toggleHeading(1)}>H1</button>
      <button onClick={() => toggleHeading(2)}>H2</button>
      <button onClick={() => toggleHeading(3)}>H3</button>
      {/* <button onClick={insertLink}><LinkIcon /></button> */}
    </div>
  );
};

// const INSERT_LINK_COMMAND: LexicalCommand<string> = 'INSERT_LINK_COMMAND';

export default Toolbar;
