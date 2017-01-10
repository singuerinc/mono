export class ModuleA {
    constructor() {

    }

    init() {
        if(typeof document != "undefined") document.write("module-a a init method called<br>");
        return 1;
    }
}
