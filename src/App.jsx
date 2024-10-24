import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AdminRoute from "./router/admin";
import UserRoute from "./router/user";
import { ScrollTop } from "./components";
import "./i18n";

function App() {
  return (
    <>
      <Router>
        <ScrollTop />
        <Routes>
          <Route path="/*" element={<UserRoute />} />
          <Route path="/admin/*" element={<AdminRoute />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
