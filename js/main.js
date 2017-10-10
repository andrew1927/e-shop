var elTbody = document.getElementsByTagName("tbody")[0],
	elPageAddNewProduct = document.getElementsByClassName("popup")[0],
	elBtnAddProduct = document.getElementsByTagName("button")[0],
	elBtnSave = document.getElementsByClassName("save")[0];
	elBtnCancel = document.getElementsByClassName("cancel")[0];

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

	elTr.innerHTML = "<td>"+obj.name+"</td><td>"+obj.description+"</td><td>"+obj.price+"</td>";
	return elTr;
}



function addProduct(){

	var elName = document.getElementsByClassName("name")[0],
		elDescription = document.getElementsByClassName("description")[0],
		elSdescription = document.getElementsByClassName("sdescription")[0],
		elPrice = document.getElementsByClassName("price")[0];
	
	var newProduct = {};

	newProduct.name = elName.value;
	newProduct.description = elDescription.value;
	newProduct.shortDescription = elSdescription.value;
	newProduct.price = elPrice.value;

	products.push(newProduct);	
	console.log(products);

	elBtnAddProduct.addEventListener("click", showPopup);

	function showPopup(){
		elPageAddNewProduct.classList.add("show");
	}
	function closePopup(){
		elPageAddNewProduct.classList.remove("show");
		elName.value = "";
		elDescription.value = "";
		elSdescription.value = "";
		elPrice.value = "";
	}

	elBtnSave.addEventListener("click", addProduct);
	elBtnSave.addEventListener("click", addRow(newProduct));
	elBtnSave.addEventListener("click", closePopup);
	elBtnCancel.addEventListener("click",closePopup);
}
addProduct();
