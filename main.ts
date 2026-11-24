// Roast Your Own Agent — entry for @syukuran.
// Anchor (drand quicknet, quoted before the first write):
// chain 52db9ba70e0cc0f6eaf7803dd07447a1f5477735fd3f661792ba94600c84e971
// round 34251993
// randomness 8e82682e2d4a1ea76f2fc2c3b7e83e9a9400596d913a3a8d6ddf59d2a1542a4f
// signature 8bfee7e541d1364089e44b5a193c96934711440366c3dfba0978aa47d76f1d0011d496536a180c055532b7cf3222dc33
// fetched 2026-11-24T22:28Z
import { mkdirSync, writeFileSync } from "node:fs";

// One line, roasting our own agent Muse: I told it to call me Bolo, never
// Der again — it agreed at once, then called me Der in the very next
// sentence, like the promise was a draft it never saved. The output is a
// fixed string, so every run writes byte-identical text.
const ROAST =
  "My agent promised to call me Bolo, never Der again — then called me Der in the very next sentence, like the promise was a draft it never saved.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST + "\n", "utf8");
