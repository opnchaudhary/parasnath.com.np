---
layout: post
title:  "Install docker-compose in CentOS"
author: Paras Nath Chaudhary
date:   2019-10-19 18:51:02 +0545
categories: [Docker, CentOS]
tags: [CentOS, Docker, docker-compose]
keywords: "CentOS, Docker, docker-compose, Paras Nath Chaudhary"
---
![Install docker-compose in CentOS
](/blog/assets/img/docker-centos.png)

Recently, I installed CentOS 8 for one of our in house development server. The server is used to run various docker images for development purpose. For which we wanted to use docker-compose too.
To install docker-compose run:
<!--more-->
```bash
$ sudo curl -L “https://github.com/docker/compose/releases/download/1.24.1/docker-compose-$(uname -s)-$(uname -m)” -o /usr/local/bin/docker-compose
```
The application is installed in /usr/local/bin/docker-compose. To make it executable run
```bash
$ sudo chmod +x /usr/local/bin/docker-compose
```
It can be run by typing the full path, but here I will show two options one by creating an alias and another by create a soft link:
To create an alias which will work for the user logged in, open your ~/.bashrc file and add the following line
```bash
alias docker-compose=’/usr/local/bin/docker-compose’
```
Now, you are ready to go. You can simple run with ‘docker-compose’
The other method is creating alias, to create an alias, you can add it to any of your executable bin folder,
```bash
$ sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
```