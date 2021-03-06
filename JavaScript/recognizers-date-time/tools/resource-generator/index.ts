import * as generator from "./lib/base-code-generator";

let resourcesPath = '../../Patterns/';
let outputPath = "./src/resources/";

let configs = [
    // COMMON DATE TIME
    {
        yaml: `${resourcesPath}Base-DateTime.yaml`,
        output: `${outputPath}baseDateTime.ts`,
        header: `export namespace BaseDateTime {`,
        footer: `}`
    },
    // ENGLISH DATE TIME WITH UNIT
    {
        yaml: `${resourcesPath}/English/English-DateTime.yaml`,
        output: `${outputPath}englishDateTime.ts`,
        header:
        `import { BaseDateTime } from "./baseDateTime";
export namespace EnglishDateTime {`,
        footer: `}`
    },
    // SPANISH DATE TIME WITH UNIT
    {
        yaml: `${resourcesPath}/Spanish/Spanish-DateTime.yaml`,
        output: `${outputPath}spanishDateTime.ts`,
        header:
        `import { BaseDateTime } from "./baseDateTime";
export namespace SpanishDateTime {`,
        footer: `}`
    }
];

class Startup {
    public static main(): number {
        configs.forEach(config => {
            generator.generate(config.yaml, config.output, config.header, config.footer);
        });

        return 0;
    }
}

Startup.main();