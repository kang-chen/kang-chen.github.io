---
layout: post
title: ReactJS - Change the value of a property of an external component
published: true
---

I want to change the property value of a component that has been created. From outside itself.

As all answers on Stackoverflow seemed to involve quite a bit of complexity, I have tried to explain it in a simple manner.

**My current component**

{% highlight javascript %}

var CurrentComponent = React.createClass({

  getInitialState: function() {
    return {
      added: false
    };
  };

  render: function() {
    return ExternalComponent({
      added: this.state.added
    });
  }

});

{% endhighlight %}

**My external component**

{% highlight javascript %}

var ExternalComponent = React.createClass({

  getInitialState: function() {
    return {
      added: this.props.added
    };
  }

  componentWillReceiveProps: function(nextProps) {
    return this.setState({
      added: nextProps.added
    });
  }

)};


{% endhighlight %}

Simple as that!

Ping me on mail@kangchen.me if you have any questions.
