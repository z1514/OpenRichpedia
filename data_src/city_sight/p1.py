import json
path = "city.js"
symbol = False
fo = open("city.txt","w",encoding='utf-8')
with open(path,'r',encoding='utf-8') as f:
    print(f)
    for line in f:
        item = line.lstrip()
        if "wd" in item:
            #print(item)
            symbol = True
            continue
        elif ("label" in item) and (symbol == True):
            symbol = False
            #print(item)
            continue
        elif ("label" in item) and (symbol == False):
            lab = item.find(':')
            sup = item.find(',',lab)
            name = item[lab+1:sup]
            fo.write(name+'\n')
            print("name",name)
fo.close()
            
        
