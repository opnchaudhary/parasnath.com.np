---
layout: post
title:  "OWASP TOP 10 Proactive Controls in Brief"
author: Paras Nath Chaudhary
date:   2020-02-17 08:30:02 +0545
categories: [Security]
tags: [Security, OWASP]
keywords: "Security, OWASP"
image: /assets/img/owasp-top-10-proactive-controls.png
---
Software Security is a measure concern today. We can no longer tolerate simple security problems leading to a security havoc. Here I want to list the top 10 proactive controls that should be practiced during software development to create a secure software.
![OWASP Top 10 Proactive Controls](/blog/assets/img/owasp-top-10-proactive-controls.png)
<!--more-->

OWASP Top 10 Proactive controls is a list of security technique that should be considered for every software development. They top 10 controls are listed as follows in the order of their importance, first being the topmost priority. 

* Define Security Requirements  
 A security requirement is a statement of needed security functionality that ensures one of the many different security properties of software being satisfied. OWASP Application Security Verification Standard (ASVS) can be used to define security requirements. [OWASP ASVS](https://www.owasp.org/index.php/Category:OWASP_Application_Security_Verification_Standard_Project) is a catalog of available security requirements and verification criteria.  
* Leverage security frameworks and libraries  
 A developer writing an application might not have sufficient knowledge, time or budget to properly implement or maintain security features. Therefore, secure coding libraries and frameworks should be leveraged as much as possible. The embedded security in such libraries and frameworks help guard against security-related design and implementation flaws. 
 
* Secure database access  
    While making a database secure, the following four areas should be considered:
    * Secure Query
    * Secure configuration
    * Secure authentication 
    * Secure communication

* Encode and Escape data  
 This is the main attack points used for SQL injection. Data should be properly encoded before they are used in the target like in the Database query so that the inputs are safe. And while displaying the data back to the users, they can be escaped so that the data appears as the user expects.
  
* Validate all inputs  
 This is a programming technique to ensure only the correct format of data enters the system. These can be done with the help of regex matches.
 
* Implement digital identity  
 The implementation of digital identity refers to the implementation of a proper authentication system so that the system knows who the user is.
 
* Enforce access controls  
 Enforcing access controls refers to the implementation of proper authorization i.e. to allow or deny specific requests to a user, program or process.
 
* Protect data everywhere  
 A software system might collect data like passwords, card numbers, health records, personal details, etc. These kinds of data should be protected. Proper hashing and encryption should be done so that they are not compromised by a third party.

* Implement Security Logging and Monitoring  
 Logging is commonly used by developers for diagnostic purposes. The same tools and patterns can be used to log security information like authentication, authorization, etc. So that they can be monitored. 
 
* Handle all errors and exceptions  
 Handling errors and exceptions occur in all areas of an application including critical business logic as well as security features and framework code. Certain attacks against the system can trigger errors and exceptions so handling error and exception can be used in the form of an intrusion detection system.

These are the basic things a developer should practice. It should be taken as the baseline standard and not as the comprehensive security steps to be followed. I will be discussing more security controls that needs to be followed to secure your software in my upcoming posts.

 You can find the full document [here](https://www.owasp.org/images/b/bc/OWASP_Top_10_Proactive_Controls_V3.pdf).