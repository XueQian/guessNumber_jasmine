describe('guess', function () {
    beforeEach(function () {

    });
    it('guess OK', function () {
        var inputs = '1234';
        var generateRand = new GenerateRand();
        spyOn(generateRand,"rand").and.returnValue('4321');

        var compareNumber = new CompareNumber();
        var guesses = new Guess(generateRand,compareNumber);
        var guessExpect = guesses.guess(inputs);
        expect(guessExpect).toBe("0A4B");
    });
})