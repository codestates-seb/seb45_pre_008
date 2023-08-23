import { dummydata } from '../api/dummydata';

//로컬스토리지에 저장
export const saveData = (data) => {
  localStorage.setItem('stackData', JSON.stringify(data));
  return;
};

export const getData = (name) => {
  const localData = JSON.parse(localStorage.getItem(name));
  return localData;
};

saveData(dummydata);
