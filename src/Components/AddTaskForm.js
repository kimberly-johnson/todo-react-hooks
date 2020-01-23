import React from "react";
import { TextField, Button } from "@material-ui/core";

export default function AddTaskForm(props) {
  return (
    <div>
      <form noValidate autoComplete="off" onSubmit={props.handleSubmit}>
        <TextField
          id="outlined-basic"
          label="enter task"
          variant="outlined"
          onChange={props.handleChange}
        />
        <Button type="submit" variant="contained" color="primary">
          add task
        </Button>
      </form>
    </div>
  );
}
