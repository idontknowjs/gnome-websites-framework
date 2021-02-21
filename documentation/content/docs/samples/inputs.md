---
layout: default
title: Inputs
nav_order: 3
permalink: /samples/inputs
has_children: true
---

{{< example >}}
<div class="bg-gray-100">
    <div class="container my-8 mx-auto shadow-lg p-8 rounded shadow-md-md bg-white max-w-6xl">
        <h2 class="mb-4">Inputs</h2>
        <form class="flex flex-col">
            <h3>This is a form</h3>
            <div class="flex items-center justify-between">
                <div class="flex flex-col w-1/2 mr-4">
                    <label for="first-name" class="mt-6">First Name</label>
                    <input type="text" id="first-name" class="mt-2" placeholder="Write your first name here">
                </div>
                <div class="flex flex-col w-1/2 ml-4">
                    <label for="last-name" class="mt-6">Last Name</label>
                    <input type="text" class="mt-2" id="last-name" placeholder="Write your last name here">
                </div>

            </div>

            <label for="email" class="mt-6">Email</label>
            <input type="email" class="mt-2" id="email">

            <label for="password" class="mt-6">Password</label>
            <input type="password" class="mt-2" id="password">

            <label for="date" class="mt-6">Birthday</label>
            <input type="date" class="mt-2" id="date">

            <label for="invalid" class="mt-6">Invalid input</label>
            <input type="email" class="mt-2 danger" id="invalid">

            <label for="message" class="mt-6">Biography</label>
            <textarea id="message" class="mt-2"></textarea>

            <label for="select" class="mt-6">Select language</label>
            <div class="flex-shrink w-1/3 inline-block relative mt-2">
                <select class="form-select cursor-pointer">
                    <option>English</option>
                    <option>French</option>
                    <option>Spanish</option>
                </select>
            </div>

            <label class="mt-6 items-center flex flex-col mr-auto">
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
            </label>

            <label class="mt-6 items-center flex flex-col mr-auto">
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
            </label>

            <label class="mt-6">
                <div class="toggle">
                    <input type="checkbox" name="toggle" id="toggle" class="toggle-checkbox" />
                    <label for="toggle" class="toggle-label"></label>
                </div>
                <label for="toggle">Toggle</label>
            </label>

            <label for="search" class="mt-8">Default search</label>
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
        </form>
    </div>
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
</script>
{{< /example >}}
