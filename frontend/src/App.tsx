import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Welcome To MERN ECommerce</h1>
      </main>
      <Footer />
    </>
  );
};

export default App;
