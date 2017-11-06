var elTbody = document.getElementsByTagName("tbody")[0],
	elPageAddNewProduct = document.getElementsByClassName("popup")[0],
	elBtnAddProduct = document.getElementsByTagName("button")[0],
	elBtnSaveProduct = document.getElementsByClassName("save-product")[0];
	elBtnCancel = document.getElementsByClassName("cancel")[0],
	elBtnSaveEditProduct = document.getElementsByClassName("save-edit-product")[0],
	elAddImg = document.getElementById("getimage"); 


var elName = document.getElementsByClassName("name")[0],
	elDescription = document.getElementsByClassName("description")[0],
	elSdescription = document.getElementsByClassName("sdescription")[0],
	elPrice = document.getElementsByClassName("price")[0];

var currentIndex;	

var products = JSON.parse(localStorage.getItem("key"));

if(!products){
	products = data;
	var serialProducts = JSON.stringify(products);
	localStorage.setItem("key", serialProducts);
};

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

	elTr.innerHTML = "<td><img src="+obj.src+" class='product-img'></td><td>"+obj.name+"</td><td>"+obj.shortDescription+"</td><td>"+obj.description+"</td><td>"+obj.price+"</td><td><button class='edit'>EDIT</button></td><td><button class='delete'>DELETE</button></td>";

	var elBtnDelete = elTr.querySelector(".delete"),
		elBtnEdit = elTr.querySelector(".edit");

	elBtnDelete.addEventListener("click", function(){
		elTbody.removeChild(elTr);
		
		products.splice(index,1);

		rewriteLocalStorage();
	});

	elBtnEdit.addEventListener("click", function(){

		currentIndex = index;

		elName.value = obj.name;
		elDescription.value = obj.description;
		elSdescription.value = obj.shortDescription;
		elPrice.value = obj.price;

		showPopup();

		elBtnSaveProduct.classList.add("hide");
		elBtnSaveEditProduct.classList.remove("hide");
	});

	return elTr;
} 

elBtnSaveProduct.addEventListener("click", saveProduct);
elBtnAddProduct.addEventListener("click", function(){
	showPopup();
	elBtnSaveProduct.classList.remove("hide");
	elBtnSaveEditProduct.classList.add("hide");	
});
elBtnCancel.addEventListener("click", closePopup);
elBtnSaveEditProduct.addEventListener("click", saveEditProduct);

elAddImg.addEventListener("change", loadImage);

function Product(src, name,description,shortDescription,price){
	this.src = src;
	this.name = name;
	this.description = description;
	this.shortDescription = shortDescription;
	this.price = price;
}

function saveProduct(event){
	event.preventDefault();
	var newProduct = new Product(elName.value,elDescription.value,elSdescription.value,elPrice.value);
	products.push(newProduct);

	rewriteLocalStorage();

	addRow(newProduct);
	closePopup();
}

function saveEditProduct(event){
	event.preventDefault();
	products[currentIndex] = {
		name: elName.value,
		description: elDescription.value,
		shortDescription: elSdescription.value,
		price: elPrice.value
	}

	products.splice(currentIndex, products.currentIndex);

	while(elTbody.firstChild){
		elTbody.removeChild(elTbody.firstChild);
	}

	rewriteLocalStorage();
	init(products);

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

function rewriteLocalStorage(){
	var serialProducts = JSON.stringify(products);
	localStorage.setItem("key", serialProducts);
}

function loadImage(event){
	var fileName = event.target.files[0];
	var fr = new FileReader();
	fr.onload = event.target.result;
	fr.readAsDataURL(filename);  
}

// event - Интерфейс Event представляет собой любое событие, которое происходит в DOM, Event содержит общие свойства и методы для всех событий.
// event.target - Ссылка на целевой объект, на котором произошло событие.
// change - Событие change происходит по окончании изменения значения элемента формы, когда это изменение зафиксировано.



