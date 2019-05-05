---
path: "/articles/js-oop-explained"
title: "OOP - explained"
date: 2014-03-14T12:33:46+10:00
imageURL: "/images/javascript-illustration.png"
published: "Yes"
---

Object Oriented Programming, OOP, refers to using self-contained pieces of code to develop applications. We call these 
self-contained pieces of code objects, better known as Classes in most OOP programming languages and Functions in 
JavaScript. We use objects as building blocks for our applications. Building applications with objects allows us to 
adopt some valuable techniques, namely, Inheritance, objects can inherit features from other objects, Polymorphism, 
objects can share the same interface—how they are accessed and used—while their underlying implementation of the 
interface may differ, and Encapsulation, each object is responsible for specific tasks.

![Material design type system](../images/javascript-illustration.png)

In this article, we are concerned with only Inheritance and Encapsulation since only these two concepts apply to OOP 
in JavaScript, particularly because, in JavaScript, objects can encapsulate functionality and inherit methods and 
properties from other objects. Accordingly, in the rest of the article, I discuss everything you need to know about 
using objects in JavaScript in an object oriented manner, with inheritance and encapsulation, to easily reuse code and 
abstract functionality into specialized objects.

We will focus on only the best two techniques1 for implementing OOP in JavaScript. Indeed, many techniques exist for 
implementing OOP in JavaScript, but rather than evaluate each, I choose to focus on the two best techniques: the best 
technique for creating objects with specialized functionality, aka Encapsulation, and the best technique for reusing 
code, aka Inheritance. By “best” I mean the most apt, the most efficient, the most robust.

##Encapsulation and Inheritance Overview
 Objects can be thought of as the main actors in an application, or simply the main “things” or building blocks that do 
all the work. As you know by now, objects are everywhere in JavaScript since every component in JavaScript is an Object, 
including Functions, Strings, and Numbers. We normally use object literals or constructor functions to create objects.

Encapsulation refers to enclosing all the functionality of an object within that object so that the object’s internal 
workings, its methods and properties, are hidden from the rest of the application. This allows us to abstract or 
localize specific set of functionality on objects.

Inheritance refers to an object being able to inherit methods and properties from a parent object, a Class in other OOP 
languages, or a Function in JavaScript.

Both of these concepts, encapsulation and inheritance, are important because they allow us to build applications with 
reusable code, scalable architecture, and abstracted functionality. Maintainable, scalable, efficient.

 An instance is an implementation of a Function. In simple terms, it is a copy, or “child” of a Function or object. 
For example:

```javascript
// Tree is a constructor function because 
// we will use new keyword to invoke it.
function Tree (typeOfTree) {} 

// bananaTree is an instance of Tree.
var bananaTree = new Tree ("banana")
```

In the preceding example, bananaTree is an object that was created from the Tree constructor function. We say that the 
bananaTree object is an instance of the Tree object. Tree is both an object and a function, because functions are 
objects in JavaScript. bananaTree can have its own methods and properties and inherit methods and properties from the 
Tree object, as we will discuss in detail when we study inheritance below.

##OOP in JavaScript
The two important principles with OOP in JavaScript are Object Creation patterns, Encapsulation, and Code Reuse 
patterns, Inheritance. When building applications, you create many objects, and there exist many ways for creating 
these objects: you can use the ubiquitous object literal pattern, for example:

```javascript
var myObj = {name: "Henrik", profession: "Developer"}
```

You can use the prototype pattern, adding each method and property directly on the object’s prototype. For example: 

```javascript
function Employee() {}

Employee.prototype.firstName = "Abhijit"
Employee.prototype.lastName = "Patel"
Employee.prototype.startDate = new Date()
Employee.prototype.signedNDA = true
Employee.prototype.fullName = function () {
  console.log (this.firstName + " " + this.lastName); 
}

var abhijit = new Employee () 
console.log(abhijit.fullName()) // Abhijit Patel
console.log(abhijit.signedNDA) // true
```

