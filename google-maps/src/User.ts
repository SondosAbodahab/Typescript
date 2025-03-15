import {faker} from '@faker-js/faker'
import { Mappable } from './CustomMap';

export class User implements Mappable {
    name :string
    location:{
        lat : number;
        lng: number;
    }
    constructor(){
        this.name = faker.internet.username()
        this.location = {
            lat: faker.location.latitude(),
            lng: faker.location.latitude()
        }
        console.log(this.name);
    }
    markerContent():string{
        return `User Name: Name ${this.name}`
    }
}