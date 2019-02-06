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


## Overriding derived properties


## Maps


## Polymorphism


## Symbols


## The iterator interface


## Getters, setters and statics


## Inheretance


## The `instanceof` operator
