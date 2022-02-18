import React from "react";
import OrderSummary from "./components/order-summary/order-summary";
import Card from "./components/card/card";
function App() {
  return (
    <React.Fragment>
      <main className="container">
        <Card />
      </main>
      <footer className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        &nbsp; Coded by <a href="https://brianbjohnson.net/">Brian Johnson</a>.
      </footer>
    </React.Fragment>
  );
}

export default App;
