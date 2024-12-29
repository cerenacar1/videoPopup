const watchButton = document.querySelector('.watchButton');
const videoContainer = document.querySelector('.videoContainer');
const icon = document.querySelector('.icon');
const video = document.querySelector('video')

watchButton.addEventListener('click', () => {
    videoContainer.classList.remove('active')
})

icon.addEventListener('click', () => {
    videoContainer.classList.add('active')
    video.pause();
    video.currentTime = 0;
})

