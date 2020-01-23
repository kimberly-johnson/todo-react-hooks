import React from "react";
import {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  IconButton
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

export default function Task(props) {
  const task = props.task;

  return (
    <div>
      <ListItem key={task.id} dense button>
        <ListItemText key={task.id} primary={`${task.name}`} />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => props.deleteTask(task)}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </div>
  );
}
