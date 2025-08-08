import Header from '../components/Header';
import { kpis, chartData } from '../data/mockData';
import KPIBox from '../components/KPIbox';
import ChartBox from '../components/ChartBox';

const Dashboard = () => {
  return (
    <div className="ml-60 p-6">
      <Header />
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
        {kpis.map((kpi, index) => (
          <KPIBox key={index} {...kpi} />
        ))}
      </section>

      <section className="mt-10">
        <ChartBox data={chartData} />
      </section>
    </div>
  );
};

export default Dashboard;
