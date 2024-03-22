'use client';
import { Dispatch, FC, createContext, useContext, useReducer } from 'react';

export type MODAL_VIEWS =
  | 'OPEN_LOGIN'
  | 'OPEN_DEVICE_GALLERY'
  | 'OPEN_FILTER'
  | 'OPEN_ADD_REVIEW_FORM'
  | 'OPEN_LISTS'
  | 'OPEN_ALERTS'
  | 'OPEN_PROFILE';

export type MODAL_WIDTH =
  | 'max-w-md'
  | 'max-w-lg'
  | 'max-w-xl'
  | 'max-w-2xl'
  | 'max-w-3xl'
  | 'max-w-4xl'
  | 'max-w-5xl'
  | 'max-w-6xl'
  | 'max-w-7xl'
  | 'max-w-full'
  | undefined;
interface State {
  view?: MODAL_VIEWS;
  data?: any;
  isOpen: boolean;
  width?: MODAL_WIDTH;
}
type Action =
  | { type: 'open'; view?: MODAL_VIEWS; payload?: any; width?: MODAL_WIDTH }
  | { type: 'close' };

const initialState: State = {
  view: undefined,
  isOpen: false,
  data: null,
  width: 'max-w-md',
};

function modalReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'open':
      return {
        ...state,
        view: action.view,
        data: action.payload,
        isOpen: true,
        width: action.width,
      };
    case 'close':
      return {
        ...state,
        view: undefined,
        data: null,
        isOpen: false,
        width: 'max-w-md',
      };
    default:
      throw new Error('Unknown Modal Action!');
  }
}

const ModalStateContext = createContext<State>(initialState);
ModalStateContext.displayName = 'ModalStateContext';
const ModalActionContext = createContext<Dispatch<Action> | undefined>(
  undefined
);
ModalActionContext.displayName = 'ModalActionContext';

export const ModalProvider: FC<any> = ({ children }) => {
  const [state, dispatch] = useReducer(modalReducer, initialState);
  return (
    <ModalStateContext.Provider value={state}>
      <ModalActionContext.Provider value={dispatch}>
        {children}
      </ModalActionContext.Provider>
    </ModalStateContext.Provider>
  );
};

export function useModalState() {
  const context = useContext(ModalStateContext);
  if (context === undefined) {
    throw new Error(`useModalState must be used within a ModalProvider`);
  }
  return context;
}

export function useModalAction() {
  const dispatch = useContext(ModalActionContext);
  if (dispatch === undefined) {
    throw new Error(`useModalAction must be used within a ModalProvider`);
  }
  return {
    openModal(view?: MODAL_VIEWS, width?: MODAL_WIDTH, payload?: unknown) {
      dispatch({ type: 'open', view, width, payload });
    },
    closeModal() {
      dispatch({ type: 'close' });
    },
  };
}
