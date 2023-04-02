import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import {RegistrationApp} from './RegistrationApp';
import {ErrorPage} from "./modules/errorPage/ErrorPage";
import {RegisterStart} from "./modules/registerStart/RegisterStart";

export const RegistrationApplication = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RegistrationApp />} />
                <Route path="/register" element={<RegisterStart/>} />
                <Route path="*" element={<ErrorPage/>} />
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RegistrationApplication />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
