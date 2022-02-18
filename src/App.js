import OrderSummary from "./components/order-summary/order-summary";
import Card from "./components/card/card";
function App() {
  return (
    <div className="App">
      <main className="App-header">
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
    </div>
  );
}

export default App;
