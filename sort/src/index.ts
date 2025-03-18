import { Sorter } from "./Sorter";
import { NumbersCollection} from './NumbersCollection';

const numbersCollection = new NumbersCollection([-2, 5, 10, -3, 19,0])
const sorter = new Sorter(numbersCollection);
sorter.bubbleSort()

console.log(numbersCollection);
