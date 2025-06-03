import { formatDate, formatMoney, getCategoryColor, getCategoryTitle } from '../../functions';
import type { Transaction } from '../../types';
import './History.scss';

type HistoryProps = {
  data: Transaction[]
}

export default function History({ data }: HistoryProps) {
  const sortedData = data.slice().sort((a, b) => b.date.getTime() - a.date.getTime());

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
          <div className='history-item__info'>
            <div>
              <span className='history-item__value'>
                { `−${formatMoney(item.value)}` }
              </span>
              <span className='history-item__rub'> &#8381;</span>
            </div>
            <div  className='history-item__description'>
              { formatDate(item.date) }
            </div>
          </div>
        </div>
      ) }
    </div>
  )
}