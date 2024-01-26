import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import { GlobalStyles } from "./global.styles";

import Header from "./components/header/header.component";
import Home from "./routes/home/home.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />}></Route>
      </Route>
    </Routes>
    // <Fragment>
    //   <GlobalStyles />

    // </Fragment>
  );
}

export default App;
