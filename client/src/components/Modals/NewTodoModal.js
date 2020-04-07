import React from 'react';

import {
    TextField, Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    MenuItem


} from "@material-ui/core"

const SignupModal = (props) => {

    return (

        <Dialog open={props.showTodoModal} onClose={props.toggleAddTodo} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">New ToDo</DialogTitle>
            <DialogContent>

                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    name="name"
                    label="name"
                    type="text"
                    fullWidth
                    onChange={props.handleChange}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="category"
                    name="category"
                    label="Choose a category"
                    select
                    value={props.newTodo && props.newTodo.category}
                    fullWidth
                    onChange={props.handleChange}

                >

                    {props.category.map((elm, i) => {
                        return (
                            <MenuItem key={i} value={elm}>
                                {elm}
                            </MenuItem>
                        );
                    })}


                </TextField>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.toggleAddTodo} color="primary">
                    Cancel
                         </Button>
                <Button onClick={props.handleAddTodoSubmit} color="primary">
                    Create
                        </Button>
            </DialogActions>
        </Dialog>


    );
}

export default SignupModal