You can also use the constructor pattern, a constructor function, Classes in other languages, but Functions in JavaScript. 
For example: 


```javascript
// Employee() is the constructor function because 
// we use the new keyword below to invoke it.
function Employee(name, profession) {
  this.name = name
  this.profession = profession
} 

// henrik is a new object we create from 
// the Employee() constructor function.
var henrik = new Employee(“Henrik”, “Developer”) 

console.log(henrik.name)  //Henrik
console.log(henrik.profession)  // Developer
```

In the latter example, we use a custom constructor function to create an object. This is how we create objects when we 
want to add methods and properties on our objects, and when we want to encapsulate functionality on our objects. 
JavaScript developers have invented many patterns (or ways) for creating objects with constructor functions. And when we
say Object Creation Patterns, we are concerned principally with the many ways of creating objects from constructor 
functions, as in the preceding example.

In addition to the patterns for creating objects, you want to reuse code efficiently. When you create your objects, you 
will likely want some of them to inherit (have similar functionality) methods and properties from a parent object, yet 
they should also have their own methods and properties. Code reuse patterns facilitate ways in which we can implement 
inheritance.

These two universal principles—creating objects (especially from constructor Functions) and allowing objects to inherit 
properties and methods—are the main focus of this article and, indeed, the main concepts with OOP in JavaScript. We 
first discuss the object creation pattern.

##Encapsulation in JavaScript
As discussed above, one of the main principles with OOP is encapsulation: put all the inner workings of an object inside 
that object. To implement encapsulation in JavaScript, we have to define the core methods and properties on that object. 
To do this, we will use the best pattern for encapsulation in JavaScript: the Combination Constructor/Prototype Pattern. 
This name is a mouthful, but you needn’t memorize it, since we are only concerned with its implementation. Before we 
implement it, let’s quickly learn a bit more about the practicality of encapsulation.

Why Encapsulation?
When you simply want to create an object just to store some data, and it is the only object of its kind, you can use an 
object literal and create your object. This is quite common and you will use this simple pattern often.

However, whenever you want to create objects with similar functionality, to use the same methods and properties, you 
encapsulate the main functionality in a Function and you use that Function’s constructor to create the objects. This is 
the essence of encapsulation, and it is this need for encapsulation that we are concerned with and why we are using the 
Combination Constructor/Prototype Pattern.

To make practical use of OOP in JavaScript, we will build an object-oriented quiz application that uses all the 
principles and techniques we learn in this article. First up, our quiz application will have users (a Users Function) 
who take the quiz. There will be some common properties for every user who takes the quiz: each user will have a name, 
a score, an email, and the quiz scores (all the scores). These are the properties of the User object. In addition, each 
User object should be able to show the name and score, save scores, and change the email. These are the methods of 
the object.

Because we want ALL the user objects to have these same properties and methods, we cannot use the object literal way of 
creating objects. We have to use a constructor Function to encapsulate these properties and methods.

Since we know all users will have the same set of properties, it makes sense to create a Function,  Class in OOP 
languages, that encapsulates these properties and methods. Thus, we will use the Combination Constructor/Prototype 
Pattern for this.

###Implementation of Combination Constructor/Prototype Pattern
The User Function:

I will explain each line.



```javascript
function User (theName, theEmail) {
  this.name = theName
  this.email = theEmail
  this.quizScores = []
  this.currentScore = 0
}

User.prototype = {
  constructor: User,
  saveScore: function (theScoreToAdd)  {
    this.quizScores.push(theScoreToAdd)
  },
  showNameAndScores: function()  {
    var scores = this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Yet"
    return this.name + " Scores: " + scores
  },
  changeEmail:function(newEmail)  {
    this.email = newEmail
    return "New Email Saved: " + this.email
  }
}
```

####Make Instances of the User function


