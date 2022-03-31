import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home/Home";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Notifications from "./components/Notifications/Notifications";
import Lists from "./components/Lists/Lists";
import Write from "./components/Write/Write";

const App = () => {
  return (
    <>
      <ToastContainer position="top-center" limit={1} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavigationBar />} />
          {/* Protected route */}
          <Route path="/me" element={<ProtectedRoute />}>
            <Route index element={<Home />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="lists" element={<Lists />} />
            <Route path="new-post" element={<Write />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
