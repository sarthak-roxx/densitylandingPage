
import {
  BrowserRouter,
  Routes,
  Route,
  // Link,
  // Outlet
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from "./containers/Home";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";

export default function App() {
  return (

    <BrowserRouter  basename={"/"}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} /> */}
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termandcondition" element={<TermsAndConditions />} />
      </Routes>
    </BrowserRouter>
  );
}
