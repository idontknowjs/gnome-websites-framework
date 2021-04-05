---
layout: default
title: Buttons
parent: Components
nav_order: 1
permalink: /components/buttons
---

# Buttons

Buttons are used to communicate actions users can take. The default buttons color is `gnome-blue-500`, which should be related to primary actions. On secondary or tertiary actions, `orange` combined with other kinds of buttons different than default, like [outlined](#outline) or [squared](#squared), are encouraged.

Colors in buttons are also related to communicating messages to the users about what they are doing. When the action the user can take is dangerous, using `red` is a good fit, as much as `yellow` for attention or `green` for confirmation/ success.

## Default

Use the `btn` class for a default button, and combine it with other colors if a color different than `gnome-blue` is needed. The `btn` class should always be used on the buttons variants described on the next topics, except for the `links`.

<br>
<div class="container flex-grow">
    <button class="btn mr-2 my-2">GNOME Blue</button>
    <button class="btn red mr-2 my-2">Red</button>
    <button class="btn orange mr-2 my-2">Orange</button>
    <button class="btn yellow mr-2 my-2">Yellow</button>
    <button class="btn green my-2">Green</button>
</div>
<br>
~~~html
<div class="container flex-grow">
    <button class="btn mr-2 my-2">GNOME Blue</button>
    <button class="btn red mr-2 my-2">Red</button>
    <button class="btn orange mr-2 my-2">Orange</button>
    <button class="btn yellow mr-2 my-2">Yellow</button>
    <button class="btn green my-2">Green</button>
</div>
~~~

## Outline

Outline buttons are used for secondary or tertiary actions. To use this variation, add `outline` class to the button and combine it with other colors.

<br>
<div class="container flex-grow">
    <button class="btn outline mr-2 my-2">GNOME Blue</button>
    <button class="btn outline-red mr-2 my-2">Red</button>
    <button class="btn outline-orange mr-2 my-2">Orange</button>
    <button class="btn outline-yellow mr-2 my-2">Yellow</button>
    <button class="btn outline-green mr-2 my-2">Green</button>
</div>
<br>
~~~html
<div class="container flex-grow">
    <button class="btn outline mr-2 my-2">GNOME Blue</button>
    <button class="btn outline-red mr-2 my-2">Red</button>
    <button class="btn outline-orange mr-2 my-2">Orange</button>
    <button class="btn outline-yellow mr-2 my-2">Yellow</button>
    <button class="btn outline-green mr-2 my-2">Green</button>
</div>
~~~

## Squared

Usually, squared buttons give a more serious feeling to the website. It can be used by default on the website (even combined with other variants like outlined) or it can be used in specific spots, but it is not recommended to be used next to a rounded button - it may cause inconsistency. Use `squared` class to produce this variant.

<br>
<div class="container flex-grow">
    <button class="btn squared mr-2 my-2">GNOME Blue</button>
    <button class="btn red squared mr-2 my-2">Red</button>
    <button class="btn outline-orange squared mr-2 my-2">Orange</button>
    <button class="btn outline-yellow squared mr-2 my-2">Yellow</button>
    <button class="btn outline-green squared mr-2 my-2">Green</button>
</div>
<br>
~~~html
<div class="container flex-grow">
    <button class="btn squared mr-2 my-2">GNOME Blue</button>
    <button class="btn red squared mr-2 my-2">Red</button>
    <button class="btn outline-orange squared mr-2 my-2">Orange</button>
    <button class="btn outline-yellow squared mr-2 my-2">Yellow</button>
    <button class="btn outline-green squared mr-2 my-2">Green</button>
</div>
~~~

## Other sizes

Larger buttons can be used to draw user attention, while smaller buttons can be used to fit inside smaller spaces. Add `small` or `large` classes to produce buttons in different sizes, but be careful not to create inconsistency by placing buttons with different sizes close to each other.

<br>
<div class="container flex-grow">
    <button class="btn small mr-2 my-2">Small</button>
    <button class="btn red small mr-2 my-2">Small</button>
    <button class="btn outline-orange small squared mr-2 my-2">Small</button>
    <button class="btn outline-yellow small squared mr-2 my-2">Small</button>
    <button class="btn outline-green small mr-2 my-2">Small</button>
</div>
<br>
<div class="container flex-grow">
    <button class="btn large mr-2 my-2">Large</button>
    <button class="btn red large mr-2 my-2">Large</button>
    <button class="btn outline-orange large squared mr-2 my-2">Large</button>
    <button class="btn outline-yellow large squared mr-2 my-2">Large</button>
    <button class="btn outline-green large mr-2 my-2">Large</button>
</div>
<br>
~~~html
<div class="container flex-grow">
    <button class="btn small mr-2 my-2">Small</button>
    <button class="btn red small mr-2 my-2">Small</button>
    <button class="btn outline-orange small squared mr-2 my-2">Small</button>
    <button class="btn outline-yellow small squared mr-2 my-2">Small</button>
    <button class="btn outline-green small mr-2 my-2">Small</button>
</div>
<div class="container flex-grow">
    <button class="btn large mr-2 my-2">Large</button>
    <button class="btn red large mr-2 my-2">Large</button>
    <button class="btn outline-orange large squared mr-2 my-2">Large</button>
    <button class="btn outline-yellow large squared mr-2 my-2">Large</button>
    <button class="btn outline-green large mr-2 my-2">Large</button>
</div>
~~~

## Disabled

When the user is forbidden to click some button, like when they need to fill a form before being able to click "Continue", it makes sense to show the user they can't click there. The disabled state can be added by using the `disabled` class.

<br>
<div class="container flex-grow">
    <button class="btn disabled small mr-2 my-2">Disabled</button>
    <button class="btn disabled small mr-2 my-2">Disabled</button>
    <button class="btn disabled squared mr-2 my-2">Disabled</button>
    <button class="btn disabled large squared mr-2 my-2">Disabled</button>
    <button class="btn disabled large mr-2 my-2">Disabled</button>
</div>
<br>
~~~html
<div class="container flex-grow">
    <button class="btn disabled small mr-2 my-2">Disabled</button>
    <button class="btn disabled small mr-2 my-2">Disabled</button>
    <button class="btn disabled squared mr-2 my-2">Disabled</button>
    <button class="btn disabled large squared mr-2 my-2">Disabled</button>
    <button class="btn disabled large mr-2 my-2">Disabled</button>
</div>
~~~

## Customized width

Buttons placed in columns instead of next to each other need to have the same width, otherwise, they'll look disharmonious. You may want to change the width to make the button look aligned with the text or form above it too. For spacing references, check the [spacing](#spacing) page on this documentation.

<br>
<div class="container flex-grow">
    <div class="flex-col w-64 mx-auto">
        <button class="btn mr-2 my-2 w-full">GNOME Blue</button>
        <button class="btn red mr-2 my-2 w-full">Red</button>
        <button class="btn orange mr-2 my-2 w-full">Orange</button>
        <button class="btn yellow mr-2 my-2 w-full">Yellow</button>
        <button class="btn green my-2 w-full">Green</button>
    </div>
</div>
<br>
~~~html
<div class="container flex-grow">
    <div class="flex-col w-64 mx-auto">
        <button class="btn mr-2 my-2 w-full">GNOME Blue</button>
        <button class="btn red mr-2 my-2 w-full">Red</button>
        <button class="btn orange mr-2 my-2 w-full">Orange</button>
        <button class="btn yellow mr-2 my-2 w-full">Yellow</button>
        <button class="btn green my-2 w-full">Green</button>
    </div>
</div>
~~~

## Links

link buttons behave like regular anchors but they have a special look - they are buttons with no background, borders, or shadows, but they respect buttons colors and have an underline hover effect. Use the `link` class combined with colors.

<br>
<div class="container flex-grow">
    <button class="link mr-2 my-2">Link</button>
    <button class="link gnome-blue mr-2 my-2">Link</button>
    <button class="link red mr-2 my-2">Link</button>
    <button class="link orange mr-2 my-2">Link</button>
    <button class="link yellow mr-2 my-2">Link</button>
    <button class="link green mr-2 my-2">Link</button>
    <button class="link white mr-2 my-2">Link</button>
</div>
<br>
~~~html
<div class="container flex-grow">
    <button class="link mr-2 my-2">Link</button>
    <button class="link gnome-blue mr-2 my-2">Link</button>
    <button class="link red mr-2 my-2">Link</button>
    <button class="link orange mr-2 my-2">Link</button>
    <button class="link yellow mr-2 my-2">Link</button>
    <button class="link green mr-2 my-2">Link</button>
    <button class="link white mr-2 my-2">Link</button>
</div>
~~~