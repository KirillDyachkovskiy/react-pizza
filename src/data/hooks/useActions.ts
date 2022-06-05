import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/cartSlice';

const allActions = {
  ...cartActions,
};

export default function useActions() {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
}
