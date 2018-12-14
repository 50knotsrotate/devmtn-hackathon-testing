const functions = require('./assessment');


describe('Function 1 Test', () => {
    test('Function 1 to work', () => {
        expect(functions.function1(2,2)).toBe(4)
        expect(functions.function1(2,4)).toBe(6)
        expect(functions.function1(8,2)).toBe(10)        
    });
});


describe('Function 2 Test', () => {
    test('Function 2 to work', () => {
        expect(functions.function2([1,2,3])).toEqual([2,3,4])      
        expect(functions.function2([4,2,7])).toEqual([5,3,8])      
        expect(functions.function2([])).toBeNull()      
    });
});


describe('Function 3 Test', () => {
    test('Function 3 to work', () => {
        expect(functions.function3([1,2,3], 1, 2)).toEqual([2,1,3])      
        expect(functions.function3([7,9,2], 9, 2)).toEqual([7,2,9])      
        expect(functions.function3([0,2,4,6,1,7,3], 6, 2)).toEqual([0,6,4,2,1,7,3])      
    });
});


describe('Function 4 Test', () => {
    test('Function 4 to work', () => {
        expect(functions.function4('string')).toBe('gnirts');
        expect(functions.function4('pizza')).toBe('azzip');
        expect(functions.function4('cheese')).toBe('eseehc');

    });
});


describe('Function 5 Test', () => {
    test('Function 5 to work', () => {
        expect(functions.function5(['Andy', 'Joseph', 'Zoey'])).toEqual(['Zoey', 'Joseph', 'Andy']);
        expect(functions.function5(['John', 'Jacob', 'Jimmy'])).toEqual(['John', 'Jimmy', 'Jacob']);
        expect(functions.function5(['Cara', 'Tom', 'Vicky'])).toEqual(['Vicky', 'Tom', 'Cara']);
    });
});


describe('Function 6 Test', () => {
    test('Function 6 to work', () => {
        expect(functions.function6('lol')).toBe(true);
        expect(functions.function6('baby')).toBe(false);
        expect(functions.function6('help')).toBe(false);
        expect(functions.function6('Never odd or even')).toBe(true);
        expect(functions.function6('Racecar')).toBe(true);
    });
});


describe('Function 7 Test', () => {
    test('Function 7 to work', () => {
        expect(functions.function7([[], '', null, true, '0'])).toEqual([[], true, '0']);
        expect(functions.function7([0, 'banana', undefined])).toEqual(['banana']);
        expect(functions.function7([false, false, false])).toBeNull();
    });
});


describe('Function 8 Test', () => {
    test('Function 8 to work', () => {
        expect(functions.function8(0, 'C')).toBe(32);
        expect(functions.function8(32, 'F')).toBe(0);
        expect(functions.function8(100, 'C')).toBe(212);
        expect(functions.function8(212, 'F')).toBe(100);
        expect(functions.function8(23, 'F')).toBe(-5);
    });
});


describe('Function 9 Test', () => {
    test('Function 9 to work', () => {
        expect(functions.function9('Ducks are cool')).toBe('are');
        expect(functions.function9('The giant hippo swam in the water')).toBe('in');
        expect(functions.function9('Only time can tell if you are worthy')).toBe('if');
        expect(functions.function9('Man, I am hungry')).toBe('I');
        expect(functions.function9('Dinosaurs')).toBe('Dinosaurs');
    });
});



describe('Function 10 Test', () => {
    test('Function 10 to work', () => {
        expect(functions.function10('XIV')).toBe(14);  
        expect(functions.function10('XX')).toBe(20);   
        expect(functions.function10('V')).toBe(5);     
        expect(functions.function10('CXV')).toBe(115);     
    });
}); 


describe('Function 11 Test', () => {
    test('Function 11 to work', () => {
        expect(functions.function11('picture.jpg')).toBe('jpg');
        expect(functions.function11('react.jsx')).toBe('jsx');
        expect(functions.function11('adobe.pdf')).toBe('pdf');
    });
});


