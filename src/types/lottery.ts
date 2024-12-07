export interface LotteryGame {
  id: string;
  name: string;
  betAmount: number;
  prize: number;
  description: string;
}

export interface BetCombination {
  firstNumber: string;
  secondNumber: string;
}

export interface BetStats {
  totalBets: number;
  isOpen: boolean;
}

export interface DrawSchedule {
  id: string;
  time: string;
  label: string;
  value: number;
}

export interface Wallet {
  balance: number;
}

export interface Bet {
  id: string;
  combination: string;
  drawTime: string;
  amount: number;
  potentialWin: number;
  timestamp: Date;
  status: 'pending' | 'confirmed' | 'completed';
  gameId?: string;
}

export type BettingStats = Record<string, BetStats>;