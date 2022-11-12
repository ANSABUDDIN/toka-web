import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Forget from "./components/Forget";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import tEn from './locales/en/translation.json'
import tTu from './locales/tu/translation.json'
import Dashboard from "./components/UserDashboard/Dashboard";
import Datatable from "./components/UserDashboard/Datatable";


i18n
.use(initReactI18next) // passes i18n down to react-i18next
.init({
  resources: {
    en: {
      translation: tEn
    },
    tu: {
      translation: tTu
    },
  },
  lng: "en", // if you're using a language detector, do not define the lng option
  fallbackLng: "en",

  interpolation: {
    escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  }
});

export const  changelang =(l) => {
  return () => {
    i18n.changeLanguage(l);
    localStorage.setItem('language', l )
    // alert("hello " + l)
  }
}

function App() {
  



  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Forget" element={<Forget />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Datatable" element={<Datatable />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