```javascript
// A User 
firstUser = new User("Fredrik", "fred@examnple.com") 
firstUser.changeEmail("Fredrik@examnple.com")
firstUser.saveScore(15)
firstUser.saveScore(10)

firstUser.showNameAndScores() //Fredrik Scores: 15,10

// Another User
secondUser = new User("Henrik", "Henrik@examnple.com")
secondUser.saveScore(18)
secondUser.showNameAndScores()  //Henrik Scores: 18
```

####Explanation of Combination Constructor/Prototype Pattern
Let’s expound on each line of code so we have a thorough understanding of this pattern.

The following lines initialize the instance properties. These properties will be defined on each User instance that is 
created. So the values will be different for each user. The use of the this keyword inside the function specifies that 
these properties will be unique to every instance of the User object:

```javascript
this.name = theName
this.email = theEmail
this.quizScores = []
this.currentScore = 0
```

In the code below, we are overwriting the prototype property with an object literal, and we define all of our methods 
(that will be inherited by all the User instances) in this object. Discussion continues after the code:

```javascript
User.prototype = {
  constructor: User,
  saveScore: function(theScoreToAdd)  {
    this.quizScores.push(theScoreToAdd)
  },
  showNameAndScores: function ()  {
    var scores = this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Yet"
    return this.name + " Scores: " + scores
  },
  changeEmail: function(newEmail)  {
    this.email = newEmail
    return "New Email Saved: " + this.email
  }
}
```

This way of overwriting the constructor is simply for convenience, so we don’t have to write User.prototype each time, 
like this: 

```javascript
User.prototype.constructor = User
User.prototype.saveScore = function(theScoreToAdd)  {
    this.quizScores.push(theScoreToAdd)
}

User.prototype.showNameAndScores = function()  {
    var scores = this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Yet"
    return this.name + " Scores: " + scores
}

User.prototype.changeEmail =  function(newEmail)  {
    this.email = newEmail
    return "New Email Saved: " + this.email
}
```

By overwriting the prototype with a new object literal we have all the methods organized in one place, and you can 
better see the encapsulation that we are after. And of course it is less code you have to type.

**JavaScript Prototype**
In JavaScript, you add methods and properties on the prototype property when you want instances of an object to inherit 
those methods and properties. This is the reason we add the methods on the User.prototype property, so that they can be 
used by all instances of the User object. Read more about JavaScript Prototype in Plain Language.

**Constructor Property**
In my post JavaScript Prototype, I explained that every function has a constructor property, and this property points 
to the constructor of the function. For example:

```javascript
function Fruit() {}
var newFruit = new Fruit()
console.log (newFruit.constructor) // Fruit ()
```

The one disadvantage of overwriting the prototype is that the constructor property no longer points to the prototype, 
so we have to set it manually. Hence this line:

```javascript
 constructor: User
```

**Prototype Methods**
In the following lines, we create methods on the prototype (in the object literal) so that all instances of Users can 
have access to these methods.

```javascript
saveScore: function(theScoreToAdd)  {
  this.quizScores.push(theScoreToAdd)
},
showNameAndScores: function()  {
  var scores = this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Yet"
  return this.name + " Scores: " + scores
},
changeEmail: function(newEmail)  {
  this.email = newEmail;
  return "New Email Saved: " + this.email;
}
```

We then created instances of the User object:

```javascript
// A User 
firstUser = new User("Fredrik", "Fred@examnple.com") 
firstUser.changeEmail("Fredrik@examnple.com")
firstUser.saveScore(15)
firstUser.saveScore(10) 

firstUser.showNameAndScores()  // Fredrik Scores: 15,10

// Another User
secondUser = new User("Henrik", "Henrik@examnple.com")
secondUser.saveScore(18)
secondUser.showNameAndScores()  //Henrik Scores: 18
```

As you see, we have encapsulated all the functionality for a User inside the User Function, so that each instance of 
User can make use of the prototype methods (like changeEmail) and define their own instance properties, like name and 
email.

