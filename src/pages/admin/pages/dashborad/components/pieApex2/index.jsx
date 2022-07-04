import React from "react";
import ReactApexChart from "react-apexcharts";


const mydata={
    labels:["أجهزة الحاسوب","الهواتف","الملابس الرجالية","أجهزة الكهرومنازلية","اكسيسورات الهواتف","فئات اخر"],
    series:[10000,7000,3000,2000,2000,1500],
    colors:['#043959', '#135e96', '#3582c4', '#72aee6', '#9ec2e6','#c5d9ed']
}

export default class PieApex2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        
            series:mydata.series,
            options: {
                colors:mydata.colors,
                fill: {
                    colors: mydata.colors,
                },
            chart: {
                width: 380,
                type: 'pie',
            },
            labels:mydata.labels,
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
<ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={380} />
</div>


      );
    }
  }
