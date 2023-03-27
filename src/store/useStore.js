import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import axios from "axios";

export const useCovinStore = create()(
  devtools((set) => ({
    bucket: [],
    fetchBucket: async () => {
      const res = await axios.get(`/api/products`);
      set({ bucket: res.data });
    },
    
    checkedValue: [],
    setCheckedValue: (by) =>
      set((state) => ({ checkedValue: [...state.checkedValue, by] })),
    removeCheckedValue: (by) =>
      set((state) => ({
        checkedValue: state.checkedValue.filter((el) => el !== by),
      })),

    history: [],
    setHistory: (value) =>
      set((state) => ({ history: [value, ...state.history] })),
    updateHistory: (value) =>
      set((state) => ({ history: [value, ...state.history] })),
  }))
);
