---
layout: default
title: Home
nav_order: 1
description: "The GNOME UI is a web library built using [Tailwind CSS](https://tailwindcss.com/) to be used on GNOME's websites. It eases the styling process of the websites and enables better consistency between them, while maintaining a GNOMEish look."
permalink: /
last_modified_date: 2020-04-27T17:54:08+0000
---

# GNOME UI

The GNOME UI is a web library built using [Tailwind CSS](https://tailwindcss.com/) to be used on GNOME's websites. It eases the styling process of the websites and enables better consistency between them while keeping a beautiful and GNOMEish look.

For further reference concerning styling, check on [Tailwind CSS' documentation](https://tailwindcss.com/).

The GNOME UI library uses [Feather Icons](https://feathericons.com/) by default.

## Get started

### Set up locally

1. [Install npm](https://www.npmjs.com/get-npm).
2. Clone the repository:
> `$ git clone git@gitlab.gnome.org:Teams/Engagement/websites/gnome-websites-framework.git`
3. Navigate to the repository folder:
> `$ cd gnome-websites-framework`
4. Install dependencies:
> `$ npm install`
5. Generate a build:
> `$ npm run build`

It will then generate the following files using the created styles:

```
├── dist/
│   ├── index.css
│   ├── index.css.map
│   ├── index.min.css
```

### Documentation

The project documentation is developed using [Hugo](https://gohugo.io/) and Gitlab pages, and it uses a theme called [hugo-book](https://github.com/alex-shpak/hugo-book) and is available [here](https://teams.pages.gitlab.gnome.org/Engagement/websites/gnome-websites-framework/). The project documentation is placed in the `documentation` folder.

1. Clone the repository with all necessary submodules
> `$ git clone --recurse-submodules https://gitlab.gnome.org/Teams/Engagement/websites/gnome-websites-framework` 
2. [Install Hugo](https://gohugo.io/getting-started/installing#linux)
3. Copy the **generated styles from the previous steps** into the custom styles of the documentation:
> `$ cp dist/index.min.css "documentation/static/gnomeui.min.css"`
4. Run the documentation server:
> `$ hugo -s documentation serve`
5. Navigate to <http://localhost:1313> in your browser to see it running.
