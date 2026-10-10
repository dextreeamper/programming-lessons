class Participant {
  constructor(name, scores) {
    this.name = name;
    this.scores = scores;
  }

  isValid() {
    return (
      Array.isArray(this.scores) &&
      this.scores.length === 3 &&
      Array.from(this.scores).every(
        (score) => Number.isFinite(score) && score >= 0 && score <= 100,
      )
    );
  }

  calculateTotal() {
    return this.scores.reduce((sum, score) => sum + score, 0);
  }

  calculateAverage() {
    return this.calculateTotal() / this.scores.length;
  }
}

const records = [
  { name: "Ava", scores: [80, 90, 100] },
  { name: "Ben", scores: [75, 85, 80] },
  { name: "Cara", scores: [100, 90, 80] },
  { name: "Dee", scores: [-10, 70, 80] },
];

const valid = [];

for (const { name, scores } of records) {
  const participant = new Participant(name, scores);
  if (participant.isValid()) valid.push(participant);
}

valid.sort(
  (a, b) =>
    b.calculateTotal() - a.calculateTotal() ||
    a.name.localeCompare(b.name, "en"),
);

for (const [index, participant] of valid.entries()) {
  console.log(
    `${index + 1}. ${participant.name} | Total: ${participant.calculateTotal()} | Average: ${participant.calculateAverage().toFixed(2)}`,
  );
}

console.log(
  `Valid: ${valid.length} | Excluded: ${records.length - valid.length}`,
);

console.log(
  valid.length
    ? `Overall average: ${(valid.reduce((sum, p) => sum + p.calculateAverage(), 0) / valid.length).toFixed(2)}`
    : "No valid participants.",
);
