import MainAccount from '../../components/MainAccount/MainAccount';
import './HomePage.scss';

export default function HomePage() {
  return (
    <div>
        <h2 className='home-page__title'>Главная</h2>

        <MainAccount />     
    </div>
  )
}
