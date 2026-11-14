import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const programDir = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(programDir, "entry.png");
if (!existsSync(sourcePath)) {
  throw new Error(`Source image not found: ${sourcePath}. Expected entry.png next to main.ts.`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

const outputPath = join(outputDir, "entry.png");
copyFileSync(sourcePath, outputPath);

const sourceSize = statSync(sourcePath).size;
const outputSize = statSync(outputPath).size;
if (outputSize !== sourceSize) {
  throw new Error(
    `Copy verification failed: expected ${sourceSize} bytes, got ${outputSize} bytes at ${outputPath}`,
  );
}

console.log(`Copied ${outputPath} (${outputSize} bytes)`);
