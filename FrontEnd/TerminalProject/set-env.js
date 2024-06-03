const fs = require('fs').promises;
const path = require('path');
const dotenv = require('dotenv').config({ path: 'src/.env' });

(async () => {
  try {
    // Validar que todas las variables de entorno necesarias estén definidas
    const requiredEnvVars = [
      'spellCheckerService',
      'wordSuggesterService',
      'grammaticalAnalyzerService',
      'OPENAI_API_KEY',
      'moderationService'
    ];
    requiredEnvVars.forEach(varName => {
      if (!process.env[varName]) {
        throw new Error(`Variable de entorno requerida no definida: ${varName}`);
      }
    });

    // Generar contenido del archivo environment.prod.ts
    const envFileContent = `export const environment = {
      spellCheckerService: '${process.env.spellCheckerService}',
      wordSuggesterService: '${process.env.wordSuggesterService}',
      grammaticalAnalyzerService: '${process.env.grammaticalAnalyzerService}',
      OPENAI_API_KEY: '${process.env.OPENAI_API_KEY}',
      moderationService: '${process.env.moderationService}',
      production: true,
    };`;

    // Crear la carpeta environments si no existe
    const envDirPath = path.join(__dirname, 'src', 'environments');
    await fs.mkdir(envDirPath, { recursive: true });

    // Escribir el archivo environment.prod.ts
    const targetPath = path.join(envDirPath, 'environment.ts');
    await fs.writeFile(targetPath, envFileContent);

    console.log('\x1b[32m%s\x1b[0m', '\u{2705} Successfully generated environment.ts');

    // Ejecutar la compilación de Angular
    require('child_process').execSync('ng build --configuration production', { stdio: 'inherit' });
  } catch (err) {
    console.error('Error al generar el archivo de entorno:', err);
  }
})();
