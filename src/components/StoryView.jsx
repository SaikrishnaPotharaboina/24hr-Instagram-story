import { useState } from "react";

export const StoryView = ({ stories }) => {
    return (
        <>
            {stories.map((story, index) => (
                <div key={index} className="w-full h-full rounded-full bg-white p-[2px] flex items-center">
                    <div className="w-[78px] h-[78px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2.5px] flex item-center" >
                        <img src={story} alt={`story-${index}`} className="w-full h-full rounded-full object-cover border-2 border-white" />
                    </div>
                </div>
            ))}
        </>
    )
}

