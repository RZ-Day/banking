'use client';

import React from 'react';
import CountUp from 'react-countup';

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
        <CountUp 
            duration={0.7}
            decimals={2}
            decimal="."
            prefix="$"
            end={amount}
        />
    </div>
  )
}

export default AnimatedCounter