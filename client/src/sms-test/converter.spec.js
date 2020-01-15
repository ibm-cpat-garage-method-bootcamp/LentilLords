const farenheitToCelsius = (faren) => {
    return (faren-32)*5/9 
}

describe('farenheit to celsius', () => {
    test('NaN should throw error', () => {
        expect(farenheitToCelsius('test')).toEqual(NaN)
    })

    test('canary', () => {
        expect(true).toEqual(true)
    })

    test('32 degrees farenheit is 0 degrees celsius', () => {
        expect(farenheitToCelsius(32)).toEqual(0);
    })

    test('212 degrees farenheit is 100 degrees celsius', () => {
        expect(farenheitToCelsius(212)).toEqual(100)
    })

    test('-40 degrees farenheit is -40 degrees cesius', () => {
        expect(farenheitToCelsius(-40)).toEqual(-40)
    })


})