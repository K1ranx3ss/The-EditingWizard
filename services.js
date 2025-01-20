document.addEventListener("DOMContentLoaded", () => {
    const videoItems = document.querySelectorAll(".video-item");

    videoItems.forEach((item) => {
        const beforeVideo = item.querySelector(".before-video");
        const afterVideo = item.querySelector(".after-video");

        // Autoplay "before" video by default
        beforeVideo.play();
        beforeVideo.muted = true;

        // Play "after" video on hover
        item.addEventListener("mouseenter", () => {
            afterVideo.play();
        });

        // Pause "after" video on mouse leave and reset it
        item.addEventListener("mouseleave", () => {
            afterVideo.pause();
            afterVideo.currentTime = 0; // Reset to the beginning
        });
    });
});
