// New Node: CalculateNode.js
import { BaseNode } from "./baseNode";

export const CalculateNode = ({ id }) => {

  return (
    <BaseNode
      title="Calculate"
      inputs={[`${id}-input1`, `${id}-input2`]}
      outputs={[`${id}-output`]}
    >
      <div>Calculate Data</div>
    </BaseNode>
  );
};