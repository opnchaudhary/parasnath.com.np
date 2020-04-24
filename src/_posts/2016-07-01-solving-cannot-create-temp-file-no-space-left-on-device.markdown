---
layout: post
title:  "Solving '-bash: cannot create temp file for here-document: No space left on device'"
author: Paras Nath Chaudhary
date:   2016-07-01 18:51:02 +0545
categories: [Linux]
tags: [Linux]
keywords: "Linux, Troubleshooting, Paras Nath Chaudhary"
image: /assets/img/df-terminal.png
---
![df command in Terminal ](/blog/assets/img/df-terminal.png)

Today in this post, I am going to describe about a problem I faced while I was trying to update WowzaStreamingEngine in Ubuntu.  While I ran the script for the update I came to this problem that stated:

```bash
-bash: cannot create temp file for here-document: No space left on device
```
<!--more-->
When I checked for diskspace using the command:
```
$ df -h
```
I had the following output:
```bash
/dev/root        20G  3.1G   16G  17% /
devtmpfs         16G  4.0K   16G   1% /dev
none            4.0K     0  4.0K   0% /sys/fs/cgroup
none            3.2G  848K  3.2G   1% /run
none            5.0M     0  5.0M   0% /run/lock
none             16G     0   16G   0% /run/shm
onne            100M     0  100M   0% /run/user
/dev/md3        1.8T   77G  1.7T   5% /home
overflow        1.0M  1.0M     0 100% /tmp
```

I could clearly see there was enough space. But if you look the above clearly again you will see that /tmp is using 100% usage. This was the cause for the above error message. Now I had to get rid of it. So, the solution was to unmount it. I tried to unmount but again I got another error message saying the device is busy. To find out what process was using the device I ran the following command:

```bash
# lsof | grep /tmp
```
This shows the process that kept the device busy. Killing the process and unmounting the device worked. You can also do lazy unmount using the command
```bash
# umount -l /tmp
```
or
```bash
# umount -l overflow
```

After that I was able to continue the update.