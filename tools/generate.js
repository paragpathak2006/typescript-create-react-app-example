const generateTemplateFiles = require('generate-template-files');

generateTemplateFiles([
    {
        option: 'Redux Store',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/redux-store/',
        },
        stringReplacers: ['__store__', '__model__'],
        output: {
            path: './src/stores/__store__(lowerCase)',
            pathAndFileNameDefaultCase: '(pascalCase)',
        },
    },
    {
        option: 'Component',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/component/',
        },
        stringReplacers: ['__name__',],
        output: {
            path: './src/views/__name__(lowerCase)',
            pathAndFileNameDefaultCase: '(pascalCase)',
        },
    },
    {
        option: 'Connected Component',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/connected-component/',
        },
        stringReplacers: ['__name__',],
        output: {
            path: './src/views/__name__(lowerCase)',
            pathAndFileNameDefaultCase: '(pascalCase)',
        },
    },
    {
        option: 'Model',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/__model__Model.ts',
        },
        stringReplacers: ['__model__',],
        output: {
            path: './src/models/__model__Model.ts',
            pathAndFileNameDefaultCase: '(pascalCase)',
        },
    },
    {
        option: 'Interface',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/I__interface__.ts',
        },
        stringReplacers: ['__interface__',],
        output: {
            path: './src/models/I__interface__.ts',
            pathAndFileNameDefaultCase: '(pascalCase)',
        },
    },
    {
        option: 'Enum',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/__enum__Enum.ts',
        },
        stringReplacers: ['__enum__',],
        output: {
            path: './src/constants/__enum__Enum.ts',
            pathAndFileNameDefaultCase: '(pascalCase)',
        },
    },
]);
