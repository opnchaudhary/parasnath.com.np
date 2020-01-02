---
layout: post
title:  "Install jdk7 in ubuntu 18.04"
author: Paras Nath Chaudhary
date:   2019-10-26 18:51:02 +0545
categories: [Ubuntu, Java]
tags: [Ubuntu, Java]
---
JDK7 has been deprecated however, there are still softwares that depend on it. I came across similar issue today and therefor I had to install jdk7. I will show what you need to do if you want to do the same. Frist download archive file of jdk from https://www.oracle.com/technetwork/java/javase/downloads/java-archive-downloads-javase7-521261.html. In my case I am going to download jdk-7u80-linux-x64.tar.gz. Now extract the file with the following command:
```bash
$ tar xvzf jdk-7u80-linux-x64.tar.gz
```
Move the extracted directrory to /usr/lib/jvm
```bash
$ sudo mv jdk1.7.0_80 /usr/lib/jvm
```

To make the installed java available for update-alternatives run the following command
``` bash
$ sudo update-alternatives — install “/usr/bin/java” “java” “/opt/jdk/jdk1.7.0_80/bin/java” 1
$sudo update-alternatives — install “/usr/bin/javac” “javac” “/opt/jdk/jdk1.7.0_80/bin/javac” 1
$ sudo update-alternatives — install “/usr/bin/javaws” “javaws” “/opt/jdk/jdk1.7.0_80/bin/javaws” 1
```
Now that update-alternatives is aware of the newly installed java, you can change it with following command and select the desired version of java
```bash
$ update-alternatives --config java
```
You can verify with
```bash
$ javac -version
```