// Function to adjust the masonry layout
function adjustMasonryLayout() {
    const gallery = document.querySelector('.video-gallery'); // Select the gallery container
    const items = document.querySelectorAll('.video-item'); // Select all gallery items

    // Loop through each item in the gallery
    items.forEach(item => {
        const video = item.querySelector('video'); // Get the video inside the item
        if (video) {
            const rowHeight = parseInt(getComputedStyle(gallery).getPropertyValue('grid-auto-rows')); // Get grid row height
            const rowGap = parseInt(getComputedStyle(gallery).getPropertyValue('gap')); // Get grid gap
            const itemHeight = video.offsetHeight; // Get the actual height of the video element

            // Calculate how many rows the item should span
            const rowSpan = Math.ceil((itemHeight + rowGap) / (rowHeight + rowGap));
            item.style.gridRowEnd = `span ${rowSpan}`; // Set the grid-row-end property
        }
    });
}

// Run the function on page load
window.addEventListener('load', adjustMasonryLayout);

// Recalculate on window resize for responsiveness
window.addEventListener('resize', adjustMasonryLayout);
