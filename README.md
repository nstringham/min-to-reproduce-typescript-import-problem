in this example repo typescript correctly outputs the following javascript:

```js
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myColor = "blue";
const myOtherColor = "red";
async function main() {
    const { printColor } = await import("dependency");
    printColor(myColor);
    printColor(myOtherColor);
}
main();
```

but incorrectly outputs the following errors

```
index.ts:1:28 - error TS1471: Module 'dependency' cannot be imported using this construct. The specifier only resolves to an ES module, which cannot be imported synchronously. Use dynamic import instead.

1 import type { Color } from "dependency";
                             ~~~~~~~~~~~~

index.ts:5:28 - error TS1471: Module 'dependency' cannot be imported using this construct. The specifier only resolves to an ES module, which cannot be imported synchronously. Use dynamic import instead.

5 const myOtherColor: import("dependency").Color = "red";
                             ~~~~~~~~~~~~
```