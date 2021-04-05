---
layout: home
title: Home
permalink: /
nav_order: 1
---

# GNOME Websites Framework

The GNOME Websites Framework is a CSS library built using [Tailwind CSS](https://tailwindcss.com/) to be used to craft and style Websites following GNOME's own visual identity. It eases the styling process of the websites and enables better consistency between them while keeping a beautiful and GNOMEish look.

For further reference concerning styling, check on [Tailwind CSS' documentation](https://tailwindcss.com/).

The GNOME UI library uses [Feather Icons](https://feathericons.com/) by default.

The GNOME UI Documentation is developed using [Jekyll](https://jekyllrb.com/) and Gitlab pages, and it uses a theme called [Just The Docs](https://pmarsceill.github.io/just-the-docs/) and is available [here](https://teams.pages.gitlab.gnome.org/Engagement/websites/gnome-websites-framework/). 

The project documentation is placed in the `documentation` folder.

You might check the current status of the project regarding backlog, evaluation and implementation of its main components [here](https://gitlab.gnome.org/Teams/Engagement/websites/gnome-websites-framework/-/issues/23).

## Getting started

The steps below will provide you guidance in how to setup the dependencies and how to build the components of this repository.

### Setting up Dependencies

- Install the pre-requisites
  - [NPM](https://www.npmjs.com/get-npm)
  - [Ruby](https://www.ruby-lang.org/en/downloads/)
- Clone the repository
    ```sh
    git clone https://gitlab.gnome.org/Teams/Engagement/websites/gnome-websites-framework.git
    ```
- Then go to the directory of the repository you cloned
    ```sh
    cd gnome-websites-framework
    ```
- Install the Node.js (Library) dependencies
    ```sh
    npm ci
    ```
- Install the Documentation (Jekyll) dependencies
    ```sh
    gem install bundler:2.2.15
    ```

### Building the Library (CSS/Tailwind)

This Library uses [Tailwind](https://tailwindcss.com/) as a base framework and this repositoriy extends Tailwind's functionalities. In order to generate the styles that can be used for production (other websites) you need to build the styles.

In order to generate the styles you need to run the following command.

```sh
npm run build
```

This command will output the following styles

```
├── dist/
│   ├── index.css
│   ├── index.css.map
│   ├── index.min.css
│   ├── index.min.css.map
```

### Copying the Built Library to the Docs folder

- Before building the Documentation you need to copy the Library CSS file
- For the first time you need to create the following directory:
    ```sh
    mkdir documentation/_sass/custom/
    ```
- Every time you change the Library and rebuild it you need to copy the CSS file
    ```sh
    cp dist/index.min.css documentation/_sass/custom/custom.scss
    ```

### Building the Docs (Jekyll)

- Install the Bundler dependencies (first-time)
    ```sh
    cd documentation/
    bundle install
    ```
- You also need to copy the README.md file that is used as the Index page (Usually only needed once)
    ```sh
    cp ../README.md ./index.md
    ```
- Run the documentation server:
    ```sh
    bundle exec jekyll serve --watch
    ```
- Navigate to `http://localhost:4000/Engagement/websites/gnome-websites-framework/` in your browser to see it running.

## Contributing

To contribute, open merge requests at https://gitlab.gnome.org/Teams/Engagement/websites/general-website-resources.

Commit messages should follow the [GNOME commit message guidelines](https://wiki.gnome.org/Git/CommitMessages).

Join our conversations on [Matrix or IRC](https://wiki.gnome.org/Community/GettingInTouch/IRC). You can find us at the #engagement:gnome.org channel.

If you're a **GSoC Student** please give a read to the [GSoC FAQ](https://gitlab.gnome.org/Teams/Engagement/websites/gnome-websites-framework/-/issues/35)
