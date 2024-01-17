test("just a test", () => {
  const sumMe = (a, b) => {
    return a * b;
  };

  expect(sumMe(1, 5)).toBe(5);
});
