
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

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(userProps: Partial<UserProps>): void {
    Object.assign(this.data, userProps);
  }
  

  
}
