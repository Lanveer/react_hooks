
import { get } from './fetch';
const List = ()=> `api/list`;

function getListData(pms={}) {
  const url = List();
  return get(url, {});
}

export { getListData };
