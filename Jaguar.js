import { Mammal } from "./Mammal";

export class Jaguar extends Mammal {
    constructor(weight) {
        super(weight);
    }

    display() {
        return "I'm a real Jaguar";
    }

    feed() {
        return "I am eating ...";
    }
}