import { Routes } from '@angular/router';

import { LoginComponent } from './modules/auth/login/login';
import { HomeComponent } from './modules/dashboard/home/home';

import { CustomersComponent } from './modules/admin/customers/customers';
import { CustomerCreate } from './modules/admin/customer-create/customer-create';

import { AccountListComponent } from './modules/accounts/account-list/account-list';
import { AccountCreateComponent } from './modules/accounts/account-create/account-create';
import { MyAccountsComponent } from './modules/accounts/my-accounts/my-accounts';

import { TransferComponent } from './modules/transactions/transfer/transfer';
import { ReceivedMoneyComponent } from './modules/transactions/received-money/received-money';
import { MyTransactionsComponent } from './modules/transactions/my-transactions/my-transactions';
import { TransactionListComponent } from './modules/transactions/transaction-list/transaction-list';


export const routes: Routes = [

  { path: '', component: LoginComponent },

  {
    path: 'dashboard',
    component: HomeComponent,
    children: [

      // ADMIN
      { path: 'customers', component: CustomersComponent },
      { path: 'create-customer', component: CustomerCreate },
      { path: 'accounts', component: AccountListComponent },
      { path: 'create-account', component: AccountCreateComponent },
      
      { path: 'all-transactions', component: TransactionListComponent },


      // CUSTOMER
      { path: 'my-accounts', component: MyAccountsComponent },
      { path: 'transfer', component: TransferComponent },
      { path: 'received-money', component: ReceivedMoneyComponent },
      { path: 'my-transactions', component: MyTransactionsComponent },

    ]
  },

  { path: '**', redirectTo: '' }
];
