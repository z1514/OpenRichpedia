import picCity from '../../data_src/city_sight/pic_city';
import picNum from '../../data_src/city_sight/pic_num';


function getPicByCityId(city_id) {
    const picList = [];
    let num = 0;
    picCity.forEach(item => {
      if (item.t === city_id) {
        picList.push(item.h);
      }
    });
    picNum.forEach(item => {
      if (item.t === city_id) {
        num = item.num
      }
    });
  
    return { picList, num };
  }
  
  export default getPicByCityId;