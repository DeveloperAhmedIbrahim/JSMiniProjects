## Project Color Switcher


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
            <h1>Color Scheme Switcher</h1>
            <div class="colors">
                <span class="color" id="grey"></span>
                <span class="color" id="white"></span>
                <span class="color" id="blue"></span>
                <span class="color" id="yellow"></span>
            </div>
            <h2>
                Try clicking on one of the colors above 
                <br>
                to change the background color of this page!
            </h2>
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
    letter-spacing: 1px;
    font-weight: bold;
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

section .container .colors 
{
    margin: 20px 0px;
}

section .container .colors .color
{
    width: 200px;
    height: 200px;
    border: 2px solid black;
    display: inline-block;
    cursor: pointer;
}

section .container .colors .color:active
{
    border-color: darkturquoise;
}

section .container .colors .color:first-child
{
    background-color: gray;
}

section .container .colors .color:nth-child(2)
{
    background-color: white;
}

section .container .colors .color:nth-child(3)
{
    background-color: blue;
}

section .container .colors .color:last-child
{
    background-color: yellow;
}
```

```javascript
"use strict"

const colors = document.querySelectorAll('.color');
const body = document.querySelector('body');

colors.forEach(function(color){
    color.addEventListener('click', function(event){
        body.style.backgroundColor = `${event.target.id}`;
    })
});
```
