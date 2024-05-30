const fs = require('fs');
require('dotenv').config({ path: './.env' });

const environment = {
  spellCheckerService: process.env.spellCheckerService,
  wordSuggesterService: process.env.wordSuggesterService,
  grammaticalAnalyzerService: process.env.grammaticalAnalyzerService,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  moderationService: process.env.moderationService,
  production: true,
}

const content = `export const environment = ${JSON.stringify(environmet)};`;

fs.writeFileSync('./src/environments/environment.prod.ts', content);
