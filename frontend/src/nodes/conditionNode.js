// New Node: ConditionNode.js
import { BaseNode } from "./baseNode";

export const ConditionNode = ({ id }) => {

  return (
    <BaseNode
      title="Condition"
      inputs={[`${id}-input`]}
      outputs={[`${id}-output`]}
    >
      <div>Condition on Data</div>
    </BaseNode>
  );
};