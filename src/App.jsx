import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import { GlobalStyles } from "./global.styles";

import Header from "./routes/header/header.route";
import Home from "./routes/home/home.route";
import Country from "./routes/country/country.route";

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Routes>
        <Route path="/*" element={<Header />}>
          <Route index element={<Home />}></Route>
          <Route path=":country" element={<Country/>}/>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
