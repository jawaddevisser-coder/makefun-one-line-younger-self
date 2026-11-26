// One Line to Your Younger Self.
// This program writes the entry line to /output/entry.txt, where the
// sealed scorer reads it. The gate wants UTF-8 text of 1 to 200
// characters, not only white space, so the line is kept short and the
// program refuses to write anything outside that range.
//
// The line is the one an older self would send back: specific and
// hard-won rather than a motto, landing in one breath with a small
// turn at the end.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The job you're killing yourself to keep will forget your name the week you leave — go home for dinner.";

const MAX_CHARS = 200;

if (LINE.length < 1 || LINE.length > MAX_CHARS || LINE.trim().length === 0) {
  throw new Error(`Line is ${LINE.length} characters, outside the 1-200 gate.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
