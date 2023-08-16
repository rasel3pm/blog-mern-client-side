import HomePage from "./pages/HomePage";
import PostCreateUpdatePage from "./pages/PostCreate-update-page";
import ReadPage from "./pages/ReadPage";
import Header from "./common/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SinglePost from "./pages/SinglePost";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<PostCreateUpdatePage />} />
          <Route path="/read" element={<ReadPage />} />
          <Route path="/post/:id" element={<SinglePost />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
