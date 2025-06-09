import { useEffect, useState } from 'react';
import Tabs from './components/Tabs/Tabs';
import HomePage from './pages/HomePage/HomePage';
import HistoryPage from './pages/HistroyPage/HistoryPage';
import AddTransactionPage from './pages/AddTransactionPage/AddTransactionPage';
import { PageType } from './types';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from './store/store';
import { loadTransactions } from './store/transactions/transactions.slice';
import { loadBalance } from './store/balance/balance.slice';

function App() {
  const [page, setPage] = useState<PageType>(PageType.Home);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(loadTransactions());
    dispatch(loadBalance());
  }, [dispatch]);

  return (
    <div className='app container'>
      { page === PageType.Home && <HomePage /> }

      { page === PageType.History && <HistoryPage /> }

      { page === PageType.AddTransaction && <AddTransactionPage /> }

      <Tabs active={ page } onChange={ (tab) => setPage(tab) } />
    </div>
  )
}

export default App
