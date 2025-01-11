import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProfilePage from "scenes/profilePage";
import LoginPage from "scenes/loginPage";
import HomePage from "scenes/homePage";
// import Navbar from "scenes/navbar";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { themeSettings } from "theme";

function App() {
  // whenever we want to grab something or information from store we use useSelector
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state)=>state.token))

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={isAuth? <HomePage />:<Navigate to={"/"}/>} />
            <Route path="/profile/:userId" element={ isAuth? <ProfilePage /> : <Navigate to={"/"}/>} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
