---
layout: default
title: Inputs
parent: Components
nav_order: 3
---

# Inputs
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

<br>

Inputs are used when user data is required. It can be a text, a number, booleans, dates, etc. Using an informative `placeholder` is preferrable.

## Basic text
For single line inputs.

<br>

<div class="flex flex-col w-1/2">
    <label for="first-name" >First Name</label>
    <input type="text" id="first-name" class="mt-2" placeholder="Write your first name here">
</div>

<br>

{% highlight html %}
<div class="flex flex-col w-1/2">
    <label for="first-name" >First Name</label>
    <input type="text" id="first-name" class="mt-2" placeholder="Write your first name here">
</div>
{% endhighlight %}

## Text area
For multiline inputs.

<br>

<div class="flex flex-col">
    <label for="message" >Biography</label>
    <textarea id="message" class="mt-2"></textarea>
</div>

<br>

{% highlight html %}
<div class="flex flex-col">
    <label for="biography" >Biography</label>
    <textarea id="biography" class="mt-2"></textarea>
</div>
{% endhighlight %}

## Date

<div class="flex flex-col w-1/2">
    <label for="date">Birthday</label>
    <input type="date" class="mt-2" id="date">
</div>

<br>

{% highlight html %}
<div class="flex flex-col">
    <label for="message" >Biography</label>
    <textarea id="message" class="mt-2"></textarea>
</div>
{% endhighlight %}

## Email

<div class="flex flex-col w-1/2">
    <label for="email" >Email</label>
    <input type="email" class="mt-2" id="email" placeholder="your@email.com">
</div>

<br>

{% highlight html %}
<div class="flex flex-col w-1/2">
    <label for="email" >Email</label>
    <input type="email" class="mt-2" id="email" placeholder="your@email.com">
</div>
{% endhighlight %}

## Password

<div class="flex flex-col w-1/2">
    <label for="password" >Password</label>
    <input type="password" class="mt-2" id="password">
</div>

<br>

{% highlight html %}
<div class="flex flex-col w-1/2">
    <label for="password" >Password</label>
    <input type="password" class="mt-2" id="password">
</div>
{% endhighlight %}

## Invalid inputs
When some input has invalid data or is not filled, apply the `danger` class.

<br>

<div class="flex flex-col w-1/2">
    <label for="invalid">Invalid input</label>
    <input type="email" class="mt-2 danger" id="invalid">
</div>

<br>

{% highlight html %}
<div class="flex flex-col w-1/2">
    <label for="invalid">Invalid input</label>
    <input type="email" class="mt-2 danger" id="invalid">
</div>
{% endhighlight %}

## Select
For predetermined options.

<br>

<label for="select" class="mt-6">Select language</label>
<div class="flex-shrink w-1/3 inline-block relative mt-2">
    <select class="form-select">
        <option>English</option>
        <option>French</option>
        <option>Spanish</option>
    </select>
</div>

<br>

{% highlight html %}
<label for="select" class="mt-6">Select language</label>
<div class="flex-shrink w-1/3 inline-block relative mt-2">
    <select class="form-select">
        <option>English</option>
        <option>French</option>
        <option>Spanish</option>
    </select>
</div>
{% endhighlight %}

## Checkbox

<div class="flex flex-col">
    <div class="inline-flex items-center">
        <input type="checkbox" class="form-checkbox" name="checkbox-group">
        <span class="ml-2">Checkbox 1</span>
    </div>
    <div class="inline-flex items-center">
        <input type="checkbox" class="form-checkbox" name="checkbox-group">
        <span class="ml-2">Checkbox 2</span>
    </div>
    <div class="inline-flex items-center">
        <input type="checkbox" class="form-checkbox" name="checkbox-group">
        <span class="ml-2">Checkbox 3</span>
    </div>
</div>

<br>

{% highlight html %}
<div class="flex flex-col">
    <div class="inline-flex items-center">
        <input type="checkbox" class="form-checkbox" name="checkbox-group">
        <span class="ml-2">Checkbox 1</span>
    </div>
    <div class="inline-flex items-center">
        <input type="checkbox" class="form-checkbox" name="checkbox-group">
        <span class="ml-2">Checkbox 2</span>
    </div>
    <div class="inline-flex items-center">
        <input type="checkbox" class="form-checkbox" name="checkbox-group">
        <span class="ml-2">Checkbox 3</span>
    </div>
</div>
{% endhighlight %}

## Radio button

