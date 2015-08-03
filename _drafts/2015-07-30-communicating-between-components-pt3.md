---
layout: post
title: Communicating between Components pt3. ( triggers ) - ReactJS
published: false
---

Last week I [published]({% post_url 2015-07-30-communicating-between-components-pt2 %}) a way to communicate between child and parent components with React through a callback.

This method works ok in situations when your child component is a direct descendant of your parent component. It kind of breaks down when you're child components are nested a few levels deep within the parent component and you need to communicate changes up the chain.

In this situation we need a trigger for this.

Assuming you are using some form of MVC