describe('Function 12 Test', () => {
    test('Function 12 to work', () => {
        expect(functions.function12(110)).toBe(true);
        expect(functions.function12(8)).toBe(false);
        expect(functions.function12(121)).toBe(false);
        expect(functions.function12(125)).toBe(true);
        expect(functions.function12(15)).toBe(true);
        expect(functions.function12(1210)).toBe(true);
    });
});


describe('Function 13 Test', () => {
    test('Function 13 to work', () => {
        expect(functions.function13(60)).toBe('1 hour 0 minutes');
        expect(functions.function13(120)).toBe('2 hours 0 minutes');
        expect(functions.function13(191)).toBe('3 hours 11 minutes');
        expect(functions.function13(2912)).toBe('48 hours 32 minutes');
        expect(functions.function13(12471)).toBe('207 hours 51 minutes');
    });
});


describe('Function 14 Test', () => {
    test('Function 14 to work', () => {
        expect(functions.function14('fooey')).toEqual({ f: 1, o: 2, e: 1, y: 1 });
        expect(functions.function14('AAAaa')).toEqual({ A: 3, a: 2 });
        expect(functions.function14('ecclectic')).toEqual({ e: 2, c: 4, l: 1, t: 1, i: 1 });
        expect(functions.function14('zap!')).toEqual({a: 1, p: 1, z: 1, '!': 1});
        expect(functions.function14('this is a string')).toEqual({ t: 2, h: 1, i: 3, s: 3, ' ': 3, a: 1, r: 1, n: 1, g: 1 });
    });
});


describe('Function 15 Test', () => {
    test('Function to 15 work', () => {
        expect(functions.function15(['one', 'two', 'three'])).toBe('three');
        expect(functions.function15(['don\'t', 'get', 'confused'])).toBe('confused');
        expect(functions.function15(['simple', 'or', 'not'])).toBe('simple');
        expect(functions.function15(['cool', 'amazing', 'test'])).toBe('amazing');
        expect(functions.function15(['developers', 'are', 'cool'])).toBe('developers');
    });
});


describe('Function 16 Test', () => {
    test('Function 16 to work', () => {
        expect(functions.function16(1234)).toBe(false);
        expect(functions.function16(290)).toBe(false);
        expect(functions.function16(99)).toBe(true);
        expect(functions.function16(1)).toBe(true);
        expect(functions.function16(76)).toBe(false);
        expect(functions.function16(333)).toBe(true);
        expect(functions.function16(22)).toBe(true);
    });
});


describe('Function 17 Test', () => {
    test('Function to 17 work', () => {
        expect(functions.function17(1, 2, 3)).toBe(true);
        expect(functions.function17(3, 2, 1)).toBe(false);
        expect(functions.function17(2, 2, 2)).toBe(true);
        expect(functions.function17(2, 1, 2)).toBe(false);
        expect(functions.function17(-1, -0.53, 23)).toBe(true);
    });
});


describe('Function 18 Test', () => {
    test('Function to 18 work', () => {
        expect(functions.function18({color: 'blue', number: 2, word: 'foo'})).toEqual([ [ 'color', 'number', 'word' ], [ 'blue', 2, 'foo' ] ]);
        expect(functions.function18({devmountainIsCool: true, codingIsFun: true})).toEqual([ [ 'devmountainIsCool', 'codingIsFun' ], [ true, true ] ]);
        expect(functions.function18({thisIsAnArray: false, orIsIt: 'maybe'})).toEqual([ [ 'thisIsAnArray', 'orIsIt' ], [ false, 'maybe' ] ]);
    });
});


describe('Function 19 Test', () => {
    test('Function 19 to work', () => {
      expect(functions.function19(128573)).toEqual([1, 2, 8, 5, 7, 3]);
      expect(functions.function19(65839)).toEqual([6, 5, 8, 3, 9]);
    })
  })




