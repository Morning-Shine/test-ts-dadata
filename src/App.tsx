import React from "react";
import "./App.scss";
import Header from "./components/header/Header";
import SideMenu from "./components/side-menu/SideMenu";
import AppRouter from "./pages/AppRouter";

function App() {
  return (
    <main className="app">
      <Header />
      <SideMenu />
      <AppRouter />
    </main>
  );
}

export default App;
