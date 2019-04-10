import axios from 'axios';

const changeList = (list) => ({
  type: 'change_home_list',
  list
})

export const getHomeList = () => {
  return (dispatch) => {
    axios.get('http://127.0.0.1:3000/mock/home.json')
      .then(res => {
        const list = res.data;
        dispatch(changeList(list))
      })
  }
}