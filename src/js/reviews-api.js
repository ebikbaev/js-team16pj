'use strict';

import Axios from 'axios';

export async function fetchData() {
  const res = await Axios.get('https://portfolio-js.b.goit.study/api/reviews');
  return res.data;
}
