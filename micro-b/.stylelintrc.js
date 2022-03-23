module.exports = {
    "extends": ["stylelint-config-standard", "stylelint-config-recess-order"],
    "plugins": ["stylelint-scss"],
    "customSyntax": "sugarss",
    ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts','node_modules/**','dist/**'],
    "rules": {
        "selector-pseudo-element-no-unknown": [true, {
            ignorePseudoElements: ["v-deep"]
          }],
        "no-empty-source": null
        // "indentation": 2,
        // "at-rule-no-unknown": null,
        // "no-descending-specificity": null,
        // "scss/at-rule-no-unknown": null
    }
}