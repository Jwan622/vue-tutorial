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
- `watch` executes code on data changes. the key is the data property you want to watch. they run async whereas computer properties run synchronously. so when reaching out to a server, use `watch`.
- `v:on` is the same thing as using the @sign so you can write `@:click`. `v-bind` is the same thing as using `:` so you can write `:href`
- `:class="{red: attachRed}"` is a way to attach a css class `red` conditionally whenever attachRed is true. Vue allows us to attach css classes dynamically.
- you can dynamically 

### Chapter 3
- `v-if` allows us to bind a true/false data property. Does not jsut hide, it removes it form the Dom. affects nested elements too.j 
- `v-else` auto refers to latest v-if above it. and will show when the v-if condition is false.
- you can use templates to group html elements and tempaltes are not rendered in the Dom so are perfect for using a `v-if` condition. 
- use `v-show` if you want the element to still be in the dom but with `display:none`. the element is still there and the element is not detached.
- `<li v-for="(ingredient,i) in ingredients"> {{ ingredient }} ({{ i }}) </li>` isa way to write a loop with `ingredients` in the data section.
- Vue updates the posititon where osmething changed, it twould update teh position in the list. If you want to be safe and update the posititon and the item in thet list itself, you need to use the `key` directive. using this key, behind the scenes Vue stores the position and the element itself, so if you reorder, it takes the element and not just override the value in some of the positions in the array.

### Section 5
- The object that you pass to Vue gets processed by the consturctor and getters, setters, watchers are created behind the scene so taht when you change the property, the dom rerenders. if you add properties to the vue object without using the consturctor, they won't work as normal properties that you pass to the data property when you create the vue instnace.
- `el` and `data` are special. in the dom, `$el` refers to the template. you see it in the chrome inspector. vue keeps trakc of the html or where this instance live. `$data` refers to our data properties that we use to setup the Vue instance.
- what is `$ref`? It is a way to access specific html element. place a `ref` Vue key on the html element like `<button ref="myButton">` YOu have access in the vue object using `$ref` to all refs in the html like `this.$refs.myButton` and maybeo n click you can rename the text like `this.$refs.myButton.innerText = "new name"`. Good for accessing data from the dom. Does not change Vue object, it just changes the html.
- what does `$el` do? It mounts the component to the html class or id provided. You can manually to this by running something like `vm1.$mount('#app1')`. The `el` property makes this easier, but you may want to configure the Vue instance but the html element doesn't exist it so use `$mount`.
- we can use the `template` keyword in the Vue instance to mount a new html template to the Dom. It allows us to create new html in the Dom.  You can mount it then with `$mount`.
- However, using `el` and mounting only replaces the first html element. What if we want to replace several html elements? We can use components using `Vue.component`. the first argument in the name of the selector which if is "hello" we can write `<hello></hello>` in our html. `Vue.component` registers the component globally. Very neat! You can create new selectors in Vue. This is reusable selector. using `new Vue({el: "hello"})` only replaces the first component in the html, not all. You can think of ocmponents as your own custom html elements.
- what are drawbacks of using `template`? hard to write multiline syntax since you have to write html elements.
- Vue sets up watchers for changes for data and methods. Vue updates changes in a virtual dom, accessing the dom is slow, so Vue has an extra layer like a virtual dom. takes diff btw template and virtual dom and updates the real dom. Vue does not constantly watch properties and updates the dom when it changes. it updates the virtual dom instead. virtual dom is a representation of the real dom but in javascript. takes diff btw template and virtual dom and only updates the diff in the real dom. so this way it knows which property changed and which parts actually changed in the real dom.
- when you call `new Vue({})`, the constructor calls
    - `beforeCreate` lifecycle method -> initializes data and events
    - create the instance calls `created`.
    - compiled template or el
    - calls `beforeMount` life cycle event. this is called right before the template is mounted to real dom. replace el with compiled template but virtually. real html code but behind the scenes.
    - then calls `mount`. 
    - `beforeUpdate` if data cahnges, called right before a rerender of the DOm.
    - `updated` and dom is updated.
    - `beforeDestroy` called right before the instance is destroyed.
    - you can be executed code at diff ponits in lifecycle by adding them as functions to the Vue instance.
    
    
### Section 6

