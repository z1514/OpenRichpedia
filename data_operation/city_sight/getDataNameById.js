import citySight from '../../data_src/city_sight/city_sight';

function getCityNameById(city_id) {
    let city_name = 'default';
    citySight.forEach(item => {
      if (item.value === city_id) city_name = item.label;
    });
  
    return city_name;
  }
  
  function getSightNameById(sight_id) {
    let sight_name = 'default';
    citySight.forEach(city => {
      city.children.forEach(sight => {
        if (sight.value === sight_id) sight_name = sight.label;
      });
    });
  
    return sight_name;
  }

export { getCityNameById, getSightNameById };