import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavigationBar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
