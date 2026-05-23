// export const timeAgo = (date) => {
//     const seconds = Math.floor((new Date() - new Date(date)) / 1000);

//     const minutes = Math.floor(seconds / 60);
//     const hours = Math.floor(seconds / 3600);

//     if (minutes < 1) {
//         return "Just now";
//     }

//     if (minutes < 60) {
//         return `${minutes} min ago`;
//     }

//     if (hours < 24) {
//         return `${hours} hr ago`;
//     }

//     return new Date(date).toLocaleDateString();
// };