import { User } from "./User";


const user = new User({ name: "ahmed", age: 30 });

user.set({name :'name'})


console.log(user.get("name"));
