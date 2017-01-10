import { ModuleB, } from "singuerinc-module-b";

export class ModuleC {
    constructor() {

    }

    init() {
        let moduleB = new ModuleB();
        moduleB.init();
        if(typeof document != "undefined") document.write("module-c a init method called<br>");
        return 3;
    }
}
