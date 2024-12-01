import { readFileSync } from "node:fs";
import path from "node:path";

const filepath = path.join(__dirname, "input.txt");

const input = readFileSync(filepath, "utf-8");

const left: number[] = [];
const right: number[] = [];

for (const line of input.split("\n")) {
  const [l, r] = line.split("  ");
  left.push(+l);
  right.push(+r);
}

const lSorted = left.sort();
const rSorted = right.sort();

const distances: number[] = [];
lSorted.map((l, i) => {
  distances.push(Math.abs(l - rSorted[i]));
});

const sum = distances.reduce((sum, v) => sum + v, 0);

console.log(sum);
