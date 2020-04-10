import React from 'react';

import {
    TextField, Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,


} from "@material-ui/core"

const LoginModal = (props) => {

    return (
        <>

            <Dialog open={props.showLoginModal} onClose={props.toggleLogin} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Login</DialogTitle>
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
                        fullWidth
                        onChange={props.handleChange}

                    />

                    {props.errorMessage &&
                        <div>
                            <p style={{ color: "red", marginTop: 10, textAlign: "center" }}>{props.errorMessage}</p>
                        </div>
                    }

                </DialogContent>
                <DialogActions>
                    <Button onClick={props.toggleLogin} color="primary">
                        Cancel
          </Button>
                    <Button onClick={props.handleLoginSubmit} color="primary">
                        Login
          </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default LoginModal