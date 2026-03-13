import { IDCode } from "../02_IDNumber";

test("Gender", ()=>{
    expect(new IDCode("37605030299").gender()).toBe("M")
})