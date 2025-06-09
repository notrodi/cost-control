import { useDispatch } from 'react-redux';
import { formatDate, formatMoney, getCategoryColor, getCategoryTitle } from '../../functions';
import type { Transaction } from '../../types';
import './History.scss';
import type { AppDispatch } from '../../store/store';
import { toggleTransaction } from '../../store/transactions/transactions.slice';
import { incrementBalance } from '../../store/balance/balance.slice';

type HistoryProps = {
  data: Transaction[],
  trashIsShow: boolean
}

export default function History({ data, trashIsShow }: HistoryProps) {
  const sortedData = data.slice().sort((a, b) => {
    const aDate = typeof a.date === 'string' ? new Date(a.date) : a.date;
    const bDate = typeof b.date === 'string' ? new Date(b.date) : b.date;
    
    return bDate.getTime() - aDate.getTime();
  });
    
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className='history'>
      { sortedData.map((item, index) =>
        <div key={ index } className='history-item'>
          <div className='history-item__main'>
            <div
              className='history-item__icon'
              style={{ background: getCategoryColor(item.category) }}>
              <img src={ `/categories/icon-${item.category}.svg` } alt="icon" />
            </div>
            <div>
              <div>
                { getCategoryTitle(item.category) }
              </div>
              <div className='history-item__description'>
                { item.description }
              </div>
            </div>
          </div>
          <div className='history-item__right'>
            <div className='history-item__info'>
              <div>
                <span className='history-item__value'>
                  { `−${formatMoney(item.value)}` }
                </span>
                <span className='history-item__rub'> &#8381;</span>
              </div>
              <div className='history-item__description'>
                { formatDate(item.date) }
              </div>
            </div>
              {
                trashIsShow &&
                <img
                  src="/icons/icon-trash.svg"
                  alt="icon"
                  onClick={ () => {
                    dispatch(toggleTransaction(item));
                    dispatch(incrementBalance(item.value));
                  } }  />
              }
          </div>
        </div>
      ) }
    </div>
  )
}