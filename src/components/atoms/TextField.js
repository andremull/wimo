import React from 'react'
import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default function Text({
  floatingLabelFixed,
  multiline,
  onChange,
  rows,
  text,
  type,
  value
}) {
  return (
    <div>
      <MuiThemeProvider>
        <TextField
          floatingLabelFixed={ floatingLabelFixed }
          hintText={ text }
          multiLine={ multiline }
          onChange= { onChange }
          rows={ rows }
          type={ type }
          value={ value }
        />
      </MuiThemeProvider> 
    </div>
  )
}
