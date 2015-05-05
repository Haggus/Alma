describe("Email", function () {

    describe("Testing 'email' function", function () {
        it("example@example.com", function () {
            expect(alma('example@example.com').email().evaluate()).toBeTruthy();
        });
        it("example@example", function () {
            expect(alma('example@example').email().evaluate()).toBeFalsy();
        });
        it("example@first.second.third.com", function () {
            expect(alma('example@first.second.third.com').email().evaluate()).toBeTruthy();
        });
        it("@example", function () {
            expect(alma('@example').email().evaluate()).toBeFalsy();
        });
        it("hello world", function () {
            expect(alma('hello world').email().evaluate()).toBeFalsy();
        });
        it("null", function () {
            expect(alma(null).email().evaluate()).toBeFalsy();
        });
        it("random number", function () {
            expect(alma(232).email().evaluate()).toBeFalsy();
        });
    });
});
