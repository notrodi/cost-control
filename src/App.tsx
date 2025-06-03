import { useState } from 'react';
import Tabs from './components/Tabs/Tabs';
import HomePage from './pages/HomePage/HomePage';
import HistoryPage from './pages/HistroyPage/HistoryPage';
import AddTransactionPage from './pages/AddTransactionPage/AddTransactionPage';
import { PageType } from './types';

function App() {
  const [page, setPage] = useState<PageType>(PageType.Home);

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
