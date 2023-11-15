// App.js or index.js
import React from "react"
import { createRoot } from "react-dom/client"
// import GoogleTranslateScript from "./GoogleTranslateScript"
import App from "./App" // Import your main app component

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
