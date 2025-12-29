import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCamera } from "react-icons/fa";

function Profile() {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [photo, setPhoto] = useState("");

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("popxUser"));
        const savedPhoto = localStorage.getItem("profilePhoto");

        if (!data) {
            navigate("/login"); // If not registered, redirect
            return;
        }

        setUser(data);
        if (savedPhoto) setPhoto(savedPhoto);
    }, [navigate]);

    const handlePhotoUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setPhoto(reader.result);
            localStorage.setItem("profilePhoto", reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };



    return (
        <div className="w-[375px] mx-auto min-h-screen bg-gray-100 border">


            <div className="bg-white border-b px-4 py-4 font-bold text-lg">
                Account Settings
            </div>


            <div className="bg-gray-100 px-4 py-6 flex items-center gap-4">


                <div className="relative">
                    {photo ? (
                        <img
                            src={photo}
                            alt="profile"
                            className="w-16 h-16 rounded-full object-cover border"
                        />
                    ) : (
                        <div className="w-16 h-16 rounded-full border bg-purple-600 text-white flex items-center justify-center text-xl font-bold">
                            {user.email ? user.email.charAt(0).toUpperCase() : "U"}
                        </div>
                    )}


                    <label className="absolute bottom-0 right-0 bg-purple-600 text-white p-[6px] rounded-full cursor-pointer text-xs flex items-center justify-center">
                        <FaCamera className="text-white text-[12px]" />
                        <input
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={handlePhotoUpload}
                        />
                    </label>
                </div>

                <div>
                    <h3 className="text-lg font-semibold">{user.fullName}</h3>
                    <p className="text-sm text-gray-600">{user.email}</p>
                </div>
            </div>


            <div className="px-4 py-4 text-gray-700 text-sm leading-6 bg-gray-100 border-b-2 border-dotted border-gray-400">
                Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
                Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquam Erat.
            </div>



        </div>
    );
}

export default Profile;
