---
layout: post
title:  "Using custom fonts with flutter app"
author: Paras Nath
date:   2020-01-10 18:51:02 +0545
categories: [Flutter]
tags: [Fultter, Dart, Android]
keywords: "Flutter, Dart, Android"
---
The default fonts in the flutter application are great. However, if we want to have custom fonts in the app, we can do that pretty easily. It's pretty easy to use. First of all, download the .ttf files of the fonts and add them to the 'fonts' directory inside your flutter project. The directory structure should be like:
<!--more-->
```nginx
flutter_project/
 - android/
 - build/
 - fonts/
 - ios/
 - lib/
```
Now that you have added the font files to the project, update the pubspec.yaml file as follows:
```yaml
fonts:
  - family: NameOfFont
    fonts:
      - asset: fonts/NameOfFont.ttf
      - asset: fonts/NameOfFont-Black.ttf
  - family: NameOfSecondFont
    fonts:
      - asset: fonts/NameOfSecondFont.ttf
```      
Now that the fonts are added, we can set a font as the default font for the whole app by adding the following line to MaterialApp
```dart
theme: ThemeData(
  fontFamily: 'NameOfFont'
),
```

If you want to use it to a specific widget, you can do as follows:
```dart
Text(
  'Text with custom font',
  style: TextStyle(fontFamily: 'NameOfFont'),
);
```