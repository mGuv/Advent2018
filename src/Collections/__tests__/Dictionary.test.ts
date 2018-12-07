import Dictionary from "../Dictionary";

interface INestedValue {
    PropertyC: number;
}
interface ITestValue {
    PropertyA: string;
    PropertyB: INestedValue;
}

const testValue: ITestValue = {PropertyA: "Test One", PropertyB: {PropertyC: 123}};

const set: Dictionary<ITestValue, string> = new Dictionary<ITestValue, string>();
set.Add(testValue, "hello");

it("Should return keys", () => {
    expect(set.Keys).toEqual([testValue]);
});

it("Should return values", () => {
    expect(set.Values).toEqual(["hello"]);
})

it("Should return kvp", () => {
    expect(set.All).toEqual([{key: testValue, value: "hello"}]);
})
