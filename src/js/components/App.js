/**
 * Created by yashw on 11-02-2017.
 */
import React, {Component} from 'react';

import BankActions from '../actions/BankActions';
import BankStore from '../stores/BankStore';

export class App extends Component{
    constructor(){
      super(...arguments);
      BankActions.createAccount();
      this.state = {
          balance: BankStore.getState()
      };
      console.log(this.state.balance);
    }

    componentDidMount(){
      this.storeSubscription = BankStore.addListener((data)=> this.handleStoreChange(data));
    };

    componentWillUnmount(){
        this.storeSubscription.remove();
    }

    handleStoreChange(){
        this.setState({
            balance: BankStore.getState()
        });
    }

    deposit(){
        BankActions.depositIntoAccount(Number(this.refs.amount.value));
        this.refs.amount.value = "";
    }

    withdraw(){
        BankActions.withdrawFromAccount(Number(this.refs.amount.value));
        this.refs.amount.value = "";
    }

    render(){
        return(
            <div>
                <header>---SIMPLE BANK FLUX APPLICATION---</header>
                <h4>YOUR CURRENT BALANCE: {this.state.balance}</h4>
                <div className="atm">
                    <input type="text" placeholder="Enter Amount" ref="amount"/>
                    <br/>
                    <button onClick={this.deposit.bind(this)}>DEPOSIT</button>
                    <button onClick={this.withdraw.bind(this)}>WITHDRAW</button>
                </div>
            </div>
        );
    }
}