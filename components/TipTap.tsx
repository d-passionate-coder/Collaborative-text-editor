"use client";
import { Editor } from "@tiptap/core";
import { SimpleEditor } from "./tiptap-templates/simple/simple-editor";
import { useRef } from "react";
import * as Y from 'yjs'
import {HocuspocusProvider} from '@hocuspocus/provider'


const Tiptap = () => {
  const ydoc = new Y.Doc()
  
  const editorRef = useRef<Editor | null>(null);

  const provider = new HocuspocusProvider(
    {url: "wss://collaborative-text-editor-1-qqgq.onrender.com", 
    name :'manish', 
    document :ydoc
    }
  )

  const handleSetEditor = (editor: Editor) => {
    editorRef.current = editor;
    console.log("Editor ready:", editor);
  };

  return <SimpleEditor ydoc={ydoc} provider={provider} />;
}

export default Tiptap