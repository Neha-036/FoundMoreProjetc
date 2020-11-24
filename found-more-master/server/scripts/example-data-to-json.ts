import * as fs from "fs"
import * as path from "path"
import * as readline from "readline"

async function extract() {
  const importPath = path.join(__dirname, "..", "data", "short.csv")
  const csvFile = await readCSV(importPath, ",")
  const result = csvJSON(csvFile)
  const exportPath = path.join(__dirname, "..", "data", "short.json")

  fs.createWriteStream(exportPath)
  fs.writeFile(exportPath, result, (err) => {
    if (err) return console.log(err)
    console.log("Wrote json to file, check if you want")
  })
}

function csvJSON(csv) {
  const result = []

  const headers = csv[0]
  for (let i = 1; i < csv.length; i++) {
    const obj = {}
    const currentline = csv[i]
    const tot = !!currentline.find((l) => `${l}`.match(/Total/g))

    for (let j = 0; j < headers.length; j++) {
      if (tot) break
      else obj[headers[j]] = currentline[j]
    }

    result.push(obj)
  }

  return JSON.stringify(result)
}

async function readCSV(file: string, delimiter: string) {
  return new Promise<string[][]>((resolve, reject) => {
    const result: string[][] = []

    const lineReader = readline.createInterface({
      input: fs.createReadStream(file),
    })

    lineReader.on("line", (line: string) => {
      line = line.replace(/,,/g, ",null,")
      line = line.replace(/,,/g, ",null,")
      result.push(line.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g))
    })

    lineReader.on("close", (line: string) => {
      // result.shift() // remove heading
      resolve(result)
    })
  })
}

extract()
