import { Mammal } from "./Mammal";

export class BlueWhale extends Mammal {
    constructor(weight) {
        super(weight);
    }

    display() {
        return "I'm a real Blue Whale";
    }

    feed() {
        return "Om nom nom";
    }

    giveBirth() {
        return "Ow"
    }
}