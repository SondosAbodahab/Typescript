
import { Eventing } from "./Models/Eventing";
import { Sync } from "./Models/Sync";
export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}
const  rootUrl =  'http://localhost:3000/users'
export class User {
  public events:Eventing = new Eventing()
  public Sync:Sync<UserProps> = new Sync<UserProps>(rootUrl)

  

  
}
