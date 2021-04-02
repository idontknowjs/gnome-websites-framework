---
layout: default
title: Inputs
parent: Components
nav_order: 3
permalink: /components/inputs
---

# Inputs

## Basic text

For single line inputs.

<div class="flex flex-col w-1/2">
    <label for="first-name" >First Name</label>
    <input type="text" id="first-name" class="mt-2" placeholder="Write your first name here">
</div>
~~~html
<div class="flex flex-col w-1/2">
    <label for="first-name" >First Name</label>
    <input type="text" id="first-name" class="mt-2" placeholder="Write your first name here">
</div>
~~~

## Text area

For multiline inputs.

<div class="flex flex-col">
    <label for="message" >Biography</label>
    <textarea id="message" class="mt-2"></textarea>
</div>
~~~html
<div class="flex flex-col">
    <label for="message" >Biography</label>
    <textarea id="message" class="mt-2"></textarea>
</div>
~~~

## Date

<div class="flex flex-col w-1/2">
    <label for="date">Birthday</label>
    <input type="date" class="mt-2" id="date">
</div>
~~~html
<div class="flex flex-col w-1/2">
    <label for="date">Birthday</label>
    <input type="date" class="mt-2" id="date">
</div>
~~~

## Email

<div class="flex flex-col w-1/2">
    <label for="email" >Email</label>
    <input type="email" class="mt-2" id="email" placeholder="your@email.com">
</div>
~~~html
<div class="flex flex-col w-1/2">
    <label for="email" >Email</label>
    <input type="email" class="mt-2" id="email" placeholder="your@email.com">
</div>
~~~

## Password

<div class="flex flex-col w-1/2">
    <label for="password" >Password</label>
    <input type="password" class="mt-2" id="password">
</div>
~~~html
<div class="flex flex-col w-1/2">
    <label for="password" >Password</label>
    <input type="password" class="mt-2" id="password">
</div>
~~~

## Invalid inputs

When some input has invalid data or is not filled, apply the `danger` class.

<div class="flex flex-col w-1/2">
    <label for="invalid">Invalid input</label>
    <input type="email" class="mt-2 danger" id="invalid">
</div>
~~~html
<div class="flex flex-col w-1/2">
    <label for="invalid">Invalid input</label>
    <input type="email" class="mt-2 danger" id="invalid">
</div>
~~~

## Select

For predetermined options.

<label for="select" class="mt-6">Select language</label>
<div class="flex-shrink w-1/3 inline-block relative mt-2">
    <select class="form-select cursor-pointer">
        <option>English</option>
        <option>French</option>
        <option>Spanish</option>
    </select>
</div>
~~~html
<label for="select" class="mt-6">Select language</label>
<div class="flex-shrink w-1/3 inline-block relative mt-2">
    <select class="form-select cursor-pointer">
        <option>English</option>
        <option>French</option>
        <option>Spanish</option>
    </select>
</div>
~~~

## Checkbox

<div class="flex flex-col">
    <div class="inline-flex items-center">
        <input type="checkbox" class="form-checkbox cursor-pointer" name="checkbox-group">
        <span class="ml-2">Checkbox 1</span>
    </div>
    <div class="inline-flex items-center">
        <input type="checkbox" class="form-checkbox cursor-pointer" name="checkbox-group">
        <span class="ml-2">Checkbox 2</span>
    </div>
    <div class="inline-flex items-center">
        <input type="checkbox" class="form-checkbox cursor-pointer" name="checkbox-group">
        <span class="ml-2">Checkbox 3</span>
    </div>
</div>
~~~html
<div class="flex flex-col">
    <div class="inline-flex items-center">
        <input type="checkbox" class="form-checkbox cursor-pointer" name="checkbox-group">
        <span class="ml-2">Checkbox 1</span>
    </div>
    <div class="inline-flex items-center">
        <input type="checkbox" class="form-checkbox cursor-pointer" name="checkbox-group">
        <span class="ml-2">Checkbox 2</span>
    </div>
    <div class="inline-flex items-center">
        <input type="checkbox" class="form-checkbox cursor-pointer" name="checkbox-group">
        <span class="ml-2">Checkbox 3</span>
    </div>
</div>
~~~

## Radio button

<div class="flex flex-col">
    <div class="inline-flex items-center">
        <input type="radio" class="form-radio cursor-pointer" name="radio-group">
        <span class="ml-2">Radio 1</span>
    </div>
    <div class="inline-flex items-center">
        <input type="radio" class="form-radio cursor-pointer" name="radio-group">
        <span class="ml-2">Radio 2</span>
    </div>
    <div class="inline-flex items-center">
        <input type="radio" class="form-radio cursor-pointer" name="radio-group">
        <span class="ml-2">Radio 3</span>
    </div>
</div>
~~~html
<div class="flex flex-col">
    <div class="inline-flex items-center">
        <input type="radio" class="form-radio cursor-pointer" name="radio-group">
        <span class="ml-2">Radio 1</span>
    </div>
    <div class="inline-flex items-center">
        <input type="radio" class="form-radio cursor-pointer" name="radio-group">
        <span class="ml-2">Radio 2</span>
    </div>
    <div class="inline-flex items-center">
        <input type="radio" class="form-radio cursor-pointer" name="radio-group">
        <span class="ml-2">Radio 3</span>
    </div>
