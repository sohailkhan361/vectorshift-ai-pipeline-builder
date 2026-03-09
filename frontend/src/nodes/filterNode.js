import { BaseNode } from "./baseNode";

export const FilterNode = ({ id }) => {

  return (
    <BaseNode
      title="Filter"
      inputs={[`${id}-input`]}
      outputs={[`${id}-output`]}
    >
      <div>Filter Data</div>
    </BaseNode>
  );
};