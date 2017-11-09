---
layout: post
title: Async Await (ES7) vs Promises (ES6) data fetching in Redux actions
published: true
---

Benefits of Async Await (ES7):

- Readability.
- Await allows you to halt the execution of the function until a resolved promise is returned.

Benefits of Promises (ES6):

- Define arbitrary resolved value.
- Custom error handling.

**Async Await:**

{% highlight javascript %}

export function getActivityPageFeed() {
  return async (dispatch) => {
    const payload = await dispatch(fetchAPI(`/api/activity`));
    // Do something else here with resolved payload if required
    dispatch({ type: SET_ACTIVITY_PAGE_PRODUCTS, payload });
  };
}

{% endhighlight %}

**Promises:**

{% highlight javascript %}

export function getActivityPageFeed() {
  return (dispatch) => {
    return dispatch(fetchAPI(`/api/activity`)).then(
      (response) => {
        dispatch({ type: SET_ACTIVITY_PAGE_PRODUCTS, payload: response });
        Promise.resolve();
      },
      (error) => {
        return Promise.error(error);
      }
    );
  }
}
{% endhighlight %}
