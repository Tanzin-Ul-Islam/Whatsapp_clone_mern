import { Routes, Route } from "react-router-dom";
import ContextProvider from "./ContextProvider"
import Home from "./pages/Home";
import AuthGuard from "./AuthGuard";
import Login from "./pages/Login";
import { GoogleOAuthProvider } from '@react-oauth/google';
function App() {

  return (
    <GoogleOAuthProvider clientId={'335344200170-lo56rsper1ubifjjpsjkethfus2fcdii.apps.googleusercontent.com'}>
      <ContextProvider>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<AuthGuard><Home /></AuthGuard>}></Route>
        </Routes>
      </ContextProvider>
    </GoogleOAuthProvider>


  );
}

export default App;
