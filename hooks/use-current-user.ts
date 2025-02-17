import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { userNetflix } from "@prisma/client";

interface UseCurrentUser {
  currentUser: userNetflix | null;
  changeCurrentUser: (data: userNetflix) => void;
}

export const useCurrentNetflixUser = create(
  persist<UseCurrentUser>(
    (set) => ({
      currentUser: null,
      changeCurrentUser: (data: userNetflix) => {
        set({ currentUser: data });
      },
    }),
    {
      name: "current-netflix-user",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
