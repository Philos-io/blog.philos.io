---
layout: post
title:  "Using WallabyJS with Atom.io"
date:   2015-10-16 18:15:38
image: "https://images.unsplash.com/photo-1429051883746-afd9d56fbdaf?q=80&fm=jpg&s=b5bc5b301b282fd18c85d9bb6ef941e6"
comments: true
author: 'Davy Engone'
description: 'WallabyJS is an (intelligent) test runner that runs your tests while coding and gives you feedbacks inline'
categories: teaching knowledge-sharing tools
---


# Using WallabyJS with Atom.io

During our Hack Jam in Brussels and Amsterdam we often use TDD as a leaning tool. I won’t explain the benefits of
using TDD in this post but I’ll highlight the fact that  TESTING is more fun with [WallabyJS](http://wallabyjs.com/).

## What is WallabyJS?

WallabyJS is a test runner for JavaScript! That said, most of people would ask ***why do we need another test runner?***
WallabyJS is not your average test runner, It’s an **intelligent test runner** that does **code coverage**, **runs your tests **
**continuously as you change your code.  It does that right inside your editor. **No need to switch between your
IDE and your console.

WallabyJS isn’t support by all code editors yet.
You can check the list of IDEs supported [here](https://wallabyjs.com/) or
vote here if you want them to support yours.

## Setting up WallabyJS for Atom.io

In this short tutorial, we will focus on atom. We will add the atom-wallaby plugin and I’ll show you how to use it to be
more productive today.

You can find an install of atom [here](https://atom.io/)

Once you have the latest version of atom installed, open the settings panel:

![Alt text](/images/wallabyjs/wallaby-tuto-1.png)

Inside the settings panel, select the install tab and type ‘atom-wallaby’.
Just install that package and you’re good to go. :)

![Alt text](/images/wallabyjs/wallaby-tuto-2.png)

Now let’s open the ES6-Koans project and see how powerful is WallabyJS as a test runner.

![Alt text](/images/wallabyjs/wallaby-tuto-3.png)

To configure Wallaby inside your project, you need to add a configuration file (wallaby.js or wallaby.config).
Inside this file you need to specify few sections:

* files: where are located your source files
* tests: where are located your tests

That’s all you need for a basic usage. For the [Hack Jam](http://www.meetup.com/javascript-lab-adam/). Since we use **ES6** I added an extra section for [Babel](https://babeljs.io/) as you can see in the example above.

Now let’s run Babel and see how useful is this tool. Click on the start button at the bottom right corner of your IDE

![Alt text](/images/wallabyjs/wallaby-tuto-4.png)

Wallaby is now running as you could see below: It gives you inline the results of your assertions. This is fantastic!!

![Alt text](/images/wallabyjs/wallaby-tuto-5.png)

Let’s implement our add function right inside this file and see how wallaby gives us some immediate feedback.

![Alt text](/images/wallabyjs/wallaby-tuto-6.png)

Few things to point out here:

* The error message is not the same anymore. Wallaby is running our tests as you are typing.
* ```console.log(x,y)``` gives you a feedback inline, so no need to open your console or your browser… That’s neat!!

I let you take from there and finish the implementation of this simple function using ES6 and only ES6… Everything should be green!! :)

**Warning**: **atom-wallaby** is still in beta but it works great! If you run into an issue, check the wallaby console or restart it.


## Conclusion

WallabyJS  is productivity tool you should be have in your tool belt. It’s not free but the value you get from it is way above its price.

Now time to hack a bit and feel free to share with us your experience using this tool.

Happy Hacking!

**[Philos Team](https://philos.io/)**
