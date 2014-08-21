function GenerateRand() {

}
GenerateRand.prototype.rand = function () {
    var answer = '';

    for (var i = 0; i < 4; i++) {
        var a = Math.floor(Math.random() * 10).toString();

        while (answer.indexOf(a) != -1) {
            a = Math.floor(Math.random() * 10).toString();

        }
        answer = answer + a;

    }
    return answer;
};