type Callback = () => void;

export class Eventing{
    events: { [ket: string]: Callback[] } = {};
    // Eventing
  // adding the ability to specify the event name and the
  // call back needed functions on the created event
  on = (eventName: string, callback: Callback) =>{
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }
  // triggering the required event
  trigger = (eventName: string): void =>{
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) {
      return;
    }
    handlers.forEach((callback) => {
      callback();
    });
  }
}