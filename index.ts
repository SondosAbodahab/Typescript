import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/todos/1'
interface Todo {
     id: number,
     title:string,
     completed: boolean
}

axios.get(URL).then( res =>{
     const todo:Todo = res.data;
     logTodo(todo)
})

 const logTodo = (todo:Todo)=>{
     console.log(`
          The TODO with ID ${todo.id},
          has a title of ${todo.title},
          Is it finished? ${todo.completed}
          `)
 }