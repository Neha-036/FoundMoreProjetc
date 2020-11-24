import * as xlsx from "xlsx"

export interface TableRow {
  [column: string]: any
}

export interface Sheet {
  [sheetName: string]: TableRow[]
}

export function readTables(fileName: string) {

  const result: Sheet = {}

  const file = xlsx.readFile(fileName)
  const sheetNames = file.SheetNames

  sheetNames.forEach((s) => {
    result[s.trim()] = readTable(file.Sheets[s])
  })

  return result
}

function readTable(sheet: xlsx.Sheet) {

  return xlsx.utils.sheet_to_json<TableRow>(sheet)
}
