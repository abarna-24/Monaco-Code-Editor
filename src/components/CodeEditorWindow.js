import React, { useState } from "react";
import Editor from "@monaco-editor/react";

const CodeEditorWindow = ({ onChange, language, code, theme }) => {
  const [value, setValue] = useState(code || "");

  const handleEditorChange = (newValue) => {
    setValue(newValue);
    onChange("code", newValue);
  };

  const handleClearClick = () => {
    setValue("");
    onChange("code", "");
  };

  return (
    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl relative">
      <Editor
        height="85vh"
        width={`100%`}
        language={language || "javascript"}
        value={value}
        theme={theme}
        defaultValue="// some comment"
        onChange={handleEditorChange}
      />
      <button
        className="absolute bottom-4 right-4 px-4 py-2 border border-red-500 rounded text-red-500 cursor-pointer"
        onClick={handleClearClick}
      >
        Clear
      </button>
    </div>
  );
};

export default CodeEditorWindow;
