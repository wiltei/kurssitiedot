import React from "react";

/* Refaktoroi vielä komponentti Content siten, että se ei itse renderöi yhdenkään osan nimeä eikä sen tehtävälukumäärää vaan ainoastaan kolme Part-nimistä komponenttia, joista kukin siis renderöi yhden osan nimen ja tehtävämäärän. */

const App = (props) => {
  return (
    <div>
      <h1>
        <Header course="Half Stack application development" />
      </h1>
      <p>
        <Content />
      </p>
      <p>
        <Total total={props.exercises + props.exercises + props.exercises} />
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
      <Part part="Fundamentals of React" exercises={10} />
      <Part part="Using props to pass data" exercises={7} />
      <Part part="State of a component" exercises={14} />
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  );
};

const Total = (props) => {
  return <p>Number of exercises {props.total}</p>;
};

export default App;
