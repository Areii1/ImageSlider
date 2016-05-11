var currentImageIndex = 1;
var imageSlides = document.getElementsByTagName('li');
var imageCount = imageSlides.length;

nextImage(0);

document.getElementById("nextButton").addEventListener("click", function(){
    if (currentImageIndex == imageCount) {
		nextImage(0);
		currentImageIndex = 1;
	}
	else {
		nextImage(currentImageIndex);
   		currentImageIndex++;	
	}
});

function nextImage(currentImageIndex) {
	for (var i = 1; i <= imageCount; i++) {
		if (i == currentImageIndex + 1) {
			document.getElementById('img' + i).style.display = 'block';
		}
		else {
			document.getElementById('img' + i).style.display = 'none';
		}
	}
}
