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

<div class="flex flex-col w-1/2 my-4">
    <label for="first-name" >First Name</label>
    <input type="text" id="first-name" class="mt-2" placeholder="Write your first name here">
</div>
<br>
~~~html
<div class="flex flex-col w-1/2">
    <label for="first-name">First Name</label>
    <input type="text" id="first-name" class="mt-2" placeholder="Write your first name here">
</div>
~~~

## Text area
For multi-line inputs.  

<div class="flex flex-col my-4">
    <label for="message" >Biography</label>
    <textarea id="message" class="mt-2"></textarea>
</div>
<br>
~~~html
<div class="flex flex-col">
    <label for="message">Biography</label>
    <textarea id="message" class="mt-2"></textarea>
</div>
~~~

## Date

<div class="flex flex-col my-4">
    <label for="date">Birthday</label>
    <input type="date" class="mt-2" id="date">
</div>
<br>
~~~html
<div class="flex flex-col ">
    <label for="date">Birthday</label>
    <input type="date" class="mt-2" id="date">
</div>
~~~

## Email

<div class="flex flex-col w-1/2 my-4">
    <label for="email" >Email</label>
    <input type="email" class="mt-2" id="email" placeholder="your@email.com">
</div>
<br>
~~~html
<div class="flex flex-col w-1/2 my-4">
    <label for="email" >Email</label>
    <input type="email" class="mt-2" id="email" placeholder="your@email.com">
</div>
~~~

## Password

<div class="flex flex-col w-1/2 my-4">
    <label for="password" >Password</label>
    <input type="password" class="mt-2" id="password">
</div>
<br>
~~~html
<div class="flex flex-col w-1/2">
    <label for="password" >Password</label>
    <input type="password" class="mt-2" id="password">
</div>
~~~

## Invalid inputs
When some input has invalid data or is not filled, apply the `danger` class.  

<div class="flex flex-col w-1/2 my-4">
    <label for="invalid">Invalid input</label>
    <input type="email" class="mt-2 danger" id="invalid">
</div>
<br>
~~~html
<div class="flex flex-col w-1/2">
    <label for="invalid">Invalid input</label>
    <input type="email" class="mt-2 danger" id="invalid">
</div>
~~~

## Select
For pre-determined options.  

<label for="select" class="mt-6">Select language</label>
<div class="inline-block relative mt-2">
    <select class="w-auto form-select cursor-pointer pr-8">
        <option>English</option>
        <option>French</option>
        <option>Spanish</option>
    </select>
</div>
<br>
~~~html
<label for="select" class="mt-6">Select language</label>
<div class="inline-block relative mt-2">
    <select class="w-auto form-select cursor-pointer pr-8">
        <option>English</option>
        <option>French</option>
        <option>Spanish</option>
    </select>
</div>
~~~

## Checkbox

<div class="flex flex-col my-4">
    <div class="inline-flex items-center">
        <input type="checkbox" class="cursor-pointer" name="checkbox-group">
        <span class="ml-2">Checkbox 1</span>
    </div>
    <div class="inline-flex items-center">
        <input type="checkbox" class="cursor-pointer" name="checkbox-group">
        <span class="ml-2">Checkbox 2</span>
    </div>
    <div class="inline-flex items-center">
        <input type="checkbox" class="cursor-pointer" name="checkbox-group">
        <span class="ml-2">Checkbox 3</span>
    </div>
</div>
<br>
~~~html
<div class="flex flex-col">
    <div class="inline-flex items-center">
        <input type="checkbox" class="cursor-pointer" name="checkbox-group">
        <span class="ml-2">Checkbox 1</span>
    </div>
    <div class="inline-flex items-center">
        <input type="checkbox" class="cursor-pointer" name="checkbox-group">
        <span class="ml-2">Checkbox 2</span>
    </div>
    <div class="inline-flex items-center">
        <input type="checkbox" class="cursor-pointer" name="checkbox-group">
        <span class="ml-2">Checkbox 3</span>
    </div>
</div>
~~~

## Radio button

<div class="flex flex-col my-4">
    <div class="inline-flex items-center">
        <input type="radio" class="cursor-pointer" name="radio-group">
        <span class="ml-2">Radio 1</span>
    </div>
    <div class="inline-flex items-center">
        <input type="radio" class="cursor-pointer" name="radio-group">
        <span class="ml-2">Radio 2</span>
    </div>
    <div class="inline-flex items-center">
        <input type="radio" class="cursor-pointer" name="radio-group">
        <span class="ml-2">Radio 3</span>
    </div>
</div>
<br>
~~~html
<div class="flex flex-col">
    <div class="inline-flex items-center">
        <input type="radio" class="cursor-pointer" name="radio-group">
        <span class="ml-2">Radio 1</span>
    </div>
    <div class="inline-flex items-center">
        <input type="radio" class="cursor-pointer" name="radio-group">
        <span class="ml-2">Radio 2</span>
    </div>
    <div class="inline-flex items-center">
        <input type="radio" class="cursor-pointer" name="radio-group">
        <span class="ml-2">Radio 3</span>
    </div>
