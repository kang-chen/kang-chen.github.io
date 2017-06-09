---
layout: post
title: Syntax for Redux Reducers, pure ES6 vs functional libraries
published: true
---

I'd like to discuss the syntax used to write Redux reducers.

If you don't already know what Redux or reducers are, they are basically the state machine controller for a React application. Writing the code for reducers involves immutable pure functions, which means given certain input params, the function will return a new values with no mutations on any variables outside of it's scope.

What is the opposite of functional? That would be imperative (procedural) programming. For me and probably most humans it feels normal to be doing procedural programming and that's usually what is taught in comp sci 101. Procedural is kind of like reading a book, top down. While functional often feels like you're building a neutral network of code.

I don't want to get into architecting a redux application, there are thousands of articles out there that tackle this topic. I want to highlight the readability differences of using pure ES6 syntax, and a mixed imperative approach using functional libraries.

**Input data structure:**

{% highlight javascript %}
products = [
    {
      id: 1,
      inventory: 2,
      price: 333.00,
      title: "Samsung 4"
    },
    {
      id: 2,
      inventory: 3,
      price: 222.00,
      title: "iPhone 5"
    }
  ]
{% endhighlight %}

**Output data structure:**

{% highlight javascript %}
state = {
    {
      1: {
        id: 1,
        inventory: 2,
        price: 333.00,
        title: "Samsung 4"
      }
    },
    {
      2:
        {
          id: 2,
          inventory: 3,
          price: 222.00,
          title: "iPhone 5"
      }
    }
  }
{% endhighlight %}

**Pure ES6:**

{% highlight javascript %}

const translate = (state = {}, products) => {
  return {
    ...state,
    ...products.reduce((obj, product) => {
      obj[product.id] = product
      return obj
    }, {})
  }
}

//what this spread syntax does
let obj1 = { a:1, b:2 }
let obj2 = { b:3, c:4}
let obj3 = { ...obj1, ...obj2}
//will result in {a:1, b:3, c:4}

{% endhighlight %}

**Using functional libraries**

{% highlight javascript %}

import _ from "lodash"

const translate = (state = {}, products) => {
  let newState = _.clone(state)
  _.each(action.products, (product) => {
    let id = product.id
    let newObj = {}
    newObj[id] = _.assign( product, newState)
    _.merge(newState, newObj)
  })
  return newState
}

{% endhighlight %}

Personally from a maintainability perspective, I prefer the later syntax approach using a library like underscore, lodash, or immutable.js.