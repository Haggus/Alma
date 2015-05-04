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

    describe("is_string", function () {
        it("when argument is a number", function () {
            expect(alma(5).is_string().evaluate()).toBeFalsy();
        });

        it("when argument is a string", function () {
            expect(alma('random string').is_string().evaluate()).toBeTruthy();
        });

        it("when argument is an empty string", function () {
            expect(alma('').is_string().evaluate()).toBeTruthy();
        });

        it("when argument is empty", function () {
            expect(alma().is_string().evaluate()).toBeFalsy();
        });

        it("when argument is null", function () {
            expect(alma(null).is_string().evaluate()).toBeFalsy();
        });
    });
});
