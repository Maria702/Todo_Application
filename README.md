# Readme.md file for Todo Application
## Index.html 

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
    <title>TODO_APP</title>
</head>

<body>
    <div class="container">
        <h1>Versatile Todo_App</h1>
        <h2>By Maria</h2>
        <br>

        <div>
            <button class="btn" onclick="addTodo()">Add item</button>
            <button class="btn" onclick="delAll()">Clear All</button >
                <BR></BR>
            <input type="text" placeholder=" What do you need to do today?" id="todo_item">
           
            <div>
                <ul id="list">

                </ul>
            </div>
        </div>

    </div>



    <script src="app.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>

</body>

</html>
```


## Style.css

```python
*{
    margin: 0;
    padding: 0;
    
}
body{
    text-align: center;
    background-image: url("img/pic2.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    font-style: italic;
    font-weight: bolder;
    color: rgb(5, 5, 5);
    margin-left: 20px;
    margin-right: 20px;
}
.container{

    max-width: 800px;
    margin: auto;
    padding: 10px;
    align-items: center;

    
}

h1{
    color: rgb(255, 9, 103);
    text-shadow: 2px 2px 5px rgba(255, 0, 170, 0.5);
}
h2{
    color: rgb(192, 10, 168);
    text-shadow: 2px 2px 5px rgba(0, 238, 255, 0.931);;
}
i{
    margin-left: 5px;
    justify-content: center !important;
    color:rgb(255, 9, 103);
    gap: 2px;
   
    
}
input{
    height:40px;
    width: 250px;
    background-color: antiquewhite;
    border-top: 25px;
    border-color: violet;
    border-radius: 25px;
    font-style: italic;
    
}
  
input:hover {
    background-color: rgba(48, 179, 240, 0.63);

}

.btn{
    background-color: rgb(255, 9, 103);
    color: white;
    font-style: italic;
    margin-right: 5px;
    border-radius: 25px;
    box-shadow:  0 4px 8px 0 rgba(204, 239, 248, 0.445), 0 6px 20px 0 rgba(0, 0, 0, 0.19);;

}

.btn:hover {
    background-color: rgba(48, 179, 240, 0.63);
}

.add{
    margin-left: 2px;
}

li{

    margin-left: 50px;
    display: flex;
    text-align: center;
}

ul li {
    justify-content: center;
    cursor: pointer;
    position: relative;
    padding: 12px 8px 12px 40px;
    font-size: 18px;
    transition: 0.2s;
    border-radius: 25px;
 -webkit-user-select: none;
 -moz-user-select: none;
 -ms-user-select: none;
 user-select: none;
}

ul{
    list-style: none; 
}```

## app.js
JavaScript code 

```bash
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
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
