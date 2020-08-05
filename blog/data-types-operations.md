---
path: data-types
date: 2020-08-04T16:59:53.843Z
title: Data Types & Operations
subtitle: Specifying the core objects that power our code
author: Teon Mehta
tags:
  - compter science
  - python
  - how to code
---
We're going to look at the core language of Python. Previously, we described how variables are containers for your data. Now, we will dive deeper into the actual types of data available to us in programming as well as some of the operations available.

It is important to understand that everything in programming is an object. Much like the real world, these objects have their specific properties and methods that allow them to function. Python itself has built-in types of data objects standard to its core language and some of which are shared across all programming languages. These built-in types make it easier to achieve what we'd like our programs to do, instead of trying to create custom structures to solve problems.

Here are the core types and the syntax used to code them.

## Numbers

This might go without saying, numbers are the most familiar and straight forward data type seen in every single computer program known to man. Numbers include integers (whole numbers), floats or floating-point numbers (decimal points), and more rare special numeric types like fractions, precision, and complex numbers.

```
# INTEGER

>>> integer = 10
>>> type(integer)
<class 'int'>


# FLOATING POINT

>>> decimal = 10.0
>>> type(decimal)
<class 'float'>


# COMPLEX

>>> complex = 1j    
>>> type(complex)
<class 'complex'>
```

As you would expect numbers are used to make calculations, so the same operations are given in Python.

```
# Math Operations

>>> money = 1000
>>> money + 100
1100
>>> money * 5
5000
>>> money - 500
500
>>> money / 4
250.0


# Importing Math library from Python's built-in lib

>>> import math
>>> math.pi
3.141592653589793

>>> math.sqrt(100)
10.0
```

Python's standard library comes with some packages that give us additional tools like the math functions seen above.

## Strings

Strings are another basic data type. They are text, characters like words and sentences. They are wrapped in single or double quotes, most of the time there is no difference, except when a given word contains a quote.

```
# Single quoted String

>>> single = 'this string used single quotes'
>>> type(single)
<class 'str'>


# double quoted String

>>> double = 'this string used double quotes'
>>> type(double)
<class 'str'>
```

Strings also have their set of operations, like being added together or repeated. However, they are an immutable type. This means that you cannot change the value of a string, you can only create a new one.

```
# Concatenating Strings 

>>> a = 'this is how you'
>>> b = ' concatenate a string in python'
>>> c = a + b
>>> print(c)
this is how you concatenate a string in python


# Multiplying Strings

>>> repeat = "repeat this"
>>> repeat * 5
'repeat thisrepeat thisrepeat thisrepeat thisrepeat this'

# Using len method to get string's character length

>>> length = "how many characters are in this string"
>>> len(length)
38


# IMMUTABLE - Testing Strings mutability

>>> my_name = "Teon"
>>> my_name[0] = "L"
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'str' object does not support item assignment


# RECREATE - New String must be created in order to change

>>> my_name = "Leon"
>>> my_name
'Leon'
```

## Booleans

Booleans are binary, essentially just 0 or 1 but represented as either a True or False value. These come into play when dealing with control flow and programming logic. They allow us to check if things in our program make sense.

```
# True and False values and statements

>>> True
True
>>> False
False

>>> 10 == 10
True
>>> 10 == 100
False


# Checking 0 and 1 for thier Boolean value

>>> 0 == False
True
>>> 1 == True
True
```

We'll visit this type and its operations when we discuss control flow.

## None

Think of None as a placeholder value. As we saw before, when we initialize variables in Python we must give them a value. Well, this type is sometimes used as a placeholder or to clear the value of a variable throughout the sequence of a program.

```
# Using None to clear a value or be a placeholder

>>> bank_account = 1000000
>>> bank_account
1000000

>>> bank_acount = None
>>> None
>>> None        # Bank account value is now nothing
```

## Lists

Python lists are an ordered collection of data types. Known as arrays in other programming languages, lists are limitless and can contain every other data type, even another list. Each object in a list is numbered. They go by a zero-based index, meaning the first placed object is numbered at 0, not 1. To create them we use square brackets, see here

```
# List of strings

names = ["jack", "kevin", "sarah", "emily", "jeff"]
>>> type(names)
<class 'list'>


# List of arbitrary types

>>> random = [12, True, 99, 'this is a random list', False, 'seven']



```

Both lists and strings are sequences. They support some of the same times of operations and methods. However, lists are mutable, unlike strings, the elements inside can be manipulated without having to create a new list.

```
# Checking List length

>>> random = [12, True, 99, 'this is a random list', False, 'seven']
>>> len(random)
6


# Adding a value to a List

>>> random.append('added a random value')
>>> random
[12, True, 99, 'this is a random list', False, 'seven', 'added a random value']


```

Notice, we used the "append" method to add a value to our random list. We'll break down the list data type in detail in a later post.

## Tuples

Tuples are a carbon copy of lists, with a few exceptions. They are a sequence of arbitrary objects like lists, however, once created the cannot be changed at all. Syntax wise, they use parentheses as opposed to brackets.

```
# Creating Tuple

>>> tup = (1,2,3,4,5,6,7,8,9,10)
>>> type(tup)
<class 'tuple'>


# Printing the first value in Tuple

>>> print(tup[0])
1         # Zero-based index - We grabbed the first value


# Trying to change value in a tuple

>>> tup[0] = 0
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'tuple' object does not support item assignment

```

They sport some of the same methods and operations as lists so long as it doesn't try and manipulate. Tuples are not used often, but their effectiveness lies where it's necessary to have a consistent collection that won't change at all.

## Dictionaries

Dictionaries are the most powerful and complex of Python's core data types. In the same way that real paper dictionaries have paired words with definitions, dictionaries have key-value pairs. Known as maps or objects in other programming languages, they are used to store all the other data types (even themselves). However, they come in no order or position and are mutable similar to lists. See the syntax here:

```
# Creating a Dictionary

>>> player = {'name': 'Michael Jordan', 'team': 'bulls', 'number': 23, 'championships': 6}
>>> type(player)
<class 'dict'>

# Accessing a value by using its Key
>>> player['name']
'Michael Jordan'
```

Look at the way we access values in a dictionary. We call on the key in order to get its value as opposed to a numbered position like in our List data type.

## Outro

That's a fairly brief overview of the prominent core data types in python a well as the structures found in programming in general. A full article can be written on each one of these data types.

Throughout our journey, we will gain more exposure to these types in different situations. For now, it's a start to know and understand exactly what exactly we're working with.