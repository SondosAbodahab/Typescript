import { Sorter } from './Sorter';
import { NumbersCollection} from './NumbersCollection';
import { CharacterCollection } from './CharacterCollection';
import { LinkedList } from './LinkedList';

// const numbersCollection = new NumbersCollection([-2, 5, 10, -3, 19,0])
// const sorter = new Sorter(numbersCollection);
// sorter.bubbleSort()

// console.log(numbersCollection);

// const characterCollection = new CharacterCollection('Soala')
// const StringSorter = new Sorter(characterCollection);
// StringSorter.bubbleSort()

// console.log(characterCollection);

const linkedList = new LinkedList()
linkedList.add(500);
linkedList.add(-10)
linkedList.add(-3)
linkedList.add(4)

const sorter = new Sorter(linkedList)
sorter.bubbleSort()
linkedList.print()