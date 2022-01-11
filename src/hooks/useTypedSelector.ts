import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { RootStateType } from '../store/reducers';

const useTypedSelector: TypedUseSelectorHook<RootStateType> = useSelector;

export default useTypedSelector;
