# General Website Resources
This repository is meant for the discussion and work of the GNOME websites as a whole, not any individual website. Individual website implementations should belong in their own project.

# GNOME UI
The GNOME UI is a web library built using [Tailwind CSS](https://tailwindcss.com/) to be used on GNOME's websites. It eases the styling process of the websites and enables better consistency between them while keeping a beautiful and GNOMEish look.

For further reference concerning styling, check on [Tailwind CSS' documentation](https://tailwindcss.com/).

The GNOME UI library uses [Feather Icons](https://feathericons.com/) by default.

## Dependencies

| Package | Version | File | Source |
|:--------|:-------:|:----:|:------:|
| tailwind  | `1.5.1` | [package.json](https://gitlab.gnome.org/Teams/Engagement/websites/general-website-resources/-/blob/master/package.json) | [GitHub](https://github.com/tailwindlabs/tailwindcss) |
| @tailwindcss/custom-forms  | `0.2.1` | [package.json](https://gitlab.gnome.org/Teams/Engagement/websites/general-website-resources/-/blob/master/package.json) | [GitHub](https://github.com/tailwindlabs/tailwindcss-custom-forms) |
| gulp  | `4.0.2` | [package.json](https://gitlab.gnome.org/Teams/Engagement/websites/general-website-resources/-/blob/master/package.json) | [GitHub](https://github.com/gulpjs/gulp) |
| gulp-clean-css  | `4.3.0` | [package.json](https://gitlab.gnome.org/Teams/Engagement/websites/general-website-resources/-/blob/master/package.json) | [GitHub](https://github.com/scniro/gulp-clean-css) |
| gulp-concat-css  | `3.1.0` | [package.json](https://gitlab.gnome.org/Teams/Engagement/websites/general-website-resources/-/blob/master/package.json) | [GitHub](https://github.com/mariocasciaro/gulp-concat-css) |
| gulp-postcss  | `8.0.0` | [package.json](https://gitlab.gnome.org/Teams/Engagement/websites/general-website-resources/-/blob/master/package.json) | [GitHub](https://github.com/postcss/gulp-postcss) |
| gulp-rename  | `2.0.0` | [package.json](https://gitlab.gnome.org/Teams/Engagement/websites/general-website-resources/-/blob/master/package.json) | [GitHub](https://github.com/hparra/gulp-rename) |
| gulp-sourcemaps  | `2.6.5` | [package.json](https://gitlab.gnome.org/Teams/Engagement/websites/general-website-resources/-/blob/master/package.json) | [GitHub](https://github.com/gulp-sourcemaps/gulp-sourcemaps) |
| postcss-import  | `12.0.1` | [package.json](https://gitlab.gnome.org/Teams/Engagement/websites/general-website-resources/-/blob/master/package.json) | [GitHub](https://github.com/postcss/postcss-import) |
| postcss-omit-import-tilde | `1.0.1` | [package.json](https://gitlab.gnome.org/Teams/Engagement/websites/general-website-resources/-/blob/master/package.json) | [GitHub](https://github.com/vansosnin/postcss-omit-import-tilde) |
| autoprefixer | `9.4.5` | [package.json](https://gitlab.gnome.org/Teams/Engagement/websites/general-website-resources/-/blob/master/package.json) | [GitHub](https://github.com/postcss/autoprefixer) |
| postcss-nested | `4.1.1` | [package.json](https://gitlab.gnome.org/Teams/Engagement/websites/general-website-resources/-/blob/master/package.json) | [GitHub](https://github.com/postcss/postcss-nested) |
| postcss | `7.0.0` | [package.json](https://gitlab.gnome.org/Teams/Engagement/websites/general-website-resources/-/blob/master/package.json) | [GitHub](https://github.com/postcss/postcss) |
| jekyll  | `4.1.1` | [Gemfile](https://gitlab.gnome.org/Teams/Engagement/websites/general-website-resources/-/blob/master/Gemfile) | [GitHub](https://github.com/jekyll/jekyll) |
| jekyll-feed  | `0.12` | [Gemfile](https://gitlab.gnome.org/Teams/Engagement/websites/general-website-resources/-/blob/master/Gemfile) | [GitHub](https://github.com/jekyll/jekyll-feed) |
| just-the-docs  | `?` | [Gemfile](https://gitlab.gnome.org/Teams/Engagement/websites/general-website-resources/-/blob/master/Gemfile) | [GitHub](https://github.com/pmarsceill/just-the-docs) |
| tzinfo  | `1.2` | [Gemfile](https://gitlab.gnome.org/Teams/Engagement/websites/general-website-resources/-/blob/master/Gemfile) | [GitHub](https://github.com/tzinfo/tzinfo) |
| wdm  | `0.1.1` | [Gemfile](https://gitlab.gnome.org/Teams/Engagement/websites/general-website-resources/-/blob/master/Gemfile) | [GitHub](https://github.com/tzinfo/tzinfo) |

## Setup Locally

1. [Install npm](https://www.npmjs.com/get-npm).
2. Clone the repository:
> $ git clone https://gitlab.gnome.org/Teams/Engagement/websites/general-website-resources.git
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
3. Copy the **generated styles from the previous steps** into the custom styles of the documentation:
> $ mkdir documentation/_sass/custom/ # Only needed in the first time
> $ cp dist/index.css "documentation/_sass/custom/custom.scss"
4. Run the documentation server:
> $ bundle exec jekyll build -s documentation/
5. Navigate to http://127.0.0.1:4000/ in your browser to see it running.
