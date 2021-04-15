const Configuration = {
    /*
     * Resolve and load @commitlint/config-conventional from node_modules.
     * Referenced packages must be installed
     */
    extends: ['@commitlint/config-conventional'],
    /*
     * Any rules defined here will override rules from @commitlint/config-conventional
     */
    rules: {
        "type-enum": [2,"always",['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'revert']],
        "header-max-length": [2, "always", 72],
        "subject-case": [2, "always", 'sentence-case'],
        "body-case": [2, "always", 'sentence-case'],
        "body-max-length": [2, "always", 75],
        "body-full-stop": [2,"always","."]
    },
    /*
     * Functions that return true if commitlint should ignore the given message.
     */
    ignores: [(commit) => commit === ''],
    /*
     * Whether commitlint uses the default ignore rules.
     */
    defaultIgnores: true,
    /*
     * Custom URL to show upon failure
     */
    helpUrl:
      'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
  };
  
  module.exports = Configuration;