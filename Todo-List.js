let todoList = JSON.parse(localStorage.getItem('added'))
|| [{
name:'make dinner',
date: '23-03-2024' 
},{
name:'play game',
date: '23-03-2025' 
}]

addTodo();

function addTodo(){
    let todoListHtml = '';
    for(i=0;i<todoList.length;i++){
      let todo = todoList[i];
      let {name, date} = todo;
      let realDate = date.split('-').reverse().join('.');
      let html = 
      `
      <div class="flex">
      <div class="grid">
      <p class="text">${name}</p>
      <p>${realDate}</p>
      <button class="delete" onclick="
      todoList.splice(${i},1);
      localStorage.setItem('added', JSON.stringify(todoList));
      addTodo();
      ">Delete</button>
      </div>
      </div>
      `;
      todoListHtml += html;
    }
    document.querySelector('.js-todo-list').innerHTML = todoListHtml;
    }

function updateTodo(){
      let inputElement = document.querySelector('.js-input-name');
      let name = inputElement.value;
      let dateElement = document.querySelector('.js-input-date');
      let date = dateElement.value;
      todoList.push({name,date});
      inputElement.value = '';
      dateElement.value = '';
      addTodo();
      localStorage.setItem('added', JSON.stringify(todoList));
}


function toggleMode() {
  const element = document.querySelector('.change'); 
  element.classList.toggle('dark-mode');
  const image = document.querySelector('.sun'); 
  if(element.classList.contains('dark-mode')){
    image.src = 'moon.png';
  } else {
    image.src = 'sun.png'
  }
}
