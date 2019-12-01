## Vanilla JavaScript DOM Manipulation Vanilla JavaScript

----------------------------------------------------------

### Fetching/Getting an element:

```javascript
// Returns a reference to the element by its ID.
document.getElementById('someid');

// Returns an array-like object of all child elements which have all of the given class names.
document.getElementsByClassName('someclass');

// Returns an HTMLCollection of elements with the given tag name.
document.getElementsByTagName('div');

// Returns the first element within the document that matches the specified group of selectors.
document.querySelector('.someclass');
document.querySelector('#someid');
document.querySelector('input[type="button"]');

// Returns a array of the elements within the document that match the specified group of selectors.
document.querySelectorAll('div');
document.querySelector('.someclass');
```

----------------------------------------------------------

### Grab Children/Parent elements:


```javascript
// Get child element
var stored = document.getElementById('someid');
var children = stored.childNodes;

// Get parent element
var parental = children.parentNode;
```

----------------------------------------------------------

### Replacing HTML

```javascript
document.getElementById('someid').innerHTML = "some text";
```

----------------------------------------------------------


### Adding HTML/Elements to DOM

Suppose you have the following HTML:
```html
<div id='box1'>
  <p>Some example text</p>
</div>
<div id='box2'>
  <p>Some example text</p>
</div>
```
You can insert another snippet of HTML between #box1 and #box2:
```javascript
document.getElementById('box2').insertAdjacentHTML('beforebegin', '<div><p>This gets inserted.</p></div>');

// beforebegin - The HTML would be placed immediately before the element, as a sibling.
// afterbegin - The HTML would be placed inside the element, before its first child.
// beforeend - The HTML would be placed inside the element, after its last child.
// afterend - The HTML would be placed immediately after the element, as a sibling.
```

----------------------------------------------------------

### Add/Remove/Toggle/Check Classes

```javascript
// grab element on page you want to use
var element = document.getElementById('someid');

// will remove foo if it is a class of element
element.classList.remove('foo');

// will add the class 'anotherClass' if one does not already exist
element.classList.add('anotherclass');

// add or remove multiple classes
element.classList.add('foo', 'bar');
element.classList.remove('foo', 'bar');

// if "blue" class is set remove it, otherwise add it
element.classList.toggle('blue');

// will return true if it has class of 'foo' or false if it does not
element.classList.contains('foo');
```

----------------------------------------------------------


### Getting/Setting value from an element

##### Getting:
```javascript
document.getElementById('someid').value;
```

##### Setting:
```javascript
document.getElementById('someid').value = 'new value';
```

----------------------------------------------------------