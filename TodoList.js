import React, { useState } from "react";
import Task from "./Task";
import AddTaskForm from "./AddTaskForm";
import { makeStyles } from "@material-ui/core/styles";
import { List } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    margin: 20,
    marginLeft: "40%",
    maxWidth: 160,
    backgroundColor: theme.palette.background.paper
  }
}));

let id = 0;

export default function UserList(props) {
  const classes = useStyles();

  const { currList } = props;

  const [tasks, setTasks] = useState({
    newTask: "",
    allTasks: [
      { id: -2, name: "call mom", listName: "priority" },
      { id: -1, name: "do laundry", listName: "misc" }
    ]
  });

  const handleChange = e => {
    e.preventDefault();
    setTasks({
      ...tasks,
      newTask: { id: id++, name: e.target.value, listName: currList }
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setTasks({ ...tasks, allTasks: [...tasks.allTasks, tasks.newTask] });
  };

  const deleteTask = deletedTask => {
    setTasks({
      ...tasks,
      allTasks: tasks.allTasks.filter(task => task.id !== deletedTask.id)
    });
  };

  return (
    <div>
      <List className={classes.root}>
        {tasks.allTasks.map(task =>
          task.listName === currList ? (
            <Task task={task} deleteTask={deleteTask} key={task.id} />
          ) : null
        )}
      </List>
      <AddTaskForm handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
}
