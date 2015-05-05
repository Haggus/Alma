describe("Alma", function () {

    describe("required", function () {
        it("when argument is a number", function () {
            expect(alma(5).required().evaluate()).toBeTruthy();
        });
        it("when argument is a string", function () {
            expect(alma('random string').required().evaluate()).toBeTruthy();
        });
        it("when argument is an empty string", function () {
            expect(alma('').required().evaluate()).toBeFalsy();
        });
        it("when argument is empty", function () {
            expect(alma().required().evaluate()).toBeFalsy();
        });
        it("when argument is null", function () {
            expect(alma(null).required().evaluate()).toBeFalsy();
        });
    });

    describe("string", function () {
        it("when argument is a number", function () {
            expect(alma(0).string().evaluate()).toBeFalsy();
        });
        it("when argument is a string", function () {
            expect(alma('323').string().evaluate()).toBeTruthy();
        });
        it("when argument is an empty string", function () {
            expect(alma('').string().evaluate()).toBeTruthy();
        });
        it("when argument is empty", function () {
            expect(alma().string().evaluate()).toBeFalsy();
        });
        it("when argument is null", function () {
            expect(alma(null).string().evaluate()).toBeFalsy();
        });
    });

    describe("number", function () {
        it("when argument is a number", function () {
            expect(alma(24).number().evaluate()).toBeTruthy();
        });
        it("when argument is a number inside a string ('23')", function () {
            expect(alma('23').number().evaluate()).toBeTruthy();
        });
        it("when argument is a string", function () {
            expect(alma('random string').number().evaluate()).toBeFalsy();
        });
        it("when argument is an empty string", function () {
            expect(alma('').number().evaluate()).toBeFalsy();
        });
        it("when argument is empty", function () {
            expect(alma().number().evaluate()).toBeFalsy();
        });
        it("when argument is null", function () {
            expect(alma(null).number().evaluate()).toBeFalsy();
        });
    });

    describe("email", function () {
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

    describe("random chains", function () {
        it("string -> required, string, number", function () {
            expect(alma('string').required().string().number().evaluate()).toBeFalsy();
        });
        it("number -> required, string, number", function () {
            expect(alma(2332).required().string().number().evaluate()).toBeFalsy();
        });
        it("empty string -> string, required", function () {
            expect(alma('').string().required().evaluate()).toBeFalsy();
        });
    });
});
