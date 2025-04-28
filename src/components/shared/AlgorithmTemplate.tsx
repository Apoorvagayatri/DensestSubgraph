import { useState } from 'react'
import { 
  Box, 
  Tabs, 
  Tab, 
  Typography,
  Paper
} from '@mui/material'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`algorithm-tabpanel-${index}`}
      aria-labelledby={`algorithm-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  )
}

interface AlgorithmTemplateProps {
  title: string
  observations: {
    keyAlgorithms: string[]
    optimizations: string[]
    performanceObservations: string[]
    limitationsAndFutureWork: string[]
    summary: string
  }
  results: React.ReactNode
}

export default function AlgorithmTemplate({ 
  title, 
  observations, 
  results 
}: AlgorithmTemplateProps) {
  const [value, setValue] = useState(0)

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ 
      width: '100%', 
      color: 'black',
      minHeight: '100%'
    }}>
      <Typography 
        variant="h4" 
        component="h1" 
        sx={{ 
          mb: 4,
          textAlign: 'left',
          fontWeight: 'bold'
        }}
      >
        {title}
      </Typography>

      <Box sx={{ 
        borderBottom: 1, 
        borderColor: 'black',
        mb: 3,
        width: '100%'
      }}>
        <Tabs 
          value={value} 
          onChange={handleChange}
          sx={{
            width: '100%',
            '& .MuiTab-root': {
              flex: '1 1 50%',
              color: 'black',
              '&.Mui-selected': {
                fontWeight: 'bold'
              }
            }
          }}
        >
          <Tab label="Observations" />
          <Tab label="Results" />
        </Tabs>
      </Box>

      <Box sx={{ 
        display: 'flex',
        minHeight: 'calc(100vh - 300px)'
      }}>
        <TabPanel value={value} index={0}>
          <Paper 
            elevation={1} 
            sx={{ 
              p: 4,
              bgcolor: 'white',
              border: '1px solid black',
              width: '100%'
            }}
          >
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold' }}>
              Key Algorithms
            </Typography>
            <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem' }}>
              {observations.keyAlgorithms.map((algo, index) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>
                  <Typography>{algo}</Typography>
                </li>
              ))}
            </ul>

            <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold' }}>
              Optimizations
            </Typography>
            <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem' }}>
              {observations.optimizations.map((opt, index) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>
                  <Typography>{opt}</Typography>
                </li>
              ))}
            </ul>

            <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold' }}>
              Performance Observations
            </Typography>
            <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem' }}>
              {observations.performanceObservations.map((obs, index) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>
                  <Typography>{obs}</Typography>
                </li>
              ))}
            </ul>

            <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold' }}>
              Limitations and Future Work
            </Typography>
            <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem' }}>
              {observations.limitationsAndFutureWork.map((item, index) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>
                  <Typography>{item}</Typography>
                </li>
              ))}
            </ul>

            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Summary
            </Typography>
            <Typography paragraph>
              {observations.summary}
            </Typography>
          </Paper>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Paper 
            elevation={1} 
            sx={{ 
              p: 4,
              bgcolor: 'white',
              border: '1px solid black',
              width: '100%'
            }}
          >
            {results}
          </Paper>
        </TabPanel>
      </Box>
    </Box>
  )
}