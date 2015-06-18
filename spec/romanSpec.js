describe("Number.toRoman()", function() {

    it("should translate simple numerals", function() {
         expect((1).toRoman()).toEqual('I');
         expect((5).toRoman()).toEqual('V');
         expect((10).toRoman()).toEqual('X');
         expect((50).toRoman()).toEqual('L');
         expect((100).toRoman()).toEqual('C');
         expect((500).toRoman()).toEqual('D');
         expect((1000).toRoman()).toEqual('M');
     });

     it("should handle multiple symbols", function() {
        expect((6).toRoman()).toEqual('VI');
        expect((1436).toRoman()).toEqual('MCDXXXVI');
        expect((3999).toRoman()).toEqual('MMMCMXCIX');
     });

     it("should ignore the mantissa, if present", function() {
         expect((10.0).toRoman()).toEqual('X');
         expect((10.4).toRoman()).toEqual('X');
         expect((10.999).toRoman()).toEqual('X');
    });

    it("should handle special cases", function() {
        expect((0).toRoman()).toEqual('N');
        expect((-10).toRoman()).toEqual('N');
        expect((4000).toRoman()).toEqual('T');
        expect((893574785345435345).toRoman()).toEqual('T');
    })

});
