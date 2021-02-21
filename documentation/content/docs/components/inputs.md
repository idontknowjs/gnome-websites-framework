---
layout: default
title: Inputs
parent: Components
nav_order: 3
---

# Inputs

## Basic text

For single line inputs.

{{< example >}}
<div class="flex flex-col w-1/2">
    <label for="first-name" >First Name</label>
    <input type="text" id="first-name" class="mt-2" placeholder="Write your first name here">
</div>
{{< /example >}}

## Text area

For multiline inputs.

{{< example >}}
<div class="flex flex-col">
    <label for="message" >Biography</label>
    <textarea id="message" class="mt-2"></textarea>
</div>
{{< /example >}}

## Date

{{< example >}}
<div class="flex flex-col w-1/2">
    <label for="date">Birthday</label>
    <input type="date" class="mt-2" id="date">
</div>
{{< /example >}}

## Email

{{< example >}}
<div class="flex flex-col w-1/2">
    <label for="email" >Email</label>
    <input type="email" class="mt-2" id="email" placeholder="your@email.com">
</div>
{{< /example >}}

## Password

{{< example >}}
<div class="flex flex-col w-1/2">
    <label for="password" >Password</label>
    <input type="password" class="mt-2" id="password">
</div>
{{< /example >}}

## Invalid inputs

When some input has invalid data or is not filled, apply the `danger` class.

{{< example >}}
<div class="flex flex-col w-1/2">
    <label for="invalid">Invalid input</label>
    <input type="email" class="mt-2 danger" id="invalid">
</div>
{{< /example >}}

## Select

For predetermined options.

{{< example >}}
<label for="select" class="mt-6">Select language</label>
<div class="flex-shrink w-1/3 inline-block relative mt-2">
    <select class="form-select cursor-pointer">
        <option>English</option>
        <option>French</option>
        <option>Spanish</option>
    </select>
</div>
{{< /example >}}

## Checkbox

{{< example >}}
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
{{< /example >}}

## Radio button

{{< example >}}
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
{{< /example >}}

## Toggle/ switch
Refers to enabling or disabling options.

{{< example >}}
<div>
    <div class="toggle">
        <input type="checkbox" name="toggle" id="toggle" class="toggle-checkbox" />
        <label for="toggle" class="toggle-label"></label>
    </div>
    <label for="toggle">Toggle</label>
</div>
{{< /example >}}

## Search

### Regular search

![Regular search](/assets/regular-search.gif)

{{< example >}}
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
{{< /example >}}

### Collapsable search

![Collapsable search](/assets/collapsable-search.gif)

{{< example >}}
<label for="search" class="mt-8">Collapsed search</label>
<div id="search" class="search mr-6 mb-8">
    <input type="search" id="collapsable-search" onfocus="addBlueToCollapsableSearchIcon('collapsable-search-icon')"
        onfocusout="removeBlueFromCollapsableSearchIcon('collapsable-search-icon')" class="w-48"
        placeholder="Search for content">
    <svg class="search-icon cursor-pointer" id="collapsable-search-icon"
        onclick="toggleSearchInputDisplay('collapsable-search')" xmlns="http://www.w3.org/2000/svg"
        width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round" class="feather feather-search">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
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
{{< /example >}}
