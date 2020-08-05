---
path: data-types-
date: 2020-08-04T16:59:53.843Z
title: Data Types & Operations
subtitle: data
author: Teon Mehta
tags:
  - compter science
  - python
  - how to code
---
We're going to look at the core language of Python. Previously, we described how variables are containers for your data. Now, we will dive deeper into the actual types of data available to us in Python programming as well as some of the operations available.

It is important to understand that everything in programming is an object. Much like the real world, these objects have their specific properties and methods that allow them to function. Python itself has built-in types of data objects standard to its core language and some of which are shared across all programming languages. These built-in types make it easier to achieve what we'd like our programs to do, instead of trying to create custom structures to solve problems.

Here are the core types and the syntax used to code them,

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
>>> money = 1000
>>> money + 100
1100
>>> money * 5
5000
>>> money - 500
500
>>> money / 4
250.0

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
>>> single = 'this string used single quotes'
>>> type(single)
<class 'str'>
>>> double = 'this string used double quotes'
>>> type(double)
<class 'str'>

```

Strings also have their set of operations, like being added together or repeated. However, they are an immutable type. This means that you cannot change the value of a string, you can only create a new one.

```
>>> a = 'this is how you'
>>> b = ' concatenate a string in python'
>>> c = a + b
>>> print(c)
this is how you concatenate a string in python

>>> repeat = "repeat this"
>>> repeat * 5
'repeat thisrepeat thisrepeat thisrepeat thisrepeat this'

>>> length = "how many characters are in this string"
>>> len(length)
38

# IMMUTABLE
>>> my_name = "Teon"
>>> my_name[0] = "L"
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'str' object does not support item assignment

#Re-create
>>> my_name = "Leon"
>>> my_name
'Leon'
```

## Booleans

Booleans are binary, essentially just 0 or 1 but represented as either a True or False value. These come into play when dealing with control flow and programming logic. They allow us to check if things in our program make sense.

```
>>> True
True
>>> False
False
>>> 10 == 10
True
>>> 10 == 100
False
>>> 0 == False
True
>>> 1 == True
True
```

We'll visit this type and its operations when we discuss control flow.

## None

Think of None as a placeholder value. As we saw before, when we initialize variables in Python we must give them a value. Well, this type is sometimes used as a placeholder or to clear the value of a variable throughout the sequence of a program.

```
>>> bank_account = 1000000
>>> bank_account
1000000
>>> bank_acount = None
>>> None
>>> None
```

## Lists

Python lists are an ordered collection of data types. Known as arrays in other programming languages, lists are limitless and can contain every other data type, even another list. Each object in a list is numbered. They go by a zero-based index, meaning the first placed object is numbered at 0, not 1. To create them we use square brackets, see here

```

```

Both lists and strings are sequences. They support some of the same times of operations and methods. However, lists are mutable, unlike strings, the elements inside can be manipulated without having to create a new list.

```

```

We'll break down the list data type in detail in a later post.

## Tuples

Tuples are a carbon copy of lists, with a few exceptions. They are a sequence of arbitrary objects like lists, however, once created the cannot be changed at all. Syntax wise, they use parentheses as opposed to brackets.

```

```

They sport some of the same methods and operations as lists so long as it doesn't try and manipulate. Tuples are not used often, but their effectiveness lies where it's necessary to have a consistent collection that won't change at all.

## Dictionaries

Dictionaries are the most powerful and complex of Python's core data types. In the same way that real paper dictionaries have paired words with definitions, dictionaries have key-value pairs. Known as maps or objects in other programming languages, they are used to store all the other data types (even themselves). However, they come in no order or position and are mutable similar to lists. See the syntax here:

```

```

That's a fairly brief overview of the prominent core data types in python a well as the structures found in programming in general. Throughout our journey, we will gain more exposure to these types in different situations. For now, we know and understand exactly what exactly we're working with.