describe('guess', function () {
    beforeEach(function () {

    });
    it('guess OK', function () {
        var inputs = '1234';
        var guesses = new Guess();
        var guessExpect = guesses.guess(inputs);
//        var generateRand = new GenerateRand();
//        var answer = generateRand.rand();
//        var compareNumber = new CompareNumber();
//        var tips = compareNumber.compare(answer,inputs);
        expect(guessExpect).toBe("4A0B");
    });
})