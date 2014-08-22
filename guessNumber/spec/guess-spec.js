describe('guess_print', function () {
    beforeEach(function () {

    });
    it('guess print is OK', function () {
        var inputs = '1234';
        var generateRand = new GenerateRand();
        spyOn(generateRand, "rand").and.returnValue('4321');

        var compareNumber = new CompareNumber();
        spyOn(compareNumber, "compare").and.returnValue("0A4B");

        var guesses = new Guess(generateRand, compareNumber);
        var tips = guesses.guess(inputs);
        expect(tips).toBe("0A4B");
    });
});

describe("guess_spy on Math.rand()", function () {

    beforeEach(function () {

    });
    it("should print 4A0B", function () {
        var randoms = [0.1, 0.2, 0.3, 0.4];
        spyOn(Math, 'random').and.callFake(function () {
            return randoms.shift();
        });
        var inputs = "1234";
        var guessExpect = new Guess(new GenerateRand(), new CompareNumber());
        expect(guessExpect.guess(inputs)).toEqual("4A0B");
    });
});

