(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.time2clock should create src/lrc clock', function () {
      const res1 = nx.time2clock(122313);
      const res2 = nx.time2clock(4066);

      expect(res1).toEqual({ srt: '00:02:02,313', std: '00:02:02.313', lrc: '02:02.313' });
      expect(res2).toEqual({ srt: '00:00:04,066', std: '00:00:04.066', lrc: '00:04.66' });
    });
  });
})();
