import HashSet from "../HashSet";

interface INestedValue {
    PropertyC: number;
}
interface ITestValue {
    PropertyA: string;
    PropertyB: INestedValue;
}

const testValue: ITestValue = {PropertyA: "Test One", PropertyB: {PropertyC: 123}};
const testValueSame: ITestValue = {PropertyA: "Test One", PropertyB: {PropertyC: 123}};
const testValueNested: ITestValue = {PropertyA: "Test One", PropertyB: {PropertyC: 456}};


const set: HashSet<ITestValue> = new HashSet<ITestValue>();

it("Should return false when asking for a non-existent item", () => {
    expect(set.Contains(testValue)).toBeFalsy();
});

it("Should return false when removing a non-existent item", () => {
    expect(set.Remove(testValue)).toBeFalsy();
});

it("Should return true when adding a new item", () => {
    expect(set.Add(testValue)).toBeTruthy();
});

it("Should detect duplicates with same values", () => {
    expect(set.Contains(testValueSame)).toBeTruthy();
});

it("Should detect differences in nested properties with same values", () => {
    expect(set.Contains(testValueNested)).toBeFalsy();
});

it("Should report its count correctly", () => {
    expect(set.Count).toEqual(1);
});

it("Should return false when adding an existing item", () => {
    expect(set.Add(testValue)).toBeFalsy();
});

it("Should return true when asking for an existing item", () => {
    expect(set.Contains(testValue)).toBeTruthy();
});

it("Should return elements when asked", () => {
    expect(set.Values).toEqual([testValue]);
});


it("Should return true when removing an existing item", () => {
   expect(set.Remove(testValue)).toBeTruthy();
   expect(set.Count).toBe(0);
});
