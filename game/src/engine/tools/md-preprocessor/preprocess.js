const yargs = require('yargs/yargs')
const fs = require('fs');
const linereader = require('line-reader');
const rs = require("randomstring");
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
let letid = 'a';

if((!argv.s && !argv.source) || (!argv.d && !argv.destination)){
    console.log('Missing either a source file or destination directory. Ending execution.');
    return;
}

if(argv.l || argv.idletter){
    letid = argv.l || argv.idletter;
}

let sourceFile = argv.s || argv.source;
let destinationDirectory = argv.d || argv.destination;

try{
    if(fs.existsSync(sourceFile)){
    }
} catch(err){
    console.log('Cannot find the source file. Ending execution.');
    return;
}

try {
    if (fs.existsSync(destinationDirectory)) {
    }
} catch (err) {
    console.log('Cannot find the destination directory. Ending execution.');
    return;
}

const randomIdentifier = rs.generate(5);

const writeStream = fs.createWriteStream(`${destinationDirectory}\\script${randomIdentifier}.js`);
let index = 1;

writeStream.write('');
writeStream.write('const script = {\n');



linereader.eachLine(sourceFile, (line, last) => {
    if(line.length > 0){
        let leen = line.replace(/\\([\s\S])|(")/g, "\\$1$2"); 
        writeStream.write(`\t"${letid}${index}": "[say]${leen}",\n`)
        index++;
    }
    if(last){
        writeStream.write('}\n');
        writeStream.write('export default script;\n');
        writeStream.end();
    }
});
