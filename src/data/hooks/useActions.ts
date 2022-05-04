import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { catalogActions } from '../redux/catalogSlice';
import { cartActions } from '../redux/cartSlice';

const allActions = {
  ...catalogActions,
  ...cartActions,
};

export default function useActions() {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
}
