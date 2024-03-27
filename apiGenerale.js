//video-logo:
// const video = document.getElementById("myVideo");

// video.addEventListener('ended', function() {
//     video.currentTime = 0;
//     video.play();
// });
var modal = document.getElementById("popupModal");

// Get the button that opens the modal
var btn = document.getElementById("okButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-button")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "none"; // Or any other logic you want
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// Optional: Close the modal if the user clicks anywhere outside of the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// To initially display the modal, you can use this line or trigger it based on another event
window.onload = function() {
    modal.style.display = "block";
}


const darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.getElementById('main-content').classList.toggle("dark-mode");

});
