# Exact Implementation (Algorithm-1)

This program implements an exact flow-based algorithm for finding the densest subgraph using Goldberg's maximum flow approach with optimizations for h-clique density. It supports both edge density (h=2) and higher-order clique density (h>=3).

## Overview
The implementation uses a parametric flow network approach to:

1. Enumerate (h-1)-cliques
2. Construct a bipartite flow network between vertices and cliques
3. Perform binary search on density parameter 
4. Find min-cut to identify optimal subgraph

Key features:

1. Exact solution for h=2 (edge density) and h>=3 (clique density)
2. Adaptive h-value handling for large graphs
3. Memory-efficient sparse graph representation
4. Greedy fallback for h=2

## Usage

./exactcds <graph_file> [h_value]

Arguments:
<graph_file>: Edge list file (0-indexed or 1-indexed)
[h_value]: Optional clique size (default=3, auto-limited for large graphs)

## Example 
# Find triangle-densest subgraph (h=3)
./exactcds as733.txt 3

# Find edge-densest subgraph (h=2)
./exactcds caida.txt 2

## Output Explanation
The program outputs:
1. Input graph statistics (vertices/edges)
2. Clique enumeration progress
3. Binary search iterations with density bounds
4. Final subgraph:
      Density (h-clique ratio)
      Vertex count
      Edge count
      Runtime
      Vertex/edge lists (for small subgraphs)

## Implementation Details

# Main Workflow
1. Clique Enumeration
    a. Bron-Kerbosch algorithm with pivoting for h>=3
    b. Edge-based direct enumeration for h=3
    c. Degree-sorted vertex processing

2. Flow Network Construction
    a. 4-layer network: Source -> Vertices -> Cliques -> Sink
    b. Capacity rules:
                  Source -> Vertices: h-clique degree
                  Vertices -> Cliques: 1 per h-clique participation
                  Vertices -> Sink: α * h

3. Density Optimization
    a. Binary search on α with precision 1/(n^2)
    b. Min-cut identification using Dinic's algorithm
    c. Component-wise processing for large graphs

4. Result Extraction
    a. Induced subgraph from S{t} cut set
    b. Density validation and best-subgraph tracking

## Performance Notes

1. Handles graphs with ~10⁵ vertices (h=2)
2. h=3 practical for graphs with ≤10⁴ vertices
3. Automatic h-value reduction for large graphs:
        h=2 for >100k vertices
        h=3 for >10k vertices
4. Memory optimizations:
        Sparse adjacency lists
        Bucket sorting for core decomposition
        On-demand clique storage

## Sample Results

For As-733 dataset:
```
Best subgraph found with density: 8.86486
Algorithm completed in 21.1891 seconds
Result subgraph has 37 vertices
Result subgraph has 328 edges
```

For as-Caida(Undirected) dataset:
```
Best subgraph found with density: 17.4946
Algorithm completed in 717.303 seconds
Result subgraph has 93 vertices
Result subgraph has 1627 edges
```

For Netscience dataset:
```
Best subgraph found with density: 19.8913
Algorithm completed in 411.476 seconds
Result subgraph has 92 vertices
Result subgraph has 1830 edges
```

For Ca-HepTh dataset:
```
Best subgraph found with density: 15.5
Algorithm completed in 342.346 seconds
Result subgraph has 32 vertices
Result subgraph has 496 edges
```

For yeast dataset:
```
Best subgraph found with density: 12.0702
Algorithm completed in 26.9117 seconds
Result subgraph has 57 vertices
Result subgraph has 688 edges
```


# CoreExact Implementation (Algorithm-4)

This program implements the CoreExact algorithm  for finding dense subgraphs based on clique-core decomposition. It uses a flow-based approach to identify subgraphs with high clique density.

## Overview

The implementation focuses on finding a densest subgraph according to the (h,ψ)-density metric, which measures the ratio of h-cliques to (h-1)-cliques in the graph. The algorithm uses:

1. Clique enumeration
2. Core decomposition
3. Flow network construction
4. Min-cut based density maximization

## Usage

```
./coreexact <graph_file>
```

Where `<graph_file>` is the path to a graph file in edge list format. Each line should contain two integers representing an edge. The graph can be either 0-indexed or 1-indexed.

## Example

```
./coreexact as733.txt
```

## Output Explanation

The program outputs:
- Number of vertices and edges in the input graph
- Number of (h-1)-cliques and h-cliques enumerated (h=3 by default, so edges and triangles)
- Maximum core number found
- Number of vertices in the pruned graph
- Number of connected components
- Best subgraph density achieved
- Number of vertices and edges in the result subgraph

## Implementation Details

The algorithm follows these main steps:

1. **Clique Enumeration**: Efficiently counts edges (2-cliques) and triangles (3-cliques)
2. **Core Decomposition**: Uses bucket sort for efficient ordering
3. **Core Pruning**: Removes vertices with low clique participation
4. **Component Processing**: Handles each connected component separately
5. **Flow Network Construction**: Creates a network based on vertices and cliques
6. **Binary Search**: Optimizes the density parameter α
7. **Subgraph Extraction**: Extracts the densest subgraph based on min-cut

## Performance Notes

- Handles graphs with up to several thousand vertices efficiently
- Uses memory-efficient data structures and algorithms
- Includes safeguards against common issues:
  - Empty cores after pruning
  - Very large flow networks
  - Connected component identification and processing

## Sample Results

For As-733 dataset:
```
Best subgraph found with density: 1.85185
Algorithm completed in 8.76889 seconds
Result subgraph has 8 vertices
Result subgraph has 27 edges
```

For as-Caida(Undirected) dataset:
```
Best subgraph found with density: 0.426471
Algorithm completed in 144.919 seconds
Result subgraph has 2010 vertices
Result subgraph has 11950 edges
```

For Netscience dataset:
```
Best subgraph found with density: 2.84648
Algorithm completed in 154.722 seconds
Result subgraph has 1782 vertices
Result subgraph has 11744 edges
```

For Ca-HepTh dataset:
```
Best subgraph found with density: 5
Algorithm completed in 494.534 seconds
Result subgraph has 6 vertices
Result subgraph has 30 edges
```

For yeast dataset:
```
Best subgraph found with density: 0.468201
Algorithm completed in 24.002 seconds
Result subgraph has 1411 vertices
Result subgraph has 12542 edges
```

## Parameters

- **h**: Set to 3 (triangles) by default
- **kpp**: Core number threshold, automatically determined based on maximum core number
- Precision thresholds for binary search are automatically calculated

## Optimizations

This implementation includes several optimizations over the basic algorithm:
- Efficient clique enumeration with edge-based approach
- Bucket sort for core decomposition
- Memory-efficient pruning function
- Component-wise processing for large graphs
- Dynamic adjustment of binary search parameters
- Handling of edge cases (empty cores, very small components)
