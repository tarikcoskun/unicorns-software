import readSaveContent from "./readSaveContent";
import { useCookies } from "@vueuse/integrations/useCookies";

export default function uploadSave(event: Event, index: number) {
  const fileReader: FileReader = new FileReader();
  const files = (event.target as HTMLInputElement).files;

  const handleFileLoad = () => {
    const cookies = useCookies(["slots"]);
    const slots = cookies.get("slots");

    slots[index] = readSaveContent(fileReader.result as string);
    cookies.set("slots", slots);
    console.log(readSaveContent(fileReader.result as string));
  };

  fileReader.onload = handleFileLoad;
  fileReader.readAsText(files[0]);
  location.reload();
}
