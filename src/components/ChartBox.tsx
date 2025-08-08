import React from 'react';
import { Line } from 'react-chartjs-2';
import type { ChartData } from 'chart.js';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ChartBoxProps {
  data: ChartData<'line'>;
}

const ChartBox: React.FC<ChartBoxProps> = ({ data }) => {
  return (
    <div className="bg-white p-4 shadow rounded w-full">
      <h3 className="text-lg font-semibold mb-2">Ventas (últimos 6 meses)</h3>
      <Line data={data} />
    </div>
  );
};

export default ChartBox;
