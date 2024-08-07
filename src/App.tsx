import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import FindNumberByWord from "./Pages/Games/NumberGames/FindNumberByWord/FindNumberByWord";
import FindAlphabetLetters from "./Pages/Games/LettersGames/FindLetters/FindAlphabetLetters";
import FindPicturesByWord from "./Pages/Games/PicturesGames/FindPictureByWord/FindPictureByWord";
import "bootstrap/dist/css/bootstrap.min.css";
import FindColorByWord from "./Pages/Games/ColorGames/FindColors/FindColorByWord";

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
        <Route path="/find-color-by-word" element={<FindColorByWord />} />
        <Route path="/find-picture-by-word" element={<FindPicturesByWord />} />
      </Routes>
    </Router>
  );
}

export default App;
