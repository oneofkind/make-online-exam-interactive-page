describe("Async", function () {
    var asynctest = new Asynctest();

    beforeEach(function (done) {
        asynctest.init(function () {
            done();
        })
    })

    it('should init', function (done) {
        expect(asynctest.flag).toBe(true)
        done();
    })

    it('init',function(){
        asynctest.init()
        expect(asynctest.flag).toBe(true)
    })
});