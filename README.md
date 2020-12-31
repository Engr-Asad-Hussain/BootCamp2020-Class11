# SHOE STORE
URL:https://github.com/Engr-Asad-Hussain/BootCamp2020-Class11.git

Surge: http://innocent-thrill123.surge.sh/

## Example # 01
URL: https://github.com/Engr-Asad-Hussain/BootCamp2020-Class11/tree/pre-requisite-02

Sruge: http://tremendous-amount123.surge.sh/

## Example # 02
URL: https://github.com/Engr-Asad-Hussain/BootCamp2020-Class11/tree/pre-requisite-1

Surge:http://auspicious-bikes123.surge.sh/

-----------------------------------------------------------
### What is React Router?
- We know that the normal html, css and js files are not SPA. For example, there are multiple features in a web page, contact us, home, careers, about us etc so when we navigate from contact us to home, we know that in normal web page there are two files contactus.html and home.html, so it actually uses ```<a href="...">``` to navigate. And our chrome browser maintains the history of navigation for example, ...abc.com/contactus.html ...abc.com/home.html.
- But we know that React is a SPA, so every feature will be a component and if we naviagte from 1st component to 2nd component then there will not be a change in page. For example browser will not able to maintain the history because the URL will remain same and if user click on back then it will not navigate to contact us page.
- So React Route helps in maintaining the history and navigation in our application using anchor tags ```<a href='...>```
- We have use **<Router><Routes><Route><Link>{ useParams }**
- Read [React Router Official](https://reactrouter.com/web/guides/quick-start)


### ```<Route path="/products/:id" element={<ProductItems />} />```
- ":id" means if /products/any-thing will come it renders <ProductItems /> and store that value in "id"


### Access methods of an Object.
```
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
const array = Object.keys(properties)
```
- Method # 01: ```properties.asad``` or ```properties.asad.height```
- Method # 02: ```properties["asad"]``` or ```properties["asad"].height```

### ```<Link to={`/products/${items[object].name.replace(/ +/g, "-").toLowerCase()}`}>```
- $ is the placeholder. It means the item comes in { } will be placed in /products/itemName
- items[object].name will return " from shoes.json file
- .replace(/ +/g, "-") will replace space with "-" symbol
- .toLowerCase() will convert this string into lower case

### ```{ id } = useParams()```
- This is used to get what is sent in URL.
- That is, it means that whatever will come in place of "id" ```<Route path="/products/:id" element={<ProductItems />} />``` will be get in { id } using useParams.

### forEach()
```
array.forEach( (element) =>{
    // console.log(element)
    // console.log(items[element].gender)
    if ( items[element].gender === "male") {
        count ++;
        menItems.push(element);
    }
})
```
- forEach is used to iterated to all the elements of an array.