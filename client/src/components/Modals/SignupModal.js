import React from 'react';

import {
    TextField, Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,


} from "@material-ui/core"

const SignupModal = (props) => {

    return (
        <>

            <Dialog open={props.showSignupModal} onClose={props.toggleSignup} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Signup</DialogTitle>
                <DialogContent>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="username"
                        name="username"
                        label="Username"
                        type="text"
                        fullWidth
                        onChange={props.handleChange}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        placeholder="Enter a password of 8 characters"
                        fullWidth
                        onChange={props.handleChange}

                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.toggleSignup} color="primary">
                        Cancel
          </Button>
                    <Button onClick={props.handleSignupSubmit} color="primary">
                        Signup
          </Button>
                </DialogActions>
            </Dialog>



        </>
    );
}

export default SignupModal