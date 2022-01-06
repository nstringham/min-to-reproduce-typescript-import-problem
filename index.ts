import type { Color } from "dependency";

const myColor: Color = "blue";

const myOtherColor: import("dependency").Color = "red";

async function main() {
  const { printColor } = await import("dependency");
  printColor(myColor);
  printColor(myOtherColor);
}

main();
