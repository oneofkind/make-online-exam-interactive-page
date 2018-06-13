describe("Main", function () {
  /*   beforeEach(function(){
        
    }) */
    it('should init',function () {
        let umlExam = new UmlExam();
        expect(umlExam.flag).toBe(true);
        // console.log(umlExam); 
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