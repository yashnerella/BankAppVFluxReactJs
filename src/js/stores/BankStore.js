/**
 * Created by yashw on 11-02-2017.
 */
import {EventEmitter} from 'fbemitter';
import BankAppDispatcher from '../dispatchers/BankAppDispatcher';
import BankConstants from '../constants/BankConstants';

let balance = 0;
let __emitter = new EventEmitter();

let BankStore = {
   getState(){
       return balance;
   },

    addListener(callback){
      return __emitter.addListener(BankConstants.CHANGE_EVENT, callback)
    }
};

BankStore.dispatchToken = BankAppDispatcher.register((action)=>{
    switch(action.type){
        case BankConstants.CREATED_ACCOUNT:
            balance = 0;
            __emitter.emit(BankConstants.CHANGE_EVENT);
            break;
        case BankConstants.WITHDREW_FROM_ACCOUNT:
            balance = balance - action.amount;
            __emitter.emit(BankConstants.CHANGE_EVENT);
            break;
        case BankConstants.DEPOSITED_INTO_ACCOUNT:
            balance = balance + action.amount;
            __emitter.emit(BankConstants.CHANGE_EVENT);
            break;
    }
});

export default BankStore;