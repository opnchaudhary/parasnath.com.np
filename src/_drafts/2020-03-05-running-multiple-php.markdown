---
layout: post
title:  "Running multiple PHP versions"
author: Paras Nath Chaudhary
date:   2020-01-10 18:51:02 +0545
categories: [Linux]
tags: [Linux, PHP]
keywords: "Linux, PHP"
---
Most of my time is done writing code. Occasionally, I have to do Linux administration while deploying the applications I write. So today, I came across this situation where I had a PHP application that was written for PHP7.0 and another one that was for PHP7.2. Both of these applications were written by some other developer and I had the task to deploy these two applications to the server.  Here I will explain how I configured a VPS to run multiple PHP versions.  
<!--more-->

Here for my use case, I am running a Ubuntu server. Let's install Apache first.  
> apt install apache2  
I had 'ufw' running to I open port for Apache with the following command  
> sudo ufw allow 'Apache'  

Now I would install php7.0 and php7.2.
> apt install php7.0 php7.2

I will store the two applications in /var/www as:   
1. /var/www/exampleone.com/public_html
2. /var/www/exampletwo.com/public_html

Create virtualhost for the two applications