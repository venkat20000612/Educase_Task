import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const isValid = email && password;



    const handleLogin = (e) => {
        e.preventDefault();

        const savedUser = JSON.parse(localStorage.getItem("popxUser"));

        if (!savedUser) {
            toast.error("No account found! Please create account first.", { autoClose: 2000 });
            return;
        }

        if (savedUser.email === email && savedUser.password === password) {
            localStorage.setItem("isLoggedIn", "true");
            toast.success("Login Successful", { autoClose: 1500 });
            setTimeout(() => navigate("/profile"), 1500);
        } else {
            toast.error("Incorrect Email or Password", { autoClose: 2000 });
        }
    };



    return (
        <div className="w-[375px] mx-auto min-h-screen bg-gray-100 p-6">

            <h2 className="text-2xl font-bold mb-2">Signin to your PopX account</h2>
            <p className="text-gray-500 text-sm mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>

            <form className="w-full" onSubmit={handleLogin}>


                <div className="relative w-full mb-5">
                    <input
                        type="email"
                        placeholder=" "
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full p-3 text-lg text-black bg-transparent border border-gray-400 rounded-lg focus:outline-none focus:border-purple-600 peer"
                    />
                    <label className="absolute top-3 left-3 px-1 text-gray-500 bg-gray-100 duration-300 transform
                      -translate-y-6 scale-75 origin-[0] peer-placeholder-shown:scale-100
                      peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-medium">
                        Email address
                    </label>
                </div>


                <div className="relative w-full mb-6">
                    <input
                        type="password"
                        placeholder=" "
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="block w-full p-3 text-lg text-black bg-transparent border border-gray-400 rounded-lg focus:outline-none focus:border-purple-600 peer"
                    />
                    <label className="absolute top-3 left-3 px-1 text-gray-500 bg-gray-100 duration-300 transform
                      -translate-y-6 scale-75 origin-[0] peer-placeholder-shown:scale-100
                      peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-medium">
                        Password
                    </label>
                </div>

                <button
                    disabled={!isValid}
                    className={`w-full py-3 rounded-lg font-semibold
            ${isValid ? "bg-purple-600 text-white" : "bg-gray-300 text-white cursor-not-allowed"}`}
                >
                    Login
                </button>

            </form>
        </div>
    );
}

export default Login;
