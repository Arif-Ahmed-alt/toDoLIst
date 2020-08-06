let del=document.querySelectorAll(".fa-remove");
let ul=document.querySelector("ul")
let addTask=document.getElementById("add");
let input=document.getElementById("input");
let clear=document.getElementById("clear");
let todo=document.querySelector(".ToDo")

let is_show=true;

addTask.addEventListener("click",function(){
  if(is_show==false){
        todo.style.display="block";
        ul=document.createElement("ul");
        ul.classList="list-group";
        addToDo(input);
        if(ul.children.length>0){
            clear.style.display="inline-block";
           }
        todo.append(ul);
        is_show=true;    
    }
   addToDo(input);
   if(ul.children.length>0){
    clear.style.display="inline-block";
   }
 
})


clear.addEventListener("click",function(e){

    if(is_show==true){
        todo.style.display="none"
        this.style.display="none"
        ul.remove();
        is_show=false;
    }
   
   
})

del.forEach(function(delItem){
    Click(delItem)
})

function Click(input){
    input.addEventListener("click",function(e){
        e.currentTarget.parentElement.parentElement.remove();
        if(ul.children.length<=0){
            clear.style.display="none"
        }
    })
}
function addToDo(input){
    if(input.value.length>=1){
        let li=document.createElement("li");
    
        li.appendChild(document.createTextNode(input.value+"  (By User: Task-"+(ul.children.length+1)+")"));
        li.classList="list-group-item"
    let span=document.createElement("span");
    let Delete=document.createElement("li");
    Delete.classList="fa fa-remove"
    Click(Delete) 
    span.appendChild(Delete)
    li.appendChild(span);
    input.value=""
    ul.appendChild(li);
    }
}