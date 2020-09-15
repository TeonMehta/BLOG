---
path: iteration
date: 2020-09-15T00:46:26.693Z
title: Iteration
subtitle: Repetition is done better by computers than by humans
author: Teon Mehta
tags:
  - Computer Science
  - Python
  - How to Code
---
By now we notice that computer programming shares many parallels to our real lives. We use computers to tackle many real-world problems, safe to say they're well integrated.  As humans, a big part of life is routine and repetition, we tend to do the same things again and again. As well many times in our programs we fall on the need to repeat the same task multiple times. Suppose we need to print out the numbers from one to ten. With what we know so far, our code would look something like this:



```
print(1)
print(2)
print(3)
...
print(10)
```



This is extremely tedious and can get ugly fast. Furthermore, we're violating a big software prince;[ DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself#:~:text=The%20DRY%20principle%20is%20stated,their%20book%20The%20Pragmatic%20Programmer.) code. The acronym stands for "**D**on't **R**epeat **Y**ourself". As engineers, we aspire to be as efficient as possible and write clean code. So how do we handle repetitive tasks without repeating ourselves? Loops.

A loop is a programming construct that allows us to execute some code for the desired duration, this is also called iteration. Like the previous "If/ Else" statements in our previous post, these iterations allow for control flow in our programs. Let's take a look at both of Python's loop structures.

## While Loops

A while loop is the most general form of iteration you'll find in any program. We can take our previous example of printing one to ten and display using the while loop.



```
x = 0
>>> while x <= 10:
...     print(x)
...     x+=1
```

What is going on here? We'll break it down line for line. First, we initialized a variable "x" and simultaneously assigned it a value of zero. Our second line is our conditional statement using the *while* keyword, testing whether or not "x" is less than or equal to ten. This results in a boolean value, while this value is true we execute the subsequent indented code block. Our third line prints the value of "x" during the specific iteration of the loop. Our final line increments the value of "x" by 1. This means that at the end of each loop the value of x will go up by one.

At the end of this code block is where the magic flow happens. Our program thus returns back to the beginning of our loop to test the while condition. In this case, the variable X is no longer 0 it has increased by one, while one is less than ten the same execution happens and is repeated until "x" is greater than 10 which returns a False boolean thus terminating and breaking out of our loop. This is the output:

```
0
1
2
3
4
5
6
7
8
9
10
>>> 
```



## For Loops

Our second type of loop in Python is a *for* loop. Like the *while* loop, it is used to iterate through data. However, the structure is a bit different. The key difference is that as the while loop iterates based on a boolean value, the *for* loop iterates through a sequence object.

It takes any iterable object(strings, lists, tuples, etc.) and executes a specific action on each element in the sequence. It looks like this:

```
number_list = [0,1,2,3,4,5,6,7,8,9,10]

for number in number_list:
	print(number)

# Output = Same as Above
```

The following's output will be the same as our previous while loop, the numbers from zero to ten. Let's break down what is actually happening here. In the beginning, we have our sequence named "number_list" a list data type.

 
Our first line of the for loop reads for "number" in number_list(List Data Type). However, where did this "number" come from? This is the variable assignment for the current value in the sequence. In actuality, we could've given it any name we wanted. We start at the first item (0 in this case) and we assign it the variable named "number" and then because we've created this variable we're able to call it in our print statement in the subsequent code block. 


We do this for each iteration (similar to for-each loops in other languages), so the next time around we assign the next item in the sequence to the "number" variable and repeat until we've gone through the entire list. Or until we've stated otherwise, which we will see soon.

## Range

We can easily layout the numbers 0-10 in a list and loop through them. What if we want to deal with much larger figures? This can get tedious, but here comes the *range* function. This will generate an object from 0 to whichever number you've input inside the function. You can even declare the starting point.

```
#Range

range(15)

# Output

>> range(0, 15)

print(list(range(5, 10)))

# Output

[5,6,7,8,9]
```

Since we're given an object we can use the list function to quickly convert it to an iterable. Notice here than the last number is not inclusive.



## Break & Continue

As we said previously, loops enable us to control the flow of our programs. How do we do that with loops? So far we haven't seen how to stop or restart our loops based on any logic.. this is where our *break* and *continue* statements come in. They allow us to stop, skip, or completely end our iteration based on a given condition. Here:

```
#BREAK

for letter in "string":
	if letter == "n":
		break
	print(letter)
print("Loop is finished")


# Output

s
t
r
i
Loop is finished
```

First, we're iterating through the word "string" assigning the variable "letter" to each letter in the string and printing it. Second, we set a clause to check where the value of the letter variable contains "n" which it finds after a couple of loops through. Thus we execute our "break" statement which exits the current innermost loop we're in (only one loop here but we'll see nested loops soon) and it terminates there forgoing the rest of the items(letters) in the sequence. We then finished off with our outer print statement.

Continue is slightly different. Take our same example for instance.

```
#CONTINUE

for letter in "string":
	if letter == "n":
		continue
	print(letter)
print("Loop was Continued")


# Output

s
t
r
i
g
Loop was Continued
```

The major difference is that the loop continued to execute after the clause was met. When we got to the iteration where the condition was met, our loop essential skipped through without printing the letter value and went back to the top of the sequence to execute what was remaining.

## Pass

Pass follows the same concept as the *continue* statement however it acts as a null placeholder. Essentially we're saying at this current loop condition "do nothing" and then we carry on. Mostly this is used to replace a previous code block that is no longer needed and the pass ensures that our program does not break.

## Nested Loops

Like any of the other nested structures, a nested loop is just a loop inside of another. Any type of loop can be nested within any other. The innermost loop executes its iterations for every iteration of the outer loop. Sound confusing? It isn't as complicated as it seems.

```
# Nested Loops
for x in range(3):
	for y in range(3):
		print(x,y)
        
        
# Output

00
01
02
10
11
12
20
21
22
```

Basic loop inside another, simple. For the range of 3 (0, 1, 2), we're looping through each in the outer loop. For each of those outer loops, we are again looping through the range of 3 while printing the variables that we've assigned for each.

We start with x (Outer Loop) at 0 & y (Inner Loop) at 0. We looped through all the ranges for y so we get 00, 01, 02. This completes the first loop for x, so it moves on to 1, we get 10, 11, 12, and so on until we've done every level of the inner loop for every level of the outer loop.

## Outro

This and the previous post wraps up the basics of control flow. We're well on our way to constructing logical programs and setting the building blocks for future algorithms.