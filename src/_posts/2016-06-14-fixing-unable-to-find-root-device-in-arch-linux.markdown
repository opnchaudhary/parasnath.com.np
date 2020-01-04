---
layout: post
title:  "ArchLinux crashed with error 'Unable to find root device...Youre are being dropped to a recovery shell'"
author: Paras Nath
date:   2016-06-14 18:51:02 +0545
categories: [Linux]
tags: [Linux]
---
![Arch Linux Logo ](/blog/assets/img/arch-linux-logo.png)
After been using Ubuntu/Fedora alternately one after the other for couple of years, I decided to use Arch Linux because of its concept of rolling-release unlike Ubuntu/Fedora. So on February 23rd I installed Arch on my system. <!--more-->It was working all good till June 11,2016 evening. When I suddenly bumped into an error when I booted up my system. I don't know what cause the error. As far as I remember , I forgot the update that was running in my guake terminal last time when I shutdown my computer. And then when I came back to turn it on. I had this error on my screen:

```bash
Warning: /lib/modules/4.6.2-1-Arch/modules-.devname not found --ignoring
starting version 229
Error : device 'UUID=xxxxxx-xxxx-xxx-xxx-xxxxxx' not found skipping fsck.
Error: Unable to find root device 'UUID=xxxxxx-xxxx-xxx-xxx-xxxxxx'.
Youre are being dropped to a recovery shell
    Type 'exit' to try and continue booting
sh: can't access tty: job control tunred off
[rootfs]#_ 
```
First thing I tried to do was type 'help' in the shell presented; the keyboard didn't respond. I was clueless. And then I started searching for this error in different forums for a fix. And somewhere I saw '# mkinitcpio -p linux' should fix it. So what I did was create bootable usb with the command.
```bash
#dd if=arch.iso of=/dev/rdisk2 bs=1m
```
You can find the USB installation guide at : https://wiki.archlinux.org/index.php/USB_flash_installation_media.
After booting my pc with the bootable USB. I was automatically logged in as root of the usb bootable system. I did a quick check to see the name of my drive using the command :
```bash
 root@archiso~# fdisk -l
 ```
I could see my partitions there the way I had set, so I went to ahead to mount my drives(root drive was /dev/sda2) and use the swap (swap was /dev/sda1).
```bash
 root@archiso~# mount /dev/sda2 /mnt
root@archiso~# swapon /dev/sda1 
```

Then I ch-rooted into my system using the command:
```bash
 root@archiso~# arch-root /mnt
 ```
And then I installed grub to my hard drive. The command to install is:
```bash
 sh-4.3# grub-install /dev/sda
 ```
After grub was installed to the drive, I generated the init file with the command below:
```bash
 sh-4.3# mkinitcpio -p linux
 ```
To generate grub configuration file I ran command:
```bash
 sh-4.3#grub-mkconfig -o /boot/grub/grub.cfg
 ```
After that I exited from the ch-root with the command exit
Then I unmount my drive with the command:
```bash
 root@archiso~#umount /mnt
 ```
and rebooted my system.
My system was all running back again.Hope this post can help you resecue your system from similar situtation.