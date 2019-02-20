filename = input("Enter filename: ")
fh = open(filename, 'r')
text = fh.read()
fh.close()
textlines = text.split("\n")
codetext = "var boxes = [];\nfunction cP(size) { return size * 20; }\n"
currentColor = "#FF0000"
correctIndex = 0
for i in range(0, len(textlines)):
  line = textlines[i]
  if not line == "":
      if line[0:4] == "RGB:":
        datavals = line.replace(" ", "").replace("RGB:", "").split(",")
        #codetext += "  fill(" + datavals[0] + ", " + datavals[1] + ", " + datavals[2] + ");\n"
        currentColor = "#%02x%02x%02x" % (int(datavals[0]), int(datavals[1]), int(datavals[2]))
        correctIndex += 1
      else:
        cleanline = line.replace("(", "").replace(")", "").replace(" ", "").replace("x", ",")
        datavals = cleanline.split(",")
        x = int(datavals[0])
        y = int(datavals[1])
        width = int(datavals[2])
        height = int(datavals[3])
        codetext += "boxes.push(Matter.Bodies.rectangle(cP(" + str(x + width/2) + " + 1), cP(" + str(y + height/2) + "), cP(" + datavals[2] + "), cP(" + datavals[3] + ")));\nboxes[" + str(i - correctIndex) + "].render.fillStyle = '" + currentColor + "';\nboxes[" + str(i - correctIndex) + "].render.strokeStyle = '" + currentColor + "';\n"
  else:
    correctIndex += 1
print(codetext)
input("Code generated. Press any key to save and exit.")
fh = open(filename.split(".")[0] + ".js", "w")
fh.write(codetext)
fh.close()
