## Clock

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Clock</title>
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
            <label for="clock">Your Local Time</label>
            <div id="clock"></div>
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

body
{
    background-color: #282C34;
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
}

#clock
{
    width: 200px;    
    height: auto;
    box-sizing: border-box;
    background-color: dodgerblue;
    border-radius: 7px;
    color: white;
    margin: auto;
    text-align: center;
    padding: 20px 0px;
    font-size: 25px;
}
```

```javascript
"use strict"

const clock = document.querySelector('#clock');

setInterval(function(){
    let datetime = new Date();
    datetime = datetime.toLocaleString('en-US', { 
        hour: 'numeric', 
        minute: 'numeric', 
        second: 'numeric', 
        hour12: true 
    })
    clock.innerHTML = datetime;
}, 1000);

```