export interface UserProps {
  name: string;
  age: number;
}
type Callback = () => void
export class User {

  events:{[ket:string]:Callback[]} = {}

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(userProps:Partial <UserProps>):void{
    Object.assign(this.data, userProps)
  }
  // Eventing
  // adding the ability to specify the event name and the 
  // call back needed functions on the created event
  on(eventName:string, callback:Callback ){
    const handlers = this.events[eventName] || [];
    handlers.push(callback)
    this.events[eventName] = handlers
  }
}
