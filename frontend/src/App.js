import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/Home";
import { NotFoundPage } from "./screens/Notfoundpage";
import LoginScreen from "./screens/Login";
import SignUpScreen from "./screens/SignUp";
import NewPost from "./components/NewPost";
import Postpage from "./screens/PostPage";
import Postlist from "./components/PostList";
import { UserPage } from "./screens/UserPage";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/post/create" element={<NewPost />}></Route>
        <Route path="/register" element={<SignUpScreen />}></Route>
        <Route path="/post/page/:id" element={<Postpage />}></Route>
        <Route path="/post/list" element={<Postlist />}></Route>
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
