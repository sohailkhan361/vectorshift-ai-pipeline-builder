from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from collections import defaultdict, deque
from typing import List

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Ping": "Pong"}

# ----- Request Model -----


class Edge(BaseModel):
    source: str
    target: str


class Pipeline(BaseModel):
    nodes: List[dict]
    edges: List[Edge]

# ----- DAG Detection -----

def is_dag(nodes, edges):
    graph = defaultdict(list)
    indegree = defaultdict(int)

    # initialize graph
    for node in nodes:
        graph[node["id"]] = []
        indegree[node["id"]] = 0

    # build graph
    for edge in edges:
        graph[edge.source].append(edge.target)
        indegree[edge.target] += 1

    # queue nodes with no incoming edges
    queue = deque([node for node in indegree if indegree[node] == 0])

    visited_count = 0

    while queue:
        node = queue.popleft()
        visited_count += 1

        for neighbor in graph[node]:
            indegree[neighbor] -= 1
            if indegree[neighbor] == 0:
                queue.append(neighbor)

    return visited_count == len(nodes)

@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):

    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)

    dag = is_dag(pipeline.nodes, pipeline.edges)

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": dag,
    }