</div>
~~~

## Toggle/ switch
Refers to enabling or disabling options.

<div class="my-4">
    <div class="toggle">
        <input type="checkbox" name="toggle" id="toggle" class="toggle-checkbox" />
        <label for="toggle" class="toggle-label"></label>
    </div>
    <label for="toggle">Toggle</label>
</div>
<br>
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

<div id="search" class="search mr-6 mb-4">
    <span class="absolute inset-y-1 left-0 flex items-center px-1">
        <svg class="search-icon" id="search-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" class="feather feather-search inline-block">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
    </span>
    <input type="search" onfocus="addBlueToSearchIcon('search-icon')"
        onfocusout="removeBlueFromSearchIcon('search-icon')" class="w-52" placeholder="Search for content">
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
<div id="search" class="search mr-6 mb-4">
    <span class="absolute inset-y-1 left-0 flex items-center px-1">
        <svg class="search-icon" id="search-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" class="feather feather-search inline-block">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
    </span>
    <input type="search" onfocus="addBlueToSearchIcon('search-icon')"
        onfocusout="removeBlueFromSearchIcon('search-icon')" class="w-52" placeholder="Search for content">
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

<h3 class="mt-8 mb-4">Collapsable Search</h3>
<div id="search" class="search mr-6 mb-2">
    <span class="absolute inset-y-1 left-0 flex items-center px-1">
        <svg class="search-icon cursor-pointer" id="collapsable-search-icon"
        onclick="toggleSearchInputDisplay('collapsable-search')" xmlns="http://www.w3.org/2000/svg"
        width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round" class="feather feather-search">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
    </span>
    <input type="search" id="collapsable-search" onfocus="addBlueToCollapsableSearchIcon('collapsable-search-icon')"
        onfocusout="removeBlueFromCollapsableSearchIcon('collapsable-search-icon')" class="w-52"
        placeholder="Search for content" style="display: none;">
</div>

<script>
    function toggleSearchInputDisplay(id) {
        let collapsableSearch = document.getElementById(id);
        console.log(collapsableSearch.style.display);
        if (collapsableSearch.style.display === "block") {
            hideSearchInput(id);
        } else {
            console.log("displaying");
            collapsableSearch.style.display = "block";
            collapsableSearch.focus();
            addBlueToCollapsableSearchIcon(id + "-icon");
        }
    }

    function hideSearchInput(id) {
        let collapsableSearch = document.getElementById(id);
        removeBlueFromCollapsableSearchIcon(id + "-icon");
        if (!collapsableSearch.value) {
            collapsableSearch.style.display = "none";
        }
    }

    function toggleSearchIconColor(id) {
        let searchIcon = document.getElementById(id);
        if (searchIcon.classList.contains("text-gnome-blue-500")) {
            removeBlueFromCollapsableSearchIcon(id);
        } else {
            addBlueToCollapsableSearchIcon(id);
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
<br>
~~~html
<h3 class="mt-8 mb-4">Collapsable Search</h3>
<div id="search" class="search mr-6 mb-2">
    <span class="absolute inset-y-1 left-0 flex items-center px-1">
        <svg class="search-icon cursor-pointer" id="collapsable-search-icon"
        onclick="toggleSearchInputDisplay('collapsable-search')" xmlns="http://www.w3.org/2000/svg"
        width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round" class="feather feather-search">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
    </span>
    <input type="search" id="collapsable-search" onfocus="addBlueToCollapsableSearchIcon('collapsable-search-icon')"
        onfocusout="removeBlueFromCollapsableSearchIcon('collapsable-search-icon')" class="w-52"
        placeholder="Search for content" style="display: none;">
</div>

<script>
    function toggleSearchInputDisplay(id) {
        let collapsableSearch = document.getElementById(id);
        console.log(collapsableSearch.style.display);
        if (collapsableSearch.style.display === "block") {
            hideSearchInput(id);
        } else {
            console.log("displaying");
            collapsableSearch.style.display = "block";
            collapsableSearch.focus();
            addBlueToCollapsableSearchIcon(id + "-icon");
        }
    }

    function hideSearchInput(id) {
        let collapsableSearch = document.getElementById(id);
        removeBlueFromCollapsableSearchIcon(id + "-icon");
        if (!collapsableSearch.value) {
            collapsableSearch.style.display = "none";
        }
    }

    function toggleSearchIconColor(id) {
        let searchIcon = document.getElementById(id);
        if (searchIcon.classList.contains("text-gnome-blue-500")) {
            removeBlueFromCollapsableSearchIcon(id);
        } else {
            addBlueToCollapsableSearchIcon(id);
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