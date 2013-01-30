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

How it works
------------
The placeholder text is in a CSS `:before` pseudo element, hidden by CSS when the div has focus and by a JavaScript-controlled `data-` attribute when content is changed. [Here's a full discussion.](http://blogs.teamb.com/craigstuntz/2013/01/29/38734/)