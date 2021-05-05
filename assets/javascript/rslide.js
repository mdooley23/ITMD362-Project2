var images = [
	"assets/img/mr1.jpg",
	"assets/img/chris.PNG",
	"assets/img/rickey1.jpg",
	"assets/img/mr2.jpg",
	"assets/img/chris2.jpg",
	"assets/img/rickey2.jpg",
	"assets/img/mr3.jpg",
	"assets/img/chris3.PNG",
	"assets/img/rickey3.jpg",],
	curIndex = 0;
    imgDuration = 4000; // Images Array

// Change Image
function changeImg() {
  document.getElementById('slider').className += "fadeOut";
    setTimeout(function() {
        document.getElementById('slider').src = images[curIndex];
        document.getElementById('slider').className = "";
    },1000);
    curIndex++;
    if (curIndex == images.length) { curIndex = 0; }
    setTimeout(changeImg, imgDuration);
}

window.onload = changeImg;
