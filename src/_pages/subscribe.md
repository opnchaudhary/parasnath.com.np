---
layout: page
title: Subscribe
permalink: /subscribe/
description: Subscribe to newsletter of Paras Nath's Blog
---
<style>
form{
    display: flex;
    flex-direction: column;
    align-items: center;
}
input{
    width: 340px;
    height: 3em;
    border-radius: 5px;
}
button{
    padding: 8px;
    background: white;
    border: 1px solid #4183C4;
    border-radius: 14px;
    width: 150px;
}
button:hover{
    color: white;
    background: #4183C4;
}
@media only screen and (max-width:600px){
    input{
        width: 240px;
    }
}
</style>

<form name="Subscription" netlify>
    <p>Subscribe to receive latest updates straight in your inbox.</p>
    <p>
            <label>Name <input type="text" name="name" /></label>
    </p>
    <p>
        <label>Email <input type="email" name="email" /></label>
    </p>
    <p>
        <button type="submit">Subscribe</button>
    </p>
</form>