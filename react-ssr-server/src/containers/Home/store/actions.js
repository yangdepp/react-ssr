import axios from 'axios';
import { CHANGE_LIST } from './constants';

const changeList = (list) => ({
  type: CHANGE_LIST,
  list,
});

export const getHomeList = () => {
  return (dispatch) => {
    return axios.get('http://127.0.0.1:3000/mock/home.json').then((res) => {
      const list = res.data;
      dispatch(changeList(list));
    });
  };
};
