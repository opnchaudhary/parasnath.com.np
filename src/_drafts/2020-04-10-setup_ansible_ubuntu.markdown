---
layout: post
title:  "Setup ansible in ubuntu"
author: Paras Nath Chaudhary
date:   2020-04-10 18:51:02 +0545
categories: [Linux]
tags: [Linux, Ansible, DevOps]
keywords: "Linux, Ansible, DevOps"
---
Here we are going to use two machines. 
Machine A: 192.168.10.2
Machine B: 192.168.10.3

In Machine A:
* Setup SSH
* Install ansible and sshpass `apt install ansible sshpass`
* Edit /etc/ansible/hosts and add
[test_server]
192.168.10.3 ansible_ssh_user=root ansible_ssh_pass=password

* Create a sample.yml file
```yml
---
- name: example-website
  hosts: test_server
  remote_user: root
  become: true
  tasks:
    - name: install apache2
      apt:
        name: apache2
        state: latest
    - name: run apache2
      service:
        name: apache2
        state: started
    - name: create content
      copy:
        content: "Congratulations on running your website"
        dest: /var/www/html/index.html
```

In Machine B: 
* Setup SSH

Now we want to deploy the same website in one more machine (Machine C: 192.168.10.4) then all we need to do is setup SSH in third machine and add it in /etc/ansible/hosts
[test_server]
192.168.10.3 ansible_ssh_user=root ansible_ssh_pass=password
192.168.10.4 ansible_ssh_user=root ansible_ssh_pass=password