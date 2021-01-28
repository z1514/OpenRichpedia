fo = open("people.txt",'w',encoding= 'utf-8')
with open("people.js",'r',encoding='utf-8') as f:
    for line in f:
        item = line.lstrip()
        if ("label" in item):
            up = item.find(':')
            down = item.find(',',up)
            result = item[up+1:down]
            print(result)
            fo.write(result+'\n')
fo.close()
