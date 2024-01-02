import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { useRecoilValue } from "recoil";
import { lightTheme, darkTheme } from "./theme";
import { useRecoilState } from "recoil";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useState } from "react";
import Portfolio from "./Routes/Portfolio";
import { blogState, projectState, screenState } from "./atoms";
import { collection, onSnapshot } from "firebase/firestore";
import { firebaseDB } from "./firebase/firebase";

const App = () => {
  const mobileMatch = useMediaQuery("(max-width:745px)");
  const midMatch = useMediaQuery("(max-width:1200px)");
  const [screen, setScreen] = useRecoilState(screenState);
  const [projectData, setProjectData] = useRecoilState(projectState);
  const [blogData, setBlogDate] = useRecoilState(blogState);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!mobileMatch && !midMatch) setScreen(2);
    else if (!mobileMatch && midMatch) setScreen(1);
    else if (mobileMatch) setScreen(0);
  }, [mobileMatch, midMatch]);

  // useEffect(() => {
  //   onSnapshot(collection(firebaseDB, "portfolio"), (snapshot) => {
  //     const postsArr = snapshot.docs.map((eachDoc) => {
  //       return Object.assign(eachDoc.data(), { id: eachDoc.id });
  //     });
  //     return setProjectData(postsArr && postsArr[0] && postsArr[0]["projects"]);
  //   });
  //   onSnapshot(collection(firebaseDB, "portfolio"), (snapshot) => {
  //     const postsArr = snapshot.docs.map((eachDoc) => {
  //       return Object.assign(eachDoc.data(), { id: eachDoc.id });
  //     });
  //     return setBlogDate(postsArr && postsArr[0] && postsArr[0]["blogs"]);
  //   });
  // }, []);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(firebaseDB, "portfolio"), (snapshot) => {
      const postsArr = snapshot.docs.map((eachDoc) => {
        return Object.assign(eachDoc.data(), { id: eachDoc.id });
      });
      setProjectData(postsArr && postsArr[0] && postsArr[0]["projects"]);
      setBlogDate(postsArr && postsArr[0] && postsArr[0]["blogs"]);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <ThemeProvider theme={lightTheme}>
      <Router basename={process.env.PUBLIC_URL}>
        {!isLoading && (
          <Routes>
            <Route path="/:title" element={<Portfolio />} />

            <Route path="/" element={<Home />}></Route>
          </Routes>
        )}
      </Router>
    </ThemeProvider>
  );
};

export default App;
