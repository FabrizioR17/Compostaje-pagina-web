document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.getElementById("imageContainer");
    const images = [
      "./imagenes/deposito.png",
      "./imagenes/imagen2.png",
    ];
  
    let currentIndex = 0;
  
    function changeImage() {
      const currentImage = imageContainer.querySelector("img");
      const newImage = document.createElement("img");
      newImage.src = images[currentIndex];
      newImage.alt = "tenista";
      newImage.style.opacity = "0";
      imageContainer.appendChild(newImage);
  
      // Aplicar una pequeña pausa antes de aumentar la opacidad
      setTimeout(() => {
        newImage.style.opacity = "1";
      }, 50);
  
      // Esperar un poco antes de remover la imagen anterior
      setTimeout(() => {
        imageContainer.removeChild(currentImage);
      }, 500);
  
      currentIndex = (currentIndex + 1) % images.length;
    }
  
    setInterval(changeImage, 7000);
  
    // Inicializar con la primera imagen
    changeImage();
  });