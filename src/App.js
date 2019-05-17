import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import { RoomProvider } from "./context";

function App() {
  return (
    <>
      <RoomProvider>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Rooms exact path="/rooms" component={Rooms} />
          <SingleRoom exact path="/rooms/:slug" component={SingleRoom} />
          <Route component={Error} />
        </Switch>
      </RoomProvider>
    </>
  );
}

export default App;
