import { Handle, Position } from "reactflow";

const nodeStyle = {
  width: 200,
  minHeight: 80,
  border: "1px solid #ccc",
  borderRadius: 6,
  padding: 10,
  background: "white",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
};

export const BaseNode = ({
  title,
  inputs = [],
  outputs = [],
  children
}) => {
  return (
    <div style={nodeStyle}>
      {/* input handles */}
      {inputs.map((input, index) => (
        <Handle
          key={input}
          type="target"
          position={Position.Left}
          id={input}
          style={{ top: 20 + index * 20 }}
        />
      ))}

      <div>
        <strong>{title}</strong>
      </div>

      <div>
        {children}
      </div>

      {/* output handles */}
      {outputs.map((output, index) => (
        <Handle
          key={output}
          type="source"
          position={Position.Right}
          id={output}
          style={{ top: 20 + index * 20 }}
        />
      ))}

    </div>
  );
};