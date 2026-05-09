import React from "react";
import MyContainer from "../Components/MyContainer";
import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
import { toast } from "react-toastify";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

const Signup = () => {
  const [show, setShow] = useState(false);
  const handleSignin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log("Signin with:", { email, password });
    // if (password.length < 6) {
    //   toast.error("Password must be at least 6 characters long.");
    //   return;
    // }
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
      );
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("User created:", res.user);
        toast.success("User created successfully!");
      })

      .catch((err) => {
        console.error("Error creating user:", err);
        console.log(err.code);
        // 🔐 Signup Errors
        if (err.code === "auth/email-already-in-use") {
          toast.error("এই email আগে থেকেই ব্যবহার করা হয়েছে");
        } else if (err.code === "auth/invalid-email") {
          toast.error("Invalid email address");
        } else if (err.code === "auth/weak-password") {
          toast.error("Password অন্তত ৬ digit হতে হবে");
        } else if (err.code === "auth/operation-not-allowed") {
          toast.error("Email/password login enable করা নাই");
        }

        // 🔑 Signin Errors
        else if (err.code === "auth/user-not-found") {
          toast.error("এই email দিয়ে কোনো account নেই");
        } else if (err.code === "auth/wrong-password") {
          toast.error("Password ভুল হয়েছে");
        } else if (err.code === "auth/invalid-credential") {
          toast.error("Email বা password ভুল");
        } else if (err.code === "auth/user-disabled") {
          toast.error("এই account disable করা হয়েছে");
        } else if (err.code === "auth/too-many-requests") {
          toast.error("অনেকবার চেষ্টা করা হয়েছে, পরে আবার চেষ্টা করো");
        }

        // 🌐 Google / GitHub Errors
        else if (err.code === "auth/popup-closed-by-user") {
          toast.error("Login popup বন্ধ করা হয়েছে");
        } else if (err.code === "auth/popup-blocked") {
          toast.error("Browser popup block করেছে");
        } else if (err.code === "auth/cancelled-popup-request") {
          toast.error("Multiple popup request হয়েছে");
        } else if (
          err.code === "auth/account-exists-with-different-credential"
        ) {
          toast.error("এই email অন্য login method দিয়ে already আছে");
        }

        // 🌍 Network Error
        else if (err.code === "auth/network-request-failed") {
          toast.error("Network error, internet check করো");
        }

        // 🔒 Session / Security
        else if (err.code === "auth/user-token-expired") {
          toast.error("Session expire হয়ে গেছে, আবার login করো");
        } else if (err.code === "auth/requires-recent-login") {
          toast.error("Sensitive action এর জন্য আবার login করতে হবে");
        }

        // ❌ Default
        else {
          toast.error(err.message);
        }
      });
  };

  const handleGoogleSignin = () => {};

  const handleGithubSignin = () => {};

  // console.log();

  return (
    <div className="min-h-[calc(100vh-20px)] flex items-center justify-center bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 relative overflow-hidden">
      {/* Animated glow orbs */}
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-purple-400/30 rounded-full blur-xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-blue-400/30 rounded-full blur-xl bottom-10 right-10 animate-pulse"></div>
      </div>

      <MyContainer>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-white">
          {/* Left section */}
          <div className="max-w-lg text-center lg:text-left">
            <h1 className="text-5xl font-extrabold drop-shadow-lg">
              Create an Account
            </h1>
            <p className="mt-4 text-lg text-white/80 leading-relaxed">
              Sign up to continue your journey. Manage your account, explore new
              features, and more.
            </p>
          </div>

          {/* Login card */}
          <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
            <form onSubmit={handleSignin} className="space-y-5">
              <h2 className="text-2xl font-semibold mb-2 text-center text-white">
                Sign UP
              </h2>

              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@email.com"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="relative">
                <label className="block text-sm mb-1">Password</label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-3 top-[38px] cursor-pointer text-gray-400"
                >
                  {show ? <FaEye /> : <IoEyeOff />}
                </span>
              </div>

              <button type="submit" className="my-btn">
                Sign Up
              </button>

              {/* Divider */}
              <div className="flex items-center justify-center gap-2 my-2">
                <div className="h-px w-16 bg-white/30"></div>
                <span className="text-sm text-white/70">or</span>
                <div className="h-px w-16 bg-white/30"></div>
              </div>

              {/* Google Signin */}
              <button
                type="button"
                onClick={handleGoogleSignin}
                className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="google"
                  className="w-5 h-5"
                />
                Continue with Google
              </button>

              {/* Github Signin */}
              <button
                type="button"
                onClick={handleGithubSignin}
                className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <img
                  src="https://img.icons8.com/fluency/48/github.png"
                  alt="google"
                  className="w-5 h-5"
                />
                Continue with Github
              </button>

              <p className="text-center text-sm text-white/80 mt-3">
                Don’t have an account?{" "}
                <Link
                  to="/signup"
                  className="text-pink-300 hover:text-white underline"
                >
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Signup;
