import React, { Component } from "react";
import Tasks from "./Tasks";
import check from "./check.png";

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

  handleReset = (event) => {};

  handleAddTask = () => {
    if (!this.state.inputValue == "") {
      const { inputValue } = this.state;
      const tasks = [...this.state.tasks];

      tasks.push(inputValue);
      this.setState({
        tasks: tasks,
        inputValue: "",
      });
    }
  };

  render() {
    const { inputValue, tasks } = this.state;
    return (
      <div className="main">
        <div className="title">
          <h1>Super Do</h1>
          <img src={check} className="check"></img>
        </div>
        <div className="container">
          <div className="inputPart">
            <input
              type="text"
              placeholder="Anything ToDo?"
              onChange={this.handleChange}
              value={this.state.inputValue}
              className="inp"
              onKeyPress={(event) => {
                if (event.key == "Enter") {
                  this.handleAddTask();
                }
              }}
            ></input>
            <button onClick={this.handleAddTask} className="btn">
              +
            </button>
          </div>
          <div className="divider"></div>
          <div className="resultPart">
            <div className="list-item-container">
              {tasks.map((task, index) => {
                return <Tasks data={task} />;
              })}
            </div>
          </div>
        </div>
        <div className="reset">Reset</div>
      </div>
    );
  }
}

export default ToDo;
