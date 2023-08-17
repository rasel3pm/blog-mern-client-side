import HomePage from "./pages/HomePage";
import PostCreateUpdatePage from "./pages/PostCreate-update-page";
import ReadPage from "./pages/ReadPage";
import Header from "./common/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SinglePost from "./pages/SinglePost";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ReadPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/create" element={<PostCreateUpdatePage />} />
          <Route path="/post/:id" element={<SinglePost />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
