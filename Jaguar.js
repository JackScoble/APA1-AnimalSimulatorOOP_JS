import { BigCat } from "./BigCat";

export class Jaguar extends BigCat {
    constructor(weight) {
        super(weight);
    }

    display() {
        return "I'm a real Jaguar";
    }

    feed() {
        return "I am eating ...";
    }

    run() {
        return "I am fast, zoom zoom";
    }
}