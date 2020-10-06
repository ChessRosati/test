var regions = ['Australia',
    'South Africa',
    'Chile',
    'Italy',
    'France',
    'Israel',
    'Spain',
    'New Zealand',
    'Portugal',
    'Morocco',
    'India',
    'Austria',
    'Argentina',
    'Greece',
    'Canada',
    'Turkey',
    'Bulgaria',
    'Hungary',
    'Mexico',
    ]

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
