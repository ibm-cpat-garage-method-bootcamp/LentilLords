
function wordWrapper(s, n) { 
    s = s.split(/(\s+)/) // Convert to array
    let prev = 0
    let total = 0

    if (s.length === 1) 
    {
        for (let i in s[0]) {
            if ( total >= n ) {
                s[0] = s[0].slice(0,i) + '_' + s[0].slice(i,s[0].length)
                total = 0;
                i += 1;
            }
            total += 1;
            prev = i;
        };
    }
    else 
    {
        for ( let i in s ) {
            total += s[i].length;
            if ( total >= n ) {
                s[prev] = '_';
                total = 0
            }
            prev = i;
        }
    }
    return s.join("");
}

// console.log(wordWrapper('aas d fas df', 1));

describe('word-wrap', () => {
//     test('canary validates test infrastructure', () => {
//         expect(true).toEqual(false);
//     });

    test('string "a" and column length 1', () => {
        expect(wordWrapper('a', 1)).toEqual('a');
    });

    test('string "aa" and column length 1', () => {
        expect(wordWrapper('aa', 1)).toEqual('a_a');
    });

    test('string "aaa" and column length 1', () => {
        expect(wordWrapper('aaa', 1)).toEqual('a_a_a');
    });

    test('string "aaaa" and column length 2', () => {
        expect(wordWrapper('aaaa', 2)).toEqual('aa_aa');
    });

    test('string "a b" and column length 1', () => {
        expect(wordWrapper('a b', 1)).toEqual('a_b');
    });

    test('string "aa bb" and column length 4', () => {
        expect(wordWrapper('aa bb', 4)).toEqual('aa_bb');
    });

    test('string "a bb cc" and column length 4', () => {
        expect(wordWrapper('a bb cc', 4)).toEqual('aa_bb_cc');
    });

    test('string "a b c d" and column length 4', () => {
        expect(wordWrapper('a b c d', 4)).toEqual('a b_c d');
    });
});

/*

{'a', 1} ⇒ 'a'

{'aa', 1} ⇒ 'a_a'

{'aaa', 1} ⇒ 'a_a_a'

{'aaaa', 2} ⇒ 'aa_aa'

{'a b', 1} ⇒ 'a_b'

{'aa bb', 4} ⇒ 'aa_bb'

{'aa bb cc', 4} ⇒ 'aa_bb_cc'

{'a b c d', 4} ⇒ 'a b_c d'

*/