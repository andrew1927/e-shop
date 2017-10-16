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
	arr.forEach(function(item,index){
		addRow(item,index);
	})
}	

function addRow(obj,index){
	var elTr = createInfoInner(obj,index);
	elTbody.appendChild(elTr);
}

function createInfoInner(obj,index){
	var elTr = document.createElement("tr");

	elTr.innerHTML = "<td>"+obj.name+"</td><td>"+obj.shortDescription+"</td><td>"+obj.price+"</td><td><button class='edit'>EDIT</button></td><td><button class='delete'>DELETE</button></td>";

	var elBtnDelete = elTr.querySelector(".delete"),
		elBtnEdit = elTr.querySelector(".edit");

	elBtnDelete.addEventListener("click", function(){
		elTbody.removeChild(elTr);
		products.splice(index,1);
	});

	elBtnEdit.addEventListener("click", function(){
		showPopup();
		elName.value = obj.name;
		elDescription.value = obj.description;
		elSdescription.value = obj.shortDescription;
		elPrice.value = obj.price;

	elBtnSave.addEventListener("click", function(){
		alert("hi");
	});

	})
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

