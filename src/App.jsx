import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Questions from "./pages/Questions";
import QuestionsSlug from "./pages/Questions/Slug";
import Navbar from "./components/shared/Navbar";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/questions/:slug" element={<QuestionsSlug />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
