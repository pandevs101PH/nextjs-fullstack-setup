import { useState } from 'react';
import { useRouter } from 'next/router';
import useAuthStoreTrack from '@/store/auth.store';
import { trpc } from '@/utils/trpc';
import { useRefreshTokenJob } from './useRefreshTokenJob';

export function useLogout() {
  const router = useRouter();
  const { resetAuthState } = useAuthStoreTrack();
  const { clearRefreshTokenJob } = useRefreshTokenJob();
  const [errMessage, setErrMessage] = useState<string | null>(null);

  const { mutate } = trpc.useMutation('auth.signOut', {
    onSuccess() {
      clearRefreshTokenJob();
      resetAuthState();
      router.push('/login');
    },
    onError(error) {
      setErrMessage(error.message);

      setTimeout(() => {
        setErrMessage(null);
      }, 5000);
    },
  });

  const signOut = () => {
    clearRefreshTokenJob();
    resetAuthState();
    router.push('/login');
  };

  const signOutWithMutate = () => mutate();

  return {
    signOut,
    signOutWithMutate,
    errMessage,
  };
}
