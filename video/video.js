let playerLinks = document.querySelectorAll('.video-link')
let playerContainer = document.querySelector('.video-player')
let videoPlayer = document.querySelector('.video-player>video')
let playerCaption = document.querySelector('.video-player-caption')



playerLinks.forEach(element => {
    element.addEventListener('click', e => {
        e.preventDefault()
        playerContainer.style.visibility = 'visible'
        playerCaption.innerHTML = element.querySelector('.video-caption').innerHTML
        videoPlayer.src = element.querySelector('video').src
    })
})

document.querySelector('.video-player').addEventListener('click', e => {
    if (e.target.tagName != 'VIDEO')
        playerContainer.style.visibility = 'hidden'
    videoPlayer.pause()
})
