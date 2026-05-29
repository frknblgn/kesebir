'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { TextStyle } from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import Underline from '@tiptap/extension-underline';
import { Extension } from '@tiptap/core';
import { useEffect } from 'react';

const FontSize = Extension.create({
  name: 'fontSize',
  addOptions() { return { types: ['textStyle'] }; },
  addGlobalAttributes() {
    return [{
      types: this.options.types,
      attributes: {
        fontSize: {
          default: null,
          parseHTML: el => (el as HTMLElement).style.fontSize || null,
          renderHTML: attrs => attrs.fontSize ? { style: `font-size: ${attrs.fontSize}` } : {},
        },
      },
    }];
  },
});

interface Props {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
}

export default function RichTextEditor({ value, onChange, placeholder }: Props) {
  const editor = useEditor({
    extensions: [StarterKit, TextStyle, Color, Underline, FontSize],
    content: value || '',
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
  });

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || '', { emitUpdate: false });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  if (!editor) return null;

  const btn = (active: boolean, onClick: () => void, label: string, style?: React.CSSProperties) => (
    <button
      type="button"
      className={`kb-rte-btn${active ? ' active' : ''}`}
      onClick={onClick}
      style={style}
      title={label}
    >
      {label}
    </button>
  );

  return (
    <div className="kb-rte">
      <div className="kb-rte-toolbar">
        {btn(editor.isActive('bold'), () => editor.chain().focus().toggleBold().run(), 'K', { fontWeight: 700 })}
        {btn(editor.isActive('italic'), () => editor.chain().focus().toggleItalic().run(), 'İ', { fontStyle: 'italic' })}
        {btn(editor.isActive('underline'), () => editor.chain().focus().toggleUnderline().run(), 'A̲')}

        <div className="kb-rte-sep" />

        {btn(editor.isActive('heading', { level: 2 }), () => editor.chain().focus().toggleHeading({ level: 2 }).run(), 'B1')}
        {btn(editor.isActive('heading', { level: 3 }), () => editor.chain().focus().toggleHeading({ level: 3 }).run(), 'B2')}
        {btn(editor.isActive('bulletList'), () => editor.chain().focus().toggleBulletList().run(), '• Liste')}

        <div className="kb-rte-sep" />

        <select
          className="kb-rte-select"
          defaultValue=""
          onChange={e => {
            if (e.target.value) {
              editor.chain().focus().setMark('textStyle', { fontSize: e.target.value }).run();
            } else {
              editor.chain().focus().unsetMark('textStyle').run();
            }
          }}
          title="Yazı boyutu"
        >
          <option value="">Punto</option>
          <option value="12px">12</option>
          <option value="14px">14</option>
          <option value="16px">16</option>
          <option value="18px">18</option>
          <option value="22px">22</option>
          <option value="28px">28</option>
          <option value="36px">36</option>
        </select>

        <label className="kb-rte-color-wrap" title="Renk">
          <span style={{ fontSize: 11 }}>A</span>
          <input
            type="color"
            defaultValue="#16252C"
            className="kb-rte-color"
            onChange={e => editor.chain().focus().setColor(e.target.value).run()}
          />
        </label>

        <div className="kb-rte-sep" />

        {btn(false, () => editor.chain().focus().undo().run(), '↩')}
        {btn(false, () => editor.chain().focus().redo().run(), '↪')}
      </div>

      <EditorContent
        editor={editor}
        className="kb-rte-content"
        data-placeholder={placeholder}
      />
    </div>
  );
}
