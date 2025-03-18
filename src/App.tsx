import { Route, Routes } from "react-router-dom";
// import AuthGuard from "./shared/AuthGuard/AuthGuard";
import { MainPage } from "./pages/MainPage";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <>
      <Provider store={store}>
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
      </Provider>
    </>
  );
}

export default App;
