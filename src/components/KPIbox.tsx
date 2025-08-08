import React from 'react';

interface KPIBoxProps {
  title: string;
  value: string;
  growth: string;
  growthValue?: string;
  max?: number;
}

const KPIBox: React.FC<KPIBoxProps> = ({ title, value, growth, growthValue, max }) => {
  const isPositive = growth.includes('+');
  const barWidth = max && growthValue ? (parseFloat(growthValue) / max) * 100 : 70;

  return (
    <div className="bg-white rounded-xl shadow p-5 flex flex-col gap-2 w-full">
      <div className="text-xs text-gray-500">Month to date</div>
      <h4 className="text-sm font-medium text-gray-700">{title}</h4>
      <p className="text-2xl font-bold text-gray-900">{value}</p>

      {growthValue && (
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full ${isPositive ? 'bg-green-500' : 'bg-red-500'}`}
            style={{ width: `${barWidth}%` }}
          ></div>
        </div>
      )}

      <div className={`text-sm ${isPositive ? 'text-green-600' : 'text-red-500'}`}>
        {growth}
      </div>
    </div>
  );
};

export default KPIBox;
