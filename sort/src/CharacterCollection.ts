import { Sortable } from "./Sorter";

export class CharacterCollection implements Sortable {
    constructor(public data:string){}
    get length():number{
        return this.data.length
    }
    compare(leftIndex:number, rightIndex:number):boolean{
        return this.data[leftIndex].toLocaleLowerCase() > this.data[rightIndex].toLocaleLowerCase()
    }
    swap(leftIndex:number, rightIndex:number):void{
        const charactersArr = this.data.split('')
        let temp = charactersArr[rightIndex]
        charactersArr[rightIndex] = charactersArr[leftIndex]
        charactersArr[leftIndex] = temp
        this.data = charactersArr.join('')
    }
}