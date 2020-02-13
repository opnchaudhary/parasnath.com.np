---
layout: post
title:  "Force install npm in Arch Linux"
author: Paras Nath Chaudhary
date:   2020-02-17 08:30:02 +0545
categories: [Linux]
tags: [Linux]
keywords: "Linux"
---
I have been using Arch Linux for the past couple of years. Last year, I changed
to Manjaro, which is also an Arch Linux based distro. Recently, I came across a
problem after I was trying to update the system. Here I will explain the problem 
that I faced and the solution. 
<!--more-->
In the past, whenever I updated the packages and had any issue I was able to use *--force* option. This option used to solve almost all of my problems. The recent version of pacman/yaourt do not have the *--force* option.

Today while I was updating **npm** I got into similar situation. The error was as follows:

```txt
error: failed to commit transaction (conflicting files)
npm: /usr/lib/node_modules/npm/lib/utils/stringify-package.js exists in filesystem

// lines clipped ...

Errors occurred, no packages were upgraded.
```

I searched the internet for a while then I stumbled upon this [issue](https://github.com/nodesource/distributions/issues/636). It's the solution by [n0noob](https://github.com/n0noob). The solution is to use 
*--overwrite='\*'*.  

So the final command would be 
> sudo pacman -S npm --overwrite='*'  

And this solved my problem.  

> Caution: Use --overwrite='*' at your own risk. This command might result in an unusable system. Use it only if you know what you are doing.
