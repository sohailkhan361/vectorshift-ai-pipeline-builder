// inputNode.js
import { useState } from "react";
import { BaseNode } from "./baseNode";

const inputStyle = {
  border: "1px solid #ddd",
  borderRadius: "4px",
  padding: "4px 6px",
  fontSize: "12px"
};

export const InputNode = ({ id, data }) => {

  const [currName, setCurrName] =
    useState(data?.inputName || id.replace("customInput-", "input_"));

  const [inputType, setInputType] =
    useState(data?.inputType || "Text");

  return (
    <BaseNode
      title="Input"
      outputs={[`${id}-value`]}
    >

      <label>
        Name: {" "}
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <input
            style={inputStyle}
            value={currName}
            onChange={(e) => setCurrName(e.target.value)}
          />
        </div>
      </label>

      <label>
        Type: {" "}
        <select
          value={inputType}
          onChange={(e) => setInputType(e.target.value)}
        >
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </label>

    </BaseNode>
  );
};