With this pattern, you can use the standard operators and methods on the instances, including the instanceOf operator, 
the for-in loop, even hasOwnProperty, and the constructor property.

##Inheritance in JavaScript
Implementing inheritance in our quiz application will permit us to inherit functionality from parent Functions so that 
we can easily reuse code in our application and extend the functionality of objects. Objects can make use of their 
inherited functionality and still have their own specialized functionality.

The best pattern for implementing inheritance in JavaScript is the Parasitic Combination inheritance 2. Before we dive 
into this awesome pattern, let’s see why its practical to use inheritance in our applications.

We have successfully implemented encapsulation by enclosing all the functionality for users of our quiz application by 
adding all the methods and properties that each user will need on the User function, and all instances of User will 
have those properties and methods.

Why Inheritance?
Next, we want to encapsulate all the functionality for every Question. The Question function, Class in OOP languages, 
will have all the generic properties and methods that every kind of question will need to have. For example, every 
question will have the question, the choices, and the correct answer. These will be the properties. In addition, each 
question will have some methods: getCorrectAnswer and getUserAnswer, and displayQuestion.

We want our quiz application to make different types of Questions. We will implement a MultipleChoiceQuestion function 
and a DragDropQuestion function. To implement these, it would not make sense to put the properties and methods outlined 
above (that all questions will use) inside the MultipleChoiceQuestion and DragDropQuestion functions separately, 
repeating the same code. This would be redundant.

Instead, we will leave those properties and methods (that all questions will use) inside the Question object and make 
the MultipleChoiceQuestion and DragDropQuestion functions inherit those methods and properties. This is where
inheritance is important: we can reuse code throughout our application effectively and better maintain our code.

Since the MultipleChoiceQuestion HTML layout and will be different from the DragDropQuestion HTML layout, the 
displayQuestion method will be implemented differently in each. So we will override the displayQuestion method on the 
DragDropQuestion. Overriding functions is another principle of OOP.

###Implementing the Parasitic Combination Inheritance Pattern
To implement this pattern, we have to use two techniques that were invented specifically for inheritance in JavaScript. 
Some notes about these techniques follow. No need to memorize any of the detail; just understand and be aware of 
the techniques.

####Prototypal Inheritance by Douglas Crockford
Douglas Crockford created the following Object.create method 3, used in a fundamental way to implementing inheritance 
with the pattern we are using.

**Object.create method**
Ruminate on the method Crockford created:

```javascript
if (typeof Object.create !== 'function') {
  Object.create = function(o) {
    functionF() {
    }
    
    F.prototype = o
    return new F()
  }
}
```

This method has been added to the ECMAScript5 specification, and you can access it with Object.create (). 
Let’s quickly understand it is doing.

```javascript
Object.create = function(o) {
  // It creates a temporary constructor F()
  function F() {
  }
  
  // And set the prototype of the this constructor 
  // to the parametric (passed-in) o object
  // so that the F() constructor now inherits all 
  // the properties and methods of o
  F.prototype = o

  // Then it returns a new, empty object, an instance 
  // of F() Note that this instance of F inherits from 
  // the passed-in (parametric object) o object. 
  // Or you can say it copied all of the o object's 
  // properties and methods
  return new F()
}
```

The crux of the matter with this Object.create method is that you pass into it an object that you want to inherit from, 
and it returns a new object that inherits from the object you passed into it. For example:

```javascript
// We have a simple cars object
var cars = {
  type:"sedan",
  wheels:4
}

// We want to inherit from the cars object, so we do:
var toyota = Object.create(cars)  // now toyota inherits 
                                  // the properties from cars
console.log(toyota.type)  // sedan
```

Of course we can now add more properties to the toyota object, but let’s move on.

The next function we will use for inheritance is the inheritPrototype function. This function succinctly implements the 
parasitic combination inheritance for us. We pass in the parent object (or Super Class) and the child object 
(or Sub Class), and the function does the parasitic combination inheritance: makes the child object inherits from the 
parent object.

