import { useState } from "react";

export default function AuthForm() {
  const [authData, setAuthData] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = authData;

  const changeAuthDataHandler = (event) => {
    const { name, value } = event.target;

    setAuthData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const submitAuthHandler = async (event) => {
    event.preventDefault();

    // Validation
    if (
      !email.includes("@") ||
      password.trim().length <= 8 ||
      username.trim().length === 0
    ) {
      alert("Please enter valid details!");
      return;
    }

    const userData = {
      // DUMMY Token
      token: "akdfladf3e23423kmaldfladf_2o342",
      email,
      username,
    };

    // Storing in LocalStorage
    console.log("authData--->", authData);
    localStorage.setItem("userdata", JSON.stringify(userData));

    // Sumbit to API
    try {
      const response = await fetch("https://api.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error authenticating", error);
    }
  };

  return (
    <form
      onSubmit={submitAuthHandler}
      className="max-w-[500px] border border-blue-400 rounded-md mx-auto flex flex-col gap-4 p-6"
    >
      <h2 className="text-center text-xl font-semibold">Authenticate</h2>
      <p className="flex flex-col gap-1">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="border border-gray-300 py-2 px-1 rounded-md"
          placeholder="Enter Email"
          value={authData.email}
          onChange={changeAuthDataHandler}
        />
      </p>
      <p className="flex flex-col gap-1">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          className="border border-gray-300 py-2 px-1 rounded-md"
          placeholder="Enter Password"
          value={authData.password}
          onChange={changeAuthDataHandler}
        />
      </p>
      <p className="flex flex-col gap-1">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          required
          className="border border-gray-300 py-2 px-1 rounded-md"
          placeholder="Enter Username"
          value={authData.username}
          onChange={changeAuthDataHandler}
        />
      </p>
      <p>
        <button
          type="submit"
          className="w-full py-2 px-1 bg-blue-300 rounded-md"
        >
          Login
        </button>
      </p>
    </form>
  );
}
