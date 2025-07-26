
import React, { useState } from "react";

const RegisterPage = () => {
  const [form, setForm] = useState({
    userName: "",
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // TODO: handle registration logic
    alert("Registration submitted! (Demo only)");
  };

  const handleGoogleSignup = () => {
    // TODO: handle Google signup logic
    alert("Google signup clicked! (Demo only)");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-primary/10 via-base-200 to-secondary/10">
      <div className="w-full max-w-md p-8 bg-base-100 rounded-3xl shadow-2xl border-2 border-primary/30">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-primary drop-shadow-lg">Create Your Account</h2>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="userName"
            value={form.userName}
            onChange={handleChange}
            placeholder="Username"
            className="input input-bordered w-full text-lg"
            required
          />
          <input
            type="text"
            name="fullname"
            value={form.fullname}
            onChange={handleChange}
            placeholder="Full Name"
            className="input input-bordered w-full text-lg"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="input input-bordered w-full text-lg"
            required
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            className="input input-bordered w-full text-lg"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="input input-bordered w-full text-lg"
            required
          />
          <button type="submit" className="btn btn-primary w-full text-lg shadow-md">Sign Up</button>
        </form>
        <div className="divider">OR</div>
        <button
          type="button"
          className="btn btn-outline btn-secondary w-full flex items-center justify-center gap-2 shadow-md"
          onClick={handleGoogleSignup}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24"><g><path fill="#4285F4" d="M24 9.5c3.54 0 6.72 1.22 9.22 3.22l6.9-6.9C36.36 2.54 30.55 0 24 0 14.64 0 6.4 5.64 2.44 13.86l8.06 6.27C12.6 13.09 17.87 9.5 24 9.5z"/><path fill="#34A853" d="M46.1 24.5c0-1.64-.15-3.22-.43-4.75H24v9h12.5c-.54 2.91-2.18 5.38-4.64 7.04l7.19 5.59C43.98 37.36 46.1 31.36 46.1 24.5z"/><path fill="#FBBC05" d="M10.5 28.14c-1.01-2.99-1.01-6.23 0-9.22l-8.06-6.27C.86 16.36 0 20.05 0 24c0 3.95.86 7.64 2.44 11.35l8.06-6.27z"/><path fill="#EA4335" d="M24 48c6.55 0 12.36-2.18 16.69-5.95l-7.19-5.59c-2.01 1.35-4.59 2.14-7.5 2.14-6.13 0-11.4-3.59-13.5-8.64l-8.06 6.27C6.4 42.36 14.64 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></g></svg>
          Sign up with Google
        </button>
        <p className="mt-8 text-center text-base text-gray-500">
          Already have an account? <a href="/login" className="text-primary font-semibold hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
