const addTodo = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

// add todos :

const generateTemplate = todo => {
      const html = ` <li class="list-group-item d-flex justify-content-between align-items-center">
                     <span>${todo}</span>
                     <i class="far fa-trash-alt delete"></i>
                     </li>
                    `;
      list.innerHTML += html;              
 

};

addTodo.addEventListener('submit' , e => {
    e.preventDefault();
    const todo = addTodo.add.value.trim(); // trim => hayed espaces mn string 
    
    if (todo.length) {  // check if user tipe something
        generateTemplate(todo);
        addTodo.reset(); // reset the form input 
    }
}); 

// deleting todos : 

list.addEventListener('click' , e => {
    if (e.target.classList.contains('delete')) {
         e.target.parentElement.remove();
    }
});

// searching & filtering todos : 
  
   const filterTodos = word => {
       Array.from(list.children)
            .filter( todo  =>  !todo.textContent.toLowerCase().includes(word))
            .forEach( todo => todo.classList.add('filtered'));

       Array.from(list.children)
            .filter( todo  => todo.textContent.toLowerCase().includes(word))
            .forEach( todo => todo.classList.remove('filtered')); 
        };



 //keyup event : 
 search.addEventListener('keyup' , () => {
     const word = search.value.trim().toLowerCase();
     filterTodos(word);

 } )