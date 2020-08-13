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
So far, we've taken our first steps to understanding what code is. We've discussed how to get up and running and topics like variables and data types. However, we have yet to program.  Conditionals are our first step into bringing logic to our programs. Up until now, our code has been sequential, executing each statement from top to bottom. Conditionals control the flow of execution in your programs. 

## PSEUDO CODE

Pseudocode is like a fake code that programmers use to represent real code to gather their thoughts. It reads like English and the idea behind it is to lay down the steps to implement in real code. Take a look here...

```
# Bank Loan Process

Get credit score
Get employment status
Get Salary level
Get student status
Get loan approval to none yet

IF credit score is good 
	THEN set loan status to approved
IF Employment is employed
	THEN check if the salary is high or low
		IF salary is low
			THEN set loan status to NOT approved
		ELSE 
			THEN set loan status to approved
IF student status is student and credit score is high or salary is high
	THEN set loan status to approved
Otherwise CANNOT approve the loan
```

This is the pseudocode for a simple bank loan process. This is the way programmers go about writing algorithms, clearly thinking through each step of the process before writing any actual code.  Notice a couple of details; we've set all the information we'll need in the beginning, we've used keywords like "IF" and "ELSE" (will be handy later) and mainly we've indented our steps for clarity.
At the end of this post, we will transition this pseudo code into a real program and everything will come together. Let's tackle some of the preliminaries...

## Boolean Operators

Before we explain conditional statements fully, we need to elaborate on booleans and their operations. As we mentioned before boolean values are either True or False (the capitalization is needed). However, to evaluate whether or not an expression is of either value we need to test. We test expressions with three different types of operators.



#### Comparison Operators

Comparison operators are used to comparing two statements together.

```
<	# Less than
>	# Greater than
<=	# Less than or equal to
>=	# Greater than or equal to
==	# Equality (equal to)
!=    # Inequality (not equal to)
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

We can see that these basic operators test these conditions right from wrong and then output True or False accordingly.

#### Logical Operators

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

#### Identity Operators

Python's identity operators compare two values but take a step further. There are two operators,*is*and*is not*. They are used to determine where both objects are the same in computer memory as opposed to just containing the same data.

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

We see the difference in comparison with the (==) test case versus (is). We can confirm this by using the "id" method and seeing that these two have 2 different places in memory. Therefore, their values can be the same but that they are not exactly the same object.



## Conditional Execution

Now that we've looked at the prerequisites, let's finally start controlling the flow. We're going to be moving away from the REPL, and begin fully running our program files. Now is where we will start making real decisions with our code. 

#### If Statement

Here we introduce the *if statement*. In the real world, our first step to making a decision starts with an "if"... If this, do that.

```
# If Statement

age = 18

if age >= 21:
    print("You can go inside the bar and have fun!")
print("DONE!")


# Output 

DONE!   
```

Notice the syntax. We begin by writing our *if* keyword, followed by our condition, and then a colon. This first line is going to evaluate to either True or False. Based on value, the following line will be executed, and only if it is True otherwise it will be skipped.

The line after our colon is indented and this is done purposefully. Python requires that we indent our following code block with 4 spaces. This is how the Python interpreter understands our code and knows how and when to execute our statements. Where other languages use curly brackets to indicate code blocks, Python uses indentation. Python conforms to the [PEP8](https://www.python.org/dev/peps/pep-0008/) standard and was built with style and elegance in mind.

#### Else Statement

We started with an if statement, but what if that doesn't work out? We have the Else statement. This works just like an ultimatum if this or else this. Look...

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

We've added onto our last if statement in this section. After the if clause is executed, if it evaluates to True the following indented code block gets ran. Otherwise, our program jumps to the else clause, and that code is executed. 

#### Elif Statement

What if we want to add more than one clause? Maybe we have multiple scenarios so therefore, we would need multiple outcomes. This is where the Elif statement comes in (shorthand for else if).

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

Again, we've added to our previous example.  In between the if and else statements we enter our elif clause. We've only added one but in reality, we could add as many as there are needed. We're not shaping out to have a logical program, although very trivial we've accomplished something. 
Here if the person's age is 21 and over they get into the bar, if not they get told they're too young to get in. However, if they are between 18 and 20 (less than 21) they get told to go to join the army. That's America for you!

#### Ternary Operator

There's another way to write simple conditional statements. We can use the ternary operator. Fairly basic, it can be used for simple statements and turn out to be more readable and cleaner. 

```
# Simple ternary operator case

age = 21

entry = "Denied!" if age < 21 else "Accepted!"


# Regular If statement

if age < 21:
	entry = "Denied"
else: 
	entry = "Accepted"
```

Great, we've shortened done a regular four-lined statement to a simple one-liner!



## Nested Statements

Remember the pseudocode from the start of this article? We're finally going to turn it into real code.

```

```