var currentImageOrderNumber = 1;
var liElementArray = document.getElementById('imgList').getElementsByTagName('li');
var liLength = liElementArray.length;
console.log(liLength);

renderFirstImage();

document.getElementById("nextButton").addEventListener("click", function(){
    if (currentImageOrderNumber == liLength) {
		renderFirstImage();
		currentImageOrderNumber = 1;
	}
	else {
		nextImage(currentImageOrderNumber);
   		currentImageOrderNumber++;	
	}
});

function renderFirstImage() {
	document.getElementById('img1').style.display = 'block';
	for (var i = 2; i <= liLength; i++) {
		document.getElementById('img' + i).style.display = 'none';
	}

}

function nextImage(currentImageOrderNumber) {
	for (var i = 1; i <= liLength; i++) {
		if (i == currentImageOrderNumber + 1) {
			document.getElementById('img' + i).style.display = 'block';
		}
		else {
			document.getElementById('img' + i).style.display = 'none';
		}
	}
}