- the server can serve files when certain http pages are hit. lazy load.
- what is a dev workflow? the workflow on the server can compile single file templates: alternative to using el and inferring templates from the Dom. development workflow transforms the single file template to javascript code which is executable in the browser.  If you use el and vue instances, it gets compiled in the client/browser. we cmopile it on the machine. ship finished code to client. can also use es6 code using a server.
- Vue cli: one major task: fetch Vue.js project templates are empty but have a build process setup. One template is a webpack-simple workflow which compiles our single-file templates which allow us to use es6 and compiles vue to javascript on the server.
- babel is a transpiler that allows us to write es6 code. comes with webpack-simple
- index.html file in webpack-simple is what gets served. the main index.html file. webpack builds the `/dist/build.js` file. the transpiled es5 code compiled by webpack, lives in dist file. 
- `vue-loader` in the dependencies allows us to write single file templates.
- what are `.vue` files? single file templates: special file that compiles during build process so that we can ship compiled code to properties so we don't need the `el` to convert html to template or `template` properties anymore. third option outsources template to separate files.
- `render: h=> h(App` . h is a function that renders the App which is from `import App from ./App.vue` this is a way to render a template in the el property and we don't need to write a template string in teh `template` key anymore. The h function converts the App to a template string. inside the `./App.vue` file is just some html wrapped in a `template` element. Vue takes care of the rest. All you need is the template element. the h function does this I think? Render allows us to override the tempalte selected with the `el` selector and puts the compiled template there. Redner allows us to use single-file templates and is a better alternative than using the keyword template in the vue instance.
- a Vue template just has a template element, a script element, and a style element. in the build process, this compiles to javascript code and renders it where render is called.
- in the template file, the export is a Vue intsance, same thing. same properties. can be used as a component too.
- `npm run build` is for production and actually builds the dist folder.

 ### Section 7
 - when writing components, the data key needs to be a function that returns an object. The point of this is so that each component has their own unique data object so that thec components can behave independently. By wrapping it in a function, it returns a new object each time. If you cheat and return a variable from the data function which no matteer how many times called will point to the same object in memory, bugs will arise. You should return an object literal from the data function in a component and not a shared object in a variable. The issue is that the shared data object will register the changes to the data and those changes will propogate to all instances of the component which is probably not intended.
 - the `render` method inside a Vue instance will overwrite the element specified by `el` and place the template there.
 - Vue components start with a capital.
 - you can register components with a Vue instance using `components` keyword like:
 ```javascript
new Vue({
 el: "#app",
 components: {
   "my-cmp": {
     data: function() {
       return {
         status: "Normal"
       }
     },
     template: '<p>...'
   }
 }
})
```
- the key of the components property is the name of the component that can be used to instantiate the element. for ex:

```javascript
new Vue ({
  el: "#app",
  components: {
    'my-cmp': cmp
  }
})
```
`my-cmp` is the element name. cmp is an object in plain javascript with a data key that points to a function with a template key that points to a an html string that could also render some data from the data object.
- styles are global BUT if you want them local to the component, use the keyword `scope` likme this:
`< styles scoped> ...`. That way your styles don't leak globally like ina  global style sheet.
- if you want to use components in a template, you need to set the keyword components in that template's javascript section and do something like:
```javascript
components: {
  'app-server': Server //and import Server in the scripts section.
}
```
- emulates shadow dom, in upcoming browsers, each element in dom has a dom behind element so that styles are local. This is what the `scoped` keyword gives us. Vue adds data-<some-id> and they are teh same for each component. Each component has their own data attribute. This attribute is added by Vue.js and is a data attribute and is used by the styles to localize the css. every div is like div[data-attribute<id>] in the style sheet in the dom. the css selects by div and data attribute. That's how Vue emulates the shadow dom.


### Chapter 8

- when passing props, `v-bind:name` is the same as `:name` which refers to the name property in teh single file component.
- passed props are also available in the child methods in addition to the data.
```javascript
<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>UserName: {{ switchName() }}</p>
    </div>
</template>

<script>
    export default {
        props: ['name'], // this is set from outside. this creates a new property we can use, but is passed from outside. has to match what is used in template here.
        methods: {
            switchName() {
                return this.myName.split("").reverse().join("");
            }
        }
    }
</script>
```
- how to validate props? in the props key, you can do:
```vuejs
props: {
  myName: [ String, Array ] //multipel types are valid too, can be string or array.
}
```
or something like this:

```vuejs
  props: {
    myName: {
       type: String,
          required: true,
          default: "steve",
       }
   },
```
- how do you pass from child to the parent? use events. they can emit from the child to the parent.
```vuejs
 resetName() {
                this.myName = 'Max';
                this.$emit('nameWasReset', this.myName);
            }
```
that will emit to the parent and change data in the parent. you can listen in the parnet like this:
```vuejs
@nameWasReset="name = $event"
```
remember that `v-on` is the same as `@`. So remember taht parent and children can communicate with each other but not children to each other. So in order to do that, a child needs to emit to a parent and that parent can then emit to children.
- custom events are one way to transmit data from child to parent. But we could also use callbacks passed from parent to child. the callback actually when executed in child actually executes in the parent since the function is in the parent. in parent:
```vuejs
                <app-user-detail :my-name="name"
                                 @nameWasReset="name = $event"
                                 :resetFn="resetName"
```
and in child:

