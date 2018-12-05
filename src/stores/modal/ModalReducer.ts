import ModalAction, {ModalActionUnion} from './ModalAction';
import IAction from '../IAction';
import IModalReducerState from './IModalReducerState';

export default class ModalReducer {

    private static readonly _initialState: IModalReducerState = {
        currentModal: null,
        modalList: [],
    };

    public static reducer(state: IModalReducerState = ModalReducer._initialState, action: IAction<ModalActionUnion>): IModalReducerState {
        switch (action.type) {
            case ModalAction.ADD_MODAL:
                const modal: JSX.Element = action.payload as JSX.Element;

                return {
                    ...state,
                    currentModal: modal,
                    modalList: [...state.modalList, modal],
                };
            case ModalAction.REMOVE_MODAL:
                const currentModal: JSX.Element = state.currentModal;
                const modalIndex: number = state.modalList.indexOf(currentModal);
                const modals: JSX.Element[] = [
                    ...state.modalList.slice(0, modalIndex),
                    ...state.modalList.slice(modalIndex + 1),
                ];
                const previousModal: JSX.Element = modals[modals.length - 1];

                return {
                    ...state,
                    currentModal: previousModal || null,
                    modalList: modals,
                };
            default:
                return state;
        }
    }

}
