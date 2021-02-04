import os
import json


raw_images_path = 'data/imgs'                   #原图像位置
images_wbb_path ='data/imgs_bounding_box'       #带box文件位置
position_path = 'data/imgs_json'                #position文件位置
text_path = 'data/dataset.json'                 #文本文件位置


def getDataByName(filename):
  ret = {}                                          #返回的json
  images_list = os.listdir(raw_images_path) #获取路径的信息
  raw_img_path = ''
  img_wbb_path = ''

  #寻找图片路径
  for file in images_list:
    if filename == file:#if filename+'.jpg' == file:
      raw_img_path = os.path.join(raw_images_path,file)
      img_wbb_path = os.path.join(images_wbb_path,file)
  #如果没有找到图片
  if raw_img_path == '':
    return False

  #读取图片的position信息
  json_path = position_path+'/'+filename.split('.')[0]+'.json'
  with open(json_path,'r',encoding='ascii') as f:
    content = json.load(f)
    ret['boxes'] = content['boxes']
    ret['names'] = content['names']
  ret['img_wbb'] = img_wbb_path
  ret['img'] = raw_img_path

  # 读取图片文本信息
  with open(text_path,'r',encoding='utf-8') as f:
    content = json.load(f)
    # ret['Qids'] = content[filename]['Qids']
    ret['wikiCap'] = content[filename.split('.')[0]]['wikiCap']
    # ret['imgPath'] = content[filename]['imgPath']
    # ret['NamedEntities'] = content[filename]['NamedEntities']
  return ret


#test
if __name__=='__main__':
  num = input("Enter the number you want(15550)")
  data = getDataByName(num)
  for k in data:
    print(k+':')
    print(data[k])



