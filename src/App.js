import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";

const App = () => {
  return (
    <>
      <ToastContainer position="top-center" limit={1} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavigationBar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
