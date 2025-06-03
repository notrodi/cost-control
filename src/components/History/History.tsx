import { getCategoryTitle } from '../../functions';
import type { Transaction } from '../../types';
import './History.scss';

type HistoryProps = {
  data: Transaction[]
}

export default function History({ data }: HistoryProps) {
  return (
    <div className='history'>
      { data.map(item =>
        <div className='history-item'>
          <div className='history-item__main'>
            <div className='history-item__icon'>
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
          <div>
            <div>
              <span
                className='history-item__value'>
                { item.value }.00</span> &#8381;
            </div>
          </div>
        </div>
      ) }
    </div>
  )
}