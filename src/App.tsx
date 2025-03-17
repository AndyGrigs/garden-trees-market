import { Route, Routes } from "react-router-dom";
// import AuthGuard from "./shared/AuthGuard/AuthGuard";
import { MainPage } from "./pages/MainPage";


function App() {
  return (
   <>
   
    <Routes>
      <Route path="/" element={<MainPage />} />
      {/* <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} /> */}
      {/* <Route
        path="/"
        element={
          <AuthGuard>
            <Dashboard />
          </AuthGuard>
        }
      /> */}
    </Routes>
  </>
  );
}

export default App;
