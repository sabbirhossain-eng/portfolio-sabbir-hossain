import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster toastOptions={{
    className: 'bg-card-dark text-in-dark',
  }}/>
    <ThemeProvider>
      <div className="mx-auto bg-primary-dark text-in-dark font-gloria">
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  </React.StrictMode>
);
