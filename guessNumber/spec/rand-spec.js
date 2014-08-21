describe('random', function () {
    it('is number', function () {
        var generateRand = new GenerateRand();
        var answerExpect = generateRand.rand();
        if (parseInt(answerExpect) == answerExpect) {
            var flag = true;
        }
        else {
            flag = false;
        }
        expect(flag).toBe(true);
    });
    it('is different', function () {
        var generateRand = new GenerateRand();
        var answerExpect = generateRand.rand();
        if (answerExpect[0] !== answerExpect[1] && answerExpect[1] !== answerExpect[2] &&
           answerExpect[2] !== answerExpect[3] && answerExpect[1] !== answerExpect[2] &&
           answerExpect[0] !== answerExpect[3] && answerExpect[1] !== answerExpect[3]){
           var flag = true;
       }
        else{flag = false;}
        expect(flag).toBe(true);
    });
    it('the length is 4', function () {
        var generateRand = new GenerateRand();
        var answerExpect = generateRand.rand();
        if (answerExpect.length === 4) {
            var flag = true;
        } else {
            flag = false;
        }
        expect(flag).toBe(true);
    });
    it('is random', function () {
        var generateRand = new GenerateRand();
        var answerExpect = generateRand.rand();
        var answerExcept1= generateRand.rand();
        if (answerExcept1 !== answerExpect) {
            var flag = true;
        } else {
            flag = false;
        }
        expect(flag).toBe(true);
    });

})