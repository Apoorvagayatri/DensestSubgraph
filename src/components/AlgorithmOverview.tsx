import { Box, Typography, Paper } from '@mui/material';

export default function AlgorithmOverview() {
  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Algorithm Overview
      </Typography>

      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom color="primary">
          Algorithm 1 (Exact)
        </Typography>
        <Typography paragraph>
          Algorithm 1 (Exact) implements a flow-network-based approach to find the densest subgraph using parametric maximum flow and binary search. It directly solves the h-clique densest subgraph (CDS) problem without relying on core decomposition, making it suitable for small to medium-sized graphs. The method guarantees exact solutions by iteratively adjusting the density threshold α through binary search over a flow network augmented with clique and vertex nodes. 
        </Typography>
        <Typography paragraph>
          However, its scalability is fundamentally limited due to the combinatorial explosion of clique instances and the size of the flow network, especially for h ≥ 4 or dense graphs. Future work may hybridize this approach with core-based optimizations or introduce parallelization techniques to extend applicability to larger datasets.
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom color="primary">
          Algorithm 4 (CoreExact)
        </Typography>
        <Typography paragraph>
          Algorithm 4 (CoreExact) implements an efficient, scalable method to find densest subgraphs based on higher-order cliques. It combines clique core decomposition, flow network construction, and component-wise processing to efficiently identify dense subgraphs in large graphs. The algorithm performs well on real-world graphs, with optimizations for memory and computation.
        </Typography>
        <Typography paragraph>
          However, clique enumeration and memory overhead remain major challenges for very dense or extremely large graphs. Future improvements could involve optimizing clique enumeration and extending the approach to larger cliques.
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Comparative Analysis
        </Typography>
        <Typography paragraph>
          While Algorithm 1 (Exact) guarantees an exact solution through iterative binary search, its scalability is limited for dense graphs or larger values of h. On the other hand, Algorithm 4 (CoreExact) offers better scalability by optimizing memory and computation for larger datasets, making it more suitable for real-world graphs. However, both algorithms still face challenges with memory overhead, especially for very dense graphs.
        </Typography>
        <Typography paragraph>
          Future work may focus on improving the scalability of both algorithms, such as incorporating parallel processing or refining clique enumeration techniques to handle increasingly large or dense datasets.
        </Typography>
      </Paper>
    </Box>
  );
}
