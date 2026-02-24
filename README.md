1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans : getElementByID():
Selects 1 element using the specified id.
getElementByClassName():
Selects all elements with the specified class name.
querySelector():
Selects the first element using a css selector.
querySelectorALL():
Selects all elements using a CSS selector.

2. How do you create and insert a new element into the DOM?
Ans :

const div = document.createElement('div');

div.innerHTML = `
<h1>Hello World</h1>
<p>This is a paragraph</p> 
`
parent.appendChild(div);

3. What is Event Bubbling? And how does it work?
Ans :

Event bubbling is a mechanism in the DOM where, when an event is triggered on an element, that event continues to travel up the DOM tree.
