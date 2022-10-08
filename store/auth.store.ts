import create, { StateCreator } from 'zustand';
import { createTrackedSelector } from 'react-tracked';
import { devtools } from 'zustand/middleware';

export type AuthStates = {
  authLoader: boolean;
  userId: string | null;

  accessToken: string | null;

  isSignedIn: boolean;

  setAuthState: (label: keyof Omit<AuthStates, 'setAuthState' | 'resetAuthState' | 'setWholeAuthState'>, value: any) => void;

  setWholeAuthState: (authStates: Omit<AuthStates, 'setAuthState' | 'resetAuthState' | 'setWholeAuthState'>) => void;

  resetAuthState: () => void;
};

const initState: Omit<AuthStates, 'setAuthState' | 'resetAuthState' | 'setWholeAuthState'> = {
  authLoader: false,

  userId: null,

  accessToken: null,

  isSignedIn: false,
};

const stateStore = devtools((set) => ({
  ...initState,

  setAuthState: (label, value) => set({ [`${label}`]: value }),

  setWholeAuthState: (authStates) => set((current) => ({ ...current, ...authStates })),

  resetAuthState: () => set({ ...initState }),
})) as StateCreator<AuthStates, [], [], AuthStates>;

export const useAuthStore = create<AuthStates>(stateStore);

const useAuthStoreTrack = createTrackedSelector(useAuthStore);

export default useAuthStoreTrack;