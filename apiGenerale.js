//video-logo:
// const video = document.getElementById("myVideo");

// video.addEventListener('ended', function() {
//     video.currentTime = 0;
//     video.play();
// });

const darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.getElementById('main-content').classList.toggle("dark-mode");

});
