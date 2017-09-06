# React app for solutions.hamburg

## Structure of repository

`/packages/app/` — main application  
`/packages/moduleX/` — module, developed by one team  
`/packages/moduleY/` — module, developed by another team  
`/packages/commons/` — common components with showcase, developed by third team  
`/packages/core/` — core of application, e.g. event system  
`/packages/utils/` — common gulp commands, for example:
```
# build and run application in dev mode
gulp

# run code quality tools
gulp lint
gulp stylelint
gulp csscomb
```

In real development we recommend to use different repositories, 
here everything is collected in one place just for demonstration.
For same reasons we limited only by development mode and by simple 
tech stack.

## Install and run
We can run `app`, `commons`, `moduleX` and `moduleY` from their directories

```
cd /package/<applicationName>/

npm install
gulp
```

## Main application

For main application (`app`) we also have a shortcut from the root of repository
```
npm install
npm start
```
