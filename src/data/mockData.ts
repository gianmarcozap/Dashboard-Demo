export interface KPI {
  title: string;
  value: string;
  growth: string;
}

export const kpis = [
  { title: "Revenue", value: "$278,600", growth: "+6.1%", growthValue: "278600", max: 300000 },
  { title: "New Customers", value: "81%", growth: "+5.1%", growthValue: "162", max: 200 },
  { title: "Website Sessions", value: "301,544", growth: "-2%", growthValue: "301544", max: 350000 },
  { title: "Page Views", value: "68%", growth: "+3.4%", growthValue: "20400", max: 30000 },
  { title: "Churn Rate", value: "4.8%", growth: "-2%", growthValue: "4.8", max: 10 },
  { title: "Active Users", value: "27,883", growth: "+12%", growthValue: "27883", max: 30000 },
  { title: "ARPC", value: "57%", growth: "-3.4%", growthValue: "218", max: 800 },
  { title: "Bounce Rate", value: "32%", growth: "+2%", growthValue: "32", max: 100 },
];


export const chartData = {
  labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
  datasets: [
    {
      label: "Ventas",
      data: [12000, 19000, 15000, 22000, 25000, 30000],
      borderColor: "#3b82f6",
      backgroundColor: "rgba(59, 130, 246, 0.5)",
    },
  ],
};
