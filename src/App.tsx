import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { useRecoilValue } from "recoil";
import { themeState } from "./atoms";
import { lightTheme, darkTheme } from "./theme";
import { screenState } from "./atoms";
import { useRecoilState } from "recoil";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect } from "react";
import Portfolio from "./Routes/Portfolio";

const App = () => {
  const isDark = useRecoilValue(themeState);
  const mobileMatch = useMediaQuery("(max-width:800px)");
  const midMatch = useMediaQuery("(max-width:1200px)");
  const [screen, setScreen] = useRecoilState(screenState);
  useEffect(() => {
    if (!mobileMatch && !midMatch) setScreen(2);
    else if (!mobileMatch && midMatch) setScreen(1);
    else if (mobileMatch) setScreen(0);
  }, [mobileMatch, midMatch]);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/:title" element={<Portfolio />} />

          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
