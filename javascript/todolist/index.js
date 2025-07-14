// membuat array kosong untuk menyimpan todolist 
let todolist = []

// counter untuk id 
let id= 1; 

// membuat constructor (optional) untuk to do 
function Todo(id, text, completed){
    this.id = id;
    this.text = text;
    this.completed = completed;

}

function addTodo(text){
    const todo = new Todo(id, text, false);
    todolist.push(todo);
    id ++;
    renderTodos(); 

}

function renderTodos(){

    const ul = document.getElementById("todoList"); 
    ul.style.listStyle = "none"; 
    ul.style.padding = "0";
    ul.innerHTML = ""; 
    
    todolist.forEach(todo => {
        const li = document.createElement("li");
    const checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.checked = todo.completed;

        //buat checkbox diklik 
        checkbox.addEventListener("change", () => {
            todo.completed = checkbox.checked; 
            if (todo.completed){
                span.style.textDecoration = "line-through";

            } else {
                span.style.textDecoration = "none"
            }
        }); 
        //buat teks 
        const span = document.createElement("span"); 
       span.textContent = ` ${todo.id}. ${todo.text}`;

       // memasukkan checkbox & teks ke li 
        li.appendChild(checkbox)
        li.appendChild(span)
        ul.appendChild(li); 

    } )

}

// event listener untuk tombol 
document.getElementById("addBtn").addEventListener("click", () => {
    const input = document.getElementById("Todo");
    const text = input.value.trim();
    if (text != ""){
        addTodo(text);
        input.value = ""; 
    }
    })






    

