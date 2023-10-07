const reverse = require("./index");

test("Reverse function exists", () => {
  expect(reverse).toBeDefined();
});

test("Reverse reverses a string", () => {
  expect(reverse("abcd")).toEqual("dcba");
});

test("Reverse reverses a string", () => {
  expect(reverse("  abcd")).toEqual("dcba  ");
});

test("Reverse the custom string", () => {
  expect(reverse("Krishna kumar chaudhary")).toEqual("yrahduahc ramuk anhsirK");
});
