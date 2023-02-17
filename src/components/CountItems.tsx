import React from 'react';
interface DataProps {
    date: string,
    name: string,
    sector_id: string,
};

const CountItems = (data: DataProps []): Map<string, number> => {
  return data.reduce((acc, item) => {
    const count = acc.get(item.name) || 0;
    acc.set(item.name, count + 1);
    return acc;
  }, new Map<string, number>());
};
export default CountItems