import { createStore } from "vuex";

export default createStore({
  state: {
    slots: [{}, {}, {}],
  },
  mutations: {
    setSlots(state) {
      if (!localStorage.slots) localStorage.slots = JSON.stringify(state.slots);
      state.slots = JSON.parse(localStorage.slots);
    },
    updateSlot(state, slot) {
      state.slots[slot.index] = slot.value;
      localStorage.setItem("slots", JSON.stringify(state.slots));
    },
    deleteSlot(state, index) {
      state.slots[index] = {};
      localStorage.setItem("slots", JSON.stringify(state.slots));
    },
  },
});
