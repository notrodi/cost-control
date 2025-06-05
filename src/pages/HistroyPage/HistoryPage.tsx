import { useSelector } from 'react-redux';
import History from '../../components/History/History';
import type { RootState } from '../../store/store';
import { useState } from 'react';
import './HistoryPage.scss';

export default function HistoryPage() {
  const [edit, setEdit] = useState(false);
  const transactions = useSelector((state: RootState )=> state.transactions);

  return (
    <div className='page-container'>
      <div className='history-page__header'>
        <h2 className='main-title'>История операций</h2>

        <div
          className={
            edit ?
              'history-page__icon history-page__icon_active' :
              'history-page__icon' }>
          <img
            src='/icons/icon-edit.svg'
            alt='icon'
            onClick = { () => setEdit((prev) => !prev) } />
        </div>
      </div>

      <History data={ transactions } trashIsShow={ edit } />
    </div>
  )
}
