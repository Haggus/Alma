describe("Date (DD/MM/YYYY)", function () {

    describe("Testing 'date' function", function () {
        it("17/10/1921", function () {
            expect(alma('17/10/1921').date().evaluate()).toBeTruthy();
        });
        it("01/01/1900", function () {
            expect(alma('01/01/1900').date().evaluate()).toBeTruthy();
        });
        it("00/12/2013", function () {
            expect(alma('00/12/2013').date().evaluate()).toBeFalsy();
        });
        it("03/13/2099", function () {
            expect(alma('03/13/2099').date().evaluate()).toBeFalsy();
        });
        it("ZZ/AA/WEWE", function () {
            expect(alma('ZZ/AA/WEWE').date().evaluate()).toBeFalsy();
        });
        it("32", function () {
            expect(alma(32).date().evaluate()).toBeFalsy();
        });
        it("0", function () {
            expect(alma(0).date().evaluate()).toBeFalsy();
        });
        it("hello world", function () {
            expect(alma('hello world').date().evaluate()).toBeFalsy();
        });
        it("null", function () {
            expect(alma(null).date().evaluate()).toBeFalsy();
        });
        it("NaN", function () {
            expect(alma(NaN).date().evaluate()).toBeFalsy();
        });
    });
});
