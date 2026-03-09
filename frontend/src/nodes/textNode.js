import { useState, useEffect, useRef } from "react";
import { BaseNode } from "./baseNode";

const inputStyle = {
  border: "1px solid #ddd",
  borderRadius: "4px",
  padding: "4px 6px",
  fontSize: "12px",
  resize: "none",
  overflow: "hidden"
};

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const [variables, setVariables] = useState([]);

  const textAreaRef = useRef(null);

  // Detect variables inside {{ }}
  useEffect(() => {
    const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
    const matches = [...currText.matchAll(regex)].map(m => m[1]);

    const uniqueVars = [...new Set(matches)];

    setVariables(uniqueVars);
  }, [currText]);

  // Auto resize textarea
  const handleChange = (e) => {
    const value = e.target.value;
    setCurrText(value);

    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
    }
  };

  return (
    <BaseNode
      title="Text"
      inputs={variables.map(v => `${id}-${v}`)}
      outputs={[`${id}-output`]}
    >
      <label>
        Text:
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <textarea
            ref={textAreaRef}
            style={inputStyle}
            value={currText}
            onChange={handleChange}
            rows={1}
          />
        </div>
      </label>
    </BaseNode>
  );
};