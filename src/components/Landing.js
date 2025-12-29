import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {

    const navigate = useNavigate();


    return (
        <div className="w-[375px] mx-auto min-h-screen bg-gray-100 flex flex-col justify-between rounded-lg border">


            <div className="h-[150px]"></div>



            <div className="p-6 pb-10">
                <h1 className="text-2xl font-bold mb-2">Welcome to PopX</h1>
                <p className="text-gray-500 text-sm mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

                <button
                    onClick={() => navigate("/signup")}
                    className="bg-purple-600 text-white w-full py-3 rounded-lg font-semibold">
                    Create Account
                </button>

                <button
                    onClick={() => navigate("/login")}
                    className="bg-purple-100 text-purple-600 w-full py-3 rounded-lg mt-3 font-semibold"
                >
                    Already Registered? Login
                </button>
            </div>
        </div>
    );
};

export default Landing;
