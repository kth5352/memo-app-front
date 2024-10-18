import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { publicRoutes, authenticatedRoutes } from "./Routes";
import Layout from "./Components/TempLayout";

function App() {
  return (
    <>
      <Routes>
        {publicRoutes.map((route, idx) => {
          const Element = route.element;
          return <Route key={idx} path={route.path} element={<Element />} />;
        })}

        {authenticatedRoutes.map((route, idx) => {
          const Element = route.element;
          return (
            <Route
              key={idx}
              path={route.path}
              element={
                <Layout>
                  <Element />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </>
  );
}

export default App;
