describe("Color", function () {

    describe("Testing 'color' function", function () {
        it("#FFF", function () {
            expect(alma('#FFF').color().evaluate()).toBeTruthy();
        });
        it("#CCC123", function () {
            expect(alma('#CCC123').color().evaluate()).toBeTruthy();
        });
        it("#aaa", function () {
            expect(alma('#aaa').color().evaluate()).toBeTruthy();
        });
        it("1234", function () {
            expect(alma(1234).color().evaluate()).toBeFalsy();
        });
        it("#1234", function () {
            expect(alma('#1234').color().evaluate()).toBeFalsy();
        });
        it("#zzzabz", function () {
            expect(alma('#zzzmmz').color().evaluate()).toBeFalsy();
        });
        it("hello world", function () {
            expect(alma('hello world').color().evaluate()).toBeFalsy();
        });
        it("null", function () {
            expect(alma(null).color().evaluate()).toBeFalsy();
        });
        it("random number", function () {
            expect(alma(232).color().evaluate()).toBeFalsy();
        });
    });
});
