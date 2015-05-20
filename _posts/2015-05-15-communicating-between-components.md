---
layout: post
title: Communicating between Components - ReactJS
published: true
---

I want to communicate a property change from one component to another component.

The answers on Stackoverflow involved quite a bit of complexity, I have tried to explain it in a simple manner.

**The inner component**

{% highlight javascript %}

InnerComponent = React.createClass({

  getInitialState: function() {
    return {
      changed: this.props.changed
    };
  },
  componentWillReceiveProps: function(nextProps) {
    return this.setState({
      changed: nextProps.changed
    });
  },
  render: function() {
    # view the full render function in codepen
  }

});

{% endhighlight %}

The primary concept is that the state of the outer component is copied into the props of the inner component.

**The outer component**

{% highlight javascript %}

OuterComponent = React.createClass({

  getInitialState: function() {
    return {
      changed: false
    };
  },

  render: function() {

    # view the full render function in codepen

    InnerComponent({changed: this.state.changed})
  }
});


{% endhighlight %}


I didn't include the details of the render functions but you can view and edit all the code in the demo I prepared on codepen.

Ping me on mail@kangchen.me if you have any questions =)

<pre><code>
<p data-height="468" data-theme-id="15231" data-slug-hash="YXWjOp" data-default-tab="result" data-user="kang" class='codepen'>See the Pen <a href='http://codepen.io/kang/pen/YXWjOp/'>Communicate between React components</a> by Kang Chen (<a href='http://codepen.io/kang'>@kang</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
</code></pre>
