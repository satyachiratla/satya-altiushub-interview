/* eslint-disable no-undef */
import { useState } from "react";

export default function ImageUpload() {
  const [image, setImage] = useState();

  // Upload it to the backend API and backend uploads it to the AWS S3 bucket and retrieves the image url
  // So API returns a response with image URL after upload finishes.
  // We can use that URL to display the image by using img tag
  const handleFileChange = async (label, file) => {
    if (file !== null) {
      const formData = new FormData();
      formData.append("keys", JSON.stringify([label]));
      formData.append("files", file);

      try {
        const fileResponse = await uploadFiles(formData);
        console.log("formData--->", fileResponse);
        setImage(label, fileResponse?.data?.url);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    } else {
      console.warn("No file selected");
    }
  };

  return (
    <div className="max-w-[500px] border border-blue-400 rounded-md mx-auto flex flex-col gap-4 p-6">
      <h2 className="text-center text-xl font-semibold">Image Upload</h2>
      <form>
        <p>
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            onChange={(file) => handleFileChange("image", file)}
          />
        </p>
      </form>
      {image && (
        <div>
          <img src={image} alt="image" className="w-28 h-28" />
        </div>
      )}
    </div>
  );
}
