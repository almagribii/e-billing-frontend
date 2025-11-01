import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Routes>
            <Route></Route>
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
