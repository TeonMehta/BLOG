---
path: conditionals
date: 2020-08-12T00:04:09.796Z
title: Conditionals
subtitle: Bringing logic into programs
author: Teon Mehta
tags:
  - Computer Science
  - Python
  - How To Code
---
So far, we've taken our first steps to understanding what code is. We've discussed how to get up and running and topics like variables and data types. However, we have yet to program. Conditionals are our first step into bringing logic to our programs. Up until now, our code has been sequential, executing each statement from top to bottom. Conditionals control the flow of execution in your programs. 

## PSEUDO CODE

Pseudo code is like a fake code that programmers use to represent real code to gather their thoughts. It reads like English and the idea behind it is to lay down the steps to implement in real code. Take a look here,

```

```

At the end of this post, we will transition this pseudo code into a real program.

## BOOLEAN OPERATORS

Before we explain conditional statements, we need to elaborate on booleans and their operations. As we mentioned before boolean values are either True or False (the capitalization is needed). However, to evaluate whether or not an expression is of either value we need to test. We test expressions with three different types of operators.

### Comparison Operators	 

Comparison operators are used comparing two statements together.

```


<	# Less than
>	# Greater than
<=	# Less than or equal to
>=	# Greater than or equal to
==	# Equality (equal to)
!=  # Inequality (not equal to)
```

You've probably seen these before in math class. However, there are a couple of differences in Python. Namely, the double equals sign (==) is not to be confused with the assignment operator used for variables. The not equals (!=) is used to prove inequality, but the "!" sign is widely used across the board to mean "not" equal to.

Here they are in action:

```
# Simple comparisions 

>>> 100 > 10
True

>>> 100 < 10
False

>>> 100 >= 100
True

>>> 100 <= 100
True

>>> 100 == 100
True

>>> 100 != 100
False
```

### Logical Operators 

Logical operators build upon comparisons, they are used to combine statements to evaluate their boolean value. There are three logical operators, and, or, and not. Let's see how these advance on top of comparison statements.

```

# And / Or

>>> x = True
>>> y = False

>>> x or y
True

>>> x and y
False


# Not

>>> x = True
>>> x
True

>>> not x
False

```

As shown above, logical operators add another level of complexity to our boolean expressions.  And is a test to see if both expressions are true. If they are both true then the condition fully equates to being True. If one is false then the final result is False.
Or tests where either one of the written expressions turns out to be true. If one of the conditions passes, the full condition is True. This is read left-to-right. If the first expression on the left is True, then the following expression is not processed.
Finally, Not is used to negate the boolean expression.

### Identity Operators

Python's identity operators compare two values but take a step further. They are used to determine where both objects are the same in computer memory as opposed to just containing the same data.

There are two operators, *is* and *is not*. These can be tested with the id method.

```

>>> x = 'this is x'
>>> y = 'this is x'

>>> x == y
True

>>> x is y
False

>>> x is not y
True

>>> id(x)
4363071024

>>> id(y)
4363113072
```

comments-----

## Conditional Execution

IF STATEMENT

Now that we've looked at the prerequisites, let's finally start controlling the flow. We're going to be moving away from the REPL, and begin running our programs. Here is where we will begin making real decisions with our code. Here we introduce the *if statement*. 

```
# If Statement

age = 18

if age >= 21:
    print("You can go inside the bar and have fun!")
print("DONE!")


# Output 

DONE!   


```

Notice the syntax. We begin by writing our *if* keyword, followed by our condition, and then a colon. This first line is going to evaluate to either True or False. Based on value, the following line will be executed, and only if it is True otherwise it will be skipped. The line after our colon is indented and this is done purposefully. Python requires that we indent our following code block with 4 spaces. This is how the Python interpreter understands our code and knows how and when to execute our statements. Where other langauges use curly brackets to indicate code blocks, Python uses indentation. Python conforms to the [PEP8](https://www.python.org/dev/peps/pep-0008/) standard and was built with style and elegance in mind.



ELSE STATEMENT

```
age = 18

if age >= 21:
    print("You can go inside the bar and have fun!")
else:
    print("You're too young to get in!")  
print("DONE!")


# Output 

You're too young to get in!
DONE!   
```

comments



ELIF STATEMENT

```

if age >= 21:
    print("You can go inside the bar and have fun!")
elif age >= 18 and < 21:
    print("Go join the army kid.")
else:
    print("You're too young to get in!")  
print("DONE!")


# Output 

Go join the army kid.
DONE!  
```

TERNARY OPERATOR

```
age = 21

if age > 
```