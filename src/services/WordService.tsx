export const generateFakeWords = (count: number) => {
  const fakeWords = [];

  for (let i = 0; i < count; i++) {
    const fakeWord = `Word${i + 1}`;
    fakeWords.push(fakeWord);
  }

  return fakeWords;
};
