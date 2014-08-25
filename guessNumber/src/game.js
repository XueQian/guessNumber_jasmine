function Game(guesses) {
    this.guesses = guesses;
    this.number = 6;
    this.answer = '';
}

Game.prototype.start = function () {
    this.answer = this.guesses.answer;
    return 'Welcome to you ,please input your number(' + this.number + '):';
};

Game.prototype.check = function (inputs) {
    if (inputs.length == 4  && inputs.match(/^\d+$/) !== null) {
        for (var i = 0; i < 4; i++) {
            for (var j = 4; j > 0; j--) {
                if (inputs.charAt(j) !== inputs.charAt(i)) {
                    return true;
                    break;
                }
            }
        }
    }
    return false;
};


Game.prototype.input = function (inputs) {
       var num=this.number--;
       var goOn = this.guesses.guess(inputs)+' and please input your number(' + this.number + '):';

    if (inputs === this.guesses.answer) {
        return 'congratulations';
    }else{

        return num-- >1?goOn:'game over';
    }
};




