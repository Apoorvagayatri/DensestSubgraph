import AlgorithmTemplate from '../shared/AlgorithmTemplate'
import { Box, Typography, Paper } from '@mui/material'

export default function CoreExactAlgorithm() {
  const observations = {
  keyAlgorithms: [
    "Clique-Based Density Definition using h-clique to (h-1)-clique ratio",
    "Clique Core Decomposition with dynamic clique-degree updates",
    "Flow Network Construction with optimized capacities and clique mappings",
    "CoreExact Algorithm Workflow with component-wise processing and binary search on density parameter"
  ],
  optimizations: [
    "Edge-based clique enumeration for triangles (h=3)",
    "Adjacency set usage for fast clique lookups",
    "Clique enumeration limits to prevent memory issues",
    "Specialized handling for different clique sizes (h=1,2,3)",
    "Data structure reuse for memory management",
    "Efficient induced subgraph construction",
    "Boolean vectors for space-efficient vertex tracking",
    "Sampling techniques for very large components",
    "Efficient vertex-to-clique indexing and constant-time clique lookup",
    "Adaptive precision thresholds for binary search",
    "Dynamic adjustment of α during binary search",
    "Special handling and fallback strategies for extreme component sizes"
  ],
  performanceObservations: [
    "Scales to graphs with thousands of vertices",
    "Direct density calculation used for very large graphs (>5000 vertices)",
    "Component-wise processing enables parallelization",
    "Memory efficiency via bucket sort and boolean vectors",
    "Clique enumeration remains the most expensive step",
    "Flow network construction scales with number of (h-1)-cliques",
    "Binary search converges quickly with adaptive thresholds",
    "Connected component decomposition reduces problem size effectively",
    "Robust error handling and dynamic parameter adjustment improve stability"
  ],
  limitationsAndFutureWork: [
    "Clique enumeration is prohibitively expensive for large, dense graphs",
    "Memory consumption grows quickly with increasing clique count",
    "Flow network construction can bottleneck very large graphs",
    "Currently fixed at h=3 (triangle density); extension to larger h is needed",
    "Potential for further optimization in clique enumeration and memory management",
    "Scope for enhanced parallel processing strategies"
  ],
  summary: "Algorithm 4 (CoreExact) implements an efficient, scalable method to find densest subgraphs based on higher-order cliques by combining clique core decomposition, flow network construction, and component-wise processing. It performs well on large real-world graphs, with optimizations for memory and computation. However, clique enumeration and memory overhead remain major challenges for very dense or extremely large graphs. Future improvements could involve optimizing clique enumeration and extending the approach to larger cliques."
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
                src="/coreexect_results/Execution_time.jpeg"
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
              <Typography variant="body2">As-733: 8.76889s</Typography>
              <Typography variant="body2">as-Caida: 144.919s</Typography>
              <Typography variant="body2">Netscience: 154.722s</Typography>
              <Typography variant="body2">Ca-HepTh: 494.534s</Typography>
              <Typography variant="body2">Yeast: 24.002s</Typography>
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
                src="/coreexect_results/Density.jpeg"
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
              <Typography variant="body2">As-733: 1.85185</Typography>
              <Typography variant="body2">as-Caida: 0.426471</Typography>
              <Typography variant="body2">Netscience: 2.84648</Typography>
              <Typography variant="body2">Ca-HepTh: 5.0</Typography>
              <Typography variant="body2">Yeast: 0.468201</Typography>
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
                src="/coreexect_results/Vertices.jpeg"
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
              <Typography variant="body2">As-733: 8 vertices</Typography>
              <Typography variant="body2">as-Caida: 2010 vertices</Typography>
              <Typography variant="body2">Netscience: 1782 vertices</Typography>
              <Typography variant="body2">Ca-HepTh: 6 vertices</Typography>
              <Typography variant="body2">Yeast: 1411 vertices</Typography>
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
                src="/coreexect_results/Edges.jpeg"
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
              <Typography variant="body2">As-733: 27 edges</Typography>
              <Typography variant="body2">as-Caida: 11950 edges</Typography>
              <Typography variant="body2">Netscience: 11744 edges</Typography>
              <Typography variant="body2">Ca-HepTh: 30 edges</Typography>
              <Typography variant="body2">Yeast: 12542 edges</Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  )

  return (
    <AlgorithmTemplate
      title="Core EXACT Algorithm"
      observations={observations}
      results={results}
    />
  )
}