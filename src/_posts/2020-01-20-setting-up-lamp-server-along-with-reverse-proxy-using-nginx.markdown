---
layout: post
title:  "Setting up LAMP server along with reverse proxy using NGINX"
author: Paras Nath Chaudhary
date:   2020-01-20 08:30:02 +0545
categories: [Linux]
tags: [Nginx, LAMP, Linux, SELinux]
keywords: "Nginx, LAMP, Linux, SELinux"
---

In this post, I am going to show you how you can set up a LAMP server along with reverse proxy using Nginx. The system I am using here is CentOS 8.
We will not just install the packages and but also enable SELinux and configure it to work with the LAMP setup. So, we need to set SELinux to enforcing which can be done by running the following command:
```bash
# setenforce 1
```

Now that you have enabled SELinux in your Linux system, Let's install the Apache server by installing httpd package.
```bash
# yum install httpd -y
```

We don't want to run Apache in port 80 because we want to run Nginx at port 80 so we configure Apache to run at port 81. For this purpose, edit /etc/httpd/conf/httpd.conf and change line 'Listen 80' to 'Listen 81'. Now start httpd
```bash
# systemctl enable --now httpd
```

The next step is to install MySQL. In our case, we will be using the MariaDB server which is a fork of MySQL. To install MariaDB run:
```bash
# yum module install mariadb -y
```

Now start the database server:
```bash
# systemctl enable --now mariadb
```
After installation, it is suggested to secure MySQL by running 'mysql_secure_installation':
![MySQL secure installation](/blog/assets/img/mysql-secure-installation.png)

Now its time to install PHP. 
```bash
# yum module install php -y
```

To allow PHP connect to MariaDB install php-mysqlnd:
```bash
# yum -y install php-mysqlnd
```

Also, allow Apache to connect to MariaDB through the network by running the following command:
```bash
# setsebool -P httpd_can_network_connect_db on
```
For PHP based projects the SELinux policy should be httpd_sys_rw_content_t
```bash
# semanage fcontext -a -t httpd_sys_rw_content_t  /var/www/html/*.php
```
Now that, we have install LAMP, we will install Nginx and configure reverse proxy:
```bash
# yum install nginx -y
```

Start Nginx and set it to start at boot
```bash
# systemctl enable - now ngnix
```

To configure the reverse proxy, in your nginx.conf file you can add
```txt
server {

    / {
        proxy_pass http://localhost:81/
        index index.html index.html
    }

}
```

Let's configure the firewall to open the ports 80 and 443 on the system with the following command:
```bash
# firewall-cmd - add-service=http - add-service=https - permanent
# firewall-cmd - reload
```

SELinux disables any web server to connect to the network. To enable network connection, we need to set sebool httpd_can_network_connect to on. We use -P option for persistence change across a system reboot.
```bash
# setsebool -P httpd_can_network_connect on
```

This can be verified with the command
```bash
# getsebool httpd_can_network_connect
```

The output is as follows:
![getsebool httpd_can_network_connect](/blog/assets/img/se-bool-httpd-can-network-connect.png)