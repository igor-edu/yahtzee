export function randomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

export function createDice() {
  return [1, 2, 3, 4, 5].map((a) => ({
    id: a,
    value: randomNumber(),
    isFrozen: false,
    isRollingForward: Math.random() < 0.5,
  }));
}

export function sumAllDice(dice) {
  return dice.reduce((acc, score) => acc + score.value, 0);
}

export function countIndividualNumber(dice, number) {
  return dice.reduce((acc, die) => {
    if (die.value === number) return acc + 1;
    return acc;
  }, 0);
}

export function appearancesOfEachNumber(dice) {
  return [1, 2, 3, 4, 5, 6].map((num) => countIndividualNumber(dice, num));
}

export function sumAllScores(scores) {
  return scores.reduce((acc, curr) => acc + curr.value, 0);
}

export function scoreIndividualNumber(dice, number = 0) {
  return dice.reduce((acc, die) => {
    if (die.value === number) return acc + number;
    return acc;
  }, 0);
}

export function scoreThreeOfKind(dice) {
  if (appearancesOfEachNumber(dice).some((a) => a >= 3))
    return sumAllDice(dice);
  return 0;
}

export function scoreFourOfKind(dice) {
  if (appearancesOfEachNumber(dice).some((a) => a >= 4))
    return sumAllDice(dice);
  return 0;
}

export function scoreFullHouse(dice) {
  const set = new Set(dice.map((die) => die.value));

  if (set.size !== 2) return 0;

  if (Array.from(set).every((a) => countIndividualNumber(dice, a) >= 2)) {
    return 25;
  }

  return 0;
}

export function scoreSmallStraight(dice) {
  const values = dice.map((die) => die.value);

  if (
    [1, 2, 3, 4].every((a) => values.includes(a)) ||
    [2, 3, 4, 5].every((a) => values.includes(a)) ||
    [3, 4, 5, 6].every((a) => values.includes(a))
  ) {
    return 30;
  }

  return 0;
}

export function scoreLargeStraight(dice) {
  const values = dice.map((die) => die.value);

  if (
    [1, 2, 3, 4, 5].every((a) => values.includes(a)) ||
    [2, 3, 4, 5, 6].every((a) => values.includes(a))
  ) {
    return 40;
  }

  return 0;
}

export function scoreYahtzee(dice) {
  const set = new Set(dice.map((die) => die.value));

  return set.size === 1 ? 50 : 0;
}

export function scoreChance(dice) {
  return sumAllDice(dice);
}
