function Guess(generateRand,compareNumber) {
    this.generateRand = generateRand;
    this.compareNumber = compareNumber;
}
Guess.prototype.guess = function (inputs) {

    var answer = this.generateRand.rand();
    return this.compareNumber.compare(answer, inputs);
}