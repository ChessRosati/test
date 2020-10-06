var regions = d3.map("cleaned_wine_v2(syrah).csv", function(d){return(d.region_1)}).keys()

Plotly.d3.csv("cleaned_wine_v2(syrah).csv", (err, rows) => {
  var data = regions.map(y => {
    var d = rows.filter(r => r.region_1 === y)
    
    return {
      type: 'scatter',
      name: y,
      x: d.map(r => r.points),
      y: d.map(r => r.price)
    }
  })
  
  Plotly.newPlot('graph', data)
})
