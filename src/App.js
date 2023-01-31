import {
  BrowserRouter,
  Routes,
  Route,
  // Link,
  // Outlet
} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./containers/Home";
import PrivacyPolicy from "./components/Policies/PrivacyPolicy";
import TermsAndConditions from "./components/Policies/TermsAndConditions";
import TradingPoilcy from "./components/Policies/TradingPoilcy";
import AmlPolicy from "./components/Policies/AmlPolicy";
import CookiePolicy from "./components/Policies/CookiePolicy";

export default function App() {
  return (
    <BrowserRouter basename={"/"}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} /> */}
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/tradingpolicy" element={<TradingPoilcy />} />
        <Route path="/amlpolicy" element={<AmlPolicy />} />
        <Route path="/cookiepolicy" element={<CookiePolicy />} />
        <Route path="/termandconditions" element={<TermsAndConditions />} />
      </Routes>
    </BrowserRouter>
  );
}
