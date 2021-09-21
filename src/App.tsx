import React from 'react';
import "./App.css";

import { Footer } from "./components/Footer";
import { Logo } from "./components/Logo";
import { Main } from "./components/Main"

function App() {
  return (
    <div className="app">
      <Logo />
      <main className="app-content">
        <Main />
      </main>
      <Footer />
    </div>
  );
}

export default App;
