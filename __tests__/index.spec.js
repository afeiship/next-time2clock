(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.time2clock should create src/lrc clock', function () {
      const res = nx.time2clock(122313);
      expect(res).toEqual({ srt: '00:02:02,03', lrc: '02:02.03' });
    });
  });
})();
