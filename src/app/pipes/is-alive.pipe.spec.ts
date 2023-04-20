import { IsAlivePipe } from './is-alive.pipe';

describe('IsAlivePipe', () => {
  it('create an instance', () => {
    const pipe = new IsAlivePipe();
    expect(pipe).toBeTruthy();
  });
});
