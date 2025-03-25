export class Attributes<T>{
    constructor(private data: T) {}
    
// constrain that ensure K is of type T keys
  get = <K extends keyof T>(key: string): T[K] =>{
    return this.data[key];
  }

  set(update: Partial<T>): void {
    Object.assign(this.data as object, update);
  }
  
  getAll():T{
    return this.data
  }
}