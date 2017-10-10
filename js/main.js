var elTbody = document.getElementsByTagName("tbody")[0],
	elPageAddNewProduct = document.getElementsByClassName("popup")[0],
	elBtnAddProduct = document.getElementsByTagName("button")[0],
	elBtnSave = document.getElementsByClassName("save")[0];
	elBtnCancel = document.getElementsByClassName("cancel")[0];

var elName = document.getElementsByClassName("name")[0],
	elDescription = document.getElementsByClassName("description")[0],
	elSdescription = document.getElementsByClassName("sdescription")[0],
	elPrice = document.getElementsByClassName("price")[0];

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

	elTr.innerHTML = "<td>"+obj.name+"</td><td>"+obj.shortDescription+"</td><td>"+obj.price+"</td>";
	return elTr;
}

elBtnSave.addEventListener("click", addProduct);
elBtnAddProduct.addEventListener("click", showPopup);
elBtnCancel.addEventListener("click",closePopup);

function Product(name,description,shortDescription,price){
	this.name = name;
	this.description = description;
	this.shortDescription = shortDescription;
	this.price = price;
}

function addProduct(event){
	event.preventDefault();
	var newProduct = new Product(elName.value,elDescription.value,elSdescription.value,elPrice.value);
	products.push(newProduct);	
	
	addRow(newProduct);
	closePopup();
}

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