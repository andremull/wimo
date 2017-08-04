import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Button from 'material-ui/RaisedButton'

export default function RaisedButton({
  buttonColor,
  className,
  href,
  label,
  labelColor,
  onTouchTap

}) {
  return (
    <MuiThemeProvider>
      <Button
        className={ className }
        buttonColor={ buttonColor }
        label={ label }
        labelColor={ labelColor }
        href={ href } 
        onTouchTap={ onTouchTap } />
    </MuiThemeProvider>
  )
}
