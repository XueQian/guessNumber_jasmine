describe('game', function () {
var guesses;

   beforeEach(function(){
       var answer = '1234';
        guesses = {
           guess : function(){
           },
           answer : answer
       };
       spyOn(guesses,'guess').and.returnValue('0A0B');
   });

    it('game_start output is correct', function () {
        var game = new Game(guesses);
        expect(game.start()).toEqual('Welcome to you ,please input your number(6):');
    });

    it('game_check input is valid',function (){
        var game = new Game(guesses);
        game.start();
        var inputs = '1234';
        expect(game.check(inputs)).toBe(true);

        var inputs1 = '123445555';
        expect(game.check(inputs1)).toBe(false);

//        var inputs2 = '1114';
//        expect(game.check(inputs2)).toBe(false);

        var inputs3 = '1aqq';
        expect(game.check(inputs3)).toBe(false);


    });

    it('game_every output is correct', function () {
        var game = new Game(guesses);
        game.start();
        expect(game.input('5678')).toEqual('0A0B and please input your number(5):');
        expect(game.input('5678')).toEqual('0A0B and please input your number(4):');
        expect(game.input('5678')).toEqual('0A0B and please input your number(3):');
        expect(game.input('5678')).toEqual('0A0B and please input your number(2):');
        expect(game.input('5678')).toEqual('0A0B and please input your number(1):');
    });

    it('game_is win', function () {
        var game = new Game(guesses);
        game.start();
        expect(game.input('1234')).toEqual('congratulations');
    });
    it('game_is over', function () {
        var game = new Game(guesses);
        game.start();
        game.input('5678');
        game.input('5678');
        game.input('5678');
        game.input('5678');
        game.input('5678');
        expect(game.input('5678')).toEqual('game over');
    });



});








