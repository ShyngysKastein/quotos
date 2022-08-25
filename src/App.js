import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Quotes from "./Components/Quotes/Quotes";
import AddQuotes from "./Components/AddQuotes/AddQuotes";
import EditQuotes from "./Components/EditQuotes/EditQuotes";
import Home from "./Components/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="quotes" element={<Home />} />
        <Route path="quotes/:category" element={<Quotes />} />
        <Route path="quotes/:category/:edit" element={<EditQuotes />} />
        <Route path="add-quote" element={<AddQuotes />} />
      </Route>
    </Routes>
  );
}

export default App;
