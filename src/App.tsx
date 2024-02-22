import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import FindNumberByWord from "./Pages/Games/NumberGames/FindNumberByWord/FindNumberByWord";
import FindAlphabetLetters from "./Pages/Games/LettersGames/FindLetters/FindAlphabetLetters";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/find-number-by-word" element={<FindNumberByWord />} />
        <Route
          path="/find-alphabet-letters"
          element={<FindAlphabetLetters />}
        />
      </Routes>
    </Router>
  );
}

export default App;
