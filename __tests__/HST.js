const HST = require("../public/HST.js");


//--------------------------Ontario TEst Cases-----------------------------------
it("tests that the Ontario tax slab for income under 40922  is correct", ()=>{
    expect(HST.calculate(2000)).toBe(101);
});
it("tests that the Ontario tax slab for income under 81847  is correct", ()=>{
    expect(HST.calculate(50000)).toBe(2897.64);
});
it("tests that the Ontario tax slab for income under 150000  is correct", ()=>{
    expect(HST.calculate(120000)).toBe(10068.87);
});
it("tests that the Ontario tax slab for income under 220000  is correct", ()=>{
    expect(HST.calculate(180000)).toBe(17065);
});
it("tests that the Ontario tax slab for income over 220000  is correct", ()=>{
    expect(HST.calculate(350000)).toBe(39037);
});

//--------------------------Ontario TEst Cases-----------------------------------




//--------------------------Federal tax TEst Cases-----------------------------------
it("tests that the Federal tax slab for income under 45282  is correct", ()=>{
    expect(HST.CalculateFederal(2000)).toBe(300);
});
it("tests that the Federal tax slab for income under 90563  is correct", ()=>{
    expect(HST.CalculateFederal(50000)).toBe(7759.19);
});
it("tests that the Federal tax slab for income under 140388  is correct", ()=>{
    expect(HST.CalculateFederal(120000)).toBe(23728.62);
});
it("tests that the Federal tax slab for income under 200000  is correct", ()=>{
    expect(HST.CalculateFederal(180000)).toBe(40516.48);
});
it("tests that the Federal tax slab for income over 200000  is correct", ()=>{
    expect(HST.CalculateFederal(350000)).toBe(95817);
});

//--------------------------Federal TEst Cases-----------------------------------