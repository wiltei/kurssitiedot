import React from "react";

const App = (props) => {
  return (
    <div>
      <h1>
        <Header course="Half Stack application development" />
      </h1>
      <p>
        <Content part1="Fundamentals of React" exercises1="10" />

        <Content part2="Using props to pass data" exercises2="7" />
        <Content part3="State of a component" exercises3="14" />
      </p>
      <p>
        <Total total={props.exercises1 + props.exercises2 + props.exercises3} />
      </p>
    </div>
  );
};

const Header = (props) => {
  return (
    <div>
      <p>{props.course}</p>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </div>
  );
};

const Total = (props) => {
  return <p>Number of exercises {props.total}</p>;
};

export default App;
