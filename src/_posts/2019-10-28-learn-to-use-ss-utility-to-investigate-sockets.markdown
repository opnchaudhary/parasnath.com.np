---
layout: post
title:  "Learn to use ss — utility to investigate sockets"
author: Paras Nath
date:   2019-10-27 18:51:02 +0545
categories: [Linux, Terminal]
tags: [Linux, Terminal, ss]
keywords:"Linux, Terminal, Paras Nath Chaudhary"
---
In this post, I will be discussing about a utility you will often use. The utility is ‘ss’. According to the man page of ss:
ss is used to dump socket statistics. It allows showing information similar to netstat. It can display more TCP and state informations than other tools.
<!--more-->
Here, we will go through some of the basic usages of ‘ss’ command, which are as follows:  
```bash
$ ss  
```
Bare ‘ss’ command lists the TCP established connections. It shows ton of information. Now let’s list all listening sockets using -l option  
```bash
$ ss -l
```  
We have now filtered the listing connections only. We can filter TCP and UDP protocols using -t and -u options respectively. For example, to list all the listening sockets using TCP we use:  
```bash
$ ss -tl    
```
![ss-tl](/blog/assets/img/ss-tl.png)  
In the above command you see the service names like domain, ipp and http, if you want to see the port numbers in use, you can use -n option. The example below will show a list of all listening TCP connections with numeric value for the services:  
```bash
$ ss -tln  
```
![ss-tln](/blog/assets/img/ss-tln.png)  
For the service domain we can see port 53, for ipp port is 631 and for http th port is 80. Another usage, would be to list all the TCP connections and the processes that are using the connection. To show process names along with the TCP connections we use -p tag.  
```bash
$ ss -tp  
```
![ss-tp](/blog/assets/img/ss-tp.png)  
The example above shows, all the tcp connections are from a process with name ‘brave’.
You can also list socket connections to a specific machine as :  
```bash
$ ss dst ip_address_of_destination    
```
![ss-dst](/blog/assets/img/ss-dst.png)  
In the example above, you can see the connections to 52.218.201.64.
ss command also allows us to filter connections with various states like closing, closed, listening, established, last-ack etc. An example usage would be as follows to list all connections with state ‘close-wait’:  
![ss-state](/blog/assets/img/ss-state.png)    
If you want to find more details on the options you can use with ‘ss’ command then check the [man page](https://linux.die.net/man/8/ss) or run  
```bash
$ man ss  
```
or you can also run  
```bash
$ ss -h
```  