import picSight from '../../data_src/city_sight/pic_sight';

function randomNum(minNum, maxNum) {
  return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
}

function getSameAsBySightId(sight_id)
{
    const PicList = [];
    picSight.forEach(item => {
        if (item.t === sight_id) {
          PicList.push(item.h);
        }
      });
    const num = PicList.length < 5? PicList.length:5;
    const Index = [];
    const result = [];
    let random;
    for(let i=0;i<num;i++)
    {
        do{
            random = randomNum(0, PicList.length - 1);
        }while(Index.includes(random));
        Index.push(random);
    }
    Index.sort();
    Index.forEach(index => {
    result.push(PicList[index]);
  });

  return result;
}

export default getSameAsBySightId;