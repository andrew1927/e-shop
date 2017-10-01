var elTbody = document.getElementsByTagName("tbody")[0];

init(products);
function init(arr){
	arr.forEach(function(item){
		addRow(item);
	})
}	

function addRow(obj){
	var elTr = createInfoInner(obj);
	elTbody.appendChild(elTr);
}

function createInfoInner(obj){
	var elTr = document.createElement("tr");

	elTr.innerHTML = `<td>${obj.name}</td><td>${obj.description}</td><td>${obj.price}</td>`;
	return elTr;
}