```javascript
function inheritPrototype(childObject, parentObject) {
  // As discussed above, we use the Crockford’s method 
  // to copy the properties and methods from the 
  // parentObject onto the childObject
  // So the copyOfParent object now has everything the 
  // parentObject has 
  var copyOfParent = Object.create(parentObject.prototype)

  // Then we set the constructor of this new object to 
  // point to the childObject.
  // Why do we manually set the copyOfParent constructor here, 
  // see the explanation immediately following this code block.
  copyOfParent.constructor = childObject

  // Then we set the childObject prototype to copyOfParent, 
  // so that the childObject can in turn inherit everything 
  // from copyOfParent (from parentObject)
   childObject.prototype = copyOfParent
}
```

Why did we manually set the copyOfParent.constructor?
We explicitly set the copyOfParent.constructor property to point to the childObject constructor because in the 
preceding step, var copyOfParent = Object.create(parentObject.prototype), this is what we actually did:

```javascript
// We made a new object and overwrote its prototype with 
// the parentObject prototype:
function F() {
}

F.prototype = parentObject.prototype;
// Then it was this new F object we assigned to copyOfParent.
// All of this was done inside the Object.create () method.
```

So, this new F object, which we assigned to copyOfParent, doesn’t have a constructor property anymore because we 
overwrote its entire prototype. Whenever you overwrite an object’s prototype (object.prototype = someVal), you also 
overwrite the object’s constructor property.

To make sure we have the correct value for copyOfParent constructor, we set it manually with this:

```javascript
copyOfParent.constructor = childObject;
```

Essentially, we are copying all the properties and methods from the parentObject to the childObject, but we are using 
the copyOfParent as an intermediary for the copy. And because the childObject prototype was overwritten during the copy, 
we manually set the copyOfParent constructor to the childObject. Then we set the childObject prototype to the 
copyOfParent so that the childObject inherits from the parentObject.

Okay, that was quite a bit. I am hopeful you understand some of that :).

**Back to the fun stuff:** Creating our quiz OOP style.
Now that we understand the inheritPrototype function we will be using, lets go ahead and implement our 
Question constructor.

Note that I use “constructor” and “function” interchangeably sometimes in this particular article when referring to the 
function, because the function will be used as a constructor to create instances.

####The Question Constructor (Parent of all Question Objects):
(Can be thought of as the Super Class for Questions)

```javascript
// The Question function is the parent for all 
// other question objects;
// All question objects will inherit from this 
// Question constructor
function Question(theQuestion, theChoices, theCorrectAnswer) {
  // Initialize the instance properties
  this.question = theQuestion;
  this.choices = theChoices;
  this.correctAnswer = theCorrectAnswer;
  this.userAnswer = "";

  // private properties: these cannot be changed by instances
  var newDate = new Date()
  // Constant variable: available to all instances through the 
  // instance method below. This is also a private property.
  var QUIZ_CREATED_DATE = newDate.toLocaleDateString()

  // This is the only way to access the private QUIZ_CREATED_DATE 
  // variable 
  // This is an example of a privilege method: it can access 
  // private properties and it can be called publicly
    this.getQuizDate = function() {
      return QUIZ_CREATED_DATE;
    }

  // A confirmation message that the question was created
  console.log("Quiz Created On: " + this.getQuizDate())
}
```

**Add Prototype Methods to The Question Object**
All instances of the Question object will inherit these methods, because we are adding the methods on the 
Question prototype.

```javascript
// Define the prototype methods that will be inherited
Question.prototype.getCorrectAnswer = function() {
  return  this.correctAnswer
}

Question.prototype.getUserAnswer = function() {
  return this.userAnswer
}

Question.prototype.displayQuestion = function() {
    var questionToDisplay = this.question
    var choiceCounter = 0

    this.choices.forEach(function (eachChoice)  {
        questionToDisplay += '<span>' + eachChoice + '</span>'
        choiceCounter++
    });

    console.log(questionToDisplay)
}; 
```

