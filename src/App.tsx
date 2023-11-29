import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Portfolio from "./Routes/Portfolio";

const App = () => {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/project/:title/:num" element={<Portfolio />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
