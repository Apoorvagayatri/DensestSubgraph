import { Paper, Typography, Box, List, ListItem, ListItemText } from '@mui/material'

export default function Contributions() {
  const contributions = [
    {
      member: "Team Member 1",
      tasks: [
        "Implementation of EXACT algorithm",
        "Performance testing and optimization",
        "Documentation"
      ]
    },
    {
      member: "Team Member 2",
      tasks: [
        "Core EXACT algorithm implementation",
        "Graph visualization components",
        "Test case development"
      ]
    },
    {
      member: "Team Member 3",
      tasks: [
        "Dataset preparation and processing",
        "Results analysis and visualization",
        "Technical writing"
      ]
    }
  ]

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Team Contributions
      </Typography>
      <Typography variant="h6" gutterBottom color="text.secondary">
        Group 44
      </Typography>

      {contributions.map((contribution, index) => (
        <Paper 
          key={index} 
          elevation={3} 
          sx={{ 
            p: 3, 
            mb: 2,
            '&:hover': {
              boxShadow: 6
            }
          }}
        >
          <Typography variant="h6" gutterBottom color="primary">
            {contribution.member}
          </Typography>
          <List>
            {contribution.tasks.map((task, taskIndex) => (
              <ListItem key={taskIndex}>
                <ListItemText primary={task} />
              </ListItem>
            ))}
          </List>
        </Paper>
      ))}
    </Box>
  )
}