const next = document.querySelector(".next");
const prev = document.querySelector(".previous");
let imageArray = [
    './0.png',
    './1.jpg',
    './3.jpg',
    './4.jpg'
      ]
const numImg = imageArray.length;
let imageContainer = document.getElementById("imgContainer");
let imageBox = document.getElementById("imgContainer");

let currImg = 1;
// const dropItems = document.getElementById('drop-items')

let timeoutID;
new Sortable(imageContainer, {
    animation: 350,
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag"
});


   for (let i = 0; i< imageArray.length; i++){
    let img =  document.createElement('img')
    img.src = imageArray[i];
    img.class = "imageBox"
    imageContainer.appendChild(img)
   }
 
 
 
next.addEventListener("click", () => {
  currImg++;
  clearTimeout(timeoutID);
  updateImage();
});

prev.addEventListener("click", () => {
  currImg--;
  clearTimeout(timeoutID);

  updateImage();
});


function updateImage() {
  if (currImg > numImg) {
    currImg = 1;
  } else if (currImg < 1) {
    currImg = numImg;
  }
  imageContainer.style.transform = `translateX(-${(currImg - 1) * 800}px)`;

  timeoutID = setTimeout(() => {
    currImg++;
    updateImage();
  }, 2000);
}

updateImage();