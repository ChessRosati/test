d3.csv("../cleaned_wine_v2(syrah).csv", function(data2) {
  
  function _filter(list, predi) {
      let newList = [];
      for (let i = 0; i < list.length; i++) {
          if (predi(list[i])) newList.push(list[i]);
      }
      return newList;
  };
  
  let x_axis = [];
  let y_axis = [];
  let labels = [];
  
  for (var item in data2) {
    //console.log(data2[item].points);
    x_axis.push(data2[item].points);
    y_axis.push(data2[item].price);
    labels.push(data2[item].region_1);
  }
  
  let trace = [];
  
  const uniqueLabels = [...new Set(labels)].sort();
  //console.log(uniqueLabels);
  for (let label of uniqueLabels) {
      //create filtered array from data2
      let filteredList= _filter(data2, (traceData) => traceData.region_1 == region_1);
       
      let xValueList = [];
      let yValueList = [];
      let textList = [];
  
      for(let item of filteredList){	 	
         xValueList.push(item.points);
         yValueList.push(item.price);
         textList.push(item.region_1);
      }
  
      trace.push({
        x: xValueList,
        y: yValueList,
        mode: "markers",
        type: "scatter",
        text: textList,
        showlegend: true,
        name: region_1
       });
   
    }
  
  Plotly.newPlot('plotly-div', trace);
  
  /*ONE_TRACE_SMAPLE*/
  let data = {
       x: x_axis, 
      y: y_axis,
        mode: "markers",
        type: "scatter",
        text: labels,
      showlegend : true,
      name : 'ONE_TRACE_SMAPLE'
  }
  Plotly.plot('plotly-div2', [data], {}, {showSendToCloud:true});
})
