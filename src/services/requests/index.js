import { API } from '../../utils/constants';

async function getRates(base, amount) {
  const url = new URL(`${API}/rates`);

  if (base) url.searchParams.set('base', base);
  if (amount) url.searchParams.set('amount', amount);

  return await fetch(url.toString());
}

export default getRates;
