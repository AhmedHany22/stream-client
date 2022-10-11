import { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./Components/Navbar";
import StreamCreate from "./Components/Streams/StreamCreate";
import StreamsList from "./Components/Streams/StreamsList";
import StreamEdit from "./Components/Streams/StreamEdit";
import StreamDelete from "./Components/Streams/StreamDelete";
import StreamShow from "./Components/Streams/StreamShow";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<StreamsList />} />
          <Route path="/stream/create" element={<StreamCreate />} />
          <Route path="/stream/:id" element={<StreamShow />} />
          <Route path="/stream/edit/:id" element={<StreamEdit />} />
          <Route path="/stream/delete/:id" element={<StreamDelete />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </Fragment>
  );
};

export default App;