**Child Questions (Sub Classes of the Question object)**
Now that we have the Question constructor object setup, we can inherit from it and create sub classes (children objects). 
The power of inheritance is that we can create all sorts of questions now, and each can be quite versatile.

**First, a Multiple Choice Question:**

```javascript
// Create the MultipleChoiceQuestion
function MultipleChoiceQuestion(theQuestion, theChoices, theCorrectAnswer){
  // For MultipleChoiceQuestion to properly inherit from Question, 
  // here inside the MultipleChoiceQuestion constructor, we have to 
  // explicitly call the Question constructor
  // passing MultipleChoiceQuestion as the this object, and the parameters 
  // we want to use in the Question constructor:
  Question.call(this, theQuestion, theChoices, theCorrectAnswer);
}
```

And then we have to use the inheritPrototype function we discussed moments ago:

```javascript
// inherit the methods and properties from Question
inheritPrototype(MultipleChoiceQuestion, Question)
```

**After** we have inherited from Question, we then add methods to the MultipleChoiceQuestion function, if necessary. 
But we must do it after we inherit, not before, or all the methods we define on its prototype will be overwritten. 
We are not adding any now.

**A Drag and Drop Question**
In a similar manner, we can make yet another type of question:

```javascript
// Create the DragDropQuestion
function DragDropQuestion(theQuestion, theChoices, theCorrectAnswer) {
  Question.call(this, theQuestion, theChoices, theCorrectAnswer)
}

// inherit the methods and properties from Question
inheritPrototype(DragDropQuestion, Question)
```

**Overriding Methods**
Overriding methods is a another principle of OOP, and we can do it easily with this pattern. Since the Drag and 
Drop questions will have a different HTML layout from the Multiple Choice questions (no radio buttons, for example), 
we can override the displayQuestion method so it operates specifically to the Drag and Drop question needs:

```javascript
// Override the displayQuestion method it inherited
DragDropQuestion.prototype.displayQuestion = function () {
  // Just return the question. Drag and Drop implementation 
  // detail is beyond this article
  console.log(this.question);
}
```

In our real Quiz application, we would create a Quiz constructor that is the main application that launches the quiz, 
but in this article, we can test our inheritance code by simply doing this:

```javascript
// Initialize some questions and add them to an array
var allQuestions = [
new MultipleChoiceQuestion("Who is Prime Minister of England?", ["Trump", "May", "Löfven", "Macron"], 3),
   
new MultipleChoiceQuestion("What is the Capital of Brazil?", ["São Paulo", "Rio de Janeiro", "Brasília"], 2),
   
new DragDropQuestion("Drag the correct City to the world map.", ["Washington, DC", "Rio de Janeiro", "Stockholm"], 0)
]

// Display all the questions
allQuestions.forEach(function (eachQuestion)  {
    eachQuestion.displayQuestion()
});
```

If you run the code, you will see that the displayQuestion for the multiple choice questions returns the question in a 
div tag, with choices formatted with radio buttons inside li tags. On the other hand, the drag and drop questions 
displayQuestion method simply returns the question without the choices.

Nicholas Zakas stated it wonderfully, “Parasitic combination inheritance is considered the most optimal inheritance 
paradigm” 5 in JavaScript. If you learn it and understand it well, you should use it in your JavaScript web applications.

You might be wondering how is the Combination Constructor/Prototype Pattern we used for Encapsulation earlier different 
from the Parasitic Combination Inheritance. They are similar, but the former is best used for encapsulation 
(creating custom objects), and it does not have all the inheritance mechanisms such as subclassing (creating child 
constructors that inherit from the parent constructor). Moreover, the inheritance pattern goes beyond setting up objects 
to just inherit properties and methods, it enables child objects to themselves be parent objects of other objects, and 
you can use private members, overriding, and other OOP concepts.
