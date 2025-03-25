import { Eventing } from "./Models/Eventing";
import { Sync } from "./Models/Sync";
import { Attributes } from "./Models/Attributes";
import { AxiosResponse } from "axios";
export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}
const rootUrl = "http://localhost:3000/users";
export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  public attributes: Attributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }
  // not a call but a reference to the function
  // uer.on() the parentheses are the inner function invoke
  get on() {
    return this.events.on;
  }
  get trigger() {
    return this.events.trigger;
  }
  get get() {
    return this.attributes.get;
  }

  set(update: UserProps): void {
    this.attributes.set(update);
    this.events.trigger("change");
  }

  fetch(): void {
    const id = this.attributes.get("id") as number;
    if (id) {
      this.sync.fetch(id).then((res: AxiosResponse): void => {
        this.set(res.data);
      });
    } else {
      throw new Error("Cannot fetch without an id");
    }
  }

  save(): void {
    this.sync.save(this.attributes.getAll()).then((res:AxiosResponse)=>{
      this.trigger('save')
    });
  }
}
