import React from "react";

class Hoc extends React.Component {
  name = "Josh Perez";
  target = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      arr: [{ a: 1 }],
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    setTimeout(() => {
      console.log("setTimeout 更新之前：", this.state.count);
      this.setState((state) => ({ count: state.count + 1 }));
      console.log("setTimeout 更新之后：", this.state.count);
    });
  }
  componentDidUpdate() {
    console.log(
      "setTimeout 更新之前：",
      (this.target.current.style.color = "red")
    );
  }
  render() {
    return (
      <div>
        <div>{this.name}</div>
        <div>{this.state.count}</div>
        <div>
          {this.state.arr.map((item, index) => (
            <span key={index}>{item.a}</span>
          ))}
        </div>
        <button ref={this.target} onClick={this.handleClick}>
          Click me
        </button>
        <button
          onClick={() =>
            this.setState({ arr: this.state.arr.concat({ a: 1 }) })
          }
        >
          Click me one
        </button>
      </div>
    );
  }
}

export default Hoc;
