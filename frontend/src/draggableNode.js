// draggableNode.js

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData),
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      style={{
        cursor: "grab",
        minWidth: "90px",
        height: "50px",
        display: "flex",
        alignItems: "center",
        borderRadius: "8px",
        backgroundColor: "#1C2536",
        justifyContent: "center",
        color: "#fff",
        fontWeight: "500",
        boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
        padding: "0 10px",
      }}
      draggable
    >
      <span style={{ color: "#fff" }}>{label}</span>
    </div>
  );
};
