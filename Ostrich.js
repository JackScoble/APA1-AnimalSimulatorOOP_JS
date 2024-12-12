import { Bird } from "./Bird";

export class Ostrich extends Bird {
    constructor(weight) {
        super(weight);
    }

    display() {
        return ("I'm a real Ostrich");
    }

    feed() {
        return ("I am eating ...");
    }
}