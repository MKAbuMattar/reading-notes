# Read: 01 - Java Basics

## Content
- [Java Basics](#java-basics)


***

## Java Basics

### Variables

Objects keep their state in fields, as you've previously discovered. The term "variable" is also used in the Java programming language. This section goes through variable naming conventions, fundamental data types (primitive types, character strings, and arrays), default values, and literals, as well as the relationship between them.

You'll discover the technical distinctions between "field" and "variable" in this session. The words "field," "variable," and "int" are used to refer to distinct sorts of data types in the Java programming language. This is a typical cause of misunderstanding among novice programmers.

- Instance Variables (Non-Static Fields) Non-static fields, or fields defined without the static keyword, are where objects keep their distinct states. One bicycle's currentSpeed is unrelated to the currentSpeed of another. The values of non-static fields are unique to each class instance (to each object)
- Class Variables (Static Fields) Any field defined with the static modifier is a class variable; this notifies the compiler that there is only one copy of the variable in existence. Because the same number will apply to all instances, a field describing the number of gears for a certain type of bicycle might be declared as static.
- Local Variables A transient state of a class that is not accessible from the rest of the class is called a local variable. A variable's placement is decided by the location in which it is defined; there is no specific keyword to designate it as local. Only the methods in which they are defined can see local variables.
- Parameters Parameters have already been seen in the Bicycle class and the main method of the "Hello World!" program. It's crucial to remember that parameters are usually referred to as "variables" rather than "fields." Later in the course, this also applies to other parameter-accepting structures (such as constructors and exception handlers).

### Naming

A variable's name can be any legal identifier beginning with a letter, the dollar sign "$", or the underscore character "_". The convention is to always begin your variable names with an initial letter, not "$" or "_". When choosing a name for your variables, use full words instead of cryptic abbreviations. This will make your code easier to read and understand.

[Back to Content](#content)

### Operators

The operators of the Java programming language are described in this section. It lists the most regularly used operators first, followed by the less frequently used operators. You may compile and run code examples from each conversation.

| Operators | Precedence |
| :---------: | :---------: |
| postfix | expr++ expr-- |
| unary | 	++expr --expr +expr -expr ~ ! |
| multiplicative | * / % |
| additive | + - |
| shift | << >> >>> |
| relational | < > <= >= instanceof |
| equality | 	== != |
| bitwise AND | & |
| bitwise exclusive OR | ^ |
| bitwise inclusive OR | | |
| logical AND | && |
| logical OR | || |
| ternary | ? : |
| assignment | = += -= *= /= %= &= ^= |= <<= >>= >>>= |

[Back to Content](#content)

### Expressions, Statements, and Blocks

Expressions are the basic components of statements, and statements may be combined into blocks. Operators can be used to create expressions that calculate values. This section uses previously viewed sample code to illustrate expressions, statements, and blocks.

An expression is a construct that evaluates to a single value and is made up of variables, operators, and method invocations that are built according to the syntax of the language. You've previously seen examples of phrases (shown in bold below), but now we'll show you how they're utilized in practice.

```java
int cadence = 0;
anArray[0] = 100;
System.out.println("Element 1 at index 0: " + anArray[0]);

int result = 1 + 2; // result is now 3
if (value1 == value2) 
    System.out.println("value1 == value2");
```

- Ambiguous >> x + y / 100 
- unambiguous, recommended >> (x + y) / 100 

Statements

In the natural language, a statement is a full unit of action. It may be turned into a statement by adding a semicolon at the end of the phrase (;) To make a statement, you can utilize the phrases listed below. I'm going home and sleeping is a phrase that can be ended with a comma (;).

```java
// assignment statement
aValue = 8933.234;
// increment statement
aValue++;
// method invocation statement
System.out.println("Hello World!");
// object creation statement
Bicycle myBike = new Bicycle();
```

Blocks

A block is a collection of zero or more statements enclosed by balanced braces that can be used wherever that a single statement is permitted. A block is an expression that can only be utilized if at least one statement is present. The following example, BlockDemo, demonstrates the language's usage of blocks.

```java
class BlockDemo {
     public static void main(String[] args) {
          boolean condition = true;
          if (condition) { // begin block 1
               System.out.println("Condition is true.");
          } // end block one
          else { // begin block 2
               System.out.println("Condition is false.");
          } // end block 2
     }
}
```

[Back to Content](#content)

### Control Flow Statements

The control flow statements offered by the Java programming language are described in this section. It covers the decision-making, looping, and branching instructions that allow your programs to run certain chunks of code on a conditional basis.

To break up the flow of execution, control flow statements employ decision making, looping, and branching. Java is a programming language that lets you use these statements to run certain code blocks based on particular criteria. This section covers decision-making statements (if-then, if-else, switch), looping statements (for, while, do-while), and branching statements.

[Back to Content](#content)

***

[⇐ Home Page](../../README.md)