import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => {
            let element = <route.page />;
            if (route.layout) {
              element = (
                <route.layout>
                  <route.page />
                </route.layout>
              );
            }
            return <Route key={index} path={route.path} element={element} />;
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
