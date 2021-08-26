import React from "react";

/* Refaktoroi vielä komponentti Content siten, että se ei itse renderöi yhdenkään osan nimeä eikä sen tehtävälukumäärää vaan ainoastaan kolme Part-nimistä komponenttia, joista kukin siis renderöi yhden osan nimen ja tehtävämäärän. */

const App = (props) => {
  return (
    <div>
      <h1>
        <Header course="Half Stack application development" />
      </h1>
      <p>
        <Content part="Fundamentals of React" exercises1={10} />
        <Content part="Using props to pass data" exercises2={7} />
        <Content part="State of a component" exercises3={14} />
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

/* const Part = (props) => {
  return (
    <div>
      <p>
        <Content part="Fundamentals of React" exercises1={10} />
        <Content part="Using props to pass data" exercises2={7} />
        <Content part="State of a component" exercises3={14} />
      </p>
    </div>
  );
}; */

const Content = (props) => {
  return (
    <div>
      <p>{props.part}</p>
    </div>
  );
};

const Total = (props) => {
  return <p>Number of exercises {props.total}</p>;
};

export default App;
