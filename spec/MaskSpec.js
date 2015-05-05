describe("Mask", function () {

    describe("Testing mask: 000-000-000", function () {
        it("123-456-789", function () {
            expect(alma('123-456-789').mask('000-000-000').evaluate()).toBeTruthy();
        });
        it("000-000-000", function () {
            expect(alma('000-000-000').mask('000-000-000').evaluate()).toBeTruthy();
        });
        it("lol-23r-x33", function () {
            expect(alma('lol-23r-x33').mask('000-000-000').evaluate()).toBeFalsy();
        });
        it("1234", function () {
            expect(alma(1234).mask('000-000-000').evaluate()).toBeFalsy();
        });
        it("'1234'", function () {
            expect(alma('1234').mask('000-000-000').evaluate()).toBeFalsy();
        });
        it("null", function () {
            expect(alma(null).mask('000-000-000').evaluate()).toBeFalsy();
        });
        it("hello world", function () {
            expect(alma('hello world').mask('000-000-000').evaluate()).toBeFalsy();
        });
        it("undefined", function () {
            expect(alma(undefined).mask('000-000-000').evaluate()).toBeFalsy();
        });
    });

    describe("Testing mask: 00-XX00", function () {
        it("43-SD23", function () {
            expect(alma('43-SD23').mask('00-XX00').evaluate()).toBeTruthy();
        });
        it("43-SDMM", function () {
            expect(alma('43-SDMM').mask('00-XX00').evaluate()).toBeFalsy();
        });
        it("XX-XXXX", function () {
            expect(alma('XX-XXXX').mask('00-XX00').evaluate()).toBeFalsy();
        });
        it("2131234", function () {
            expect(alma(2131234).mask('00-XX00').evaluate()).toBeFalsy();
        });
        it("'2131234'", function () {
            expect(alma('2131234').mask('00-XX00').evaluate()).toBeFalsy();
        });
        it("1234", function () {
            expect(alma(1234).mask('00-XX00').evaluate()).toBeFalsy();
        });
        it("'1234'", function () {
            expect(alma('1234').mask('00-XX00').evaluate()).toBeFalsy();
        });
        it("null", function () {
            expect(alma(null).mask('00-XX00').evaluate()).toBeFalsy();
        });
        it("NaN", function () {
            expect(alma(NaN).mask('00-XX00').evaluate()).toBeFalsy();
        });
    });

    describe("Testing mask: //0000//XX//000//", function () {
        it("//1234//SD//567//", function () {
            expect(alma('//1234//SD//567//').mask('//0000//XX//000//').evaluate()).toBeTruthy();
        });
        it("//SDSD//12//MMM//", function () {
            expect(alma('//SDSD//12//MMM//').mask('//0000//XX//000//').evaluate()).toBeFalsy();
        });
        it("/////////////////", function () {
            expect(alma('/////////////////').mask('//0000//XX//000//').evaluate()).toBeFalsy();
        });
        it("//1234--MM--567//", function () {
            expect(alma('//1234--MM--567//').mask('//0000//XX//000//').evaluate()).toBeFalsy();
        });
        it("//0000//SS//000//", function () {
            expect(alma('//0000//SS//000//').mask('//0000//XX//000//').evaluate()).toBeTruthy();
        });
    });
});
