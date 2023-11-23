import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderComponent from "./components/Header/Header";
import Sectioncomponent from "./components/Section/Section";
import FooterComponent from "./components/Footer/Footer";
import LoginPage from "./components/LoginPage/LoginPage";
import SignupPage from "./components/SignupPage/TermsAgree";
// import SignupPage2 from "./components/SignupPage/SignupPage";

function LandingPage() {
  return (
    <div className="App">
      <HeaderComponent />
      <Sectioncomponent />
      <div className="Footer">
        <FooterComponent />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
