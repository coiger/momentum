# momentum
Practice project for cloning momentum w/ nomadcoders

## What I've Learned
### Input Condition
```html
<input
  type="text"
  required
  maxlength="15"
  placeholder="What is your name?"
/>
```
- `required`: Specifies that the corresponding input must be provided.
- `maxlength`: Specify the maximum number of characters that can be entered.
- To give the above condition, the input element must be placed in the <form>.

### Form Refresh Bug
```html
<form id="login">
  <input
    type="text"
    required
    maxlength="15"
    placeholder="What is your name?"
  />
  <input type="submit" value="Log In" />
</form>
```
![Recording_2022-08-30_at_00 17 16](https://user-images.githubusercontent.com/40143716/187466363-539e9f68-8455-4f71-ac6e-66f87e578098.gif)
- When the form is submitted (click the submit button or press enter when there is only one input field), it refreshes page and appends a `?` at the end of the link.
- Because the form was submitted. Therefore, it is necessary to prevent this.
- Add preventDefault() to the submit event of <form>.
```javascript
const $loginForm = document.getElementById('login');

$loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
});
```

### Local Storage
- If you type localStorage in the console, you can see what is already there. It is property of the global object `window`. You can store something here.
- Only text can be saved. If you want to store anything else, use JSON.
- You can check what is stored by going to `Application > Local Storage` in Developer Tools.
- Search the `local storage web api` for more details.

### Geo Location
- You can get location information through the `geolocation` object, which is a property of the `navigator` object of the global object.
- `navigator.geolocation.getCurrentPosition()` : Get current location (latitude/longitude/...)
```javascript
navigator.geolocation.getCurrentPosition(
  (pos) => {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
  },
  () => {
    alert("Can't find you.");
  }
);
```
- You just need to pass one callback function to be executed when it succeeds in getting the location, and one callback function when it fails.
- There are various APIs to get weather information using latitude and longitude information.
