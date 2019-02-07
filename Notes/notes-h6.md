#Chapter 6: The secret life of objects
In dit hoofdstuk komen een paar principes van OOP (Object Oriënted Programming) naar voren.

## Encapsulation
De cornerstone van OOP is om programma's (scripts) onder te verdelen in kleinere stukken die elk verantwoordelijk zijn voor het bijhouden van hun eigen state (denk bijv. aan React). Op die manier kan (een deel van) de kennis over hoe een deel van het programma werkt op de lokale plek blijven binnen dat deel. Zo hoeft iemand die aan een ander deel werkt niet te onthouden of zelfs überhaupt weten van de rest van het programma. Elke keer wanneer die lokale details veranderen hoeft alleen de code rondom die details geüpdatet te worden.

Verschillende stukjes van een object georiënteerd programma interacteren met elkaar via *interfaces*: kleine sets van functies of bindings die nuttige functionaliteiten bieden op een meer abstract level, waarbij de exacte implementatie variabel blijft.

Die stukjes worden vormgegeven als objecten, hun *interface* bestaat uit specifieke *methods* (de functies binnen een object) en *properties* (key / value pairs). Properties die onderdeel zijn van de interface noem je *public*. Andere properties, welke je niet (direct) zou moeten veranderen in any way noem je *private*.

De beschikbare interface wordt normaliter getoond in de documentatie of comments. Een andere manier om public en private properties uit elkaar te houden is om een underscore (_) voor de naam van een private property neer te zetten. 
## Methods
Een method is niets meer dan een property van een object die de waarde van `function` houdt. Als een function wordt gecreëerd als een method en aangeroepen wordt als `object.method()` is de waarde van `this` gekoppeld aan het object waarin de method gecreëerd is:

```javascript
let rabbit = {};

rabbit.speak = function(line) {
    console.log(`The ${this.type} rabbit says: ${line}`);
}

let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};

whiteRabbit.speak("Oh my lord, the air is very thin today");
// > "The white rabbit says: Oh my lord, the air is very thin today"
```

Omdat `this` zich soms apart kan gedragen (past zich aan naar de context waarin deze aangeroepen wordt) kan je ook een functie z'n `call` method gebruiken waarbij je de waarde voor `this` als eerste parameter invult en de parameters voor de functie als tweede, derde etc.:

```javascript
speak.call(hungryRabbit, "Burp");
// > "The hungry rabbit says: Burp"
```
## Prototypes
Naast dat elk object z'n eigen set van properties heeft, hebben de meeste objecten ook een `prototype`. Een *prototype* is een ander object dat gebruikt word als fallback voor properties. Wanneer je een property van een object aanvraagt die hij niet heeft, wordt er in z'n prototype gekeken naar de property, daarna naar de prototype z'n prototype etc.

Om een object te maken met een specifiek prototype kan je `Object.create` gebruiken:

```javascript
let protoRabbit = {
    speak(line) {
        console.log(`The ${this.type} rabbit says ${line}`)
    }
};

let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEEE");
// > "The killer rabbit says SKREEEE"
```

## Classes
Je kan een class zien als een wat verkapte versie van een OOP concept '*classes*'. Een class bepaald de vorm van een bepaald soort object (welke methods en properties het heeft). Zo'n object dat daaruit voort komt noem je een *instance* van de class. Prototypes zijn handig voor het definiëren van properties die elke instance heeft, zoals de method `speak()` in het eerdere voorbeeld. Properties die per instance verschillend zijn dien je in het de instance zelf te binden.

### A constructor function
Om dus een instance te maken van een bepaalde class moet je een object maken dat verschilt van het prototype maar je moet er ook voor zorgen dat dat object de properties heeft die de instances van die specifieke class zouden moeten hebben. Dit is wanneer een constructor functie handig is:

```javascript
function makeRabbit(type) {
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
}
```

JavaScript heeft een manier om zo'n functie eenvoudiger te definiëren, namelijk door het keyword `new` voor de function call te gebruiken, dit zorgt ervoor dat de juiste instance gemaakt wordt, gebonden wordt aan this in de functie en returned wordt aan 't einde van de functie:

