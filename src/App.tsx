import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Portfolio from "./Routes/Portfolio";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { useRecoilValue } from "recoil";
import { themeState } from "./atoms";
import { lightTheme, darkTheme } from "./theme";

const App = () => {
  const isDark = useRecoilValue(themeState);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/project/:title/:num" element={<Portfolio />} />
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
