const videoElement = document.querySelector("#video");
const button = document.querySelector("#button");

// Prompt user to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onLoadedmetadata = () => {
      videoElement.play();
    };
  } catch (err) {
    console.log("Erorr", err);
  }
}

button.addEventListener("click", async () => {
  // Disable Button
  button.disabled = true;
  // Start Picture in Picture
  await videoElement.requestPictureInPicture();
  // Reset Button
  button.disabled = false;
});

// On load
selectMediaStream();
