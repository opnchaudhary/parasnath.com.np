---
layout: post
title:  "Schedule your tasks with 'at' utitlity"
author: Paras Nath
date:   2019-10-27 18:51:02 +0545
categories: [Linux]
tags: [at, Linux]
---
In this post, I am going to share you about a utility in Linux for scheduling your scripts. I will be showing how you can use a very simple and easy utility called ‘at’. First of all, if its not already install you can install it by running:
```bash
$ sudo yum install at -y
```
Now that at is installed. You can start the atd daemon:
```bash
$ sudo yum start atd
```
<!--more-->
We are all set we can now schedule tasks. For our case we will use an example script ‘example.sh’ which will broadcast a message to the wall:
echo “Script is running” | wall
We will schedule the script to run now:
```bash
$ sudo at -f example.sh now
```
We can run at a specific time as:
```bash
$ sudo at -f example.sh 10:30
```
We can view the scheduled tasks by running atq command:
```bash
$ sudo atq
```

To remove a task from the at queue, you can run ‘at -d task_number’. For example to remove task with id 4 we would run :
```bash
$ sudo at -d 4
```
By default the queue name of tasks added with ‘at’ command is a. You can set a new queue name with -q option. For example
```bash
$ sudo at -q c -f example.sh 12:12
```
Allowed names for queue are a-z and A-Z.
In the upcoming posts, I will be writing about scheduling with ‘cron’. So stay tuned. 🙂