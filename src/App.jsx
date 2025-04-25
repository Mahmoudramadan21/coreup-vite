import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.scss";

// Lazy load pages to reduce initial bundle size
const Login = React.lazy(() => import("./pages/Login/Login"));
const Signup = React.lazy(() => import("./pages/Signup/Signup"));
const ForgotPassword = React.lazy(() =>
  import("./pages/ForgotPassword/ForgotPassword")
);
const VerifyCode = React.lazy(() => import("./pages/VerifyCode/VerifyCode"));
const NewPassword = React.lazy(() => import("./pages/NewPassword/NewPassword"));

/*
 * Main App component with routing setup
 * Performance Note: Using React.lazy and Suspense to reduce initial JS bundle size
 * Performance Recommendation: Use Vite's built-in tree shaking to remove unused code
 */
function App() {
  return (
    <Router>
      <Suspense fallback={<div aria-live="polite">Loading...</div>}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verify-code" element={<VerifyCode />} />
          <Route path="/new-password" element={<NewPassword />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
