jQuery.divPlaceholder.js
========================
A mostly-CSS-with-a-bit-of-jQuery micro-plugin to emulate the `placeholder` attribute for `contenteditable` divs.

The placeholder text cosmetically resembles an input’s placeholder. All markup used is valid. The placeholder text does not appear in the DOM. The placeholder text disappears when the `div` contains any text or when it has input focus.

Usage
-----

See the `demo/demo.html` page for an example.

Reference the JS and CSS files as usual.

Add a `data-placeholder='Your default text'` attribute to your div.

```html
<div contenteditable='true' class='editable' data-placeholder='Enter some text'></div>
```

Updating div text in code
-------------------------

If you update the `div` text in JavaScript (instead of just typing into the ```div``` on the page), no events are fired, and you must let the plugin know that you've changed the contents by triggering the ```change``` event, like this:

```javascript
$("#some_div_id").text("New inner text").trigger("change");
```

How it works
------------
The placeholder text is in a CSS `:before` pseudo element, hidden by CSS when the div has focus and by a JavaScript-controlled `data-` attribute when content is changed. [Here's a full discussion.](http://blogs.teamb.com/craigstuntz/2013/01/29/38734/)

Release notes:
- 0.1.1: 9 February 2013. Bug fix to support IE 9-10. IE 8 may work also, but I haven't tested this.
- 0.1.0: 25 January 2013. Initial release.