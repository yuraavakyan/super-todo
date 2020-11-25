import React, { Component } from "react";
import Tasks from "./Tasks";

class ToDo extends Component {
  state = {
    tasks: [],
    inputValue: "",
  };

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  handleAddTask = () => {
    const { inputValue } = this.state;
    const tasks = [...this.state.tasks];

    tasks.push(inputValue);
    this.setState({
      tasks: tasks,
      inputValue: "",
    });
  };

  render() {
    const { inputValue, tasks } = this.state;
    return (
      <div>
        <input
          type="text"
          placeholder="Add new task"
          onChange={this.handleChange}
          value={this.state.inputValue}
        ></input>
        <button onClick={this.handleAddTask}>Add</button>
        <ol>
          {tasks.map((task, index) => {
            return <Tasks data={task} />;
          })}
        </ol>
      </div>
    );
  }
}

export default ToDo;
