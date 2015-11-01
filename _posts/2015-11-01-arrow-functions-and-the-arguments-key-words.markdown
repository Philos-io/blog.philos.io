---
layout: post
title:  "Arrow functions and the arguments key word..."
date:   2015-11-01 06:15:58
image: "https://images.unsplash.com/photo-1417733403748-83bbc7c05140?ixlib=rb-0.3.5&q=80&fm=jpg&s=b465f239382e56a02e2cb6e94c7e8118"
comments: true
author: 'Davy Engone'
description: "Arrow functions do not provide the 'arguments' key word but when used within the ES6 module systems..."
categories: teaching knowledge-sharing ES6 JavaScript
---

# Arrow functions, ES6 modules and arguments

As you probably know, the new arrow function in ES6 doesn't provide the Array-like parameter called ```arguments``` nor it provides his own ```this``` context. It's part of the specs.

During one of our HackJam in [Brussels](http://www.meetup.com/javascriptlab/) and [Amsterdam](http://www.meetup.com/javascript-lab-adam/) we were trying to write a simple function that takes multiple arguments and returns their sum. The only restriction was to use **arrow functions**. Keep it simple and focus on the feature.

Here is a simple set of tests we used for writing our function:


![Alt text](/images/arrow-function/arrow-function1.png)

*We use wallabyJS for writing our tests. If you don’t know [wallabyJS](http://wallabyjs.com/) by now, check it out, it’s an amazing tests runner.*

Here is a naïve implementation using ES5.


{% highlight javascript %}
function sum(){
  let result = 0;
  for(let i = 0; arguments.length > i; i++){
    result+=arguments[i];
  }
  return result;
}
{% endhighlight %}

This implementation in ES5 uses arguments since a ```function``` provided it by default. You just have to loop through ```arguments``` and sum every single element.

![Alt text](/images/arrow-function/arrow-function2.png)

As you can see in line 12, we have the list of params that have been passed for the second test.

Let’s implement it using ES6 (officially ES2015) but we like it as ES6. :)

![Alt text](/images/arrow-function/arrow-function3.png)

Wait, didn’t we say that arrow functions don’t provide the ```*arguments*``` key word? What do we have in line 2 when we log arguments?

We all agree that this implementation is not correct.

**This is the point of this blog post!**

Indeed arrow functions don’t have ```arguments```. Line 2 above should have been *```undefined```*. ***Here is the issue, we are using ES6 module which by default will wrap your file into an IIFE and use strict mode***:

{% highlight javascript %}
(function(){
  'use strict';

  const sum = ()=>{
    console.log(arguments) // undefined
    let result = 0;
    for(let i = 0; arguments.length > i; i++){
      result+=arguments[i];
    }
    return result;
  }

  export default sum;
})();
{% endhighlight %}

The value of arguments is coming from the outer function and not the ```sum function``` itself. ***This will definitely bite many people so we hope this little post we'll help avoid this simple mistake.***

To finish our implementation, we can use the new spread operator in ES6. Unlike arguments, we will get a real Array and we will be able to use a functional approach to solve our problem:

{% highlight javascript %}
const sum = (...args)=>{
  return args.reduce((acc, item)=>{
    return acc + item;
  });
}
export default sum;
{% endhighlight %}


Or a shorter version:

{% highlight javascript %}
const sum = (...args) => args.reduce((acc, item)=>{return acc + item;});

export default sum;
{% highlight %}

With wallabyJS, you can clearly see that the spread operator is a real Array which makes our implementation a breeze:

![Alt text](/images/arrow-function/arrow-function4.png)

## Conclusion

Arrow function don’t have arguments by design. Don’t be fool by the ```arguments``` created by the outer function when using it within ES6 modules. Spread operators are one of many features in ES6. Along with string literal and Destructuring, they are our favourite features in the new version of JavaScript.


Happy Hacking!

**[Philos Team](https://philos.io/)**
