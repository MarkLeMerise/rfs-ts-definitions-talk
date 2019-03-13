interface IBearIndex {
  confidenceFactor?: number;
  kind: string;
}

function whatKindOfBearIsBest(kinds: string[]): IBearIndex {
  const randomInt = Math.floor(Math.random() * kinds.length);
  const kind = kinds[randomInt];
  const confidenceFactor = kind === "black" ? 1 : undefined;
  return { confidenceFactor, kind };
}

const bestBear = whatKindOfBearIsBest(["brown", "black"]); // two schools of thought

console.log(bestBear.kind);
