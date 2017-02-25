/**
 * Created by yashw on 11-02-2017.
 */
import BankAppDispatcher from '../dispatchers/BankAppDispatcher';
import BankConstants from '../constants/BankConstants';

let BankActions = {
    createAccount(){
        BankAppDispatcher.dispatch({
            type: BankConstants.CREATED_ACCOUNT,
            amount: 0
        })
    },

    depositIntoAccount(amount){
        BankAppDispatcher.dispatch({
            type: BankConstants.DEPOSITED_INTO_ACCOUNT,
            amount: amount
        })
    },

    withdrawFromAccount(amount){
        BankAppDispatcher.dispatch({
            type: BankConstants.WITHDREW_FROM_ACCOUNT,
            amount: amount
        })
    }
};

export default BankActions;