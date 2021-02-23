import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./comons/Header";

function App() {
  function getPages() {
    const route = window.location.pathname;
    if (route === "/about") {
      return <AboutPage />;
    } else {
      return <HomePage />;
    }
  }
  return (
    <div className="container-fluid">
      <Header />
      {getPages()}
    </div>
  );
}

export default App;
