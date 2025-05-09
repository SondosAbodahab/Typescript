import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter{
    constructor(public data:number[]){
        super()
    }
    // getter to treat it as a property not as a function
    // .length  not .length()
    get length():number{
        return this.data.length
    }
    compare(leftIndex:number, rightIndex:number):boolean{
        return this.data[leftIndex] > this.data[rightIndex]
    }
    swap(leftIndex:number, rightIndex:number):void{
        let temp: number = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = temp;
    }
}