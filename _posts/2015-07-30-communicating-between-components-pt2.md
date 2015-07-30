---
layout: post
title: Communicating between Components pt2. ( child to parent ) - ReactJS
published: true
---

As a followup to a post a while back about communicating between React components. I'd like to discuss a couple of methods to communicate a change in state from from a child component to a parent component.

The first method is for a parent node to pass down a callback into the child component, a handler inside the child component can execute this callback which changes the state of the parent component.

**The inner component**

{% highlight javascript %}

var InnerComponent = React.createClass({
  handleChange() {
    this.props.callbackChange();
  },
  render() {
    return (
      <div className="inner-component">
        <button onClick={this.handleChange}> Trigger change </button>
      </div>
    );
  }
});

{% endhighlight %}

The child component takes a prop, which is a callback from the parent component.

**The outer component**

{% highlight javascript %}

var OuterComponent = React.createClass({
  handleChange() {
    //handle change here
  },
  render() {
    var outerClass;
    outerClass = this.state.changed ? "outer-component changed" : "outer-component";

    return (
      <div className={outerClass}>
        <InnerComponent callbackChange={this.handleChange}/>
      </div>
    );
  }
});

{% endhighlight %}

In the parent component we attach a handler to the callback that we pass into the child component.

<pre><code>
<p data-height="468" data-theme-id="15231" data-slug-hash="Pqxyqr" data-default-tab="result" data-user="kang" class='codepen'>See the Pen <a href='http://codepen.io/kang/pen/Pqxyqr/'>Communicate between React components</a> by Kang Chen (<a href='http://codepen.io/kang'>@kang</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
</code></pre>
