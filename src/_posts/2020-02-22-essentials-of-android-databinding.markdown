---
layout: post
title:  "Essentials of Android Databinding"
author: Paras Nath Chaudhary
date:   2020-02-22 18:51:02 +0545
categories: [Android]
tags: [Android]
keywords: "Android"
---
Open your projects app/build.gradle file and add the plugin by adding *apply plugin: 'kotlin-kapt'* just above the line with *android {* as shown below:

```gradle
apply plugin: 'kotlin-kapt'
android {
```

Now, we enable data binding by adding 
```gradle
dataBinding{
    enabled true
}
```
inside *android { }*
And then add *kapt com.android.databinding:compiler:3.1.4'* to the dependencies.  

Finally the build.gradle file should have the following configuration:

```gradle
apply plugin: 'kotlin-kapt'
android {

    dataBinding{
        enabled true
    }
}
dependencies {
    kapt 'com.android.databinding:compiler:3.1.4'
}
```
The project is now configured for data binding. To use data binding let's take the example of the empty project that can be created using Android Studio. Here I will show you after the configuration what you need to do.  

First wrap your existing layout file inside a layout tag. Move the xmlns attributes to the layout tag. And also add a data tag inside layout tag. Example:
```xml
<?xml version="1.0" encoding="utf-8"?>
<layout 
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools">

    <data>
    </data>

    <androidx.constraintlayout.widget.ConstraintLayout 
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        tools:context=".MainActivity">

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Hello World!"
            app:layout_constraintBottom_toBottomOf="parent"
            app:layout_constraintLeft_toLeftOf="parent"
            app:layout_constraintRight_toRightOf="parent"
            app:layout_constraintTop_toTopOf="parent" />

    </androidx.constraintlayout.widget.ConstraintLayout>
</layout>
```
Build your project. Now in your MainActivity.kt, you can create the binding variable as 
```kotline
    private lateinit var binding: ActivityMainBinding
```
The type of the binding variable is after the name of the xml layout's filename. Here the layout file name is activity_main.xml. Therefore the binding datatype is ActivityMainBinding. This is obtained by removing the underscore and writing the filename in CamelCase with Binding appended.  

Now we can initialize the variable as
```kotlin
binding = DataBindingUtil.setContentView(this, R.layout.activity_main)
```

The project is configured for data binding. Let's take a simple example of databinding. We will create a variable inside data tag in the layout xml.
```xml
<data>
    <variable
        name="message"
        type="String" />
</data>
```
And then we can use the variable inside the views. For example:
```xml
<TextView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="@{message}"
    app:layout_constraintBottom_toBottomOf="parent"
    app:layout_constraintLeft_toLeftOf="parent"
    app:layout_constraintRight_toRightOf="parent"
    app:layout_constraintTop_toTopOf="parent" />
```
Now in the MainActivity.kt file we can mutate the variable. as
```kotlin
binding.message = "Data Binding Example"
```
The final activity_main.xml file is :
```xml
<?xml version="1.0" encoding="utf-8"?>
<layout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools">
    <data>
        <variable
            name="message"
            type="String" />
    </data>
    <androidx.constraintlayout.widget.ConstraintLayout
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        tools:context=".MainActivity">

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="@{message}"
            app:layout_constraintBottom_toBottomOf="parent"
            app:layout_constraintLeft_toLeftOf="parent"
            app:layout_constraintRight_toRightOf="parent"
            app:layout_constraintTop_toTopOf="parent" />

    </androidx.constraintlayout.widget.ConstraintLayout>
</layout>

```
and the final MainActivity.kt file is 
```kotlin
class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = DataBindingUtil.setContentView(this, R.layout.activity_main)
        binding.message = "Data Binding Example"
    }
}
```
You can run and verify it.

I hope this was helpful to you to get started in Android DataBinding. There is more to explore and learn. Check out Android docs for more. I also keep writing blog posts like this. So don't forget to visit this blog again.

> If you have any questions or suggestion please feel free to write to me.