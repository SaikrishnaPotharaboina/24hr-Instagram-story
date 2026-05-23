import React, { useRef, useState } from "react";
import "../App.css";
import { StoryView } from "./StoryView";

export function AddStory() {
    const [stories, setStories] = useState([]);
    const fileRef = useRef(null);

    const handleClick = () => {
        fileRef.current?.click();
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setStories((prev) => [...prev, imageUrl]);
        }
    };

    return (
        <div className="flex items-center gap-4 p-4 overflow-x-auto">
            <div className="flex flex-col items-center flex-shrink-0">
                <input
                    type="file"
                    ref={fileRef}
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                />

                <button
                    onClick={handleClick}
                    className="relative w-[78px] h-[78px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2.5px] flex items-center justify-center"
                >
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        <span className="text-3xl text-blue-500 leading-none">+</span>
                    </div>
                </button>

                <p className="text-[13px] mt-1 text-gray-700">Add Story</p>
            </div>

            <StoryView stories={stories} />
        </div>
    );
}

export default AddStory;