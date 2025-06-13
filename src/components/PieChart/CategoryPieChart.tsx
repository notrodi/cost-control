import { PieChart, Pie, Cell } from 'recharts';
import { formatMoney } from '../../functions';
import './CategoryPieChart.scss';

const CHART_PLUG = [
  {
    value: 30
  },
  {
    value: 60
  },
  {
    value: 10
  }
]

type PieChartDataItem = {
  title: string;
  color: string;
  value: number;
};

type PieChartProps = {
  data: PieChartDataItem[];
};

export default function CategoryPieChart({ data }: PieChartProps) {
  return (
    <div className='category-pie-chart'>
      <h3 className='second-title'>Аналитика</h3>
      
      <PieChart width={240} height={240}>
        <Pie
          data={ data.length ? data : CHART_PLUG }
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={120}
          paddingAngle={2}
          isAnimationActive={false}
        >
          {data.map((item, index) => (
            <Cell key={`cell-${index}`} fill={item.color} />
          ))}
        </Pie>
      </PieChart>

      <ul className='category-pie-chart__legend'>
        {
          data.length ?
          data.map((item, index) => (
            <li className='category-pie-chart__legend__item' key={`item-${index}`}>
              <div className='category-pie-chart__legend__item__category'>
                <span
                  style={{
                    display: 'inline-block',
                    width: 10,
                    height: 10,
                    backgroundColor: item.color,
                    borderRadius: '50%',
                    marginRight: 8,
                  }}
                />
                <div>{item.title}</div>
              </div>
              <div>{`${formatMoney(item.value)} ₽`}</div>
            </li> )) :
          <div className='category-pie-chart__plug-text'>Нет данных</div>
        }
      </ul>
    </div>
  );
}
