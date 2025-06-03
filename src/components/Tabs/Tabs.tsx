import { PageType } from '../../types';
import './Tabs.scss';

type TabsProps = {
  active: PageType; 
  onChange: (tab: PageType) => void;
};

export default function Tabs({ active, onChange }: TabsProps) {
  return (
    <div className='tabs'>
      <div className='tabs__add'>
        <div
          className={ active === PageType.AddTransaction ? 'tabs__item tabs__item_active' : 'tabs__item' }
          onClick={ () => onChange(PageType.AddTransaction) }>
          <img
            className='tabs__icon'
            src='/icons/icon-add.svg'
            alt='icon' />
        </div>
      </div>
      <div className='tabs__main'>
        <div
          className={ active === PageType.Home ? 'tabs__item tabs__item_active' : 'tabs__item' }
          onClick={ () => onChange(PageType.Home) }>
          <img
          className='tabs__icon'
          src='/icons/icon-home.svg'
          alt='icon' />
        </div>
        <div
          className={ active === PageType.History ? 'tabs__item tabs__item_active' : 'tabs__item' }
          onClick={ () => onChange(PageType.History) }>
          <img
            className='tabs__icon'
            src='/icons/icon-history.svg'
            alt='icon' />
        </div>
      </div>
    </div>
  )
}