```javascript
// In de naam van een prototype is een eerste letter altijd een hoofdletter 
function Rabbit(type) {
    this.type = type;
}

Rabbit.prototype.speak = function(line) {
    console.log(`The ${this.type} rabbit says ${line}`);
}

// Een nieuwe instance van Rabbit wordt gemaakt:
let otherRabbit = new Rabbit("weird");
```

## Class notation
JavaScript classes zijn dus constructor functies met een prototype property... Tegenwoordig is er echter een eenvoudigere manier om zo'n constructor functie te schrijven, namelijk met de keyword `class`:

```javascript
class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says ${line}`);
    }
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");
```
Een `class` declaratie maakt het momenteel alleen mogelijk om methods te definiëren binnen het prototype!

## Overriding derived properties
Als je een property toevoegt aan een object, of het nou al in het prototype stond of niet, dan nog wordt de property toegevoegd aan het object *zelf*. Als er al een property was met dezelfde naam binnen het prototype heeft dat geen invloed op het object aangezien die nu achter de property van het object zelf schuilt.

```javascript
Rabbit.prototype.teeth = "small";

console.log(killerRabbit.teeth);
// > small

killerRabbit.teeth = "long, sharp, and bloody";

console.log(killerRabbit.teeth);
// > long, sharp, and bloody

console.log(blackRabbit.teeth);
// > small

console.log(Rabbit.prototype.teeth);
// > small
```

Het voordeel van het overschrijven van bestaande properties is dat je een specifiekere instances hun eigen properties kan geven zonder daarbij het origineel (de class en generieke instances) aanpast.

## Maps
Een `map` is een data structure die values (keys) met andere values associeert. Zo kan je bijvoorbeeld namen willen 'mappen' aan een leeftijd. Je zou hiervoor een plain object kunnen gebruiken (zie onderstaand). Echter, dat is erg gevaarlijk omdat objecten voortkomen uit `Object.prototype`. Hierdoor is het in het voorbeeld zo dat de leeftijd van `toString` bekend is terwijl we deze niet gedefinieerd hebben.

```javascript
// Het mappen van leeftijden aan een naam (als object)
let ages = {
    Boris: 39,
    Liang: 22,
    Júlia: 62
}

console.log(`Júlia is ${ages["Júlia"]}`);
// > Júlia is 62

console.log("Is Jack's age known?", "Jack" in ages);
// > false (Jack staat niet in het object ages)

console.log("Is toString's age known?", "toString" in ages);
// > true (maar toString staat niet in het object ages... WTF)
```
Gelukkig heeft JavaScript een veilige manier om zoiets te bereiken (bijv het mappen van leeftijden aan specifieke namen):

```javascript
let ages = new Map();
// Zet de nieuwe waarden van ages erin als volgt:
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Júlia", 62);

// Haal de waarde van Júlia uit het ages object
console.log(`Júlia is ${ages.get("Júlia")}`);
// > 62
```
## Polymorphism
```javascript
Rabbit.prototype.toString = function() { 
    return `a ${this.type} rabbit.`;
}

console.log(String(blackRabbit));
// > "a black rabbit."
```

Bovenstaand is een simpele uitvoering van een krachtig idee. Wanneer een stuk code is geschreven om met objecten te werken die een bepaalde interface hebben (in dit geval een `toString` method) kan elk soort object die toevallig de interface (`toString` method) ondersteunt kan in de code gepleurd worden. De code zal dan alsnog blijven werken. Deze techniek noem je *polymorphism*.

## Symbols
Symbols zijn waardes die gecreëerd zijn met de `Symbol` functie. In tegenstelling tot strings zijn nieuwe symbols altijd uniek, je kan nooit twee dezelfde symbols creëren. Dit maakt het mogelijk om twee keer dezelfde property naam te gebruiken binnen een interface.

```javascript
let sym = Symbol("name");
console.log(sym == Symbol("name"));
// > false

