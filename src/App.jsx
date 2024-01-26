import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import { GlobalStyles } from "./global.styles";

import Header from "./routes/header/header.route";
import Home from "./routes/home/home.route";

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
