import { ModuleA, } from "singuerinc-module-a";

export class ModuleB {
    constructor() {

    }

    init() {
        let moduleA = new ModuleA();
        moduleA.init();
        if(typeof document != "undefined") document.write("module-b a init method called<br>");
        return 2;
    }
}
