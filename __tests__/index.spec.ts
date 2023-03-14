import fn from '../src';

describe('api.basic', () => {
  test('sap use `/` or `@` or `:`', () => {
    const kmstr1 = '1id/value; 2id/value2; 3id/value3';
    const kmstr2 = '1id@value; 2id@value2; 3id@value3';
    const kmstr3 = '1id:value; 2id:value2; 3id:value3';
    const expRes = {
      '1id': 'value',
      '2id': 'value2',
      '3id': 'value3',
    };

    expect(fn(kmstr1)).toEqual(expRes);
    expect(fn(kmstr2)).toEqual(expRes);
    expect(fn(kmstr3)).toEqual(expRes);
  });
});
