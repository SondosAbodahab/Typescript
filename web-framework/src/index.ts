import { User } from "./User";

const user = new User({ name: "ahmed", age: 30 });

user.on("change", () => {
  console.log("ana changed");
});
user.on("change", () => {
  console.log("ana changed #2");
});
user.on('lol', ()=>{
    console.log('ana lol');
})
user.trigger('change')
console.log(user);
