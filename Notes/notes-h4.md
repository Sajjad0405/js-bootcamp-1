# Chapter 4: Data structures: Objects and Arrays

## Arrays
Een `array` gebruik je om een lijst van verschillende data in te stoppen (bijv. verschillende strings of numbers). Je definiëert een array als volgt:

```javascript
// Mutable array:
let mutableListOfNumbers = [2, 3, 5, 10, 11];

// Immutable array:
const immutableListOfNumbers = [4, 2, 55, 89, 1];
```

### Accessing properties
Je haalt data uit een array door de naam van de array op te volgen met `[x]`:

```javascript
const firstItem = array[0];
```

### Adding data or removing data from an array
Je kan ook items aan een array toevoegen of items verwijderen uit een array:

```javascript
// Items toevoegen:
let firstArray = [1, 2, 3];
console.log(firstArray);
// > [1, 2, 3]

// .push laat je items toevoegen
firstArray.push(4);
firstArray.push(5);

console.log(firstArray);
// > [1, 2, 3, 4, 5];

// Items verwijderen

// .pop verwijdert het laatste item uit een array en returnt die
console.log(firstArray.pop());
// > 5
```

## Objects
In objecten kan je ook data opslaan, echter, hier heeft de data altijd een key/value pair:

```javascript
let person = {
    // Key = name, value = "Kris" etc.
    name: "Kris";
    age: 22;
    hobbies: [
        "Writing Code",
        "Playing tennis",
        "Watching sports",
    ]
}
```

### Getting data out of objects
Normaliter haal je data uit objecten doormiddel van dot notation:

```javascript
let personsName = person.name;
console.log(personsName);
// > "Kris"
```

### Object destructuring
Echter, je kan ook data uit objecten halen door gebruik te maken van destructuring:

```javascript
let {age} = person;
console.log(age);
// > 22
```