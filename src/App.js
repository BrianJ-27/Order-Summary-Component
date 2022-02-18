import React from "react";
import Card from "./components/card/card";
import Footer from "./components/footer/footer";

function App() {
  return (
    <React.Fragment>
      <main className="container">
        <Card />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
