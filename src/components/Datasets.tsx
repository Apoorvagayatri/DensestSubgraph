import { 
  Paper, 
  Typography, 
  Box, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  Chip
} from '@mui/material'

interface Dataset {
  name: string
  nodes: number
  edges: number
  description: string
}

export default function Datasets() {
  const datasets: Dataset[] = [
    {
      name: "Netscience",
      nodes: 22963,
      edges: 48436,
      description: "a symmetrized snapshot of the structure of the Internet at the level of autonomous systems, reconstructed from BGP tables posted by the University of Oregon Route Views Project. This snapshot was created by Mark Newman from data for July 22, 2006 and is not previously published."
    },
    {
      name: "as-733",
      nodes: 6474,
      edges: 13233,
      description: "The graph of routers comprising the Internet can be organized into sub-graphs called Autonomous Systems (AS). Each AS exchanges traffic flows with some neighbors (peers). We can construct a communication network of who-talks-to- whom from the BGP (Border Gateway Protocol) logs. (from snap)"
    },
    {
      name: "ca-hep: Arxiv HEP-TH",
      nodes: 9877,
      edges: 51971,
      description: "Arxiv HEP-TH (High Energy Physics - Theory) collaboration network is from the e-print arXiv and covers scientific collaborations between authors papers submitted to High Energy Physics - Theory category. If an author i co-authored a paper with author j, the graph contains a undirected edge from i to j. If the paper is co-authored by k authors this generates a completely connected (sub)graph on k nodes.   (from snap)"
    },
    {
      name: "as-caida:",
      nodes: 26475,
      edges: 53381,
      description: "a full AS graph derived from a set of RouteViews BGP table snapshots. (from snap)"
    },
    {
      name: "yeast:",
      nodes: 5093,
      edges: 24743,
      description: "The yeast dataset from the Database of Interacting Proteins (DIP) is a curated collection of experimentally determined protein-protein interactions (PPIs) in Saccharomyces cerevisiae. This dataset serves as a valuable resource for understanding the molecular mechanisms underlying various cellular processes in yeast"
    }
  ]

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Experimental Datasets
      </Typography>
      
      <TableContainer component={Paper} sx={{ mt: 3 }}>
        <Table sx={{ minWidth: 650 }} aria-label="dataset table">
        <TableHead>
  <TableRow>
    <TableCell sx={{ width: '15%' }}>Dataset Name</TableCell>
    <TableCell align="right" sx={{ width: '15%' }}>Nodes</TableCell>
    <TableCell align="right" sx={{ width: '15%' }}>Edges</TableCell>
    <TableCell sx={{ width: '55%' }}>Description</TableCell>
  </TableRow>
</TableHead>

          <TableBody>
            {datasets.map((dataset) => (
              <TableRow
                key={dataset.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {dataset.name}
                </TableCell>
                <TableCell align="right">{dataset.nodes.toLocaleString()}</TableCell>
                <TableCell align="right">{dataset.edges.toLocaleString()}</TableCell>
                <TableCell sx={{ whiteSpace: 'normal', wordBreak: 'break-word', maxWidth: 300 }}>
  {dataset.description}
</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <Typography variant="h6" gutterBottom>
          Drive Link to Datasets
        </Typography>
        <Typography paragraph>
  <a 
    href="https://drive.google.com/drive/u/2/folders/1dRUh31KVUCvACOQUJbW06y6NWHBxBqZ2" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{ textDecoration: 'none', color: 'blue' }}
  >
    https://drive.google.com/drive/u/2/folders/1dRUh31KVUCvACOQUJbW06y6NWHBxBqZ2
  </a>
</Typography>

      </Paper>
    </Box>
  )
}