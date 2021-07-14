import json
from os import write
w = open("json.txt","r",encoding="utf-8")
f = open("dict.txt","w",encoding="utf-8")
arr = json.load(w)
s = dict()
f.write('{')
for item in arr: 
    s[item["value"]] = item["key"]
print(s)
for key in s:
    f.write('"'+str(key)+'"'+':')
    f.write('"'+str(s[key])+'"'+',\n')
f.write("}")