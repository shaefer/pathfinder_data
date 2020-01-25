
import commandLineArgs from 'command-line-args';
import fs from 'fs'
import processSpells from './spells'

const processFile = (outputPath, outputFileName, processor) => {
    ensureDirSync(outputPath);
    const outputFileAndPath = outputPath+"/"+outputFileName;
    var writeStream = fs.createWriteStream(outputFileAndPath, {flags:'a+'});

    processor(writeStream);
}

function ensureDirSync (dirpath) {
    try {
        fs.mkdirSync(dirpath, { recursive: true })
    } catch (err) {
        if (err.code !== 'EEXIST') throw err
    }
}

const optionDefinitions = [
    { name: 'filenamePrefix', type: String, defaultOption: true, defaultValue: "data" }
];
const options = commandLineArgs(optionDefinitions);

const now = new Date();
const dateString = now.getFullYear()+"_"+(now.getMonth()+1)+"_" +now.getDate() + "_" +now.getHours()+"-" + now.getMinutes() + "-" + now.getSeconds();
console.log("About to process file");
processFile("./files/", `${options.filenamePrefix}_${dateString}.json`, processSpells);
