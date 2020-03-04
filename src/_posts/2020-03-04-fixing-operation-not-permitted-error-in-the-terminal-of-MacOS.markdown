---
layout: post
title:  "Fixing 'Operation not permitted' error in the terminal of MacOS"
author: Paras Nath Chaudhary
date:   2020-03-04 08:30:02 +0545
categories: [Troubleshooting]
tags: [MacOS, Terminal]
keywords: "MacOS, Terminal"
---

Today, I updated my Early 2015 MBP. When I fired up Terminal and tried running a few commands like 'ls', 'pwd', etc I was getting strange error 'Operation not permitted.' I looked for solutions on the internet and found a solution [here](https://osxdaily.com/2018/10/09/fix-operation-not-permitted-terminal-error-macos/). The step by step solution is as follows:
<!--more-->  

Steps:  
1. Close Terminal  
2. Open System Preferences  
3. Choose 'Security & Privacy'  
4. Select Privacy Tab  
5. From Left side menu select 'Full Disk Access'  
6. Click the 'lock' icon on the lower left part and authenticate the user with admin privileges  
7. Click the '+' icon, an application chooser dialog box will open. Go to 'Applications'->'Utitilites' and Select *Terminal*  
8. Open the 'Terminal'  