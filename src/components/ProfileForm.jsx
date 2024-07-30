/* eslint-disable no-unused-vars */
import { useState } from "react";

export default function ProfileForm() {
  const [profileData, setProfileData] = useState({
    name: "",
    bio: "",
  });
  const [image, setImage] = useState();

  const { name, bio } = profileData;

  const changeImageHandler = (event) => {
    console.log(event);
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const changeProfileDataHandler = (event) => {
    const { name, value } = event.target;

    setProfileData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const updateProfileDataHandler = (event) => {
    event.preventDefault();

    if (name?.trim().length === 0 || bio?.trim().length === 0) return;

    console.log("profileData--->", profileData);
  };

  return (
    <div className="max-w-[500px] border border-blue-400 rounded-md mx-auto flex flex-col gap-4 p-6">
      <h2 className="text-center text-xl font-semibold">Profile</h2>
      <form onSubmit={updateProfileDataHandler} className="space-y-4">
        <p className="flex flex-col gap-1">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={changeProfileDataHandler}
            required
            className="border border-gray-300 py-2 px-1 rounded-md"
            placeholder="Enter Name"
          />
        </p>
        <p className="flex flex-col gap-1">
          <label htmlFor="profilepic">Profile Pic</label>
          <input
            type="file"
            id="profilepic"
            required
            onChange={changeImageHandler}
            accept=".jpg, .jpeg, .png"
          />
        </p>
        <p className="flex flex-col gap-1">
          <label htmlFor="bio">Bio</label>
          <textarea
            type="text"
            id="bio"
            name="bio"
            required
            rows={3}
            cols={3}
            value={bio}
            onChange={changeProfileDataHandler}
            className="border border-gray-300 py-2 px-1 rounded-md"
            placeholder="Enter bio"
          />
        </p>
        <button
          type="submit"
          className="w-full py-2 px-1 bg-blue-300 rounded-md"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
}
