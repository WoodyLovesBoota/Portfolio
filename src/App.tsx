import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";

const App = () => {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
