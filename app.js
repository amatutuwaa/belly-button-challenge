//Source URL
let url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

//Selector
let dropdown = d3.select("#selDataset");

//D3.js promise
d3.json(url).then(function(data) {
  let dropdownNames = data.names;
  dropdownNames.forEach(function(d) {
      dropdown.append("option").text(d).property("option", d)
  });
  let firstName = dropdownNames[0];
  baseballCard(firstName);
  charts(firstName);
  bubble(firstName);
  gauge(firstName);
});

//Bubble Chart
function bubble(input) {
  d3.json(url).then(function(data) {
    let sampleBubble = data.samples;
    let filteredBubble = sampleBubble.filter(function(d) {
      return d.id == input;
  });

    let firstBubble = filteredBubble[0];
    let layoutBubble = {
      title: "Belly Button OTUs",
      xaxis: {title: "OTU_ID"},
      paper_bgcolor: 'white',
      plot_bgcolor: 'white'

    };
    let traceBubble = {
      x: firstBubble.otu_ids,
      y: firstBubble.sample_values,
      text: firstBubble.otu_labels,
      mode: "markers",
      marker: {
        size: firstBubble.sample_values,
        color: firstBubble.otu_ids,
        colorscale: "Viridis"
      }
    }
    Plotly.newPlot("bubble", [traceBubble], layoutBubble);
  });
};

//Baseball Card
function baseballCard(input){
  d3.json(url).then(function(data) {
    let metaInfo = data.metadata;
    let filtered = metaInfo.filter(function(sample){
      return sample.id == input
    });
    let firstFiltered = filtered[0];
    card = d3.select("#sample-metadata").html("");
    Object.entries(firstFiltered).map(function([key, value]) {
       card.append("h5").text(`${key}: ${value}`);
     });
  });
};

//Chart Updater
function optionChanged(newInput) {
  baseballCard(newInput);
  charts(newInput);
  bubble(newInput);
  gauge(newInput)
}

//Bar Chart
function charts(input) {
  d3.json(url).then(function(data) {
    let sampleChart = data.samples;
    let filteredChart = sampleChart.filter(function(d) {
      return d.id == input;
  });
    let firstFiltered = filteredChart[0];
    let layout = {
      title: "Top 10 OTUs Present",
      paper_bgcolor: 'white',
      plot_bgcolor: 'white',
  };
    let trace1 = {
      orientation: "h",
      x: firstFiltered.sample_values.slice(0,10).reverse(),
      y: firstFiltered.otu_ids.slice(0,10).map(function(id) {
        return `OTU ${id}`}).reverse(),
      text: firstFiltered.otu_labels.slice(0,10).reverse(),
      type: "bar"
    };
    Plotly.newPlot('bar', [trace1], layout);
    });
  };

  //Gauge Chart
function gauge(input) {
  d3.json(url).then(function(data) {
      let sampleGauge = data.metadata;
      let filteredGuage = sampleGauge.filter(function(d) {
          return d.id == input;
      });
      let firstGauge = filteredGuage[0];
      console.log(firstGauge.wfreq)
      const dictGauge = [
          {
          type: "indicator",
          mode: "gauge+number+delta",
          value: firstGauge.wfreq,
          title: { text: "Wash Frequency", font: {size: 22}},
          delta: { reference: 2, increasing: {color: "black"}},
          gauge: {
              axis: {range: [null, 9], tickwidth: 1, tickcolor: "black"},
              bar: {color: "darkGray"},
              bgcolor: "#4cc9f0",
              bordercolor: "black",
              steps: [
                  { range: [0, 1], color: "#DDBEA9" },
                  { range: [1, 2], color: "#A08060" },
                  { range: [2, 3], color: "#8B7355" },
                  { range: [3, 4], color: "#F5DEB3" },
                  { range: [4, 5], color: "#F0E68C" },
                  { range: [5, 6], color: "#C2B280" },
                  { range: [6, 7], color: "#E6D4A8" },
                  { range: [7, 8], color: "#E0CDA9" },
                  { range: [8, 9], color: "#F5F5DC" }
    
              ],
              
          }
          }
      
      ];
      var layoutGauge = {
          width: 400,
          height: 280,
          margin: { t: 25, r: 25, l: 25, b: 25 },
          paper_bgcolor: "white",
          font: { color: "#C2B280", family: "Arial" }
        };
      Plotly.newPlot("gauge", dictGauge,layoutGauge)
  })
}
