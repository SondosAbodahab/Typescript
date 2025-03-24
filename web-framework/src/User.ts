import axios, { AxiosResponse } from "axios";
export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}
type Callback = () => void;
export class User {
  events: { [ket: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(userProps: Partial<UserProps>): void {
    Object.assign(this.data, userProps);
  }
  // Eventing
  // adding the ability to specify the event name and the
  // call back needed functions on the created event
  on(eventName: string, callback: Callback) {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }
  // triggering the required event
  trigger(eventName: string): void {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) {
      return;
    }
    handlers.forEach((callback) => {
      callback();
    });
  }

  fetch(): void {
    axios
      .get(`http://localhost:3000/users/${this.get("id")}`)
      .then((res: AxiosResponse) => {
        this.set(res.data);
      });
  }
  save(): void {
    const id = this.get("id");

    if (id) {
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      axios.post("http://localhost:3000/users", this.data);
    }
  }
}
