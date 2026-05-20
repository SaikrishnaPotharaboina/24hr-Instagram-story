import React, { useRef, useState } from "react";
import "../App.css"

const AddStory = () => {
    const [image, setImage] = useState(null);
    const fileRef = useRef(null);

    const handleClick = () => {
        fileRef.current.click();
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            setImage(URL.createObjectURL(file));
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

                        {image ? (
                            <img
                                src={image}
                                alt="story"
                                className="w-full h-full rounded-full object-cover"
                            />
                        ) : (
                            <img
                            // src="/instagram-stories.png"
                            // alt="story"
                            // className="w-full h-full rounded-full object-cover"
                            />
                        )}

                        <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-white text-lg leading-none">
                            +
                        </div>
                    </div>
                </button>

                <p className="text-[13px] mt-1 text-gray-700">
                    Add Story
                </p>
            </div>

        </div>
    );
};

export default AddStory;