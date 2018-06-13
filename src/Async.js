function Asynctest() {
    this.flag = false
}

Asynctest.prototype.init = function (callbak) {
    var self = this;
    setTimeout(function () {
        self.flag = true;
        if (callbak) {
            return callbak()
        }
    },1000)
}

