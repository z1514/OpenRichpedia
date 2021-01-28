/* eslint-disable camelcase */
import picPeople from '../../data_src/people/pic_people';

function randomNum(minNum, maxNum) {
  return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
}

function getSameAsByPeopleId(people_id) {
  const picList = [];
  // let num = 0;
  picPeople.forEach(item => {
    if (item.tail === people_id) {
      picList.push(item.head);
      // num += 1;
    }
  });

  const times = picList.length < 5 ? picList.length : 5;
  const filterIndex = [];
  const filteredPicList = [];
  let random;
  for (let i = 0; i < times; i += 1) {
    do {
      random = randomNum(0, picList.length - 1);
    } while (filterIndex.includes(random));
    filterIndex.push(random);
  }

  filterIndex.sort();
  filterIndex.forEach(index => {
    filteredPicList.push(picList[index]);
  });

  return filteredPicList;
}

export default getSameAsByPeopleId;
