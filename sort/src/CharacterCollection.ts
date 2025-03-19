import { Sortable, Sorter } from "./Sorter";

export class CharacterCollection extends Sorter {
    constructor(public data:string){
        super()
    }
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