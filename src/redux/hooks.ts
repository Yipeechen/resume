import { useDispatch, useSelector } from 'react-redux';
import type {  AppDispatch } from '@src/redux/configureStore';
import type { RootState } from '@src/redux/root';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();