const { substituteString } = require('./string');

describe('substituteString', () => {
  it('should substitute variables in string with keys from provided object', () => {
    expect(substituteString('hello, {var}', { var: 'world' })).toBe(
      'hello, world'
    );
  });
  it('should substitute variables in string with keys from provided object', () => {
    expect(
      substituteString('/app/funder/{funder.id}', { funder: { id: '123' } })
    ).toBe('/app/funder/123');
  });
});
