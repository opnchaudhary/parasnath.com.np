---
layout: post
title:  "set up Apache hosting from home directory"
author: Paras Nath Chaudhary
date:   2020-01-20 08:30:02 +0545
categories: [Linux]
tags: [Linux, Apache, SELinux]
keywords: "Linux, Apache, SELinux"
---

Install httpd
```bash
#yum install httpd
```
Configure the firewall
```bash
# firewall-cmd -P - add-service=http
# firewall-cmd -P - add-service=https
```
enable home directory serving by editing /etc/httpd/conf.d/userdir.conf
```nginx
<IfModule mod_userdir.c>
    # UserDir disabled
    UserDir public_html
</IfModule>

<Directory "/home/*/public_html">
    AllowOverride FileInfo AuthConfig Limit Indexes
    Options MultiViews Indexes SymLinksIfOwnerMatch IncludesNoExec
    Require method GET POST OPTIONS
    Options Indexes Includes FollowSymLinks
    AllowOverride All
    Allow from all
    Order deny,allow
</Directory>
```

Enable home directory serving by apache by SELinux
```bash
# setsebool -P httpd_enable_homedirs true
```

set up the SELinux context
```bash
# chcon -R -t httpd_sys_content_t /home/user/public_html
```