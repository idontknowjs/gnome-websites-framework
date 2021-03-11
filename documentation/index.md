---
layout: home
description: "The GNOME UI is a web library built using [Tailwind CSS](https://tailwindcss.com/) to be used on GNOME's websites. It eases the styling process of the websites and enables better consistency between them, while maintaining a GNOMEish look."
permalink: /
---
# GNOME UI
The GNOME UI is a web library built using [Tailwind CSS](https://tailwindcss.com/) to be used on GNOME's websites. It eases the styling process of the websites and enables better consistency between them while keeping a beautiful and GNOMEish look.

<br>

For further reference concerning styling, check on [Tailwind CSS' documentation](https://tailwindcss.com/).

<br>

The GNOME UI library uses [Feather Icons](https://feathericons.com/) by default.

## Get started
### Set up locally

1. [Install npm](https://www.npmjs.com/get-npm).
2. Clone the repository:
> $ git clone git@gitlab.gnome.org:Teams/Engagement/websites/general-website-resources.git
3. Navigate to the repository folder:
> $ cd general-website-resources
4. Install dependencies:
> $ npm install
5. Generate a build:
> $ npm run build

It will then generate the following files using the created styles:
```
├── dist/
│   ├── index.css
│   ├── index.css.map
│   ├── index.min.css
```

### Documentation
The project documentation is developed using Jekyll and Gitlab pages, and it uses a theme called Just-the-docs. and is available [here](https://teams.pages.gitlab.gnome.org/Engagement/websites/general-website-resources/). The project documentation is placed in the `documentation` folder.

1. Install a full [Ruby development environment](https://jekyllrb.com/docs/installation/).
2. Install dependencies:
> $ bundle install
3. Copy the **generated styles from the previous steps** into the custom styles of the documentation: # Only needed in the first time
> $ mkdir documentation/_sass/custom/ 

> $ cp dist/index.css "documentation/_sass/custom/custom.scss"
4. Run the documentation server:
> $ bundle exec jekyll build -s documentation/
5. Navigate to http://127.0.0.1:4000/Engagement/websites/general-website-resources/ in your browser to see it running.