let index = 0;
const image = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg"];
let time = 3000;
function changeImage() {
  document.slide.src = `./img/${image[index]}`;
  if(index < image.length -1){
    index++;
  }else{
    index = 0;
  }
  setTimeout("changeImage()", time);
}
window.onload = changeImage;
