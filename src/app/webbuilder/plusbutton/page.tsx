'use client';
import React, { useEffect, useState } from "react";
import grapesjs, { Editor } from "grapesjs";
import gjsPresetWebpage from 'grapesjs-preset-webpage';
import "grapesjs/dist/css/grapes.min.css";
import gjsblockbasic from 'grapesjs-blocks-basic';
import gjspluginsforms from 'grapesjs-plugin-forms';
import gjsnavbar from 'grapesjs-navbar';

export default function Index() {
  const [editor, setEditor] = useState<Editor | null>(null);

  useEffect(() => {
    const ed = grapesjs.init({
      container: '#editor',
      plugins: [gjsPresetWebpage, gjsblockbasic, gjspluginsforms, gjsnavbar],
    });
    setEditor(ed);
  }, []);

  return (
    <div id='editor'>
    </div>
  );
}
