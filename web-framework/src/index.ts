import { User } from "./User";


const user = new User({ name: "ahmed", age: 30 });



user.on('change' , ()=>{
    console.log('ana changed')
})
user.on('lol' , ()=>{ console.log('ana changed')
})

console.log(user);
