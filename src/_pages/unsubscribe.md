---
layout: page
title: Unsubscribe
permalink: /unsubscribe/
---
<style>
form{
    display: flex;
    flex-direction: column;
    align-items: center;
}
form p label{
    display: flex;
    flex-direction: column;
}
input,textarea{
    width: 340px;
    max-width: 340px;
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
    input, textarea{
        width: 240px;
        max-width: 240px;
    }
}
</style>

<form name="Subscription" netlify>
    <p>Let us know why you are unsubscribing</p>
    <p>
        <label>Email <input type="email" name="email" /></label>
    </p>
    <p>
        <label>Message: <textarea name="message"></textarea></label>
    </p>
    <p>
        <button type="submit">Unsubscribe</button>
    </p>
</form>