<div class="flex flex-col">
    <div class="inline-flex items-center">
        <input type="radio" class="form-radio" name="radio-group">
        <span class="ml-2">Radio 1</span>
    </div>
    <div class="inline-flex items-center">
        <input type="radio" class="form-radio" name="radio-group">
        <span class="ml-2">Radio 2</span>
    </div>
    <div class="inline-flex items-center">
        <input type="radio" class="form-radio" name="radio-group">
        <span class="ml-2">Radio 3</span>
    </div>
</div>

<br>

{% highlight html %}
<div class="flex flex-col">
    <div class="inline-flex items-center">
        <input type="radio" class="form-radio" name="radio-group">
        <span class="ml-2">Radio 1</span>
    </div>
    <div class="inline-flex items-center">
        <input type="radio" class="form-radio" name="radio-group">
        <span class="ml-2">Radio 2</span>
    </div>
    <div class="inline-flex items-center">
        <input type="radio" class="form-radio" name="radio-group">
        <span class="ml-2">Radio 3</span>
    </div>
</div>
{% endhighlight %}

## Toggle/ switch
Refers to enabling or disabling options.

<br>

<div>
    <div class="toggle">
        <input type="checkbox" name="toggle" id="toggle" class="toggle-checkbox" />
        <label for="toggle" class="toggle-label"></label>
    </div>
    <label for="toggle">Toggle</label>
</div>

<br>

{% highlight html %}
<div>
    <div class="toggle">
        <input type="checkbox" name="toggle" id="toggle" class="toggle-checkbox" />
        <label for="toggle" class="toggle-label"></label>
    </div>
    <label for="toggle">Toggle</label>
</div>
{% endhighlight %}

## Search
### Regular search
![Regular search](../assets/regular-search.gif)

<br>
HTML
{% highlight html %}
<label for="search">Regular search</label>
<div id="search" class="search mr-6 mb-8">
    <input type="search" onfocus="addBlueToSearchIcon('search-icon')"
        onfocusout="removeBlueFromSearchIcon('search-icon')" class="w-48" placeholder="Search for content">
    <svg class="search-icon" id="search-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round" class="feather feather-search">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
</div>
{% endhighlight %}

<br>

JavaScript

{% highlight javascript %}

function addBlueToSearchIcon(id) {
    let searchIcon = document.getElementById(id);
    searchIcon.classList.add("text-gnome-blue-500");
}

function removeBlueFromSearchIcon(id) {
    let searchIcon = document.getElementById(id);
    searchIcon.classList.remove("text-gnome-blue-500");
}

{% endhighlight %}

<br>

### Collapsable search
![Collapsable search](../assets/collapsable-search.gif)

<br>

{% highlight html %}
<label for="search" class="mt-8">Collapsed search</label>
<div id="search" class="search mr-6 mb-8">
    <input type="search" id="collapsable-search" onfocus="addBlueToSearchIcon('collapsable-search-icon')"
        onfocusout="removeBlueFromSearchIcon('collapsable-search-icon')" class="w-48"
        placeholder="Search for content">
    <svg class="search-icon cursor-pointer" id="collapsable-search-icon"
        onclick="toggleSearchInputDisplay('collapsable-search')" xmlns="http://www.w3.org/2000/svg"
        width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round" class="feather feather-search">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
</div>
{% endhighlight %}

<br>

JavaScript
{% highlight javascript %}
function toggleSearchInputDisplay(id) {
    let collapsableSearch = document.getElementById(id);
    console.log(collapsableSearch.style.display);
    if (collapsableSearch.style.display === "block") {
        hideSearchInput(id);
    } else {
        console.log("displaying");
        collapsableSearch.style.display = "block";
        collapsableSearch.focus();
        addBlueToSearchIcon(id + "-icon");
    }
}

function hideSearchInput(id) {
    let collapsableSearch = document.getElementById(id);
    removeBlueFromSearchIcon(id + "-icon");
    if (!collapsableSearch.value) {
        collapsableSearch.style.display = "none";
    }
}

function toggleSearchIconColor(id) {
    let searchIcon = document.getElementById(id);
    if (searchIcon.classList.contains("text-gnome-blue-500")) {
        removeBlueFromSearchIcon(id);
    } else {
        addBlueToSearchIcon(id);
    }
}

function addBlueToSearchIcon(id) {
    let searchIcon = document.getElementById(id);
    searchIcon.classList.add("text-gnome-blue-500");
}

function removeBlueFromSearchIcon(id) {
    let searchIcon = document.getElementById(id);
    searchIcon.classList.remove("text-gnome-blue-500");
}
{% endhighlight %}