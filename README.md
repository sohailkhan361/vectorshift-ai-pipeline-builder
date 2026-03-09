# vectorshift-ai-pipeline-builder
Visual AI pipeline builder using React, FastAPI, and dynamic node abstraction with DAG validation.

## Project Setup
### 1. Clone the Repository

```
git clone https://github.com/yourusername/vectorshift-ai-pipeline-builder.git
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

Mac/Linux

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

Backend will run at:

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
npm install
```

Run the development server:

```
npm start
```

Frontend will run at:

```
http://localhost:3000
```

---

# Running the Application

1. Start the FastAPI backend
2. Start the React frontend
