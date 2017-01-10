import { it } from "mocha";
import { expect } from "chai";
import "babel-polyfill";
import { ModuleB } from "../src/moduleB";

it('should work', function () {
    const moduleB = new ModuleB();
    expect(moduleB.init()).to.be.equal(2);
});
