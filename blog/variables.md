---
path: variables
date: 2020-08-02T21:52:27.160Z
title: Variables
subtitle: The way in which we remember and store data
author: Teon Mehta
tags:
  - computer science
  - python
  - how to code
---
The essence of computer programming is working through data and procedures. Every program we create is made up of the information we need to use (data) and how we intend to manipulate that information (procedures). But, how do we express this data that we want to work with? The answer is variables.



## What is a Variable?

Variables are a way to store data in your computer program. It is how we describe and label data so that we can easily track and manipulate it. Think of it as a container for your values, the same way a glass holds water. The glass is the variable and the water is the value it holds. Similar to mathematics...



## Declaring Variables

To bring our variables to life in our programming environments we need to declare them. In Python it looks something like this:

```
name = "Teon"
print (name)
```

What going on here is we are initializing the variable, labeling it "name" and at the same time we are setting the value of that variable to the string type "Teon" (Strings are just quoted text but we will learn more about data types in a separate post). And then we're printing it out with the "print" method. 

In Python, the moment you create a variable is the same time you set a value to it. Other statically typed languages have a different convention and break it apart into different stages.



## Naming Rules

There are a couple of things to keep in mind when naming your variables to avoid errors in your code. When naming, always start with either a letter or an underscore. They are case-sensitive. You cannot start with a number. You must only use alpha-numeric characters or underscores throughout. Take a look:

```
# The right way to name a variable
variable = "Correct"
variable_name = "Correct"
variable1 = "Correct"
_variable = "Correct"
VARIABLE = "CORRECT"
VaRiAbLe = "CoRrEcT" # This works but isn't readable

# The wrong way to name a variable
2variable = ERROR
vari-able = ERROR
vari able = ERROR
```

Conventionally, it's better to stick to the top 3. It's cleaner, more preferable, and whoever reads your code will thank you for it, even you.



## Re-declaring & Deleting Variables

Nothing is set in stone. Once you assign a value to a python variable, you can reassign it a different value or even delete it.

```
# Declare
phone_number = 5555555
print(phone_number)
5555555

# Re-declare
phone_number = '555-5555'
print(phone_number)
555-5555

# Deleting
del phone_number
print(phone_number)
NameError: name 'phone_number' is not defined
```



## Scope

Something that we need to wrap our brains around is scope. When programming in Python, there are two types of variables, *local & global.*

**Global** variables are created outside of a function. They are "Global" because they are available throughout our program and can be used everywhere for the rest of your program.

**Local** variables are created inside of a function. They are "Local" because they can only be used locally within that specific function and cannot be seen or used anywhere else. Once the specific function is done running, (we will learn about function in a separate post.) that local function is destroyed. 

```
scope = 'global'
print(scope) # RESULT: 'global'

def randomFunction():
  scope = 'local'
  print(scope)
  
  
randomFunction() #RESULT : 'local'
print(scope) # RESULT: 'global'
```

The only way to preserve it is with the *global* keyword.

```
scope = 'global'
print(scope) # RESULT: 'global'

def globalFunction():
  global scope
  print(scope)
  scope = 'local'
  
  
globalFunction() #RESULT : 'global'
print(scope) # RESULT: 'local'
```

Notice how the function changed the "scope" variable to end up printing 'local'.



## Under The Hood

Let us take a look at what goes on behind the scenes when you create a variable. Upon creating, the variable is being reserved in your computer's memory. Depending on the data type a certain amount of memory is allocated to save the name, value, and data type of the variable in the computer's RAM.

```
Python 3.8.5 (v3.8.5:580fbb018f, Jul 20 2020, 12:11:27) 
[Clang 6.0 (clang-600.0.57)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> phone_number = 5555555
>>> id(phone_number)
4510377296
```

Think of your computers RAM like an ice tray with a lot more ice slots (millions), with each slot being a place to store information like variables. We're referencing an address in our RAM and giving it a name so we can track it. There's a bit more to be mindful of, but we'll go into more detail in the future when needed. For now, that's it!

And there you have in variables in Python.