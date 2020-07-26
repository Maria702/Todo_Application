var list = document.getElementById("list");

function addTodo(){
    var todoItem = document.getElementById("todo_item");
  
        // create li
    var li = document.createElement('li')
    var liText = document.createTextNode(todo_item.value)
    if ( todo_item.value == ""){
        alert("Enter a value");
        return false;
    }
    

    li.appendChild(liText)

    list.appendChild(li)

    todo_item.value = ""

    //delbtn
    
    var delBtn = document.createElement("i")
    delBtn.setAttribute("class","fa fa-2x fa-trash")
    var delText = document.createTextNode("")
    delBtn.setAttribute("onclick", "deleteItem(this)")
    delBtn.appendChild(delText)
    
    console.log()                      
    li.appendChild(delBtn)

    //create btn
    var editBtn = document.createElement("i")
    editBtn.setAttribute("class","fa fa-2x fa-pencil")
    var editText = document.createTextNode("")
    editBtn.setAttribute("onclick", "editItem(this)")
    editBtn.appendChild(editText)

   

    li.appendChild(editBtn)
    
    console.log(li)
}

function deleteItem(e){

    e.parentNode.remove()

}

function delAll(){
    list.innerHTML = ""
}

function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var val = prompt ("Enter Edit Value",val)

    e.parentNode.firstChild.nodeValue = val

}

