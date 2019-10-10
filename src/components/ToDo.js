import React, { Component } from "react";
import ListItem from "./ListItem";
import axios from "axios";

class ToDo extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
      input: ""
    };
  }

  componentDidMount = () => {
    axios.get("/api/list").then(res => {
      this.setState({
        list: res.data
      });
    });
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  addToList = () => {
    const addOn = this.state.input;
    axios.post("/api/list", { addOn }).then(res => {
      this.setState({
        list: res.data,
        input: ""
      });
    });
  };

  updateState = updatedList => {
    this.setState({
      list: updatedList
    });
  };

  deleteFromList = index => {
    axios.delete(`/api/list/${index}`).then(res => {
      this.setState({
        list: res.data
      });
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.list.map((element, index) => {
          return (
            <ListItem
              element={element}
              index={index}
              updateState={this.updateState}
              deleteItem={this.deleteFromList}
            />
          );
        })}
        <input
          placeholder="literally anything works here boi"
          name="input"
          value={this.state.input}
          onChange={e => this.handleInput(e)}
          onKeyDown={e => {
            if (e.key === "Enter") {
              this.addToList();
            }
          }}
        />
      </div>
    );
  }
}

export default ToDo;
