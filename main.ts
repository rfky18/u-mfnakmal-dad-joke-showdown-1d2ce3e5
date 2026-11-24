// Dad Joke Showdown — entry penulis: satu joke kalender, 98 karakter, tanpa newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My calendar and I broke up. It said I never had time for it, and honestly, the days were numbered.";

// Validasi: joke harus 1-200 karakter dan UTF-8 murni (tanpa karakter pengganti).
if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`Joke harus 1-200 karakter, dapat ${JOKE.length}.`);
}
const encoded = new TextEncoder().encode(JOKE);
if (new TextDecoder("utf-8", { fatal: true }).decode(encoded) !== JOKE) {
  throw new Error("Joke bukan UTF-8 yang valid.");
}
if (encoded.byteLength < 1 || encoded.byteLength > 200) {
  throw new Error(`Joke harus 1-200 byte, dapat ${encoded.byteLength}.`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
