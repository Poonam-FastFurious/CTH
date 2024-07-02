import "../src/assets/css/tailwind2.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidmenu from "./Components/Chatsystem/Sidmenu";

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidmenu />
        <Routes>
          <Route path="/" element={""} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
