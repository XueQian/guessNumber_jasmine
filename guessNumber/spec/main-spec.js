//describe('guessNumber', function () {
//    var answer, inputs;
////    beforeEach(function() {
////
////    });
//    it('print 4 correctsA', function () {
//        answer = [1,2,3,4];
//        inputs = [1,2,3,4];
//        var compareNumber = new CompareNumber();
//        var tips = compareNumber.compare(answer,inputs);
//        expect(tips).toBe('4A0B');
//    });
//    it('print 4 correctsB', function () {
//        answer = [1,2,3,4];
//        inputs = [4,3,2,1];
//        var compareNumber = new CompareNumber();
//        var tips = compareNumber.compare(answer,inputs);
//        expect(tips).toBe('0A4B');
//    });
//    it('print 0 correctsA and 0 correctsB', function () {
//        answer = [1,2,3,4];
//        inputs = [5,6,7,8];
//        var compareNumber = new CompareNumber();
//        var tips = compareNumber.compare(answer,inputs);
//        expect(tips).toBe('0A0B');
//    });
//    it('print 0 correctsA and 1 correctsB', function () {
//        answer = [1,2,3,4];
//        inputs = [2,5,6,7];
//        var compareNumber = new CompareNumber();
//        var tips = compareNumber.compare(answer,inputs);
//        expect(tips).toBe('0A1B');
//    });
//    it('print 2 correctsA and 0 correctsB', function () {
//        answer = [1,2,3,4];
//        inputs = [1,2,5,6];
//        var compareNumber = new CompareNumber();
//        var tips = compareNumber.compare(answer,inputs);
//        expect(tips).toBe('2A0B');
//    });
//    it('print 1 correctsA and 2 correctsB', function () {
//        answer = [1,2,3,4];
//        inputs = [1,4,2,5];
//        var compareNumber = new CompareNumber();
//        var tips = compareNumber.compare(answer,inputs);
//        expect(tips).toBe('1A2B');
//    });
//});

describe('main', function () {
    var answer, inputs;
    it('print 4 correctsA', function () {
        answer = '1234';
        inputs = '1234';
        var compareNumber = new CompareNumber();
        var tips = compareNumber.compare(answer,inputs);
        expect(tips).toBe('4A0B');
    });
    it('print 4 correctsB', function () {
        answer = '1234';
        inputs = '4321';
        var compareNumber = new CompareNumber();
        var tips = compareNumber.compare(answer,inputs);
        expect(tips).toBe('0A4B');
    });
    it('print 0 correctsA and 0 correctsB', function () {
        answer = '1234';
        inputs = '5678';
        var compareNumber = new CompareNumber();
        var tips = compareNumber.compare(answer,inputs);
        expect(tips).toBe('0A0B');
    });
    it('print 0 correctsA and 1 correctsB', function () {
        answer = '1234';
        inputs = '2567';
        var compareNumber = new CompareNumber();
        var tips = compareNumber.compare(answer,inputs);
        expect(tips).toBe('0A1B');
    });
    it('print 2 correctsA and 0 correctsB', function () {
        answer = '1234';
        inputs = '1256';
        var compareNumber = new CompareNumber();
        var tips = compareNumber.compare(answer,inputs);
        expect(tips).toBe('2A0B');
    });
    it('print 1 correctsA and 2 correctsB', function () {
        answer = '1234';
        inputs = '1425';
        var compareNumber = new CompareNumber();
        var tips = compareNumber.compare(answer,inputs);
        expect(tips).toBe('1A2B');
    });
});
