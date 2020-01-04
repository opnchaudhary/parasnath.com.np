---
layout: post
title:  "Share content through flutter app"
author: Paras Nath
date:   2019-10-03 18:51:02 +0545
categories: [Mobile Development, Flutter, Dart, Android]
tags: [Fultter, Dart, Android]
keywords: "Flutter, Dart, Android, Paras Nath Chaudhary"
---

Today, in this post, I am going to share how you can share the content of your app using share plugin. It’s pretty easy to get this work. First of all create a flutter project then in your pubspec.yaml file add the following line in dependencies:

```yaml        
share: ^0.6.2+3
```
<!--more-->
Then run,

```bash
$ flutter packages get
```
Now let’s create a button on click of which we will share the content we want to share. To share a plain text, we would simply import the library by placing

```dart
import 'package:share/share.dart';
```
at the top of the file and then using the following code in the body section:
```dart
RaisedButton(
  child: Text("Share"),
  onPressed: (){
    Share.share("Awesome stuff to share");
  },
)
```
We also might want to add subject while sharing in such a case we use:
```dart
RaisedButton(
  child: Text("Share"),
  onPressed: (){
    final RenderBox box = context.findRenderObject();
    Share.share("Main message is this",
        subject:"this is the subject",
        sharePositionOrigin: box.localToGlobal(Offset.zero) & box.size);
  },
)
```
A full example is as follows:
```dart
import 'package:flutter/material.dart';
import 'package:share/share.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);
  final String title;
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Column(
        children: <Widget>[
          RaisedButton(
            child: Text("Share"),
            onPressed: (){
              final RenderBox box = context.findRenderObject();
              Share.share("Main message is this",
                  subject:"this is the subject",
                  sharePositionOrigin: box.localToGlobal(Offset.zero) & box.size);
            },
          )
        ],
      )
    );
  }
}
```
![Share content through flutter app
](/blog/assets/img/share-content-through-flutter-app.png)