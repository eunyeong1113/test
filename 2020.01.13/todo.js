const todoForm=document.querySelector(".js-todoform"),
toDoInput =todoForm.querySelector("input"),
toDoList=document.querySelector(".js-toDoList");

const TODOS_LS="toDos";
/*
function filterFn(toDo)
{
    return toDo.id===1;
}*/

let toDos=[];

function deleteToDo(event)
{
    const btn = event.target;
    const li=btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos=toDos.filter(function(toDo){
        return toDo.id!==pardeInt(li.id);
    });
    toDos=cleanToDos;
    saveToDos();
    //console.log(cleanToDos);
    //console.log(event.target);   
}

function saveToDos()
{
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

function paintToDo(text)
{
    const li=document.createElement("li");
    const delBtn=document.createElement("button");
    const span=document.createElement("span");
    const newId=toDos.length+1;

    delBtn.innerText="X"
    delBtn.addEventListener("click",deleteToDo);
    span.innerText=text; 
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id=newId;
    toDoList.appendChild(li);  

    const toDoObj={
        text:text,
        id: newId
    };

    toDos.push(toDoObj);  
    saveToDos();
    //console.log(text);
}

function handleSubmit(event)
{
    event.preventDefault();
    const currentValue=toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}

function loadToDos()
{
    const loadedToDos=localStorage.getItem(TODOS_LS);
    if(loadedToDos!==null){
        const parsedToDos=JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
            //console.log(toDo.text);
        });
        //console.log(parsedToDos);
        //console.log(loadedToDos);
    }
    else{

    }
}

function init()
{
    loadToDos();
    todoForm.addEventListener("submit",handleSubmit);
}
init();