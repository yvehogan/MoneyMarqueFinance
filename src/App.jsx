import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";
import PageWrapper from "./components/wrapper/PageWrapper";

function App() {
	return (
      <BrowserRouter>
        <Routes>
        <Route path="/" exact element={<PageWrapper> <FirstPage /> </PageWrapper>} />
        <Route path="/second" exact element={<PageWrapper> <SecondPage /> </PageWrapper>} />
        <Route path="/third" exact element={<PageWrapper> <ThirdPage /> </PageWrapper>} />
        </Routes>
      </BrowserRouter>
	);
}

export default App;
