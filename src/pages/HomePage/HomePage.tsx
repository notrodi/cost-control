import { useSelector } from 'react-redux';
import MainAccount from '../../components/MainAccount/MainAccount';
import CategoryPieChart from '../../components/PieChart/CategoryPieChart';
import { getChartData } from '../../functions';
import type { RootState } from '../../store/store';

export default function HomePage() {
  const transactions = useSelector((state: RootState )=> state.transactions);
  
  return (
    <div className='page-container'>
        <h2 className='main-title'>Главная</h2>

        <MainAccount />
        
        <CategoryPieChart data={ getChartData(transactions) }/>
    </div>
  )
}
