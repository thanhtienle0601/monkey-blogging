import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
