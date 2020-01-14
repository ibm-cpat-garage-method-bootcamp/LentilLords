function isPalindrome(inputString) {
  let inputStringLower = inputString.replace(/\s/g, "").toLowerCase();
//  console.log(inputStringLower);
//  console.log(inputStringLower.split("").reverse().join(""));
  return inputStringLower === inputStringLower.split("").reverse().join("") && inputString.length > 0;
}

describe('Testing diffrent palindromes', () => {

  test('Canary is a palindrome', () => {
    expect(false).toEqual(false);
  });
  test('A is a palindrome', () => {
    expect(isPalindrome('A')).toEqual(true);
  });
  test('mom is a palindrome', () => {
    expect(isPalindrome('mom')).toEqual(true);
  });
  test('dude is a palindrome', () => {
    expect(isPalindrome('dude')).toEqual(false);
  }); 

  test('mom mom is a palindrome', () => {
    expect(isPalindrome('mom mom')).toEqual(true);
  });

  test('mom dad is a palindrome', () => {
    expect(isPalindrome('mom dad')).toEqual(false);
  });
  test('(space) is a palindrome', () => {
    expect(isPalindrome(' ')).toEqual(true);
  });
  test('(empty string) is a palindrome', () => {
    expect(isPalindrome('')).toEqual(false);
  });
  test('"moM" is a palindrome', () => {
    expect(isPalindrome('moM')).toEqual(true);
  });
  test('"race car" is a palindrome', () => {
    expect(isPalindrome('race car')).toEqual(true);
  });
  test('"a man a plan a canal panama" is a palindrome', () => {
    expect(isPalindrome('a man a plan a canal panama')).toEqual(true);
  });
});
