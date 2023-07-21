import { store } from '../store/store';
import { useDispatch } from 'react-redux';

export type AppRootStateType = ReturnType<typeof store.getState>
export const useStoreDispatch = () => useDispatch<typeof store.dispatch>()