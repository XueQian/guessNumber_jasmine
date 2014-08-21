function CompareNumber() {

}
//CompareNumber.prototype.compare = function (answer, inputs) {
//    var m = 0;
//    var n = 0;
//    for (var i = 0; i < answer.length; i++) {
//        if (answer[i] === inputs[i]) {
//
//            m += 1;
//        }
//    }
//    for (var q = 0; q < answer.length; q++) {
//        for (var j = 0; j < inputs.length; j++) {
//            if (answer[q] === inputs[j] && q !== j) {
//
//                n += 1;
//            }
//        }
//    }
//    console.log(m,n);
//    return m + 'A' + n + 'B';
//
//};
CompareNumber.prototype.compare = function (answer, inputs) {
    var compareA = 0;
    var compareSame = 0;
    var compareB;
    for (var i = 0; i < answer.length; i++) {
        if (answer.charAt(i) === inputs.charAt(i)) {
            compareA++;
        }
        if (answer.indexOf(inputs.charAt(i)) != -1) {
            compareSame++;
        }
    }

    compareB = compareSame - compareA;
    return compareA + 'A' + compareB + 'B';
}
