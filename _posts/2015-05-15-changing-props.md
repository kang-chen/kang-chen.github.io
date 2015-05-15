---
layout: post
title: ReactJS - Change the value of a property of an external component
published: true
---

I want to change the property value of a component that has been created. From outside itself.

As all answers on Stackoverflow seemed to involve too much complexity.
This is a simple way of trying to explain it.

My external component

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

My current component

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

Simple as that!

Ping me on mail@kangchen.me if you have any questions.
