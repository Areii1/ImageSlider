var imageAddresses = ['images/turku.jpg', 'images/helsinki.jpg', 'images/kerava.jpg'];

var currentImageOrderNumber = 0;
document.getElementById("nextButton").addEventListener("click", function(){
    nextImage(currentImageOrderNumber);
    currentImageOrderNumber++;
});

function nextImage(currentImageOrderNumber) {
	var img = document.getElementById('img1');
	img.src = imageAddresses[currentImageOrderNumber + 1];
	console.log(currentImageOrderNumber);
}
