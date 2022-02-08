import type { MutationTree } from "vuex"
import type { Save } from "@/types/Save"

type StateTree = { slots: Partial<Save>[] }

export const state: () => StateTree = () => ({
  slots: [{}, {}, {}]
})

export const mutations: MutationTree<StateTree> = {
  initialize(state) {
    if (!localStorage.slots) localStorage.setItem("slots", JSON.stringify(state.slots))
    state.slots = JSON.parse(localStorage.slots)
  },

  updateSlot(state, slot: { index: number; value: Save }) {
    state.slots[slot.index] = slot.value
    localStorage.setItem("slots", JSON.stringify(state.slots))
  },

  deleteSlot(state, index: number) {
    state.slots[index] = {}
    localStorage.setItem("slots", JSON.stringify(state.slots))
  }
}