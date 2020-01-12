---
layout: post
title:  "How to install VirtualBox6 in CentOS 8"
author: Paras Nath Chaudhary
date:   2019-10-27 18:51:02 +0545
categories: [Linux]
tags: [CentOS, VirtualBox, Linux]
keywords: "VirtualBox, CentOS8, Linux, Paras Nath Chaudhary"
image: /assets/img/virtualbox.png
---
VirtualBox is a free and open source hosted hypervisor developed by Oracle Corporation. It runs on Linux, Windows, Mac and Solaris hosts supporting a large number of guest operating systems. You will find several blog posts about the installation of VirtualBox in the older version of CentOS. <!--more-->Since, CentOS 8 came around two months ago in September 2019, in this post, I will be showing the steps to install VirtualBox 6 in CentOS 8.

First of all let’s install the header and development tools:
```bash
$ sudo yum install -y kernel-devel kernel-headers gcc make perl
```
Now download and import oracle’s public key, this will be used for gpgcheck which verifies the authenticity of the package:
```bash
$ sudo wget https://www.virtualbox.org/download/oracle_vbox.asc
$ sudo rpm --import oracle_vbox.asc
```
VirtualBox is not available in the main repo of CentOS, therefore we need to add the repo that provides VirtualBox. To download virtual box repo run the following command:
```bash
$ sudo wget http://download.virtualbox.org/virtualbox/rpm/el/virtualbox.repo -O /etc/yum.repos.d/virtualbox.repo
```
Or you can also create virtualbox.repo file in /etc/yum.repos.d directory and put the following contents:
[virtualbox]
name=Oracle Linux / RHEL / CentOS-$releasever / $basearch - VirtualBox
baseurl=http://download.virtualbox.org/virtualbox/rpm/el/$releasever/$basearch
enabled=1
gpgcheck=1
repo_gpgcheck=1
gpgkey=https://www.virtualbox.org/download/oracle_vbox.asc
Install VirtualBox:
```bash
$ sudo yum install -y VirtualBox-6.0
```
VirtualBox should be now ready for use. If it still doesn’t work, check the status of VirtualBox Linux kernel module service as follows:
```bash
$ sudo systemctl status vboxdrv
```
If the status is failed as shown in the figure below:  
![VirtualBox status](/blog/assets/img/virtualbox-status.png)    
Check the log:  
![VirtualBox log](/blog/assets/img/virtualbox-log.png)  
As you can see in the log, it asks you to install libelf-dev or libelf-devel of elfutils-libelf-devel. So, install elfutils-libelf-devel as shown below:

Finally, run /sbin/vboxconfig:  
![vboxconfig](/blog/assets/img/vboxconfig.png)  
You should now have a working VirtualBox. If you still have any issues with the installation let me know in the comments.