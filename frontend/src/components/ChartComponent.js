import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import './ChartComponent.css'

function ChartComponent({ data, options }) {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(chartContainer.current, {
      type: 'bar',
      data: data,
      options: options,
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, options]);

  return <canvas ref={chartContainer} />;
}

export default ChartComponent;
