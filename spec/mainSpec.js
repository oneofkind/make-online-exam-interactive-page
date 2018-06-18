describe("Main", function () {
    let umlExam=new UmlExam();
    // beforeEach(function () {
    //     umlExam = 
    // })
    it('should init', function () {
        expect(umlExam.initFlag).toBe(true);
    })

    it('should return score of the examinaition', function () {
        let result = umlExam.countScore()
        expect(typeof result).toBe('number')
    })

    // beforeEach(function (done) {
    //     asynctest.init(function () {
    //         done();
    //     })
    // })

    // it('should init', function (done) {
    //     expect(asynctest.flag).toBe(true)
    //     done();
    // })

    // it('init', function () {
    //     asynctest.init()
    //     expect(asynctest.flag).toBe(true)
    // })
});