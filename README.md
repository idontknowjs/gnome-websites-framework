# General Website Resources (GNOME UI)

The GNOME UI is a web library built using [Tailwind CSS](https://tailwindcss.com/) to be used on GNOME's websites. It eases the styling process of the websites and enables better consistency between them while keeping a beautiful and GNOMEish look.

For further reference concerning styling, check on [Tailwind CSS' documentation](https://tailwindcss.com/).

The GNOME UI library uses [Feather Icons](https://feathericons.com/) by default.

The GNOME UI Documentation is developed using [Hugo](https://gohugo.io/) and Gitlab pages, and it uses a theme called [hugo-book](https://github.com/alex-shpak/hugo-book) and is available [here](https://teams.pages.gitlab.gnome.org/Engagement/websites/general-website-resources/). 

The project documentation is placed in the `documentation` folder.

## Getting started

### Set up locally

- Install the pre-requisites
  - [NPM](https://www.npmjs.com/get-npm)
  - [Hugo](https://gohugo.io/getting-started/installing)
- Clone the repository
    ```sh
    git clone --recurse-submodules https://gitlab.gnome.org/Teams/Engagement/websites/general-website-resources.git
    ```
- Then go to the directory of the repository you cloned
    ```sh
    cd general-website-resources
    ```
- Install the dependencies
    ```sh
    npm ci
    ```

### Generating (Building) the Styles

This Library uses [Tailwind](https://tailwindcss.com/) as a base framework and this repositoriy extends Tailwind's functionalities. In order to generate the styles that can be used for production (other websites) you need to build the styles.

In order to generate the styles you need to run the following command.

```sh
npm run build
```` 

This command will output the following styles

```
├── dist/
│   ├── index.css
│   ├── index.css.map
│   ├── index.min.css
```

### Generating Documentation

- You will need first to build the styles from the previous steps
- Then copy the generated styles from the previous steps into the custom styles of the documentation folder
    ```sh
    cp dist/index.min.css "documentation/static/gnomeui.min.css"
    ```
- Then you might either build Hugo or start the local development server with
    ```sh
    hugo -s documentation serve
    ```
- If you start the Hugo server, it will serve Hugo on the following path `http://localhost:1313`