</div>
~~~

## Toggle/ switch
Refers to enabling or disabling options.

<div>
    <div class="toggle">
        <input type="checkbox" name="toggle" id="toggle" class="toggle-checkbox" />
        <label for="toggle" class="toggle-label"></label>
    </div>
    <label for="toggle">Toggle</label>
</div>
~~~html
<div>
    <div class="toggle">
        <input type="checkbox" name="toggle" id="toggle" class="toggle-checkbox" />
        <label for="toggle" class="toggle-label"></label>
    </div>
    <label for="toggle">Toggle</label>
</div>
~~~

## Search

### Regular search

![Regular search](../assets/regular-search.gif)

<label for="search">Regular search</label>
<div id="search" class="search">
     <svg id="search-icon" class="feather feather-search search-icon "  
        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
     </svg>
     <input type="search" class="static w-50"
        onfocus="addBlueToSearchIcon('search-icon')"
        onfocusout="removeBlueFromSearchIcon('search-icon')"  
        placeholder="Search for content">    
</div>

<script>
    function addBlueToSearchIcon(id) {
        let searchIcon = document.getElementById(id);
        searchIcon.classList.add("text-gnome-blue-500");
    }
    function removeBlueFromSearchIcon(id) {
        let searchIcon = document.getElementById(id);
        searchIcon.classList.remove("text-gnome-blue-500");
    }
</script>

~~~html
<label for="search">Regular search</label>
<div id="search" class="search">
     <svg id="search-icon" class="feather feather-search search-icon "  
        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
     </svg>
     <input type="search" class="static w-50"
        onfocus="addBlueToSearchIcon('search-icon')"
        onfocusout="removeBlueFromSearchIcon('search-icon')"  
        placeholder="Search for content">    
</div>

<script>
    function addBlueToSearchIcon(id) {
        let searchIcon = document.getElementById(id);
        searchIcon.classList.add("text-gnome-blue-500");
    }
    function removeBlueFromSearchIcon(id) {
        let searchIcon = document.getElementById(id);
        searchIcon.classList.remove("text-gnome-blue-500");
    }
</script>
~~~
### CollapsableSearch
![Collapsable search](../assets/collapsable-search.gif)

<div id="search" class="search">
    <svg id="collapse-search-icon" class="feather feather-search search-icon cursor-pointer z-10"
        onclick="toggleSearchInputOpacity('collapsable-search')"  
        xmlns="http://www.w3.org/2000/svg" 
        width="24" height="24"
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round"
        stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
    <input type="search" id="collapsable-search" class="static w-50"
        disabled="true"
        onfocus="addBlueToCollapsableSearchIcon('collapsable-search-icon')"
        onfocusout="removeBlueFromCollapsableSearchIcon('collapsable-search-icon')" 
        placeholder="Search for content">
</div>
<script>
    function toggleSearchInputOpacity(id) {
        let collapsableSearch = document.getElementById(id);
        if (collapsableSearch.style.opacity == 1) {
            collapsableSearch.disabled = true;
            collapsableSearch.style.opacity = 0;
        } else {
            collapsableSearch.disabled = false;
            collapsableSearch.style.opacity = 1;
            collapsableSearch.focus();
        }
    }

    function addBlueToCollapsableSearchIcon(id) {
        let searchIcon = document.getElementById(id);
        searchIcon.classList.add("text-gnome-blue-500");
    }

    function removeBlueFromCollapsableSearchIcon(id) {
        let searchIcon = document.getElementById(id);
        searchIcon.classList.remove("text-gnome-blue-500");
    }
</script>

~~~html
<div id="search" class="search">
    <svg id="collapse-search-icon" class="feather feather-search search-icon cursor-pointer z-10"
        onclick="toggleSearchInputOpacity('collapsable-search')"  
        xmlns="http://www.w3.org/2000/svg" 
        width="24" height="24"
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round"
        stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
    <input type="search" id="collapsable-search" class="static w-50"
        disabled="true"
        onfocus="addBlueToCollapsableSearchIcon('collapsable-search-icon')"
        onfocusout="removeBlueFromCollapsableSearchIcon('collapsable-search-icon')" 
        placeholder="Search for content">
</div>
<script>
    function toggleSearchInputOpacity(id) {
        let collapsableSearch = document.getElementById(id);
        if (collapsableSearch.style.opacity == 1) {
            collapsableSearch.disabled = true;
            collapsableSearch.style.opacity = 0;
        } else {
            collapsableSearch.disabled = false;
            collapsableSearch.style.opacity = 1;
            collapsableSearch.focus();
        }
    }

    function addBlueToCollapsableSearchIcon(id) {
        let searchIcon = document.getElementById(id);
        searchIcon.classList.add("text-gnome-blue-500");
    }

    function removeBlueFromCollapsableSearchIcon(id) {
        let searchIcon = document.getElementById(id);
        searchIcon.classList.remove("text-gnome-blue-500");
    }
</script>
~~~
