import {faker} from '@faker-js/faker'

export class User {
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
}