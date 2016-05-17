var currentImageIndex = 0;
var imageCount = document.getElementsByTagName('li').length;

fadeIn(currentImageIndex);

document.getElementById('next-button').addEventListener('click', function() {
    if (isCurrentImageLast()) {
		renderImage(0);
		currentImageIndex = 0;
	}
	else {
   		renderImage(currentImageIndex + 1);
   		currentImageIndex++;
	}
});

function isCurrentImageLast() {
	return currentImageIndex == imageCount - 1;
}

document.getElementById('previous-button').addEventListener('click', function() {
    if (isCurrentImageFirst()) {
		renderImage(imageCount - 1);
		currentImageIndex = imageCount - 1;
	}
	else {
   		renderImage(currentImageIndex - 1);
   		currentImageIndex--;
	}
});

function isCurrentImageFirst() {
	return currentImageIndex == 0;
}

function renderImage(nextImage) {
	fadeOut(
		currentImageIndex, 
		function() {
			fadeIn(nextImage);
		}
	);
}

function fadeIn(imageIndex) {
	var element = document.getElementById('img' + imageIndex);
    var opacity = 0.1;
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (opacity >= 1){
            clearInterval(timer);
        }
        element.style.opacity = opacity;
        opacity += opacity * 0.1;
    }, 20);
}

function fadeOut(imageIndex, callback) {
	var element = document.getElementById('img' + imageIndex);
    var opacity = 1;
    var timer = setInterval(function () {
        if (opacity <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
            callback();
        }
        element.style.opacity = opacity;
        opacity -= opacity * 0.1;
    }, 20);
}