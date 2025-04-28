import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { 
  AppBar, 
  Tabs, 
  Tab, 
  Box, 
  Typography,
  Container
} from '@mui/material'

import ExactAlgorithm from './components/algorithms/ExactAlgorithm'
import CoreExactAlgorithm from './components/algorithms/CoreExactAlgorithm'
import AlgorithmOverview from './components/AlgorithmOverview'
import Datasets from './components/Datasets'

function App() {
  const [value, setValue] = useState(0)

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Router>
      <Box sx={{ 
        width: '100vw',
        minHeight: '100vh',
        bgcolor: 'white',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <AppBar 
          position="static" 
          sx={{ 
            width: '100%',
            bgcolor: 'white',
            boxShadow: 'none',
            borderBottom: '1px solid black'
          }}
        >
          <Typography 
            variant="h4" 
            component="div" 
            sx={{ 
              p: 2,
              textAlign: 'center',
              color: 'black'
            }}
          >
            Group 44 - Densest Subgraph Recovery
          </Typography>
          <Tabs 
            value={value} 
            onChange={handleChange} 
            sx={{
              width: '100%',
              '& .MuiTabs-flexContainer': {
                width: '100%',
                display: 'flex',
                '& .MuiTab-root': {
                  flex: 1,
                  minWidth: 0
                }
              }
            }}
          >
            <Tab label="Algorithm Overview" component={Link} to="/overview" />
            <Tab label="EXACT Algorithm" component={Link} to="/exact" />
            <Tab label="Core EXACT Algorithm" component={Link} to="/core-exact" />
            <Tab label="Datasets" component={Link} to="/datasets" />
          </Tabs>
        </AppBar>

        <Container 
          sx={{ 
            p: '0 !important',
            maxWidth: '100% !important',
            flex: 1,
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Box sx={{ p: 3, flex: 1, width: '100%' }}>
            <Routes>
              <Route path="/overview" element={<AlgorithmOverview />} />
              <Route path="/exact" element={<ExactAlgorithm />} />
              <Route path="/core-exact" element={<CoreExactAlgorithm />} />
              <Route path="/datasets" element={<Datasets />} />
              <Route path="/" element={<AlgorithmOverview />} />
            </Routes>
          </Box>
        </Container>
      </Box>
    </Router>
  )
}

export default App
