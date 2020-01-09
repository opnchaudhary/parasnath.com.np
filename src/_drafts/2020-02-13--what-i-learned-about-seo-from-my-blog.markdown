---
layout: post
title:  "What I learned about SEO from my blog"
author: Paras Nath Chaudhary
date:   2020-01-13 08:30:02 +0545
categories: [SEO]
tags: [SEO]
keywords: "SEO"
---
Let me tell you that I am not an SEO expert. These are some of the key learnings while I was optimizing my website for Search Engines.

There have been many times when I thought of starting my blog, wrote a few articles and stopped. After a couple of months or a year, the same thing again comes to my mind and I start again. This has been happening for a long time. While trying to start a blog, I have also had my hands-on Search Engine Optimization (SEO). If the posts I write don't reach you, then its possibly a waste of time. So, I tried to make them optimized for SEO. In my previous tries, I learned not so much that I have learned this time. So, I am going to share some of the things I have been doing for this one. 

One quick note here. The tips I am going to share are written from a developer's perspective. That means, to implement some of it you might have to know some programming and server configuration. However, if you don't know someone from your team might be able to help do it. 

With a hope that these would help you with your website's SEO.

1. URL  
It's always good to have your brand name in the domain. And also 
The next thing is the URL for your website should not be cryptic (hard to remember ) or very long. 
3. Add proper meta tags
    1. Add language   
    This tells the search engines the language your website uses.
    2. Optimize your title  
    Your title should be optimum. A good title should be from 10 to 70 characters.
    2. Add favicon  
    Favicon is used for branding. It appears along with the title of the page. a favicon helps users quickly recognize your website.
    3. Add canonical links  
    Using canonical links helps the search engines identify the original content and duplicate content. For example, you have content hosted in abc.com/first-post and you have the same post in xyz.com/first-post. Then you can set up a canonical post on your abc.com website to xyz.com so that the search engines understand. If you don't have the content on another website. It is still a good idea to use canonical links to reference to the same link. For canonical URLs, use absolute URLs instead of relative URLs.
    3. Add meta description
4. Use proper header tags  
Use only one H1 tag on a page. This should be the most significant phrase you want to highlight on the page. Use other header tags like H2, H3, etc according to the phrase's significance on the page. I usually go with the title of the page for the H1 tag.
5. Work on the accessibility of your website  
    1. Add alt tags and title to all images
    Example:
    ```html
    <img src="example.jpg" alt="Example" title="Example" />
    ```
    2. Add a title to all href links.
    Example:
    ```html
    <a title="Example Website" href="http://example.com">Link</a>
    ```
    2. Use proper contrast  

6. Use schema to structure your data  
    Despite the advancements, Machines still cannot understand what we humans can. So, it is a good idea to structure your data so that machines can actually understand what your website is about. You can learn more about this at [here](https://schema.org/)
7. Speed up your website
    1. use compression in your webserver
    2. Minify your assets
    3. Use CDN to serve static files
    4. Defer your CSS and javascript files  
    It's quite easy to load javascript files asynchronously. To do so simply use the async keyword as follows:
    ```html
    <script async src="script.js"></script>
    ```
    However, for CSS, I use a trick that I found [here](https://www.filamentgroup.com/lab/load-css-simpler/). The code is as follows:
    ```html
    <link rel="stylesheet" type="text/css" href="style.css" media="print" onload="this.media='all'" />
    ```
    4. Server your assets from cookieless domain
8. Properly configure your web server for security
    1. Use HTTPS
    2. Setup appropriate headers  
    At a minimum I suggest you to set up the following headers:
        1. X-Frame-Options
        2. X-Xss-Protection
        3. X-Content-Type-Options
        4. Feature-Policy
        5. Content-Security-Policy
9. Submit to search engines
    1. Submit to Google Search Console.
    2. Submit to Bing Webmasters
    3. Submit to Yandex    
10. Keep your website fresh
11. Create a sitemap file   
A sitemap is usually am XML file that tells web crawlers about the structure of your website. An example of sitemap is as follows:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	<url>
		<loc>https://parasnath.com.np/</loc>
		<lastmod>2020-01-03</lastmod>
		<changefreq>weekly</changefreq>
		<priority>0.8</priority>
	</url>
	<url>
		<loc>https://parasnath.com.np/blog/</loc>
		<lastmod>2020-01-03</lastmod>
		<changefreq>weekly</changefreq>
		<priority>0.9</priority>
	</url>	
</urlset>
```
12. Create proper robots file, an example is as follows:
```txt
User-Agent: *
Disallow: /readme.md

# Directories
Disallow: /zohoverify/
# Sitemap
Sitemap: http://parasnath.com.np/sitemap.xml

User-Agent: Googlebot
Allow: /*.js*
Allow: /*.css*
Allow: /*.jpg*
```
13. Add Analytics  
Adding analytics is crucial for your blog to better understand your audience.

I know, I haven't covered all that I have done with my blog. I will keep elaborating on the points I have made above in my later posts. In the meantime I will list some of the tools I use for my SEO here:
* [SEOQuake](https://www.seoquake.com/index.html)
* [Structured Data Testing Tool](https://search.google.com/structured-data/testing-tool)
* [Immuniweb](https://www.immuniweb.com/websec/)
* [LightHouse](https://developers.google.com/web/tools/lighthouse/)
* [SemRush](https://www.semrush.com/)