(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.time2clock should create src/lrc clock', function () {
      const res = nx.time2clock(122313);
      console.log(res);
      expect(res).toEqual({ srt: '00:02:02,003', lrc: '02:02.03' });
    });
  });
})();
