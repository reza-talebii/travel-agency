module.exports = (plop) => {
    plop.setGenerator("module", {
        description: "Create a module",
        prompts: [{
            type: "input",
            name: "name",
            message: "What is your module name?",
        }, ],
        actions: [{
                type: "add",
                path: "src/modules/{{pascalCase name}}/index.tsx",
                templateFile: "plop-templates/modules/index.tsx.hbs",
            },
            {
                type: "add",
                path: "src/modules/{{pascalCase name}}/styles/index.ts",
                templateFile: "plop-templates/modules/styles/index.ts.hbs",
            },
            {
                type: "add",
                path: "src/modules/{{pascalCase name}}/styles/Wrapper.ts",
                templateFile: "plop-templates/modules/styles/Wrapper.ts.hbs",
            },
            {
                type: "add",
                path: "src/modules/{{pascalCase name}}/context/index.tsx",
                templateFile: "plop-templates/modules/context/index.tsx.hbs",
            },
            {
                type: "add",
                path: "src/modules/{{pascalCase name}}/components/index.tsx",
                templateFile: "plop-templates/modules/components/index.ts.hbs",
            },

            // {
            //     type: "add",
            //     path: "src/modules/{{pascalCase name}}/models/index.ts",
            //     templateFile: "plop-templates/modules/models/index.ts.hbs",
            // },
            // {
            //     type: "add",
            //     path: "src/modules/{{pascalCase name}}/models/enum/index.ts",
            //     templateFile: "plop-templates/models/enum/index.ts.hbs",
            // },
            // {
            //     type: "add",
            //     path: "src/modules/{{pascalCase name}}/models/interfaces/index.ts",
            //     templateFile: "plop-templates/models/interfaces/index.ts.hbs",
            // },
        ],
    });
    plop.setGenerator("pages", {
        description: "Create a page",
        prompts: [{
                type: "input",
                name: "name",
                message: "What is your page name?",
            },
            {
                type: "input",
                name: "moduleName",
                message: "What is your module file name?",
            },
        ],
        actions: [{
            type: "add",
            path: "src/pages/{{pascalCase name}}/index.tsx",
            templateFile: "plop-templates/pages/index.tsx.hbs",
        }, ],
    });

    plop.setGenerator("service", {
        description: "Create (api) service",
        prompts: [{
            type: "input",
            name: "name",
            message: "What is your service name?",
        }, ],
        actions: [{
                type: "add",
                path: "src/services/controllers/{{pascalCase name}}/{{pascalCase name}}.service.ts",
                templateFile: "plop-templates/services/index.ts.hbs",
            },
            {
                type: "add",
                path: "src/services/controllers/{{pascalCase name}}/urls.ts",
                templateFile: "plop-templates/services/urls.ts.hbs",
            },
            {
                type: "add",
                path: "src/services/controllers/{{pascalCase name}}/models/args.models.ts",
                templateFile: "plop-templates/services/models/args.models.ts.hbs",
            },
            {
                type: "add",
                path: "src/services/controllers/{{pascalCase name}}/models/result.model.ts",
                templateFile: "plop-templates/services/models/result.model.ts.hbs",
            },
            {
                type: "add",
                path: "src/services/controllers/{{pascalCase name}}/models/index.ts",
                templateFile: "plop-templates/services/models/index.ts.hbs",
            },
        ],
    });
};