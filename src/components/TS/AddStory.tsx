import React, { useEffect, useRef, useState } from "react";
import "./AddStory.css";
import { StoryView } from "./StoryView"

export type Story = {
    image: string;
    createdAt: string;
};

export function AddStory() {
    const fileRef = useRef<HTMLInputElement | null>(null);

    const [stories, setStories] = useState<Story[]>(() => {
        const savedStories = localStorage.getItem("stories");
        return savedStories ? JSON.parse(savedStories) : [];
    });

    useEffect(() => {
        try {
            localStorage.setItem("stories", JSON.stringify(stories));
        } catch (error) {
            console.error("Storage full:", error);
            alert("Too many or too large stories. Please delete some old stories.");
        }
    }, [stories]);
    const handleClick = () => {
        fileRef.current?.click();
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                const newStory: Story = {
                    image: reader.result as string,
                    createdAt: new Date().toISOString(),
                };

                setStories((prev) => [...prev, newStory]);
            };

            reader.readAsDataURL(file);
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