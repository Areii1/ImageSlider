var currentImageIndex = 0;
var imageSlides = document.getElementsByTagName('li');
var imageCount = imageSlides.length;

renderImage(currentImageIndex);

document.getElementById('nextButton').addEventListener('click', function() {
    if (currentImageIndex == imageCount - 1) {
		currentImageIndex = 0;
	}
	else {
   		currentImageIndex++;	
	}
	renderImage(currentImageIndex);
});

function renderImage(currentImageIndex) {
	for (var i = 0; i < imageCount; i++) {
		if (i == currentImageIndex) {
			document.getElementById('img' + i).style.display = 'block';
		}
		else {
			document.getElementById('img' + i).style.display = 'none';
		}
	}
}
