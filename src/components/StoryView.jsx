// import { useEffect, useState } from "react";
// import { timeAgo } from "./Date";

// export const StoryView = ({ stories }) => {
//     const [selectedStory, setSelectedStory] = useState(null);
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [progress, setProgress] = useState(0);

//     const openStory = (index) => {
//         setCurrentIndex(index);
//         setSelectedStory(stories[index]);
//         setProgress(0);
//     };

//     useEffect(() => {
//         if (!selectedStory) return;

//         const timer = setInterval(() => {
//             setProgress((prev) => {
//                 if (prev >= 100) {
//                     if (currentIndex < stories.length - 1) {
//                         const nextIndex = currentIndex + 1;
//                         setCurrentIndex(nextIndex);
//                         setSelectedStory(stories[nextIndex]);
//                         return 0;
//                     } else {
//                         setSelectedStory(null);
//                         return 100;
//                     }
//                 }
//                 return prev + 1;
//             });
//         }, 40);

//         return () => clearInterval(timer);
//     }, [selectedStory, currentIndex, stories]);

//     const handlePrev = () => {
//         if (currentIndex > 0) {
//             const prevIndex = currentIndex - 1;
//             setCurrentIndex(prevIndex);
//             setSelectedStory(stories[prevIndex]);
//             setProgress(0);
//         }
//     };

//     const handleNext = () => {
//         if (currentIndex < stories.length - 1) {
//             const nextIndex = currentIndex + 1;
//             setCurrentIndex(nextIndex);
//             setSelectedStory(stories[nextIndex]);
//             setProgress(0);
//         } else {
//             setSelectedStory(null);
//         }
//     };

//     return (
//         <div className="flex items-center gap-4 flex-nowrap">
//             {stories.map((story, index) => (
//                 <div
//                     key={index}
//                     className="flex flex-col items-center flex-shrink-0 cursor-pointer"
//                     onClick={() => openStory(index)}
//                 >
//                     <div className="w-[78px] h-[78px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2.5px] flex items-center justify-center">
//                         <img
//                             src={story.image}
//                             alt={`story-${index}`}
//                             className="w-full h-full rounded-full object-cover border-2 border-white"
//                         />
//                     </div>
//                     <p>{timeAgo(story.createdAt)}</p>
//                 </div>
//             ))}

//             {selectedStory && (
//                 <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
//                     <div className="relative w-full h-full max-w-md mx-auto bg-black overflow-hidden">
//                         <div className="absolute top-0 left-0 right-0 z-30 px-2 pt-2">
//                             <div className="w-full h-[3px] bg-white/30 rounded-full overflow-hidden">
//                                 <div
//                                     className="h-full bg-white transition-all duration-75"
//                                     style={{ width: `${progress}%` }}
//                                 />
//                             </div>
//                         </div>

//                         <button
//                             onClick={() => setSelectedStory(null)}
//                             className="absolute top-6 right-4 z-30 text-white text-3xl"
//                         >
//                             ×
//                         </button>

//                         <img
//                             src={selectedStory.image}
//                             alt="story-view"
//                             className="w-full h-full object-cover"
//                         />

//                         <div className="absolute inset-0 flex">
//                             <div onClick={handlePrev} className="w-1/2 h-full" />
//                             <div onClick={handleNext} className="w-1/2 h-full" />
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };