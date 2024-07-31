## BMI Calculator

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Color Switcher</title>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Youtube Channel</a></li>
            </ul>
        </nav>
    </header>
    <section>
        <div class="container">
            <form action="" method="post">
                <div class="form-group">
                    <label for="height">Height in Centimeter</label>
                    <input type="text" class="form-control" id="height">
                </div>
                <div class="form-group">
                    <label for="height">Weight in Kilogram</label>
                    <input type="text" class="form-control" id="weight">
                </div>
                <div class="form-group">
                    <button class="btn-primary">Calculate</button>
                </div>
            </form>
            <div class="form-group">
                <span id="result"></span>
            </div>
        </div>  
    </section>
    <script src="script.js"></script>
</body>
</html>
```

```css
*
{
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    color: #282C34;
    outline-color: lightslategray;
}

header nav
{
    width: 100%;
    height: 60px;
    background: dodgerblue;    
}

header nav ul
{
    margin: auto;
    text-align: center;
    padding: 20px 0px;
}

header nav ul li
{
    list-style: none;
    display: inline-block;
}

header nav ul li a
{
    color: white;
    text-decoration: none;
    background-color: rgb(22, 22, 22, 0.5);
    padding: 10px 15px;
    border-radius: 5px;
}

section
{
    width: 100%;
}

section .container
{
    width: 90%;
    margin: 100px auto;
    text-align: center;
}

.form-group
{
    text-align: left;
    margin: 15px;
}

input[type="text"].form-control
{
    display: block;
    width: 100%;
    padding:  5px;
    font-size: 15px;
    font-weight: 100;
    margin-top: 3px;
}

input[type="text"].form-control:focus
{
    outline-color: dodgerblue;
}

.form-group label
{
    margin-bottom: 5px;
}

.btn-primary
{
    background-color: dodgerblue;
    color: white;
    border: none;
    padding: 10px 20px;
    font-weight: 100;
    border-radius: 5px;
    border: 2px solid dodgerblue;
    cursor: pointer;
}

.btn-primary:hover
{
    background-color: rgb(30, 100, 255);
}

.btn-primary:active
{
    border: 2px solid white;
}
```

```javascript
"use strict"

const form = document.querySelector('form');

form.addEventListener('submit', function(event){
    event.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    if(height === '' || height < 0 || isNaN(height))
    {
        result.innerHTML = `Please enter valid Height.`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight))
    {
        result.innerHTML = 'Please enter valid Weight.';
    }
    else
    {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `BMI: ${bmi}`;
    }
});
```