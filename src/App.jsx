
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2/Page2";
import Page3 from "./pages/Page3";

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Page1 />} />
    //     <Route path="/page-2" element={<Page2 />} />
    //     <Route path="/page-3" element={<Page3 />} />
    //   </Routes>
    // </Router>


    <>
      <div className="flex flex-col gap-[2rem]">
        <Page1 />
        <Page2 />
        <Page3 />
      </div>
    </>
  );
}

export default App;
