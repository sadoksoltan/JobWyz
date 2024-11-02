import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Fonction de prévision pour l'année 2025 avec EMA
const predictData = (historicalData) => {
  const predictions = [];
  const smoothingFactor = 0.2; // Facteur de lissage pour l'EMA (ajuster si nécessaire)

  // Calculer l'EMA initial
  let ema = historicalData[0].count;

  historicalData.forEach((point) => {
    ema = smoothingFactor * point.count + (1 - smoothingFactor) * ema;
  });

  // Prévoir les 12 mois de 2025 en utilisant l'EMA calculé
  const lastDataPoint = historicalData[historicalData.length - 1];
  for (let i = 1; i <= 12; i++) {
    const newDate = new Date(2025, i - 1);
    ema = ema * (1 + smoothingFactor); // Appliquer un léger ajustement de croissance
    const newCount = Math.max(0, Math.round(ema)); // Éviter les valeurs négatives
    predictions.push({
      date: newDate.toISOString().split("T")[0],
      count: newCount,
    });
  }
  return predictions;
};

const BarChartComponent2025 = ({ data }) => {
  const [predictedData, setPredictedData] = useState([]);

  useEffect(() => {
    const predictions = predictData(data);
    setPredictedData(predictions);
  }, [data]);

  const combinedData = [...data, ...predictedData];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={combinedData} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Bar dataKey="count" fill="#2cb1bc" barSize={75} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent2025;
