This is an order manager for ROBLOX game Anomic. This is not an official tool by the Anomic team.

Modifying Values:
You will be shown how to modify the name, price, and position of an item.

This tutorial applies for all menus. Here is the code for the Caddy:

<div class="ingredient" data-price="400" data-name="Caddy">
  <button onclick="adjustIngredient(this, -1)">-</button>
  <button onclick="adjustIngredient(this, 1)">+</button>
  ( <span class="quantity">0</span> ) Caddy - $400
</div>

To change the name of the vehicle, modify "Caddy - $400" and "data-name="Caddy"" accordingly. For example, you change Caddy to Pickup:

<div class="ingredient" data-price="400" data-name="Pickup">
  <button onclick="adjustIngredient(this, -1)">-</button>
  <button onclick="adjustIngredient(this, 1)">+</button>
  ( <span class="quantity">0</span> ) Pickup - $400
</div>

To change the price of the vehicle, modify "$400" and "data-price"400"" accordingly. For example, you change the price from $400 to $1400:

<div class="ingredient" data-price="1400" data-name="Pickup">
  <button onclick="adjustIngredient(this, -1)">-</button>
  <button onclick="adjustIngredient(this, 1)">+</button>
  ( <span class="quantity">0</span> ) Pickup - $1400
</div>

Now let's see the Caddy and Pickup together:

<div class="ingredient" data-price="400" data-name="Caddy">
  <button onclick="adjustIngredient(this, -1)">-</button>
  <button onclick="adjustIngredient(this, 1)">+</button>
  ( <span class="quantity">0</span> ) Caddy - $400
</div>
<div class="ingredient" data-price="1400" data-name="Pickup">
  <button onclick="adjustIngredient(this, -1)">-</button>
  <button onclick="adjustIngredient(this, 1)">+</button>
  ( <span class="quantity">0</span> ) Pickup - $1400
</div>

In order to change which order they appear on the website, simply change the order of each vehicle's code:

<div class="ingredient" data-price="1400" data-name="Pickup">
  <button onclick="adjustIngredient(this, -1)">-</button>
  <button onclick="adjustIngredient(this, 1)">+</button>
  ( <span class="quantity">0</span> ) Pickup - $1400
</div>

<div class="ingredient" data-price="400" data-name="Caddy">
  <button onclick="adjustIngredient(this, -1)">-</button>
  <button onclick="adjustIngredient(this, 1)">+</button>
  ( <span class="quantity">0</span> ) Caddy - $400
</div>

Here is the code for the Mozzarella Cheese Pizza:

<div class="recipe-title" onclick="toggleDetails(this)">
  <span>Mozzarella - $200</span>
  <img class="arrow-icon" src="img/arrow-down.ico" alt="Expand" data-state="collapsed" />
</div>
<div class="recipe-details">
  <p>Ingredients: Dough, Red Tomato (1), Mozzarella (1)</p>
</div>

In order to change the item or price, edit "Mozzarella - $200" accordingly.
In order to change the recipe, edit "Ingredients: Dough, Red Tomato (1), Mozzarella (1)" accordingly.

This tutorial should make it easy to create your own menus to serve your needs.

--

UNOFFICIAL-ROBLOX-Anomic-Order-Manager uses Inter, a Font Family by Google Fonts.
  https://fonts.google.com/specimen/Inter/


Copyright OpenJS Foundation and other contributors, https://openjsf.org/

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
