import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";
import Rooms from "./Pages/OurRooms";
import Blog from "./Pages/Blog";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import { RoomBookingProvider } from "./Store/RoombookingContext";

function App() {
  return (
    <RoomBookingProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route
            path="/home"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Header />
                <About />
                <Footer />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Header />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route
            path="/gallery"
            element={
              <>
                <Header />
                <Gallery />
                <Footer />
              </>
            }
          />
          <Route
            path="/rooms"
            element={
              <>
                <Header />
                <Rooms />
                <Footer />
              </>
            }
          />
          <Route
            path="/blog"
            element={
              <>
                <Header />
                <Blog />
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </RoomBookingProvider>
  );
}

export default App;
