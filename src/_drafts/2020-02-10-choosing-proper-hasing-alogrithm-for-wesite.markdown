---
layout: post
title:  "Choosing proper hashing algorigthm for your website"
author: Paras Nath Chaudhary
date:   2020-01-10 18:51:02 +0545
categories: [Hashing, Security]
tags: [Security]
keywords: "Hashing, Security, Web Development"
image: /assets/img/hashing.png
---
## What is hashing?
Hashing is the process of generating a fixed length string from an input of any length using mathematical operations. The best hashing algorithm is one which generates hash that is not reversible to original string.
## Popular Algorithms
There are several hashing algorithms. Some of them are :
* MD5

    This is one of the most widely used hashing algorithm.
* SHA

* SHA-2

* bcrypt

    However there are a few problems with using bcrypt. They are:
    * bcrypt truncates passwords longer than 72 characters.
    * bcrypt turncates null characters
