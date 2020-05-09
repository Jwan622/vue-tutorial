### Chapter 2
- vue takes in our html code, converts the template strings etc to real html template for dom.
- don't need to use the keyword this to access data key from  the Vue object  in the html. Same go for the methods. Anything in the data or methods can just be accessed by name in the html.
- we have easy access in the Vue object/javascript code. We can call `this` in the methods property to access the keys in the `data` key.
- only can use curly braces in places we use text, not on html elements.
- `v-bind` tells not to use normal html atribute but to bind it to our data including our methods. we can use `-v-bind` when we can't use double curlys. right of colon has name of attribute we want to bind. directives an instruction for Vue. v-bind tells Vue to bind something to our data. arguments are passed to directives using a colon. this is way to pass dynamic data to html attributes.
- Vue.js escapes html elements and only renders text, but you can override this by using the `v-html` directive.
- you can pass arguments to methods in the html too like this:
`<button v-on:click="increase(2, $event)"> Click me </button> // we can pass our own arguments too.`
- the second argument above is $event which si the event object, it's a protected name.
- there are event and key modifiers. One of them is to stop the default behavior: 
`<span v-on:mousemove.stop>DEAD SPOT</spanv-on:mousemove> </span>`
or a key modifier:
`<input type="text" v-on-keyup.enter="alertMe">`
- without Vue, using jquery, have to write checks in different parts of the application a lot. **Vue makes a strong connection between html code and javascript code. natural connection between the two.**
- do both two way data binding?  on input fields we can display and update using `v-model` directive which binds input fields. If we use this directive, we can update the Vue data when typing in the input field and that will update everywhere the data is used. You think of this as combining `v-on` and `v-bind`
- computed properties do not need parenthesis in the html, use it like a property in the data object.  Difference is that methods get called everytime on rerender or page update but computed properties. It knows what data it depends on and will not run when unrelated data properties are changed. This is a lot faster. console logs in teh function will not run when unrelated data properties are changed. Methods on the otherhand get exeucuted all the time on update or page rerender because Vue is not aware of data that is inside a method. Use methods when you know you want to calculate every time the dom gets updated. Use computed properties more.
- `watch` executes code on data changes. the key is the data property you want to watch.