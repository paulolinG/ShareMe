import { Login } from "./Components/login_page/login";
import { VideoSite } from "./Components/video_stream_page/video";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/videos" element={<VideoSite />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
