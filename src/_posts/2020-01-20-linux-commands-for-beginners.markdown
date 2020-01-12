---
layout: post
title:  "Linux Commands for beginners"
author: Paras Nath Chaudhary
date:   2020-01-20 08:30:02 +0545
categories: [Linux]
tags: [Linux, Commands]
keywords: "Linux, Commands"
---
There has been a common misbelief that you need to learn to use the command line to use a Linux Computer. This is completely baseline. You can use Linux even without using the terminal. <!--more-->Distro's like Ubuntu, Mint, etc do not require you to touch the terminal to use it. However, to harness the potential its good to know about the command lines. Here in this post, I am going to show you a few basic commands that you would help you get started and feel comfortable.
&nbsp;  
&nbsp;  
So, fire up your terminal and let's get started with the very basic things.

* Files & Directories:  
    To list the files and directories, use the command ls
    Example:
    ```bash
    $ ls
    ```
    Thi sis the most basic usage. It will list the files and directories. However, this will not display the files or folders that are hidden.
    > Hidden file is a file that starts with a 'dot', example '.file3'  
    
    To list all files including the hidden files use -a. Example
    ```bash
    $ ls -a
    ```
    &nbsp;      
    To create a directory:
    ```bash
    $ mkdir foldername
    ```
    &nbsp;  
    To create a text file:

    ```bash
    $ touch filename
    ```
    To read the contents of a files:
    ```bash
    $ less filename
    ```
    To read the first few lines of file:
    ```bash
    $ head filename
    ```
    To read the last few lines of a file:
    ```bash
    $ tail filename
    ```
    To copy a file:
    ```bash
    $ cp file1 newfile
    ```
    To move a file:
    ```bash
    $ mv file1 newfile
    ```
    To delete a file:
    ```bash
    $ rm filename
    ```
    To copy a directory
    ```
    $ cp -r dir1 dir2
    ```

    To change directory:
    ```bash
    $ cd directoryname
    ```
    To go up one directory:
    ```bash
    $ cd ..
    ```
    To go to the $HOME directory
    ```bash
    $ cd
    ```
    > $HOME is the login directory of the user. Usually it is /home/*username*

&nbsp; 
* Network  
    Now, lets learn about some of the network commands.   

    The first command you need to learn is the ping command to check the connectivity. The most common use is to check if you are connected to your router or the internet. Example:
    ```bash
    $ ping google.com
    ```

    Let's find out the IP address of the computer to do so, use the ip command as follows:
    ```
    $ ip addr
    ```
    Download a file from the internet using the wget command:
    ```bash
    $ wget url_of_file
    ```

&nbsp;  
* Monitoring  
    Let's now look at some of the monitoring commands. 
    Let's find out the memory usage of the system. We will see the total RAM available and it's use space along with details of swap space. For this purpose, we use the **free** command as follows:
    ```bash
    $ free
    ```
    Next, let's find the total disk usage of our system. This will show you the different disk partitions, their size, and usage information
    ```bash
    $ df -h
    ```
    Now let's look at the open process along with the information like process id, the user who created the process, etc.:
    ```bash
    $ ps aux
    ```
    You can also use the top commnad to monitor the current process, memory usage etc.
    ```bash
    $ top
    ```
&nbsp;  
>  All the commands discussed above run the same way in almost all the Linux Distros and Unix based machines.   

&nbsp;  
* Software installation    
    Software installation using source code is done with the following three commands.
    ```bash
    $ ./configure
    $ make
    $ make install
    ```
    It's alsways a good idea to look at the REAME file available along with the source code to know the exact installation steps.

    However, if you want to use the default package manager available in the Linux System you are using. Then the software installation using the command line will be done using different commands in different distros of Linux. So, let's take a look at a few of the common distros:
    * Ubuntu:
    Installation in ubuntu is done using the **apt** or the **apt-get** command. Example to install 'gimp' is:
    ```bash
    $ sudo apt install gimp
    ```
    To remove gimp
    ```bash
    $ sudo apt remove gimp
    ```
    * Fedora / RedHat / CentOS:
    Installation in Fedora/RedHat/CentOS is done using the **dnf** or the **yum** command. Example:
    ```bash
    $ sudo yum install gimp
    ```
    To uninstall gimp:
    ```bash
    $ sudo yum remove gimp
    ```
    * Arch Linux / Manjaro:
    In Arch Linux / Manjaro, we use **pacman**. However, for the AUR packages, there are many package managers. My preferred choice is **yaourt**. Installation using pacman is done as follows:
    ```bash
    $ pacman -S gimp
    ```
    To uninstall a package, use
    ```bash
    $ pacman -Rns gimp
    ```

Please let me know in the comments down there if there is any specific command you want to know about.    