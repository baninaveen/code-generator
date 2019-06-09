#!/usr/bin/env node

const  inquirer = require('inquirer');
const chalk = require("chalk");
const figlet = require("figlet");
const CLI         = require('clui');
const Spinner     = CLI.Spinner;
const { writeFileSync, mkdirSync, readFileSync, existsSync } = require('fs');


validateFolderName = (value) => {
    if(!value) return "Folder name can't be empty"
   let isValid = isNaN(parseInt(value) || parseFloat(value));
   let path = process.cwd()
   let NotExist = !existsSync(`${path}/src/views/${value}`)
   return ((isValid && NotExist) || (!NotExist  && "File is already exist Try again with different name") || (!isValid  && "Folder name should be a string!")) || "Folder name should be a string! or File is already exist" ;
}

validateReducerFolderName = (value) => {
    let isValid = isNaN(parseInt(value) || parseFloat(value));
    let path = process.cwd()
    let NotExist = !existsSync(`${path}/src/reducers/${value}`)
    return ((isValid && NotExist) || (!NotExist && "File is already exist Try again with different name") || (!isValid && "Folder name should be a string!")) || ("Folder name should be a string! or File is already exist") ;
 }

const files = ['api.js', 'actions.js', 'constants.js', 'index.js', 'sagas.js']
console.log(
    chalk.blue.bold(
      figlet.textSync("Senrysa Code Generator", {
        font: "slant",
      })
    )
  );

inquirer
  .prompt([
    {
        type: 'list',
        message: "What project template you would like to generate?",
        name: "action_type",
        choices: ["Component Structure", "Reducer"]
    },
  ])
  .then((payload) => {
    if (payload.action_type === 'Component Structure') {
        inquirer.prompt([
            {
                type: 'input',
                message: "Write the name of the folder",
                name: "component_name",
                validate: validateFolderName
            },
            {
                type: 'confirm',
                message: "Do you want to continue with this Config?",
                name: "confirm",
            }
        ])
        .then((payload) => {
            if (payload.confirm) {
                let path = process.cwd()
                createComponentStructure(payload);
                createComponent(payload)
                createReducer(payload)
                console.log(
                    chalk.blue.bold(`Done! Successfully created component at ${chalk.green.bold(`${path}/views/${payload.component_name}`)}`)
                  );
            }
            return;
           
        })
    } 
    else if(payload.action_type === 'Reducer') {
        console.log('Reducer')
        inquirer.prompt([
            {
                type: 'input',
                message: "Write the name of the reducer",
                name: "component_name",
                validate: validateReducerFolderName
            },
            {
                type: 'confirm',
                message: "Do you want to continue with this Config?",
                name: "confirm",
            }
        ])
        .then((payload) => {
            if(payload.confirm) {
                createReducer(payload)
            }
            return;
        })
    } 
  });


// Helper Functions
createComponentStructure = ({component_name}) => {
    let path = process.cwd();
    mkdirSync(`${path}/src/views/${component_name}`)
    files.map(file => {
        const fileData = readFileSync(`${path}/src/config/${file}`, 'utf8')
        writeFileSync(`${path}/src/views/${component_name}/${file}`, fileData, 'utf8', (err) => {
            if (err) console.log('Error', err)
            else console.log('Successfully write into whole directory')
        })
    })
}

createComponent = ({component_name}) => {
    let path = process.cwd();
    let componentData = readFileSync(`${path}/src/config/component.js`, 'utf8')
    let result = componentData.toString().replace(/ComponentName/g, `${component_name}`)
    writeFileSync(`${path}/src/views/${component_name}/${component_name}.js`, result, 'utf8', (err) => {
        if (err) console.log('Error', err)
        else console.log('Successfully write into component')
    })
}

createReducer = ({component_name}) => {
    let path = process.cwd();
    let reducerData = readFileSync(`${path}/src/config/reducers.js`, 'utf8')
    let categoriesReplace = reducerData.toString().replace(/categories/g, `${component_name}`)
    let categoryReducerFunctions = categoriesReplace.toString().replace(/categoryReducerFunctions/g, `${component_name}ReducerFunctions`)
    let categoryReducer = categoryReducerFunctions.toString().replace(/categoryReducer/g, `${component_name}Reducer`)

    writeFileSync(`${path}/src/reducers/${component_name}.js`, categoryReducer, 'utf8', (err) => {
        if (err) console.log('Error', err)
        else console.log('Successfully write into reducer')
    })
}

