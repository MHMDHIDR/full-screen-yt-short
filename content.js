// content.js
chrome.runtime.onMessage.addListener(function (request) {
  if (request.action === 'fullscreen') {
    fullscreen()
  }
})

function fullscreen() {
  // Check if it's a YouTube shorts video page
  if (window.location.href.includes('youtube.com/shorts')) {
    // Extract the video ID from the URL
    const urlParts = window.location.href.split('/')
    const videoId = urlParts[urlParts.indexOf('shorts') + 1]

    // Redirect to the watch page with the extracted video ID
    window.location.href = `https://www.youtube.com/watch?v=${videoId}`
  }
}
