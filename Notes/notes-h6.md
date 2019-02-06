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

```

## Prototypes


## Classes


## Class notation


## Overriding derived properties


## Maps


## Polymorphism


## Symbols


## The iterator interface


## Getters, setters and statics


## Inheretance


## The `instanceof` operator
