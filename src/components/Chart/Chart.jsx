import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';
const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
    const [dailyData, setDailyData] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        // console.log(dailyData);
        fetchAPI();
    });
    const lineChart = (
        dailyData.length !== 0 ? (
          <Line
            data={{
              labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
              datasets: [{
                data: dailyData.map((data) => data.confirmed),
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true,
              }, {
                data: dailyData.map((data) => data.deaths),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                fill: true,
              },  {
                data: dailyData.map((data) => data.recovered),
                label: 'Recovered',
                borderColor: 'green',
                backgroundColor: 'rgba(0, 255, 0, 0.5)',
                fill: true,
              },
              ],
            }}
          />
        ) : null
    );
    const barChart = (
      confirmed
      ? (
        <Bar
        data={{
            labels: ['Infected', 'Recovered', 'Deaths'],
            datasets: [{
              label: 'People',
              backgroundColor:['rgba(0, 0, 255, 0.5)',
               'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)',
              ],
              data: [confirmed.value, recovered.value, deaths.value],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text:`Current state is ${country}` },
           }}
        />
      ) : null 
      )
    
    return (
        <div className = {styles.container}>
          {country ? barChart : lineChart}
        </div>
    );
    }
export default Chart;

// The state variable contains all the data and styling properties of the bar graph. The labels keyword assigns names to each bar, and the dataset sub-set contains information such as bar color, border width, ​and height of the bar.
// The Bar component is rendered using <Bar /> inside the React App component. The defined state is assigned to the bar component on line 22. The options property allows further miscellaneous styling, such as the position of the heading and the chart legend.
