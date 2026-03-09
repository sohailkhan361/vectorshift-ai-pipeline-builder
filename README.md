# VectorShift AI Pipeline Builder

A visual pipeline builder built using **React (Frontend)** and **FastAPI (Backend)** that allows users to create and connect nodes representing components of an AI workflow.

This project was developed as part of the **VectorShift Frontend Technical Assessment** and demonstrates modular UI architecture, dynamic node behavior, and frontend–backend integration.

---

# Features

## 1. Node Abstraction

A reusable **BaseNode abstraction** was created to avoid duplicating code across different node types.

Instead of rewriting layout, handle logic, and styling for each node, the system uses a common component that defines:

* node layout
* input/output handles
* styling
* reusable node structure

This allows new nodes to be created quickly with minimal code.

Example node types:

* Input Node
* Output Node
* LLM Node
* Text Node
* Filter Node
* Condition Node
* Delay Node
* API Response Node
* Calculate Node

The abstraction ensures scalability as more node types are added.

---

## 2. UI Styling

The UI was styled to create a **clean and unified pipeline editor interface**.

Enhancements include:

* consistent node styling
* rounded components and shadows
* improved spacing and layout
* styled toolbar nodes
* modern canvas layout

The goal was to create an intuitive visual pipeline building experience.

---

## 3. Dynamic Text Node Logic

The **Text Node** supports dynamic input detection and adaptive sizing.

### Automatic Node Resizing

The text field automatically expands as the user types, allowing longer prompts and improving readability.

### Variable Detection

Users can define dynamic inputs using double curly braces.

Example:

```
Hello {{user}} from {{city}}
```

The system automatically detects these variables and generates **corresponding input handles** on the left side of the node.

Detected variables become pipeline inputs:

```
[user] ─┐
        ├── Text Node
[city] ─┘
```

This enables flexible data pipelines where upstream nodes can provide values dynamically.

---

## 4. Backend Pipeline Analysis

The frontend integrates with a **FastAPI backend** that validates pipeline structure.

When the user clicks **Submit**, the frontend sends the pipeline graph (nodes and edges) to the backend.

The backend then calculates:

* total number of nodes
* total number of edges
* whether the pipeline forms a **Directed Acyclic Graph (DAG)**

Cycle detection is implemented using **topological sorting (Kahn’s algorithm)**.

Example response:

```
Nodes: 4
Edges: 3
Is DAG: true
```

---

# Tech Stack

### Frontend

* React
* ReactFlow
* Zustand (state management)
* JavaScript
* CSS

### Backend

* Python
* FastAPI
* Uvicorn

---

# Project Structure

```
vectorshift-ai-pipeline-builder
│
├── backend
│   ├── main.py
│   ├── requirements.txt
│   └── venv/ (local environment, ignored)
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── nodes
│   │   │   ├── baseNode.js
│   │   │   ├── inputNode.js
│   │   │   ├── outputNode.js
│   │   │   ├── llmNode.js
│   │   │   ├── textNode.js
│   │   │   ├── filterNode.js
│   │   │   ├── calculateNode.js
│   │   │   ├── delayNode.js
│   │   │   ├── apiResponseNode.js
│   │   │   └── conditionNode.js
│   │   │
│   │   ├── ui.js
│   │   ├── toolbar.js
│   │   ├── store.js
│   │   ├── submit.js
│   │   └── draggableNode.js
│   │
│   ├── package.json
│   └── package-lock.json
│
└── README.md
```

---

# Installation & Setup

## 1. Clone the Repository

```
git clone https://github.com/sohailkhan361/vectorshift-ai-pipeline-builder.git
cd vectorshift-ai-pipeline-builder
```

---

# Backend Setup (FastAPI)

Navigate to the backend folder:

```
cd backend
```

Create a Python virtual environment:

```
python3 -m venv venv
```

Activate the environment:

Mac / Linux

```
source venv/bin/activate
```

Install dependencies:

```
pip3 install -r requirements.txt
```

Run the backend server:

```
uvicorn main:app --reload
```

Backend runs at:

```
http://localhost:8000
```

---

# Frontend Setup (React)

Open a new terminal and navigate to the frontend folder:

```
cd frontend
```

Install dependencies:

```
npm i
```

Run the development server:

```
npm start
```

Frontend runs at:

```
http://localhost:3000
```

---

# Running the Application

### Start Backend

```
cd backend
uvicorn main:app --reload
```

Open:

```
http://localhost:8000
```

---

### Start Frontend

```
cd frontend
npm install
npm start
```

Open:

```
http://localhost:3000
```

---

# Using the Pipeline Builder

1. Drag nodes from the toolbar into the canvas
2. Connect nodes to form a pipeline
3. Create dynamic inputs using `{{variable}}` syntax in the Text node
4. Click **Submit**
5. The backend analyzes the pipeline and returns:

   * number of nodes
   * number of edges
   * DAG validation result

---

# Example Pipeline

```
Input → LLM → Text → Output
```

Response:

```
Nodes: 4
Edges: 3
Is DAG: true
```

---

# Future Improvements

* Persistent pipeline saving
* Node configuration panels
* Real-time pipeline validation
* Pipeline execution engine
* AI workflow templates

---

# Author
**Sohail Khan**
Software Engineer | Full Stack | React | Python
