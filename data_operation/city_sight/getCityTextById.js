import cityText from '../../data_src/city_sight/city_text';

function getCityTextById(city_id) {
  const text = {
    geo: 'default',
    ab: 'default',
    wikilink: 'default',
    dblink: 'default',
  };
  cityText.forEach(item => {
    if (city_id === item.city_id) {
      text.geo = item.geo;
      text.ab = item.ab;
      text.wikilink = item.wikilink;
      text.dblink = item.dblink;
    }
  });

  return text;
}

export default getCityTextById;