import React from 'react';
import { Pie } from 'react-chartjs-2';
import { randomColor } from '../../util/functions';

const PieChart = (props) => {
  console.log(props.label, props.value)
  const data = {
    labels: props.label,
    datasets: [
      {
        data: props.value,
        backgroundColor: props.colors[0],
        borderColor: props.colors[1],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom'
      },
      title: {
        display: true,
        text: 'Sports Intrest Chart',
      },
    },
  };
  return (
    <>
      <Pie data={data} options={options} />
    </>
  )
};

export default PieChart;