function Guess() {

}
Guess.prototype.guess = function (inputs) {
    var generateRand = new GenerateRand();
    spyOn(generateRand,"rand").and.returnValue('1234');
    var answer = generateRand.rand();

    var compareNumber = new CompareNumber();
    return compareNumber.compare(answer, inputs);
}