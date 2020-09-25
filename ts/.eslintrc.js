/*
👋 Hi! This file was autogenerated by tslint-to-eslint-config.
https://github.com/typescript-eslint/tslint-to-eslint-config

It represents the closest reasonable ESLint configuration to this
project's original TSLint configuration.

We recommend eventually switching this configuration to extend from
the recommended rulesets in typescript-eslint.
https://github.com/typescript-eslint/tslint-to-eslint-config/blob/master/docs/FAQs.md

Happy linting! 💖
*/
module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "plugins": [
        "eslint-plugin-import",
        "eslint-plugin-jsdoc",
        "@angular-eslint/eslint-plugin",
        "@angular-eslint/eslint-plugin-template",
        "eslint-plugin-prefer-arrow",
        "@nrwl/nx",
        "@typescript-eslint"
    ],
    "overrides": [
        {
            "files": ["*.ts"],
            "extends": [
                "plugin:@typescript-eslint/recommended",
                "plugin:@typescript-eslint/recommended-requiring-type-checking",
                "plugin:@angular-eslint/recommended",
            ],
            "parser": "@typescript-eslint/parser",
            "parserOptions": {
                "project": [
                    "tsconfig.*?.json"
                ],
                "sourceType": "module",
                "ecmaVersion": 2018,
            },
            "rules": {
                "@angular-eslint/component-class-suffix": "error",
                "@angular-eslint/directive-class-suffix": "error",
                "@angular-eslint/no-conflicting-lifecycle": "error",
                "@angular-eslint/no-host-metadata-property": "error",
                "@angular-eslint/no-input-rename": "error",
                "@angular-eslint/no-inputs-metadata-property": "error",
                "@angular-eslint/no-output-native": "error",
                "@angular-eslint/no-output-on-prefix": "error",
                "@angular-eslint/no-output-rename": "error",
                "@angular-eslint/no-outputs-metadata-property": "error",
                "@angular-eslint/use-lifecycle-interface": "error",
                "@angular-eslint/use-pipe-transform-interface": "error",
                "@nrwl/nx/enforce-module-boundaries": [
                    "error",
                    {
                        "enforceBuildableLibDependency": true,
                        "allow": [],
                        "depConstraints": [
                            // Orchestrator-independent core libraries may only depend on each other.
                            { "sourceTag": "scope:core", "onlyDependOnLibsWithTags": [ "scope:core" ] },

                            // Metrics may only depend on core libraries and other metrics.
                            { "sourceTag": "scope:metric", "onlyDependOnLibsWithTags": [ "scope:core", "scope:metric" ] },

                            // SLOs may depend on core, metrics, and other SLOs.
                            // If an SLO only has "scope:slo", it must be orchestrator-independent.
                            // If it should be orchestrator-specific, the tag of the respective orchestrator must be added.
                            { "sourceTag": "scope:slo", "onlyDependOnLibsWithTags": [ "scope:core", "scope:metric", "scope:slo" ] },

                            // ElasticityStrategies may depend on core, metrics, SLOs, and other strategies.
                            { "sourceTag": "scope:elasticity-strategy", "onlyDependOnLibsWithTags": [ "scope:core", "scope:metric", "scope:slo", "scope:elasticity-strategy" ] },

                            // Kubernetes-specific libraries may only depend on core libraries and other Kubernetes libraries.
                            // A Kubernetes-specific SLO would e.g., have the tags "scope:slo" and "orchestrator:kubernetes"
                            { "sourceTag": "orchestrator:kubernetes", "onlyDependOnLibsWithTags": [ "scope:core", "orchestrator:kubernetes" ] },

                            // UI projects may depend on any library project.
                            { "sourceTag": "scope:ui", "onlyDependOnLibsWithTags": [ "*" ] },
                        ]
                    }
                ],
                "@typescript-eslint/array-type": [
                    "error",
                    {
                        "default": "array"
                    }
                ],
                "@typescript-eslint/ban-types": [
                    "error",
                    {
                        "types": {
                            "Object": {
                                "message": "Avoid using the `Object` type. Did you mean `object`?"
                            },
                            "Boolean": {
                                "message": "Avoid using the `Boolean` type. Did you mean `boolean`?"
                            },
                            "Number": {
                                "message": "Avoid using the `Number` type. Did you mean `number`?"
                            },
                            "String": {
                                "message": "Avoid using the `String` type. Did you mean `string`?"
                            },
                            "Symbol": {
                                "message": "Avoid using the `Symbol` type. Did you mean `symbol`?"
                            }
                        }
                    }
                ],
                "@typescript-eslint/consistent-type-definitions": "error",
                "@typescript-eslint/dot-notation": "off",
                "@typescript-eslint/explicit-function-return-type": [
                    "error",
                    {
                        "allowExpressions": true,
                        "allowTypedFunctionExpressions": true,
                        "allowHigherOrderFunctions": true,
                    }
                ],
                "@typescript-eslint/explicit-member-accessibility": [
                    "off",
                    {
                        "accessibility": "explicit"
                    }
                ],
                "@typescript-eslint/indent": "error",
                "@typescript-eslint/member-ordering": "error",
                "@typescript-eslint/naming-convention": "error",
                "@typescript-eslint/no-empty-function": "off",
                "@typescript-eslint/no-empty-interface": "off",
                "@typescript-eslint/no-explicit-any": "off",
                "@typescript-eslint/no-inferrable-types": [
                    "error",
                    {
                        "ignoreParameters": true
                    }
                ],
                "@typescript-eslint/no-non-null-assertion": "error",
                "@typescript-eslint/no-parameter-properties": "off",
                "@typescript-eslint/no-unused-expressions": "error",
                "@typescript-eslint/no-use-before-define": "off",
                "@typescript-eslint/no-var-requires": "error",
                "@typescript-eslint/prefer-for-of": "error",
                "@typescript-eslint/prefer-function-type": "error",
                "@typescript-eslint/quotes": [
                    "error",
                    "single"
                ],
                "@typescript-eslint/triple-slash-reference": [
                    "error",
                    {
                        "path": "always",
                        "types": "prefer-import",
                        "lib": "always"
                    }
                ],
                "@typescript-eslint/typedef": [
                    "error",
                    {
                        "arrayDestructuring": false,
                        "arrowParameter": false,
                        "memberVariableDeclaration": false,
                        "objectDestructuring": false,
                        "parameter": true,
                        "propertyDeclaration": true,
                        "variableDeclaration": false,
                        "variableDeclarationIgnoreFunction": false,
                    }
                ],
                "@typescript-eslint/unbound-method": [
                    "error",
                    {
                        "ignoreStatic": true
                    }
                ],
                "@typescript-eslint/unified-signatures": "error",
                "arrow-body-style": "error",
                "arrow-parens": [
                    "off",
                    "always"
                ],
                "comma-dangle": [
                    "error",
                    {
                        "arrays": "always-multiline",
                        "functions": "always-multiline",
                        "imports": "always-multiline",
                        "objects": "always-multiline"
                    }
                ],
                "complexity": "off",
                "constructor-super": "error",
                "eqeqeq": [
                    "error",
                    "smart"
                ],
                "guard-for-in": "error",
                "id-blacklist": [
                    "error",
                    "any",
                    "Number",
                    "number",
                    "String",
                    "string",
                    "Boolean",
                    "boolean",
                    "Undefined",
                ],
                "id-match": "error",
                "import/order": [
                    "error",
                    {
                        alphabetize: {
                            order: 'asc',
                            caseInsensitive: true,
                        }
                    }
                ],
                "jsdoc/check-alignment": "error",
                "jsdoc/newline-after-description": "error",
                "jsdoc/no-types": "error",
                "linebreak-style": [
                    "error",
                    "unix"
                ],
                "max-classes-per-file": "off",
                "max-len": [
                    "warn",
                    {
                        "code": 160
                    }
                ],
                "new-parens": "error",
                "no-bitwise": "error",
                "no-caller": "error",
                "no-cond-assign": "error",
                "no-console": [
                    "error",
                    {
                        "allow": [
                            "log",
                            "warn",
                            "dir",
                            "timeLog",
                            "assert",
                            "clear",
                            "count",
                            "countReset",
                            "group",
                            "groupEnd",
                            "table",
                            "dirxml",
                            "error",
                            "groupCollapsed",
                            "Console",
                            "profile",
                            "profileEnd",
                            "timeStamp",
                            "context"
                        ]
                    }
                ],
                "no-debugger": "error",
                "no-empty": "off",
                "no-eval": "error",
                "no-fallthrough": "error",
                "no-invalid-this": "off",
                "no-multiple-empty-lines": "off",
                "no-new-wrappers": "error",
                "no-restricted-imports": [
                    "error",
                    "rxjs/Rx"
                ],
                "no-shadow": [
                    "error",
                    {
                        "hoist": "all"
                    }
                ],
                "no-throw-literal": "error",
                "no-trailing-spaces": "error",
                "no-undef-init": "error",
                "no-underscore-dangle": "error",
                "no-unsafe-finally": "error",
                "no-unused-labels": "error",
                "no-use-before-define": "off",
                "object-shorthand": "error",
                "one-var": [
                    "error",
                    "never"
                ],
                "prefer-arrow/prefer-arrow-functions": [
                    "error",
                    {
                        "allowStandaloneDeclarations": true,
                    }
                ],
                "quote-props": [
                    "error",
                    "as-needed"
                ],
                "radix": "error",
                "sort-imports": [
                    "error",
                    {
                        // Sorting of multiple imports from one module is provided by sort-imports, sorting the order of the modules is provided by import/order
                        "ignoreDeclarationSort": true,
                    }
                ],
                "spaced-comment": [
                    "error",
                    "always",
                    {
                        "markers": [
                            "/"
                        ]
                    }
                ],
                "use-isnan": "error",
                "valid-typeof": "off",
                // The following are TSLint rule is not (yet) supported by ESLint.
                // It could be run by enabling TSLint integration.
                // "@typescript-eslint/tslint/config": [
                //     "error",
                //     {
                //         "rules": {
                //             "whitespace": [
                //                 true,
                //                 "check-branch",
                //                 "check-decl",
                //                 "check-module",
                //                 "check-operator",
                //                 "check-separator",
                //                 "check-rest-spread",
                //                 "check-type",
                //                 "check-typecast",
                //                 "check-type-operator",
                //                 "check-preblock"
                //             ]
                //         }
                //     }
                // ]
            },
        },
        {
            "files": ["*.component.html"],
            "extends": ["plugin:@angular-eslint/template/recommended"],
            "rules": {
                /**
                 * Any template/HTML related rules you wish to use/reconfigure over and above the
                 * recommended set provided by the @angular-eslint project would go here.
                 */
            }
        },
    ]
};
