function Guess(generateRand,compareNumber) {
    this.generateRand = generateRand;
    this.compareNumber = compareNumber;
    this.answer = this.generateRand.rand();
}
Guess.prototype.guess = function (inputs) {

    return this.compareNumber.compare(this.answer, inputs);
};