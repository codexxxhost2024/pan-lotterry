import React from 'react';
import { LotteryBall } from './LotteryBall';
import { LotteryBallGridProps } from './types';
import { calculateBallUsage } from './utils/usageCalculator';
import { chunk } from './utils/arrayUtils';

export const LotteryBallGrid: React.FC<LotteryBallGridProps> = ({
  selectedNumbers,
  onNumberSelect,
  bettingStats,
  position,
}) => {
  // Generate numbers 01-99
  const numbers = Array.from({ length: 99 }, (_, i) => 
    String(i + 1).padStart(2, '0')
  );

  // Split into rows of 5
  const rows = chunk(numbers, 5);

  return (
    <div className="w-full overflow-hidden bg-gray-800 rounded-xl p-2">
      <div className="space-y-2">
        {rows.map((row, rowIndex) => (
          <div 
            key={rowIndex} 
            className="grid grid-cols-5 gap-2 justify-items-center"
          >
            {row.map((number) => {
              const usage = calculateBallUsage(number, position, bettingStats);
              const isDisabled = usage >= 1;
              const isSelected = selectedNumbers.includes(number);
              
              return (
                <div key={number} className="flex justify-center">
                  <LotteryBall
                    number={number}
                    isSelected={isSelected}
                    isDisabled={isDisabled}
                    usage={usage}
                    onClick={() => onNumberSelect(number)}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};