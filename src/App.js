import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Main from "./layout/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/main/*" element={<Main />} />

          <Route path="*" element={<Navigate to="/main/product" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
