let display = document.querySelector(".display");
let button = document.querySelector(".btn");
let itemlist = document.querySelector(".items_head");

let itemData;
let itemDataArray=[];

// step 2

function setlocalstorage(){
    localStorage.setItem("display", JSON.stringify(itemDataArray));

}
function getlocalstorage(){
    if ( localStorage.getItem("display")){
        itemDataArray = JSON.parse(localStorage.getItem("display"))
        buildui();
    }   
}

function buildui(){
    itemlist.textContent=''
    itemDataArray.forEach((item)=>{
        let li=document.createElement("li");
        let spanele=document.createElement("span");
      li.appendChild(spanele);
      spanele.innerText=item;
      // li.textContent= itemData
    
      itemlist.appendChild(li)
      display.value=""
      display.focus();
    
      // trash button 
      let trashbtn=document.createElement("i");
      trashbtn.classList.add("fa","fa-trash");
      li.appendChild(trashbtn); 
    
      // create edit btn 
      let editbtn=document.createElement("i");
      editbtn.classList.add("fa","fa-edit");
      li.appendChild(editbtn); 

    })
}

function addItem(){
    itemData=display.value; 

    itemDataArray.push(itemData)
    console.log(itemDataArray);
    // set localStorage 
    setlocalstorage();
    // get from local storage 
    getlocalstorage();
    
    
}

function deleteitem(event) {
    if (event.target.classList.contains("fa-trash")) {
      let item = event.target.parentElement;
      let itemText = item.querySelector("span").innerText;
      item.remove();
  
      // Remove the item from itemDataArray
      itemDataArray = itemDataArray.filter((item) => item !== itemText);
  
      // Update local storage
      setlocalstorage();
    }
  }
  
function edititem(event){
    if (event.target.classList[1]==="fa-edit"){
        let editvalue=prompt('edit item')
        let item= event.target.parentElement;

        let spanele=item.querySelector("span")
        spanele.innerText=editvalue;
        
    }}
// step 1

button.addEventListener("click",addItem);

itemlist.addEventListener("click",deleteitem)

itemlist.addEventListener("click",edititem);

  
getlocalstorage();


