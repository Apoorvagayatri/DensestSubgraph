import AlgorithmTemplate from '../shared/AlgorithmTemplate'
import { Box, Typography, Paper } from '@mui/material'

export default function ExactAlgorithm() {
  const observations = {
    keyAlgorithms: [
      "Clique-Based Density Definition using h-clique density (ρ) as the ratio of h-clique instances to vertices. For h=2, this reduces to edge density. Generalizes to higher-order cliques (e.g., triangles for h=3) to capture complex structures.",
      "Flow Network Construction with source (s) and sink (t) nodes: each vertex connects to source with capacity equal to its clique-degree; (h-1)-clique nodes connect to participating vertices with infinite capacity; vertices connect to sink with capacity α|V|.",
      "Binary Search with Maximum Flow: Initializes lower and upper bounds for α, iteratively refines via computing minimum st-cut, updating bounds, and ensuring termination when precision 1/n(n-1) is reached.",
      "Exact CDS (Clique Densest Subgraph) Extraction: After binary search convergence, returns subgraph induced by vertices in source partition S excluding source node."
    ],
    optimizations: [
      "Clique instance pruning for flow network efficiency: includes only (h-1)-clique instances present in input graph.",
      "Infinite-capacity edges between (h-1)-clique nodes and vertex nodes to avoid recomputation of stable clique-vertex relationships.",
      "Adaptive capacity adjustments for vertex-to-sink edges dynamically during binary search to speed up convergence.",
      "Precision thresholds (1/n(n-1)) used for early termination of binary search.",
      "Bounds tightening aggressively based on cut results during binary search.",
      "Edge-case optimization for h=2: simplified flow networks used for edge-density special cases.",
      "Clique-degree caching: precomputes and stores clique degrees for vertices to avoid redundant calculations during flow construction."
    ],
    performanceObservations: [
      "Memory usage dominated by the number of (h-1)-clique nodes, which grows combinatorially with h.",
      "Performs better on sparse graphs due to fewer clique instances.",
      "Clique enumeration overhead grows combinatorially with maximum vertex degree (d), making it expensive for dense graphs.",
      "Flow network construction scales linearly with the number of cliques in the graph.",
      "Maximum flow computation has cubic dependency on the smaller of vertex count or clique count, which dominates cost for dense graphs.",
      "Becomes intractable for h ≥ 4 due to explosive growth of (h-1)-clique instances.",
      "Binary search iterations introduce an additional logarithmic factor to the total computation cost."
    ],
    limitationsAndFutureWork: [
      "Clique enumeration becomes computationally intractable for large h or dense graphs due to combinatorial explosion.",
      "Flow network size balloons with high clique participation (|A| >> n), limiting scalability to small/medium-sized graphs.",
      "Algorithm has no approximation guarantees if terminated early; exact results demand full computation.",
      "Memory requirements grow steeply with h and graph density.",
      "Potential future improvements include core-based pruning techniques (as in CoreExact) to shrink the flow network.",
      "Opportunity for parallel processing of clique enumeration and flow construction to mitigate scalability issues."
    ],
    summary: "Algorithm 1 (Exact) implements a flow-network-based approach to find the densest subgraph using parametric maximum flow and binary search. It solves the h-clique densest subgraph (CDS) problem exactly, without relying on core decomposition, making it suitable for small to medium-sized graphs. The method guarantees exact solutions by iteratively adjusting the density threshold α through binary search over a flow network augmented with clique and vertex nodes. However, its scalability is fundamentally limited due to the combinatorial explosion of clique instances and the size of the flow network, especially for h ≥ 4 or dense graphs. Future work may hybridize this approach with core-based optimizations or introduce parallelization techniques to extend applicability to larger datasets."
  }
  

  const results = (
    <Box>
      <Typography variant="h6" gutterBottom>
        Performance Results
      </Typography>
      
      <Box sx={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: 3,
        '& > *': {
          flexBasis: '100%'
        }
      }}>
        {/* Execution Time Graph */}
        <Paper 
          elevation={3} 
          sx={{ 
            p: 2, 
            minHeight: 400, 
            display: 'flex', 
            flexDirection: 'column',
            bgcolor: '#ffffff'
          }}
        >
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Execution Time Analysis
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, flex: 1 }}>
            <Box sx={{ flex: '0 0 75%' }}>
              <Box
                component="img"
                src="/exact_results/Execution_time.jpeg"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
                alt="Execution Time Analysis"
              />
            </Box>
            <Box sx={{ 
              flex: '0 0 25%', 
              display: 'flex', 
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 1 
            }}>
              <Typography variant="subtitle1" gutterBottom>Results:</Typography>
              <Typography variant="body2">As-733: 21.1891s</Typography>
              <Typography variant="body2">as-Caida: 717.303s</Typography>
              <Typography variant="body2">Netscience: 411.476s</Typography>
              <Typography variant="body2">Ca-HepTh: 342.346s</Typography>
              <Typography variant="body2">Yeast: 26.9117s</Typography>
            </Box>
          </Box>
        </Paper>

        {/* Density Graph */}
        <Paper 
          elevation={3} 
          sx={{ 
            p: 2, 
            minHeight: 400, 
            display: 'flex', 
            flexDirection: 'column',
            bgcolor: '#ffffff'
          }}
        >
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Density Distribution
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, flex: 1 }}>
            <Box sx={{ flex: '0 0 75%' }}>
              <Box
                component="img"
                src="/exact_results/Density.jpeg"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
                alt="Density Distribution"
              />
            </Box>
            <Box sx={{ 
              flex: '0 0 25%', 
              display: 'flex', 
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 1 
            }}>
              <Typography variant="subtitle1" gutterBottom>Results:</Typography>
              <Typography variant="body2">As-733: 8.86486</Typography>
              <Typography variant="body2">as-Caida: 17.4946</Typography>
              <Typography variant="body2">Netscience: 19.8913</Typography>
              <Typography variant="body2">Ca-HepTh: 15.5</Typography>
              <Typography variant="body2">Yeast: 12.0702</Typography>
            </Box>
          </Box>
        </Paper>

        {/* Vertices Graph */}
        <Paper 
          elevation={3} 
          sx={{ 
            p: 2, 
            minHeight: 400, 
            display: 'flex', 
            flexDirection: 'column',
            bgcolor: '#ffffff'
          }}
        >
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Vertices Analysis
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, flex: 1 }}>
            <Box sx={{ flex: '0 0 75%' }}>
              <Box
                component="img"
                src="/exact_results/Vertices.jpeg"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
                alt="Vertices Analysis"
              />
            </Box>
            <Box sx={{ 
              flex: '0 0 25%', 
              display: 'flex', 
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 1 
            }}>
              <Typography variant="subtitle1" gutterBottom>Results:</Typography>
              <Typography variant="body2">As-733: 37 vertices</Typography>
              <Typography variant="body2">as-Caida: 93 vertices</Typography>
              <Typography variant="body2">Netscience: 92 vertices</Typography>
              <Typography variant="body2">Ca-HepTh: 32 vertices</Typography>
              <Typography variant="body2">Yeast: 57 vertices</Typography>
            </Box>
          </Box>
        </Paper>

        {/* Edges Graph */}
        <Paper 
          elevation={3} 
          sx={{ 
            p: 2, 
            minHeight: 400, 
            display: 'flex', 
            flexDirection: 'column',
            bgcolor: '#ffffff'
          }}
        >
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Edges Analysis
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, flex: 1 }}>
            <Box sx={{ flex: '0 0 75%' }}>
              <Box
                component="img"
                src="/exact_results/Edges.jpeg"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
                alt="Edges Analysis"
              />
            </Box>
            <Box sx={{ 
              flex: '0 0 25%', 
              display: 'flex', 
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 1 
            }}>
              <Typography variant="subtitle1" gutterBottom>Results:</Typography>
              <Typography variant="body2">As-733: 328 edges</Typography>
              <Typography variant="body2">as-Caida: 1627 edges</Typography>
              <Typography variant="body2">Netscience: 1830 edges</Typography>
              <Typography variant="body2">Ca-HepTh: 496 edges</Typography>
              <Typography variant="body2">Yeast: 688 edges</Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  )

  return (
    <AlgorithmTemplate
      title="EXACT Algorithm"
      observations={observations}
      results={results}
    />
  )
}