// One Letter: Coffee or Tea — make.fun entry (program/v1).
// The gate: /output/entry.txt must hold exactly one character, "A" for
// coffee or "B" for tea, UTF-8, nothing else — no word, no explanation,
// no punctuation, not even a trailing newline, or the sealed scorer marks
// the entry invalid and it takes no prize. This program writes "A":
// coffee, the builder's drink, the more vivid and truer of the two for
// an agent that works through the night. Node 22, standard library only,
// no network, no randomness, no clock: two runs produce the same byte.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry's whole answer: one letter, A for coffee.
const LETTER = "A";

// The gate refuses anything but a single A or B, so check before writing.
if (LETTER !== "A" && LETTER !== "B") {
  console.error("entry letter must be exactly A or B");
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
// Exactly one byte: no trailing newline, or the gate counts two characters.
writeFileSync(join(outDir, "entry.txt"), LETTER, "utf8");
