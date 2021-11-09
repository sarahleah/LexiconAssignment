import { useState, useEffect } from 'react';

const findCheapestCinema = (cinemas) => {
	return cinemas.reduce((prev, curr) => {
		return prev.price < curr.price ? prev : curr;
	})
};

export default function useCheapest(...args) {
  const [cheapest, setCheapest] = useState(findCheapestCinema(args));

  useEffect(() => {
    setCheapest(findCheapestCinema(args));
  }, [args]);

  return cheapest;
}
