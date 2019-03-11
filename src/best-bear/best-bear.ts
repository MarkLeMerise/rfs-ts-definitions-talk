interface IBearIndex {
  confidenceFactor?: number;
  kind: string;
}

function whatKindOfBearIsBest(kinds: string[]) {
  const randomInt = Math.floor(Math.random() * kinds.length);
  const kind = kinds[randomInt];
  let confidenceFactor: number;

  if (kind === "black") {
    confidenceFactor = 1;
  }

  return { confidenceFactor, kind };
}

const bestBear = whatKindOfBearIsBest(["brown", "black"]); // two schools of thought

console.log(bestBear.kind);
