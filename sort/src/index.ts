import { Sorter } from "./Sorter";
import { NumbersCollection} from './NumbersCollection';
import { CharacterCollection } from './CharacterCollection';

const numbersCollection = new NumbersCollection([-2, 5, 10, -3, 19,0])
const sorter = new Sorter(numbersCollection);
sorter.bubbleSort()

console.log(numbersCollection);

const characterCollection = new CharacterCollection('Soala')
const StringSorter = new Sorter(characterCollection);
StringSorter.bubbleSort()

console.log(characterCollection);
