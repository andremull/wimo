import React from 'react'
import WimoThemeProvider from '../../styles/WimoThemeProvider'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/RaisedButton'
import RaisedButton from 'material-ui/RaisedButton'
import FormsyForm from '../molecules/FormsyForm'

export default class LoginModal extends React.Component{

  state={
    open: false
  }

  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render() {
    const actions = [
      <FlatButton
        label='Log in with email address'
        primary={ true }
        onTouchTap={ this.handleClose }
      />,
      <FlatButton
        label='Log in with Google'
        primary={ true }
        onTouchTap={ this.handleClose }
      />,
      <FlatButton
        label='Cancel'
        primary={ false }
        onTouchTap={ this.handleClose }
      />
    ]

    return (
      <WimoThemeProvider>
        <div>
          <RaisedButton
            fullWidth={ true }
            label='Log in'
            onTouchTap={ this.handleOpen }
          />
          <Dialog
            actions={ actions }
            modal={ true }
            open={ this.state.open }
            actionsContainerClassName={ 'login-modal-actions' }
            bodyClassName={ 'login-modal-body' }
            contentClassName={ 'login-modal-content' } 
            overlayClassName={ 'login-modal-overlay' }
            paperClassName={ 'login-modal-paper' }
            titleClassName={ 'login-modal-title' }
          >
            <h3>Log In</h3>
            <FormsyForm />
          </Dialog>
        </div>
    </WimoThemeProvider>
    )
  }
}
