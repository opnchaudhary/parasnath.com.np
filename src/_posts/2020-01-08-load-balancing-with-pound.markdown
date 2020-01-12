---
layout: post
title:  "Load balancing with Pound"
author: Paras Nath Chaudhary
date:   2020-01-08 22:17:02 +0545
categories: [Linux]
tags: [CentOS, Pound, Linux, DevOps]
keywords: "CentOS, Linux, Pound, DevOps"
publisher: Paras Nath Chaudhary
---
Pound is a reverse-proxy load balancing server. It accepts requests from HTTP/HTTPS clients and distributes them to one or more Web servers. The HTTPS requests are decrypted and passed to the back-ends as plain HTTP.<!--more-->
If more than one back-end server is defined, Pound chooses one of them randomly, based on defined priorities. By default, Pound keeps track of associations between clients and back-end servers (sessions).

Pound can be installed in CentOS with the following command:
```bash
# yum install epel-release -y
# yum install Pound -y
```

Pound can be then configured by editing the file /etc/pound.cfg
In case you are using ubuntu, you can install with the following command:

```bash
# apt-get install pound
```

Then edit the configuration file /etc/pound/pound.cfg

You can find an example use of Load Balancing with Pound here. The example uses two NGINX server as backend and uses CentOS with Pound for the reverse-proxy load balancing. The very basic configuration used is as:
```
Daemon 0

ListenHTTP
    Address 172.20.18.4
    Port 80
End


Service
    BackEnd
        Address 172.20.18.2
        Port    80
    End

    BackEnd
        Address 172.20.18.3
        Port    80
    End
End
```
You can find an example use of Pound using docker at this [link](https://bitbucket.org/opnchaudhary/load-balancing-with-pound/src/master/).