describe("Alphanumeric", function () {

    describe("Testing 'alphanumeric' function", function () {
        it("1234test", function () {
            expect(alma('1234test').alphanumeric().evaluate()).toBeTruthy();
        });
        it("/23/hello", function () {
            expect(alma('/23/hello').alphanumeric().evaluate()).toBeFalsy();
        });
        it("123-45", function () {
            expect(alma('123-45').alphanumeric().evaluate()).toBeFalsy();
        });
        it("--lol--", function () {
            expect(alma('--lol--').alphanumeric().evaluate()).toBeFalsy();
        });
        it("===", function () {
            expect(alma('===').alphanumeric().evaluate()).toBeFalsy();
        });
    });
});
