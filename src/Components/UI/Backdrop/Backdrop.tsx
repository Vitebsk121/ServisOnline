import './Backdrop.scss';

import React from 'react';
import {useDispatch} from 'react-redux';

import useTypedSelector from '../../../hooks/useTypedSelector';
import {closeBackdrop} from '../../../store/actions/appActions';

type BackdropProps = {};

const Backdrop: React.FC<BackdropProps> = () => {
  const dispatch = useDispatch();
  const { backDropIsOpen } = useTypedSelector((state) => state.appState);

  const backdropHandler = () => {
    backDropIsOpen ? dispatch(closeBackdrop()): null;
  };

  return <div role="none" className={backDropIsOpen ? 'backdrop open' : 'backdrop'} onClick={backdropHandler} />;
};

export default Backdrop;
