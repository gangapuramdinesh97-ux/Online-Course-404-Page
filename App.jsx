import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  return <h1>Home Page</h1>;
}

function Courses() {
  return <h1>Online Courses</h1>;
}

function NotFound() {
  return <h1 style={{ color: "red" }}>404 - Page Not Found</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;