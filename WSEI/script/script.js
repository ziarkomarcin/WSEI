
function addElem()
{
	const task = prompt("Wprowadź swoje zadanie!");
	if (!task) display=none;
	let newElement = document.createElement('div');
	document.getElementById("newThing").appendChild(newElement);
	newElement.id = "newX";
	newElement.innerHTML = task + '<div id="edit" onclick="editEl()">Edytuj</div><div id="delete" onclick="delElem()">Usuń</div>';
}

function delElem()
{
	let delElement = newThing.removeChild(newX);	
}

function editEl()
{
	const edited = prompt("Edytuj swoje zadanie...");
	if (!edited) display=none;
	var next = document.getElementById("newX").innerHTML; 
  	var init = next.replace(next, edited);
  	document.getElementById("newX").innerHTML = init+'<div id="edit" onclick="editEl()">Edytuj</div><div id="delete" onclick="delElem()">Usuń</div>';


}