```vuejs
<button @click="resetFn">Reset Name</button>
```
 in the child, it calls the resetFn that was passed to the child. the resetName method is a method in the parent. direct connectino between children is not possible rememeber so we need to emit events or use callbacks.
 
**four ways to have inter-component communication:**
 - first way is for the child to emit events
 - second way is to use callbacks.
 - the third way to transmit data between children components is to use an event bus by creating a new vue instance. it's a way for children to communicate without having to traverse up to the parent. even this can get complicated though.
 - a fourth way is to use Vuex which is great for larger applications. Even event buses are not great for larger applications.
 
 
 ### Chapter 9
 - you can also pass content to components by enclosing it in the html element like this:
 
 ```vuejs
<custom-element>
<p> Some content </p>
<p> Some content </p>
</custom-element>
```
we can use slots for this. it's for content being passed from the outside.

- slots render in the child component what is inside the opening and closing selector. Use in child like this:

```vuejs
    <slot></slot>
```

and that will render the two <p> tags above in the child component.
- one note is that the styling of the slotted selectors needs to be done in the child. It is compiled as part of the child. so the styling needs to be done in the child. but for data, that is done in the parent so if you write something like this in the slotted content: `{{ user }}`, that user variable needs to be in the parent's data key. 
- styling is setup on teh child, but variables are done in the parent for slots. 
- if you write `slot="title"` in the element, this is a known vue.js concept. vue will detect this and knows the quotation marks is the name of the slot it should render the content in. It would look something like this:
```vuejs
  <h2 slot="title">{{ quoteTitle }}</h2>
```
It looks for a slot with `name="title"` and renders the content in that slot in the child.
-  unnamed slots are default slots. So anything without a name slot will go in the default slot,
- default slots can also be made in the child by putting content inside the tags. 

- What are dynamic components? you can use the `component` built in. Like this:

```vuejs
      <button @click="selectedComponent = 'appQuote'">Quote</button>
      <button @click="selectedComponent = 'appAuthor'">Author</button>
	  <button @click="selectedComponent = 'appNew'">New</button>
<component :is="selectedComponent"></component>
```

and this is our data in the component:

```vuejs
        data: function() {
            return {
                quoteTitle: "The Quote",
                selectedComponent: "appQuote"
            }
        },
        components: {
            appQuote: Quote,
            appAuthor: Author,
            appNew: New,
        }
```
so basically the selectedComponent is going to be se to one of thte three components.


## Chapter 11

- `v-model.lazy` is used so that instead of changing the data on keystroke down, it changes only when you click away form the field. It will no longer listen to the input event but the change event. you can also do something like `v-model.lazy.number` to convert the input to a number lazily.
- if you bind two checkbox inputs to the same model, vuejs will detect this and store the inputs as an array if you select multiple checkboxes. will auto merge the values of the inputs to the single array.
- if you attach the same v-model string to radio buttons, vuejs will auto know to only select one at at time and only store whichever radio button is selected..
- to do select dropdowns:
```vuejs

                    <select
                            id="priority"
                            class="form-control">
                        <option v-for="priority in priorities" :selected="priority == 'medium'"> {{ priority }}</option>
                    </select>
```
the `:selected` attributte takes a boolean and this is how to set a default of medium.. the above is way to setup the viewable options.
- to bind a select, we need `v-model` on the select field, it goes on teh select element. we can also override the `:selected` option on the `option` element by using `v-model` and default.:
```vuejs
                    <select
                            id="priority"
                            class="form-control"
                            v-model="selectedPriority"
                    >
                        <option
                            v-for="priority in priorities"
                            :selected="priority == 'medium'"
                        >{{ priority }}</option>
                    </select>
```
- `v-model` is a combination of `value` and `@input`. `value` sets teh input value and `@input` listener can set the value on change. So if you make your own component that uses `v-model` you need to use `@input` and `value`.
- v-model passes value to the component and it responds to `input` events. So the component takes in a value as props and emits an input event which v-mdoel listens to. That's how you can get v-model to work on a custom component:
```vuejs
    export default {
        props: ['value'],
        methods: {
            switched(isOn) {
                this.$emit('input', isOn); // the component in order to respond to v-model needs to take in value and emit an input event.
            }
        }
    }
```