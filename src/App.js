import "./App.css";
import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import { Teams } from "./pages/Teams";
import { Contact } from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Gallery from "./pages/Gallery";
import Departments from "./pages/Department";
import Portfolio from "./pages/Portfolio";
import Facilities from "./pages/Facilities";
import Statistics from "./pages/Statistics";
import Login from "./pages/Login";
import { UserContext, UserProvider } from "./contexts/userContext";
import RouteGuard from "./routes/RouteGuard";
import useFetch from "./components/useFetch";

function App() {
  const [data] = useFetch('https://fakestoreapi.com/products/category/electronics');
  console.log("data from app: ", data);
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<RouteGuard component={Home} />} />
            <Route path="/about" element={<RouteGuard component={About} />} />
            <Route path="/teams" element={<RouteGuard component={Teams} />} />
            <Route path="/contact" element={<RouteGuard component={Contact} />} />
            <Route path="/services" element={<RouteGuard component={Services} />} />
            <Route
              path="/testimonials"
              element={<RouteGuard component={Testimonials} />}
            />
            <Route path="/gallery" element={<RouteGuard component={Gallery} />} />
            <Route
              path="/departments"
              element={<RouteGuard component={Departments} />}
            />
            <Route
              path="/portfolio"
              element={<RouteGuard component={Portfolio} />}
            />
            <Route
              path="/facilities"
              element={<RouteGuard component={Facilities} />}
            />
            <Route
              path="/statistics"
              element={<RouteGuard component={Statistics} />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<RouteGuard component={NotFound} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}



export default App;

// npm i -D react-router-dom
// npm i bootstrap
// npm i react-icons

// api endpoint for gallery
// https://picsum.photos/v2/list

