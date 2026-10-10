const REQUIRED_SCORE_COUNT = 3;
const MIN_SCORE = 0;
const MAX_SCORE = 100;

class Participant {
  constructor(name, scores) {
    this.name = name;
    // Copy arrays to avoid sharing them with the starter records.
    this.scores = Array.isArray(scores) ? [...scores] : scores;
  }

  isValid() {
    return (
      Array.isArray(this.scores) &&
      this.scores.length === REQUIRED_SCORE_COUNT &&
      this.scores.every(
        (score) =>
          Number.isFinite(score) && score >= MIN_SCORE && score <= MAX_SCORE,
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

function createRankingReport(records) {
  const rankings = [];

  for (const { name, scores } of records) {
    const participant = new Participant(name, scores);

    if (!participant.isValid()) {
      continue;
    }

    const total = participant.calculateTotal();

    rankings.push({
      name: participant.name,
      total,
      average: total / participant.scores.length,
    });
  }

  // Highest total first; alphabetical name order breaks ties.
  rankings.sort(
    (a, b) => b.total - a.total || a.name.localeCompare(b.name, "en"),
  );

  const validCount = rankings.length;
  const sumOfAverages = rankings.reduce(
    (sum, participant) => sum + participant.average,
    0,
  );

  return {
    rankings,
    validCount,
    excludedCount: records.length - validCount,
    overallAverage: validCount > 0 ? sumOfAverages / validCount : null,
  };
}

function printRankingReport(report) {
  const { rankings, validCount, excludedCount, overallAverage } = report;

  for (const [index, participant] of rankings.entries()) {
    console.log(
      `${index + 1}. ${participant.name}` +
        ` | Total: ${participant.total}` +
        ` | Average: ${participant.average.toFixed(2)}`,
    );
  }

  console.log(`Valid: ${validCount} | Excluded: ${excludedCount}`);

  if (overallAverage === null) {
    console.log("No valid participants.");
    return;
  }

  console.log(`Overall average: ${overallAverage.toFixed(2)}`);
}

const records = [
  { name: "Ava", scores: [80, 90, 100] },
  { name: "Ben", scores: [75, 85, 80] },
  { name: "Cara", scores: [100, 90, 80] },
  { name: "Dee", scores: [-10, 70, 80] },
];

const report = createRankingReport(records);
printRankingReport(report);
