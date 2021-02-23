import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import ServicesPage from "./ServicesPage";
import FrequentlyPage from "./FrequentlyPage";
import Header from "./comons/Header";
import Footer from "./comons/Footer";


function App() {
  function getPages() {
    const route = window.location.pathname;
    if (route === "/about") {
      return <AboutPage />;
    } if (route === "/services") {
      return <ServicesPage />;
    }
    if (route === "/contact") {
      return <ContactPage />;
    }
    if (route === "/frequently") {
      return <FrequentlyPage />;
    } else {
      return <HomePage />;
    }
  }
  return (
    <div className="container-fluid">
      <Header />
      {getPages()}
      <Footer />
    </div>
  );
}

export default App;
