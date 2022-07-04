import React from "react";
import ReactApexChart from "react-apexcharts";


const myData={
    series:[75,75,75,75,75],
    labels:["أقل من 18 سنة","18-24 سنة","24-36 سنة","36-60 سنة","أكبر من 60 سنة",],
    colors:['#007017', '#00a32a', '#1ed14b', '#b8e6bf', '#edfaef']
}

export default class PieApex extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series:myData.series,
        
        options: {
            labels: myData.labels,
            colors:myData.colors,
            
          chart: {
            width:480,
            type: 'donut',
          },
          fill: {
            colors: myData.colors
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      
      
      };
    }

  

    render() {
      return (
        

  <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="donut" />
</div>


      );
    }
  }