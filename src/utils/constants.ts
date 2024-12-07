export const FIXED_BET_AMOUNT = 10;
export const MAX_RISK_PERCENTAGE = 0.7;
export const INITIAL_WALLET_BALANCE = 1000;
export const WINNING_PRIZE = 7000; // Base prize for simplest game

export const LOTTERY_GAMES = [
  {
    id: '6-42',
    name: '6/42 Lotto',
    betAmount: 10,
    prize: 7000,
    description: 'First 2 digits from 6/42 draw'
  },
  {
    id: '6-45',
    name: '6/45 Mega Lotto',
    betAmount: 10,
    prize: 8000,
    description: 'First 2 digits from 6/45 draw'
  },
  {
    id: '6-49',
    name: '6/49 Super Lotto',
    betAmount: 10,
    prize: 9000,
    description: 'First 2 digits from 6/49 draw'
  },
  {
    id: '6-55',
    name: '6/55 Grand Lotto',
    betAmount: 10,
    prize: 11000,
    description: 'First 2 digits from 6/55 draw'
  },
  {
    id: '6-58',
    name: '6/58 Ultra Lotto',
    betAmount: 10,
    prize: 12000,
    description: 'First 2 digits from 6/58 draw'
  }
];

export const DRAW_SCHEDULES = [
  { id: '11am', time: '11:00', label: 'Morning Draw', value: 1100 },
  { id: '4pm', time: '16:00', label: 'Afternoon Draw', value: 1600 },
  { id: '9pm', time: '21:00', label: 'Evening Draw', value: 2100 }
];