import MainAccount from '../../components/MainAccount/MainAccount';
import CategoryPieChart from '../../components/PieChart/CategoryPieChart';
import { getChartData } from '../../functions';
import { transactionsMock } from '../../mocks';

export default function HomePage() {
  return (
    <div className='page-container'>
        <h2 className='main-title'>Главная</h2>

        <MainAccount />
        
        <CategoryPieChart data={ getChartData(transactionsMock) }/>
    </div>
  )
}
