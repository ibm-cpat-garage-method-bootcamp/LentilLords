function farenheitToCelsius (degreesFarenheit) {
  if (typeof(degreesFarenheit) !== 'number') {
    return new Error('Not a valid temperature');
  };
  return (degreesFarenheit - 32) * (5/9);
}

describe('farenheit-to-celsius', () => {
  test('canary validates test infrastructure', () => {
    expect(true).toEqual(true);
  });

  test('32 degrees farenheit is 0 degrees celsius', () => {
    expect(farenheitToCelsius(32)).toEqual(0);
  });

  test('212 farenheit is 100 celisus', () => {
  expect(farenheitToCelsius(212)).toEqual(100);
  });

  test('-40 farenheit is -40 celcius', () => {
    expect(farenheitToCelsius(-40)).toEqual(-40);
  });

  test('NaN should throw an error', () => {
    expect(() => {
      farenheitToCelsius('test');
    }).toThrow(new Error('Not a valid temperature'));
  });
});
