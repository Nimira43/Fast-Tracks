import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, Paper, Radio, TextField } from '@mui/material'
import { useFetchFiltersQuery } from './catalogApi'

const sortOptions = [
  { 
    value: 'name',
    label: 'Alphabetical'
  },
  { 
    value: 'priceDesc',
    label: 'Price: High to Low'
  },
  { 
    value: 'price',
    label: 'Price: Low to High'
  },
]

export default function Filters() {
  const { data } = useFetchFiltersQuery()
  console.log(data)

  return (
    <Box
      display='flex'
      flexDirection='column'
      gap={3}
    >
      <Paper>
        <TextField
          label='Search Products'
          variant='outlined'
          fullWidth
        />
      </Paper>
      <Paper sx={{ p: 3 }}>
        <FormControl>
          {sortOptions.map(({ value, label }) => (
            <FormControlLabel
              key={label}
              control={
                <Radio
                  sx={{
                    py: 0.7,
                    color: 'orange',
                    '&.Mui-checked': {
                      color: 'orange',
                    },
                  }} />
              }
              label={label}
              value={value}
            />
          ))}
        </FormControl>
      </Paper>
      <Paper sx={{p: 3}}>
        <FormGroup>
          {data && data.brands.map(item => (
            <FormControlLabel
              key={item}
              control={
                <Checkbox
                  sx={{
                    py: 0.7,
                    fontSize: 40,
                    color: 'orange',
                    '&.Mui-checked': {
                      color: 'orange',
                    },
                    '&.Mui-focusVisible': {
                      outline: 'none',
                    },
                  }}
                />
              }
              label={item}
            />
          ))}
        </FormGroup>
      </Paper>
      <Paper sx={{p: 3}}>
        <FormGroup>
          {data && data.types.map(item => (
            <FormControlLabel
              key={item}
              control={
                <Checkbox
                  sx={{
                    py: 0.7,
                    fontSize: 40,
                    color: 'orange',
                    '&.Mui-checked': {
                      color: 'orange',
                    },
                    '&.Mui-focusVisible': {
                      outline: 'none',
                    },
                  }}
                />
              }
              label={item}
            />
          ))}
        </FormGroup>
      </Paper>
    </Box>
  )
}