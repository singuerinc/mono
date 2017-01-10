import { it } from "mocha";
import { expect } from "chai";
import { ModuleC } from "../src/moduleC";

it('should work', function () {
    const moduleC = new ModuleC();
    expect(moduleC.init()).to.be.equal(3);
});
