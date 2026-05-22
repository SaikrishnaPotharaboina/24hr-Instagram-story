import React, { useRef, useState } from "react";
import "../App.css"
import { StoryView } from "./StoryView";

export function AddStory() {
    const [stories, setStories] = useState([]);
    const fileRef = useRef(null);

    const handleClick = () => {
        fileRef.current.click();
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setStories((prev) => [...prev, imageUrl])
        }
    };

    return (
        <div className="flex items-center gap-4 p-4 overflow-x-auto">

            <div className="flex flex-col items-center">

                <input
                    type="file"
                    ref={fileRef}
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                />

                <button
                    onClick={handleClick}
                    className="relative w-[78px] h-[78px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2.5px]"
                >
                    <div className="w-full h-full rounded-full bg-white p-[2px]">
                        <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-white text-lg leading-none">
                            +
                        </div>
                    </div>
                </button>
                <p className="text-[13px] mt-1 text-gray-700">
                    Add Story
                </p>
            </div>
            {/* {stories.map((story, index) => (
                <div key={index} className="w-full h-full rounded-full bg-white p-[2px] flex items-center">
                    <div className="w-[78px] h-[78px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2.5px] flex item-center" >
                        <img src={story} alt="story" className="w-full h-full rounded-full object-cover border-2 border-white" />
                    </div>
                </div>
            ))} */}

            <StoryView stories={stories} />
        </div>
    );
};
export default AddStory;