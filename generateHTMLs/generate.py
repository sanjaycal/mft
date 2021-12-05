

import sys
'''
<li className='stockplustext'>
    <StockImgPlusTextCenter src='https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg' text='hello!'/>
</li>

'''

def getHTML(content):
    content = content.split("\n")
    ctn = []
    for i in content:
        ctn.append(i.split("^&"))
    content = ctn
    outstr = ""
    for i in content:
        outstr += "<li className='stockplustext'>\n    <StockImgPlusText"
        if i[0]=="C":
            outstr+="Center"
        elif i[0]=="L":
            outstr+="Left"
        elif i[0]=="R":
            outstr+="Right"
        outstr+=" src='"
        outstr+=i[1]
        outstr +="' text='"
        outstr += i[2]
        outstr += "'/>\n</li>\n"
    return outstr





if __name__ == "__main__":
    print(getHTML(open(sys.argv[1],"r").read()))
