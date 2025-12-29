import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function CreateAccount() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "", phone: "", email: "", password: "", company: "", agency: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


  const handleSubmit = () => {
    let newErrors = {};

    if (!form.fullName) newErrors.fullName = "Please enter full name";
    if (!form.phone) newErrors.phone = "Please enter phone number";
    if (!form.email) newErrors.email = "Please enter email";
    if (!form.password) {
      newErrors.password = "Please enter password";
    } else if (!passwordRegex.test(form.password)) {
      newErrors.password = "Password must be 8 charcters long, 1 uppercase, 1 lowercase, 1 number, 1 special character";
    }
    if (!form.agency) newErrors.agency = "Please select an option";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }


    localStorage.setItem("popxUser", JSON.stringify(form));

    toast.success("Account Created Successfully", { autoClose: 1500 });


    setTimeout(() => navigate("/login"), 1500);
  };

  return (
    <div className="w-[375px] mx-auto min-h-screen bg-gray-100 p-6">

      <h2 className="text-3xl font-bold mb-3 leading-[1.2]">
        Create your <br /> PopX account
      </h2>

      <form className="space-y-6 mt-6">

        <div className="relative">
          <input
            type="text"
            name="fullName"
            placeholder=" "
            value={form.fullName}
            onChange={handleChange}
            className={`block w-full p-3 text-lg text-black bg-transparent border border-gray-400 rounded-lg focus:outline-none focus:border-purple-600 peer ${form.password && !passwordRegex.test(form.password) ? 'border-red-500' : 'border-gray-400'}`}
          />
          <label className="absolute top-3 left-3 px-1 text-gray-500 bg-gray-100 duration-300 transform
                      -translate-y-6 scale-75 origin-[0] peer-placeholder-shown:scale-100
                      peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-medium">
            Full Name *
          </label>
          {errors.fullName && <p className="text-red-600 text-sm">{errors.fullName}</p>}
        </div>

        <div className="relative">
          <input
            type="tel"
            name="phone"
            placeholder=" "
            value={form.phone}
            onChange={handleChange}
            className="block w-full p-3 text-lg text-black bg-transparent border border-gray-400 rounded-lg focus:outline-none focus:border-purple-600 peer"
          />
          <label className="absolute top-3 left-3 px-1 text-gray-500 bg-gray-100 duration-300 transform
                      -translate-y-6 scale-75 origin-[0] peer-placeholder-shown:scale-100
                      peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-medium">
            Phone Number *
          </label>
          {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
        </div>

        <div className="relative">
          <input
            type="email"
            name="email"
            placeholder=" "
            value={form.email}
            onChange={handleChange}
            className="block w-full p-3 text-lg text-black bg-transparent border border-gray-400 rounded-lg focus:outline-none focus:border-purple-600 peer"
          />
          <label className="absolute top-3 left-3 px-1 text-gray-500 bg-gray-100 duration-300 transform
                      -translate-y-6 scale-75 origin-[0] peer-placeholder-shown:scale-100
                      peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-medium">
            Email Address *
          </label>
          {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
        </div>

        <div className="relative">
          <input
            type="password"
            name="password"
            placeholder=" "
            value={form.password}
            onChange={handleChange}
            className="block w-full p-3 text-lg text-black bg-transparent border border-gray-400 rounded-lg focus:outline-none focus:border-purple-600 peer"
          />
          <label className="absolute top-3 left-3 px-1 text-gray-500 bg-gray-100 duration-300 transform
                      -translate-y-6 scale-75 origin-[0] peer-placeholder-shown:scale-100
                      peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-medium">
            Password *
          </label>
          {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}
        </div>


        <div className="relative">
          <input
            type="text"
            name="company"
            placeholder=" "
            value={form.company}
            onChange={handleChange}
            className="block w-full p-3 text-lg text-black bg-transparent border border-gray-400 rounded-lg focus:outline-none focus:border-purple-600 peer"
          />
          <label className="absolute top-3 left-3 px-1 text-gray-500 bg-gray-100 duration-300 transform
                      -translate-y-6 scale-75 origin-[0] peer-placeholder-shown:scale-100
                      peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-medium">
            Company Name
          </label>
        </div>


        <div>
          <label>Are you an Agency? *</label>
          <div className="flex gap-6 mt-2">
            <label><input type="radio" name="agency" value="yes" onChange={handleChange} /> Yes</label>
            <label><input type="radio" name="agency" value="no" onChange={handleChange} /> No</label>
          </div>
          {errors.agency && <p className="text-red-600 text-sm">{errors.agency}</p>}
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="w-full bg-purple-600 text-white p-3 rounded-lg font-bold"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default CreateAccount;
