// New Node: DelayNode.js
import { BaseNode } from "./baseNode";

export const DelayNode = ({ id }) => {

  return (
    <BaseNode
      title="Delay"
      inputs={[`${id}-input`]}
      outputs={[`${id}-output`]}
    >
      <div>Delay Response</div>
    </BaseNode>
  );
};