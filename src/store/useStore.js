import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export const useCovinStore = create()(
  devtools((set) => ({
    checkedValue: [],
    setCheckedValue: (by) =>
      set((state) => ({ checkedValue: [...state.checkedValue, by] })),
    removeCheckedValue: (by) =>
      set((state) => ({
        checkedValue: state.checkedValue.filter((el) => el !== by),
      })),
  }))
);

export const useHistoryStore = create()(
  devtools(
    persist(
      (set) => ({
        history: [],
        setHistory: (value) =>
          set((state) => ({ history: [value, ...state.history] })),
        updateHistory: ({ id, time }) =>
          set((state) => ({
            history: state.history.map((el) =>
              el.id === id ? Object.assign({}, el, { time }) : el
            ),
          })),
      }),
      {
        name: "history",
      }
    )
  )
);
