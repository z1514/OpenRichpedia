/* eslint-disable camelcase */
import peopleText from '../../data_src/people/people_text';

function getPeopleTextById(people_id) {
  const text = {
    nationality: 'default',
    born_date: 'default',
  };
  peopleText.forEach(item => {
    if (people_id === item.people_id) {
      text.nationality = item.nationality;
      text.born_date = item.born_date;
    }
  });

  return text;
}

export default getPeopleTextById;
