import React, { useReducer } from "react";
import "./App.css";
import Home from "./page/Home";
import {
  BulletinContext,
  bulletinReducer,
  initialState,
} from "./store/bulletinStore";

function App() {
  const [state, dispatch] = useReducer(bulletinReducer, initialState);

  return (
    <div className="App">
      <BulletinContext.Provider value={{ state, dispatch }}>
        <h1 className="Title">Bulletin Board</h1>
        <Home />
      </BulletinContext.Provider>
    </div>
  );
}

export default App;
