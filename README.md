
### What is React Router?
- We know that the normal html, css and js files are not SPA. For example, there are multiple features in a web page, contact us, home, careers, about us etc so when we navigate from contact us to home, we know that in normal web page there are two files contactus.html and home.html, so it actually uses ```<a href="...">``` to navigate. And our chrome browser maintains the history of navigation for example, ...abc.com/contactus.html ...abc.com/home.html.
- But we know that React is a SPA, so every feature will be a component and if we naviagte from 1st component to 2nd component then there will not be a change in page. For example browser will not able to maintain the history because the URL will remain same and if user click on back then it will not navigate to contact us page.
- So React Route helps in maintaining the history and navigation in our application using anchor tags ```<a href='...>```
- Read [React Router Official](https://reactrouter.com/web/guides/quick-start)






/*
const properties = {
    "asad": {
        "height": 20,
        "width": 25
    },
    "ibad": {
        "height": 30,
        "width": 12
    }
}
undefined
properties
{asad: {…}, ibad: {…}}asad: {height: 20, width: 25}ibad: {height: 30, width: 12}__proto__: Object
const array = Object.keys(properties)
undefined
array
(2) ["asad", "ibad"]
array[0].height
undefined
properties[array[0]]
{height: 20, width: 25}
*/