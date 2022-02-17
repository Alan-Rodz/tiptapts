import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import { MenuBar } from './MenuBar'

export const TipTapEditor = () => {
  const editor = useEditor({ extensions: [ StarterKit, ], content: `<p>Hello</p>`})
  
  return (
    <div>
      <MenuBar editor={editor!} />
      <EditorContent editor={editor} />
    </div>
  )
}