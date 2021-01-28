/* eslint-disable camelcase */
import picPeople from '../../data_src/people/pic_people';

function getPicByPeopleId(people_id) {
  const picList = [];
  let num = 0;
  picPeople.forEach(item => {
    if (item.tail === people_id) {
      picList.push(item.head);
      num += 1;
    }
  });

  return { picList, num };
}

export default getPicByPeopleId;
