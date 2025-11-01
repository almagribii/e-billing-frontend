import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Login from "./pages/public/login";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route path="users" element={<div>Halaman User</div>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
