import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/todos/1'

axios.get(URL).then( res =>{
     const todo = res.data;
     const Id = todo.id;
     const title = todo.title;
     const finished = todo.completed;
     console.log(finished)
})