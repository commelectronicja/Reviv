import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Feed from "./pages/Feed";
import CreatePost from "./pages/CreatePost";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Feed />} /> {/* better practice */}
          <Route path="create" element={<CreatePost />} />
        </Route>
      </Routes>
    </Router>
  );
}
