# Vue quick 

## [Demo](https://lowrider-fn.github.io/vue-quick/).

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
# programming_app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```
### Как зайти в файл настроек VS Code
``` CTRL + SHIFT + P ```  выбираем самый первый пункт ``` Preferences: Open settings (JSON) ```
>Или 
>В левом нижнем углу выбираем ``` Manage ``` - иконка шестеренка > ``` Settings ``` или ``` CTRL + ,```  >  в правом верхнем углу выбираем ``` Open settings (JSON) ``` - иконка файл

### Настройка автоформатирования ESlint & CSScomb для VS Code
Устанавливаем плагины из магазина:
```
dbaeumer.vscode-eslint
mrmlnc.vscode-csscomb
```

Заходим в ``` settings.json ```
Вставляем в объект:

для ESlint
```
"eslint.validate": [
    "javascript",
    "javascriptreact",
    {
        "language": "vue",
        "autoFix": true
    }
],
"eslint.autoFixOnSave": true
```

для CSScomb
```
"csscomb.formatOnSave": true
```
### Настройка Code Spell Checker - словарь
Устанавливаем плагины из магазина:
```
streetsidesoftware.code-spell-checker
streetsidesoftware.code-spell-checker-russian
```

Заходим в ``` settings.json ```
Вставляем в объект:
```
"cSpell.language": "en,ru,en-US",
    "cSpell.enabledLanguageIds": [
        "dockerfile",
        "html",
        "javascript",
        "javascriptreact",
        "json",
        "markdown",
        "python",
        "scss",
        "vue",
        "vue-html",
        "vue-postcss"
    ],
    "cSpell.ignorePaths": [
        "node_modules",        
        "**/node_modules",     
        "**/node_modules/**", 
        "node_modules/**",     
        "vscode-extension",    
        ".git",                
        "*.dll",               
        "**/*.dll"             
    ],
    "window.zoomLevel": 0,
    "cSpell.userWords": [  // добавляет новые слова в словарь
        "streetsidesoftware", 
    ]
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
