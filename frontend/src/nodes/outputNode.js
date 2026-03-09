// outputNode.js
import { useState } from "react";
import { BaseNode } from "./baseNode";

const inputStyle = {
  border: "1px solid #ddd",
  borderRadius: "4px",
  padding: "4px 6px",
  fontSize: "12px",
};

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_"),
  );

  const [outputType, setOutputType] = useState(data?.outputType || "Text");

  return (
    <BaseNode title="Output" inputs={[`${id}-value`]}>
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
          value={outputType}
          onChange={(e) => setOutputType(e.target.value)}
        >
          <option value="Text">Text</option>
          <option value="File">Image</option>
        </select>
      </label>
    </BaseNode>
  );
};
