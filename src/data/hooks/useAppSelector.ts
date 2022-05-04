import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { TRootState } from '../redux/store';

const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;

export default useAppSelector;
