
  let imageIndex = 0;
  let clickedOnce = false;
  const images = ["present_closed.png", "ill/open.gif", "ill/candy.jpeg"];
  const presentImg = document.querySelector('.present-img');
  const clickSound = document.getElementById("clickSound");
  
  presentImg.addEventListener('click', toggleImage);
  likeButton.addEventListener('click', likeImage);

  function toggleImage() {
    // Toggle between different images based on click state
    if (!clickedOnce) {
      // If not clicked yet, display the second image
      imageIndex = 1;
      clickedOnce = true;
    } else {
      // If clicked once, display the third image
      imageIndex = 2;
    }
    
    presentImg.src = images[imageIndex];

    // Play click sound
    clickSound.play();
  }
  function likeImage() {
    alert("Jij en 7 andere uit klas Git hebben deze post geliked!!");
  }