// textNode.js
import { useState } from "react";
import { BaseNode } from "./baseNode";

export const TextNode = ({ id, data }) => {

  const [currText, setCurrText] =
    useState(data?.text || "{{input}}");

  return (
    <BaseNode
      title="Text"
      outputs={[`${id}-output`]}
    >

      <label>
        Text:
        <input
          value={currText}
          onChange={(e) => setCurrText(e.target.value)}
        />
      </label>

    </BaseNode>
  );
};