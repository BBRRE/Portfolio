function createNoise() {
    const canvas = document.getElementById('noise');
    const ctx = canvas.getContext('2d');
    const width = window.innerWidth;
    const height = window.innerHeight;
  
    canvas.width = width;
    canvas.height = height;
  
    const imageData = ctx.createImageData(width, height);
    const data = imageData.data;
  
    // Fill the image data with random grayscale values to create noise
    for (let i = 0; i < data.length; i += 4) {
      data[i] = Math.random() * 256; // Red channel
      data[i + 1] = Math.random() * 256; // Green channel
      data[i + 2] = Math.random() * 256; // Blue channel
      data[i + 3] = 50; // Alpha channel
    }
  
    // Draw the noise pattern on the canvas
    ctx.putImageData(imageData, 0, 0);
  
    // Animate the noise pattern by updating it at regular intervals
    setInterval(() => {

      for (let i = 0; i < data.length; i += 4) {
        data[i] = Math.random() * 120; // Red channel
        data[i + 1] = Math.random() * 120; // Green channel
        data[i + 2] = Math.random() * 120; // Blue channel
      }
      ctx.putImageData(imageData, 0, 0);
    }, 100); // Adjust the interval (in milliseconds) for the animation speed
  }
  
  // Call the function when the window has loaded
  window.addEventListener('load', createNoise);


  window.onload = function() {

    const title = document.getElementById('title')
    const titleContent = '[Bilaal Bare]'

    function toggleBlink() {
        if (title.innerText.endsWith('|')) {
            title.innerText = title.innerText.slice(0, -1); // Remove the '|'
        } else {
            title.innerText += '|'; // Add the '|'
        }
        setTimeout(toggleBlink, 500); // Toggle again after 500ms
    }
    
    // Display titleContent with delays
    for (let i = 0; i < titleContent.length; i++) {
        setTimeout((index) => {
            title.innerText = title.innerText.slice(0, -1);
            title.innerText += titleContent[index] + '|';
        }, i * 100, i);
    }
    
    // Start the blinking after titleContent is displayed
    setTimeout(toggleBlink, titleContent.length * 100);

    const aboutTitle = document.getElementsByClassName('aboutTitle')[0]; 
    const projectsTitle = document.getElementsByClassName('projectsTitle')[0]; 
    const about = document.getElementsByClassName('about')[0]; 
    const projects = document.getElementsByClassName('projects')[0]; 

    aboutTitle.addEventListener('click', function() {
        console.log("About Title clicked");
        about.style.display = 'block';
        projects.style.display = 'none';
        aboutTitle.style.backgroundColor = '#3a5239';
        projectsTitle.style.backgroundColor = ''; 
    });
    
    projectsTitle.addEventListener('click', function() {
        console.log("Projects Title clicked");
        projects.style.display = 'block';
        about.style.display = 'none';
        projectsTitle.style.backgroundColor = '#3a5239';
        aboutTitle.style.backgroundColor = ''; 
    });
};



