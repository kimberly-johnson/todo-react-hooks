import React, { useState } from "react";
import UserList from "./TodoList";
import { Paper, Tabs, Tab, TextField } from "@material-ui/core";

//functionality to add lists, navigate between them
export default function Nav() {
  const [lists, setList] = useState({
    newList: "",
    allLists: ["misc", "priority"]
  });

  const [value, setValue] = React.useState(2);

  const [currList, setCurrList] = useState("misc");

  const handleSubmit = e => {
    e.preventDefault();
    setList({ ...lists, allLists: [...lists.allLists, lists.newList] });
    setCurrList(lists.newList);
  };

  const handleClick = list => {
    setCurrList(list);
  };

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Paper>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          {lists.allLists.map(list => (
            <Tab label={list} onClick={() => handleClick(list)} />
          ))}
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
              id="outlined-basic"
              label="+ ADD LIST"
              variant="outlined"
              onChange={e => setList({ ...lists, newList: e.target.value })}
            />
          </form>
        </Tabs>
      </Paper>
      {lists.allLists.includes(currList) ? (
        <UserList currList={currList} />
      ) : null}
    </div>
  );
}
