import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";
import TagBar from "./layout/TagBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <TagBar />
        <Routes>
          <Route path="/main/*" element={<Main />} />

          <Route path="*" element={<Navigate to="/main/product" replace />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
