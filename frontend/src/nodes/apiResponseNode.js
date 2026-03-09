// New Node: ApiResponseNode.js
import { BaseNode } from "./baseNode";

export const ApiResponseNode = ({ id }) => {

  return (
    <BaseNode
      title="API Response"
      inputs={[`${id}-input`]}
      outputs={[`${id}-output`]}
    >
      <div>API Response Data</div>
    </BaseNode>
  );
};