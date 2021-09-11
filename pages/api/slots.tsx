import { NextApiRequest, NextApiResponse } from "next";
import { readSaveContent } from "@lib/readSaveContent";
import { Slot } from "@types";
import fs from "fs";
import os from "os";

function getIndex(name: string) {
  if (name.slice(1, 2) === "a") return 0;
  else return Number(name.slice(1, 2)) - 1;
}

export default function FetchSlots(req: NextApiRequest, res: NextApiResponse) {
  const dataLocation = os.homedir() + "/AppData/Local/Will_You_Snail";
  let slots: Array<Partial<Slot>> = [{}, {}, {}];

  if (fs.existsSync(dataLocation)) {
    const saveDir = fs.readdirSync(dataLocation);
    saveDir.forEach((file) => {
      if (!file.includes("SaavoGame23")) return;
      let content = fs.readFileSync(dataLocation + "/" + file, {
        encoding: "utf8",
      });
      content.match(/[^\r\n]+/g);
      slots[getIndex(file)] = readSaveContent(content);
    });
    res.status(200).json(slots);
  } else res.status(404).json('"Save directory not found"');
}
