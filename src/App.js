import "./App.css";
import Box from "./component/Box";
import { useState } from "react";

function App() {
  const farben = ["red", "yellow", "green", "blue", "purple"];
  const [direction, setDirection] = useState("none");
  const [content, setContent] = useState("none");
  const [item, setItem] = useState("none");
  return (
    <div className="App">
      <h1>Flexbox Konfigurator</h1>
      <p>{`${direction}, ${content}, ${item}`}</p>
      <fieldset className="weg">
        flex-direction:
        <input
          type="radio"
          id="row"
          name="flex-direction"
          value="row"
          onChange={() => {
            setDirection("row");
          }}
        ></input>
        <label htmlFor="row">row</label>
        <input
          type="radio"
          id="column"
          name="flex-direction"
          value="column"
          onChange={() => {
            setDirection("column");
          }}
        ></input>
        <label htmlFor="column">column</label>
      </fieldset>
      <fieldset>
        justify-content:
        <select id="justify-content">
          <option
            value="start"
            onClick={() => {
              setContent("start");
            }}
          >
            start
          </option>
          <option
            value="end"
            onClick={() => {
              setContent("end");
            }}
          >
            end
          </option>
          <option
            value="center"
            onClick={() => {
              setContent("center");
            }}
          >
            center
          </option>
          <option
            value="space-between"
            onClick={() => {
              setContent("space-between");
            }}
          >
            space-between
          </option>
          <option
            value="space-evenly"
            onClick={() => {
              setContent("space-evenly");
            }}
          >
            space-evenly
          </option>
          <option
            value="space-around"
            onClick={() => {
              setContent("space-around");
            }}
          >
            space-around
          </option>
        </select>
      </fieldset>
      <fieldset>
        align-items:
        <select id="align-items">
          <option
            value="flex-start"
            onClick={() => {
              setItem("flex-start");
            }}
          >
            flex-start
          </option>
          <option
            value="flex-end"
            onClick={() => {
              setItem("flex-end");
            }}
          >
            flex-end
          </option>
          <option
            value="center"
            onClick={() => {
              setItem("center");
            }}
          >
            center
          </option>
          <option
            value="stretch"
            onClick={() => {
              setItem("stretch");
            }}
          >
            stretch
          </option>
          <option
            value="baseline"
            onClick={() => {
              setItem("baseline");
            }}
          >
            baseline
          </option>
        </select>
      </fieldset>
      <div
        className="flex-container"
        style={{
          display: "flex",
          flexDirection: direction,
          justifyContent: content,
          alignItems: item,
          height: "800px",
          width: "800px",
          border: "5px solid black",
        }}
      >
        {farben.map((farbe) => {
          return <Box farbe={farbe} />;
        })}
      </div>
    </div>
  );
}

export default App;
