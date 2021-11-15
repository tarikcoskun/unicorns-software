import { useCookies } from "@vueuse/integrations/useCookies";

export function deleteSave(index: number) {
  if (
    confirm(
      "Are you sure you want to delete this save slot?\nDeleting this save file will replace it with an empty save slot"
    )
  ) {
    const cookies = useCookies(["slots"]);
    const slots = cookies.get("slots");

    slots[index] = {};
    cookies.set("slots", slots);
    location.reload();
  }
}
