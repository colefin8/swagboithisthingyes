import React, { Component } from "react";
import axios from "axios";

class ListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      editInput: props.element
    };
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  edit = () => {
    const { editing } = this.state;
    this.setState({
      editing: !editing
    });
  };

  save = () => {
    const index = this.props.index;
    const newItem = this.state.editInput;

    axios
      .put("/api/list", { index, newItem })
      .then(res => this.props.updateState(res.data));

    this.setState({
      editing: false
    });
  };

  render() {
    return (
      <div>
        {this.state.editing ? (
          <article>
            <input
              value={this.state.editInput}
              name="editInput"
              onChange={e => this.handleInput(e)}
            />
            <button onClick={() => this.save()}>Save</button>
          </article>
        ) : (
          <section>
            {this.props.element}
            <button onClick={() => this.edit()}>EDIT</button>
            <button onClick={() => this.props.deleteItem(this.props.index)}>
              DELETE
            </button>
          </section>
        )}
      </div>
    );
  }
}

export default ListItem;
