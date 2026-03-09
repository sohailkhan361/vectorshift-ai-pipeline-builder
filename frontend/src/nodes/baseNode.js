import { Handle, Position } from "reactflow";

const nodeStyle = {
  width: 220,
  minHeight: 100,
  border: "1px solid #e5e7eb",
  borderRadius: "8px",
  padding: "14px",
  background: "#ffffff",
  boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
  fontSize: "14px",
};

export const BaseNode = ({ title, inputs = [], outputs = [], children }) => {
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

      <div
        style={{
          fontWeight: "600",
          marginBottom: "10px",
          fontSize: "14px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
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
