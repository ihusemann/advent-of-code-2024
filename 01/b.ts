import { readFileSync } from "node:fs";
import path from "node:path";

const filepath = path.join(__dirname, "input.txt");

const input = readFileSync(filepath, "utf-8");

const left: number[] = [];
const right: { [key: number]: number } = {};

for (const line of input.split("\n")) {
  const [l, r] = line.split("  ");
  left.push(+l);

  if (!(+r in right)) {
    right[+r] = 1;
    continue;
  }

  right[+r] = right[+r] + 1;
}

const score = left.reduce((score, l) => {
  if (!(l in right)) {
    return score;
  }

  return score + l * right[l];
}, 0);

console.log(score);
