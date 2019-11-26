// fired when move mouse over div box
onMouseOver = function (oEvent) {
	console.log(oEvent)

	// get h1 node
	var oText = document.getElementById("header1")
	// update h1 text
	oText.innerHTML = "You have moved the mouse over the box"
}


// fired when move mouse out of div box
onMouseOut = function (oEvent) {
	console.log(oEvent)

	var oText = document.getElementById("header1")
	oText.innerHTML = "You have moved the mouse out of the box"
}


// fired when click on the button
onButtonClick = function (oEvent) {
	console.log(oEvent)

	var oText = document.getElementById("header1")
	var sText = "You have clicked on the button"

	oText.innerHTML = sText
}