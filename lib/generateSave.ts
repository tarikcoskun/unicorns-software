import type { SaveFile } from "@/types/SaveFile"

/**
 * Generates a save file with the given data.
 * @param {string} name Save file name.
 * @param {SaveFile} data Save file data.
 */

const generateSave = (name: string, data: SaveFile): void => {
  let generated = "Hello, human. Cheating isn't really fun when it's that easy, is it?\nChange whatever you want if it helps to makes you feel good.\n!! Edit at your own risk !!\n\n"

  for (const [title, value] of Object.entries(data)) {
    if (typeof value === "object") value.unshift(value.length)
    generated += `${title}\n${typeof value === "object" ? value.join("\n") : value}\n\n`
  }

  const blob: Blob = new Blob([generated.replace(/\n/g, "\r\n")], { type: "text/plain" })
  const downloadLink = document.createElement("a")
  downloadLink.href = URL.createObjectURL(blob)
  downloadLink.download = name
  downloadLink.click()
  URL.revokeObjectURL(downloadLink.href)
}

export default generateSave