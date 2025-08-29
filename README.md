<!-- Questions And Answer for README.md File -->
Question-01: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: use getElementById for select a single unique id and dont use same name of id.
     getElementsByClassName is used to select elements by class name, its would be more and more same name.
     querySelector selects the first element of matching a CSS selector.
     querySelectorAll selects all elements matching a CSS selector.




Question-02: How do you create and insert a new element into the DOM?

Ans: first use (document.createElement) for make new element, like div,h2,p then set content with innerText or innerHTML add any class or id for  select and last part appendChild to insert the page.



Question-03: What is Event Bubbling and how does it work?

Ans: Event bubbling is a events move by dom, when click on a element like a button the event does not stay  element. it bubbles up to its         parent , then grandparent . the event can trigger on the inner element first and then on its parent in order.it helps you handle event more efficiently.



Question-04: What is Event Delegation in JavaScript? Why is it useful?

Ans: Event delegation in JavaScript is a way to handle events by put a single event listener in a parent element instead of each individual child. When a child element is clicked, the event bubble up to the parent. it use useful for create code fast and easy to manage.




Question-05: What is the difference between preventDefault() and stopPropagation() methods?

Ans:  preventDefault() and stopPropagation() are two different ways control event. preventDefault() stops default behavior of a element and stopPropagation() stop the event from bubbling up to parent element.