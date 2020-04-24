---
layout: post
title: "Problems faced while updating/upgrading WordPress"
author: Paras Nath Chaudhary
date: 2020-01-24 20:30:02 +0545
categories: [Web Development]
tags: [WordPress]
keywords: "WordPress, Web Development"
---
Keeping the software up to date is one of the methods to keep your software secure.
In this post, I am going to share solutions to some of the common issues you might
face while updating/upgrading your WordPress Applications. 
<!--more-->
WordPress is a blogging and content management system based on PHP and MySQL. It is a free and open-source content management system licensed under GPLv2. It started as a blogging platform in 2003. The use of WordPress has exploded and now it is the platform of choice for over 35% of all sites across the web. 

WordPress has features like Customizable design, Responsive design, SEO friendliness, high security, high performance, powerful media management, ease of use, accessibility, etc. It is very extensive and has over 54,000 plugins. It is, therefore, a platform of choice not just for hobby blogs but also biggest news sites online and online stores. 

WordPress can be viewed in the following 4 component architecture:
* WP Core  
WP Core is a set of code that provides the backbone of WordPress. WP Core includes the main WordPress Framework files, configurations, admin panel, etc.

* WP Theme  
It is the visual aspect that is for external users. It contains a set of files that determine the look and feel of the WordPress website.

* WP Plugin  
It is the third party customization aspect to add features and functionalities upon the existing WordPress functionalities. 

* WP Media  
It is a set of files such as images, audios, videos, etc. It is a storage directory for the media files that are uploaded from the dashboard.

WordPress Security is a huge importance for any WordPress website owner. No software is 100% secure. Bugs and vulnerabilities can be discovered as time passes. Therefore, regular patches are done to the existing software system. So, one of the ways to have a secure website is to have the latest software running. For this, WordPress has an update/upgrade feature that needs to be done on a regular basis.

However, update/upgrade does not go well every time. There are times when the update/upgrade fails and the website goes down. Here I will discuss the two kinds of problems that we face in such a case which are discussed as follows: 
1. Stuck at maintenance mode 
During the update/upgrade of WordPress themes and plugins, WordPress downloads the required update files. Before it starts applying the changes to the instance of WordPress installation, it switches to maintenance mode and once the update is complete, it switches back to production mode. Switching to maintenance mode is important to do the update in a seamless manner without letting the visitors know what is going behind the scene. Also, during the update, the application might reveal information that might impose security risk on the web application. Switching to maintenance mode is done by creating a .maintenance file in the root directory of the WordPress maintenance directory. To remove the maintenance mode, all we need to do is delete the file '.maintenance'.

2. Another update is currently in progress  
The second kind of problem you might face is 'Another update is currently in progress'. This happens when WordPress update is started but it never completes. In such a case, you will see that you still have an outdated WordPress. But the upgrade button doesn't let you upgrade it. It displays the message. 'Another update is currently in progress'. To fix this issue, you need to access the database system, In your *{tbl_prefix}_options* table search for option_name='core_updater.lock' and delete. After the deletion, you will now be able to upgrade the WordPress installation to the latest version.