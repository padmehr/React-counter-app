import React, { Component } from "react";

export default class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,

  //   //tags: ["mast", "panir", "goje"],
  // };

  styles = {
    fontSize: "15px",
    fontWeight: "bold",
  };

  // constructor() {
  //   super();
  //   this.handleIncrement.bind(this);
  // }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    console.log("props", this.props);
    return (
      <div>
        <h4>{this.props.counter.id}</h4>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>

        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary "
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
  // handleIncrement = () => {
  //   console.log("clicked!", this);
  //   this.setState({ value: this.props.counter.value + 1 });
  // };
}
