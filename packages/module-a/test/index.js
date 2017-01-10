import { it } from "mocha";
import { expect } from "chai";
import { ModuleA } from "../src/moduleA";

it('should work', function () {
    const moduleA = new ModuleA();
    expect(moduleA.init()).to.be.equal(1);
});
