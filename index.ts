/// <reference types="@types/google.maps" />
import { User } from "./src/User";
import { Company } from "./src/Company";
import { CustomMap } from './src/CustomMap';

const user = new User();
console.log(user);

const company = new Company();
console.log(company);


const customMap =new CustomMap("map")
customMap.addMarker(user)
customMap.addMarker(company)
