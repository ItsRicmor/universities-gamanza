import { createListenerMiddleware, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { ToastStatusEnum } from '../../constants/ToastStatusEnum';
import { IPayload } from '../../models/IPayload';
import { addToast } from '../toasts/reducer.slices';

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  predicate: (action, currState, prevState) => true,
  effect: async (action, listenerApi) => {
    const { error } = (action as PayloadAction<IPayload>).payload;
    if (error) {
      listenerApi.dispatch(addToast({ id: uuidv4(), error, type: ToastStatusEnum.Error }))
    }
  },
});


export const errorToastMiddleware = listenerMiddleware.middleware;