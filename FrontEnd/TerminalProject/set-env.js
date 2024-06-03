const fs = require('fs');
const path = require('path');
const successColor = '\x1b[32m%s\x1b[0m';
const checkSign = '\u{2705}';
const dotenv = require('dotenv').config({path: 'src/.env'}); ;

const envFile = `export const environment = {
  spellCheckerService: '${process.env.spellCheckerService}',
  wordSuggesterService: '${process.env.wordSuggesterService}',
  grammaticalAnalyzerService: '${process.env.grammaticalAnalyzerService}',
  OPENAI_API_KEY: '${process.env.OPENAI_API_KEY}',
  moderationService: '${process.env.moderationService}',
  production: true,
};`

// crear la carpeta environments si no existe
if (!fs.existsSync('./src/environments')) {
  fs.mkdirSync('./src/environments');
}

const targetPath = path.join(__dirname, './src/environments/environment.prod.ts');
fs.writeFile(targetPath, envFile, (err) => {
  if (err) {
    console.error(err);
    throw err;
  } else {
    console.log(successColor, `${checkSign} Successfully generated environment.prod.ts`);
  }
});
