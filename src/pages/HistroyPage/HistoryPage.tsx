import History from '../../components/History/History';
import { transactionsMock } from '../../mocks';

export default function HistoryPage() {
  return (
    <div className='page-container'>
        <h2 className='main-title'>История операций</h2>

        <History data={transactionsMock} />
    </div>
  )
}
