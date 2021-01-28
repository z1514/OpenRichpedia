/* eslint-disable camelcase */
import people from '../../data_src/people/people';

function getPeopleNameById(people_id) {
  let people_name = 'default';
  people.forEach(item => {
    if (item.value === people_id) people_name = item.label;
  });

  return people_name;
}

export default getPeopleNameById;
