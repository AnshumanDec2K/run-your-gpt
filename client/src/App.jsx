import { useState } from "react";
import { BrowserRoter, Routes, Route, Navigate } from "react-router-dom";
import Chat from "@/components/chat";

function App() {
  return (
    <>
      <div className="app">
        <BrowserRoter>
          <Routes>
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </BrowserRoter>
      </div>
    </>
  );
}

export default App;
