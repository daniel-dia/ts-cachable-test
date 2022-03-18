import delay from "delay";
import { PCacheable } from "ts-cacheable";

export class TestClass {
  @PCacheable({ maxAge: 100, maxCacheCount: 3 })
  async longFunction(p: number = 100): Promise<number> {
    const v = Math.ceil(Math.random() * p);
    console.log(">> call", p, v);
    await delay(2000);
    return v;
  }
}
