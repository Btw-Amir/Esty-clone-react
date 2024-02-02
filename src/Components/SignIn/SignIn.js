import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import './signIn.css'

export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    setOpen(props.isOpen)
  }, [props.isOpen])


  const handleClose = () => {
    setOpen(false);
    props.handleStateFromChild(false)
  };

  return (
    <React.Fragment> 

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className='signIN'>
          <div className='top'>
            <p><b>Sign in</b></p>
            <button>Register</button>
          </div>
          <div className='inputs'>
            <label>Email address</label>
            <input type='email' />
            {/* <hr/> */}
            <label>Password</label>
            <input type='password' />
          </div>
          <div className='stay'>
            <div className='check'>
            <input id='box' type='checkbox' />
            <label for='box'>Stay signed in</label>

            </div>
            <a href='www.google.com'>Forgot your password?</a>
          </div>
          <div className='btns'>
          <button>Sign in</button>
          <a href='www.google.com'>Trouble signing in?</a>

          <div className='other-sign'>
            <button><GoogleIcon />Continue with Google</button>
            <button><FacebookIcon />Continue with Facebook</button>
            <button><AppleIcon />Continue with Apple</button>
          </div>
          </div>

        </div>
      </Dialog>
    </React.Fragment>
  );
}