name = input("name of page:")


page = []

while True:
    sipt = []
    sipt.append(input("position on screen:"))
    sipt.append(input("image link:"))
    sipt.append(input("text:"))
    page.append(sipt)
    a = input("more sipts?:")
    if "N"==a or a=="n":
        break


pagetext = ""

for i in page:
    for j in i:
        pagetext+=j
        pagetext+="^&"
    pagetext = pagetext[:-2]+"\n"

pagetext = pagetext[:-1]


open(name+".page","w").write(pagetext)