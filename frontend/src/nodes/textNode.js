// textNode.js
import { useState } from "react";
import { BaseNode } from "./baseNode";

const inputStyle = {
  border: "1px solid #ddd",
  borderRadius: "4px",
  padding: "4px 6px",
  fontSize: "12px",
};

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  return (
    <BaseNode title="Text" outputs={[`${id}-output`]}>
      <label>
        Text: {" "}
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <input
            style={inputStyle}
            value={currText}
            onChange={(e) => setCurrText(e.target.value)}
          />
        </div>
      </label>
    </BaseNode>
  );
};
