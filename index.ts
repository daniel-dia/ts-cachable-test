import delay = require("delay");
import { TestClass } from "./TestClass";
// import delay from "delay";

const t = new TestClass();

async function t1() {
  const init = Date.now();

  for (var i = 0; i < 3; i++) {
    await delay(100);
    
    console.log("wave - start", Date.now() - init);
    const st = Date.now();

    let results = await Promise.all([
      t.longFunction(),
      t.longFunction(),
      t.longFunction(),
      t.longFunction(),
      t.longFunction(),
      t.longFunction(),
      t.longFunction(),
      t.longFunction(200),
      t.longFunction(200),
    ]);

    console.log("wave - end", results, Date.now() - st);
    console.log("\n\n");
  }
}


t1();
