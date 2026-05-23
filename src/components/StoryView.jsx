import { useState } from "react";

export const StoryView = ({ stories }) => {

    const [selectedStory, setSelectedStory] = useState(null);

    return (
        <div className="flex items-center gap-4 flex-nowrap">
            {stories.map((story, index) => (
                <div key={index} className="flex flex-col items-center flex-shrink-0" onClick={() => setSelectedStory(story)}>
                    <div className="w-[78px] h-[78px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2.5px] flex items-center justify-center">
                        <img
                            src={story}
                            alt={`story-${index}`}
                            className="w-full h-full rounded-full object-cover border-2 border-white"
                        />
                    </div>
                </div>
            ))}

            {selectedStory && (
                <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">

                    {/* Close Button */}
                    <button
                        onClick={() => setSelectedStory(null)}
                        className="absolute top-5 right-5 text-white text-3xl"
                    >
                        ✕
                    </button>

                    {/* Story Image */}
                    <img
                        src={selectedStory}
                        alt="story-view"
                        className="max-h-[90vh] max-w-[90vw] rounded-xl"
                    />
                </div>
            )}
        </div >
    );
};