import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home/Home";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import PageNotFound from "./components/PageNotFound/PageNotFound";

const App = () => {
  return (
    <>
      <ToastContainer position="top-center" limit={1} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavigationBar />} />
          {/* Protected route */}
          <Route path="/home" element={<ProtectedRoute />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
