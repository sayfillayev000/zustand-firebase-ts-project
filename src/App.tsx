import { Route, Routes, } from "react-router-dom";
import { Home, Login, Register } from "./pages";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useAuthStore } from "./store/auth.store";

const App = () => {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //     // loader: () => isLoading,
  //     children: [
  //       {
  //         path: "/",
  //         element: <Content />,
  //         // loader: () => isLoading,
  //       },
  //     ],
  //   },
  //   {
  //     path: "login",
  //     element: <Login />,
  //   },
  //   {
  //     path: "register",
  //     element: <Register />,
  //   },
  // ]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;
