import { expect, test } from 'vitest'
import { CSSTokenizer } from './tokenizer'

test('simple example to understand how peggyjs works and well setup it', () => {
  const tokenizer = new CSSTokenizer();
  
  const result = tokenizer.parser('abba');

  console.log(result);
  expect(result).toEqual(['a', 'b', 'b', 'a']);
})