import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip } from "chart.js";
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip);

export function PriceChart({ labels, data }: { labels: string[]; data: number[] }) {
    return <Line data={{ labels, datasets: [{ data }] }} options={{ responsive: true }} />;
}