Rabbit.prototype[sym] = 55;
console.log(blackRabbit[sym]);
// > 55
```

## The iterator interface
Het wordt van een object dat je passed aan een `for/of` loop verwacht dat het 'itereerbaar' is (dat je er doorheen kan loopen). Dit betekent dat het over een method genaamd `Symbol.iterator` beschikt. Wanneer `Symbol.iterator` aangeroepen wordt returnt deze een object die de tweede interface aanbiedt: *iterator*. Dat is het ding dat itereert. Het heeft een `next` method die het volgende resultaat toont als er één is, die geeft op zijn beurt een object met een `value` property die de waarde toont als er iets te tonen valt en een `done` property dat true geeft wanneer er nog iets te itereren valt en false als dat niet het geval is.

```javascript
let okIterator = "OK"[Symbol.iterator]();

console.log(okIterator.next());
// > {value: "O", done: false}

console.log(okIterator.next());
// > {value: "K", done: false}

console.log(okIterator.next());
// > {value: undefined, done: true}
```

## Getters, setters and statics
Interfaces bestaan meestal uit methods, echter, het is helemaal prima om properties toe te voegen die geen functie als binding hebben. Het is nieteens nodig voor zo'n object om de betreffende property in de instance op te slaan. Zelfs properties die direct uit een object worden 'opgevraagd' kunnen een method call in zich verbergen. Zulke methods noem je *getter*. Je declareert ze door *get* voor de method name neer te zetten binnen een object expression of class declaration:

```javascript
let varyingSize = {
    get size() {
        return Math.floor(Math.random() * 100);
    }
};

console.log(varyingSize.size);
// > 73
```

Je kan ook, in plaats van waarden opvragen, waarden aanpassen. Dan heet de method een *setter*, deze definieer je door *set* voor de method name neer te zetten:

```javascript
class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }

    get fahrenheit() {
        return this.celsius * 1.8 + 32;
    }

    set fahrenheit(value) {
        // Pas de waarde van celsius binnen de constructor van Temperature aan
        this.celsius = (value - 32) / 1.8;
    }

    static fromFahrenheit(value) {
        return new Temperature((value - 32) / 1.8);
    }
}

let temp = new Temperature(22);
console.log(temp.fahrenheit);
// > 71.6

temp.fahrenheit = 86;
console.log(temp.celsius);
// > 30
```

Soms wil je de mogelijkheid hebben om properties direct aan je constructor functie koppelen in plaats van aan het prototype. Zulke methods hebben geen toegang tot een instance van de class maar kunnen bijvoorbeeld wel extra manieren mogelijk maken om een instance te creëren. Datsoort methods creëer je door er `static` voor te zetten (zoals fromFahrenheit in het bovenstaande voorbeeld). 

Dit maakt het nu mogelijk om `Temperature.fromFahrenheit(100)` te schrijven om zo een temperatuur te creëren vanaf graden Fahrenheit.

## Inheretance
JavaScript maakt het mogelijk om een nieuwe class te maken die heel erg veel op de oude class lijkt maar met nieuwe bindings voor sommige properties of zelfs met compleet nieuwe properties. In OOP noem je dat *inheretance*. Als je een kind (*subclass*) nodig hebt dat veel op de vader lijkt (*superclass*) dan kan je het beste de vader 'verlengen' door *extends* te gebruiken om zo het kopiëren van code te voorkomen:

```javascript
// Super class
class Vader {
    constructor(leeftijd, lengte) {
        this.leeftijd = leeftijd;
        this.lengte = lengte;
        this.name = "Papa";
    }

    get leeftijd() {
        return this.leeftijd;
    }

    set nieuweLeeftijd(nieuweLeeftijd) {
        this.leeftijd = leeftijd;
    }
}

// Sub class
class Kind extends Vader {
    constructor(isPuber) {
        // Hierdoor wordt de constructor van de parent aangeroepen
        super(leeftijd, lengte, isPuber);
        this.isPuber = true;
        this.name = "Kind";
    }
}

// ???????? Hoe werkt dit nou precies?
```

## The `instanceof` operator
Het kan handig zijn om te weten of een bepaald object afkomstig is vanuit een bepaalde class. Hier heeft JavaScript de `instanceof` operator voor:

```javascript
console.log(new Kind(12, 1.75) instanceof Kind);
// > true

console.log(new Kind(12, 1.75) instanceof Vader);
// > true

console.log(new Vader(44, 1.90) instanceof Kind);
// > false

console.log([1, 2] instanceof Array);
// > true
```