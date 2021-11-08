import { useState, useEffect } from 'react';

const findCheapestCinema = (cinemas) => {
  if (cinemas[0].price < cinemas[1].price) {
    return cinemas[0];
  }
  return cinemas[1];
};

export default function useCheapest(...args) {
  const [cheapest, setCheapest] = useState(findCheapestCinema(args));

  useEffect(() => {
    setCheapest(findCheapestCinema(args));
  }, [args]);

  return cheapest;
}
