# belly-button-challenge
https://amatutuwaa.github.io/belly-button-challenge/
This project creates an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels in JSON format.

<img width="1210" alt="Screenshot 2023-05-15 at 1 30 52 AM" src="https://github.com/amatutuwaa/belly-button-challenge/assets/114604829/b50f0873-e13a-4bb3-bfbd-2a8823156cc9">

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

Demographics information is dynamically populated based upon a user-selected test subject ID. A bar chart, bubble chart and a bonus gauge chart also update once the ID is changed. Code has been written using Plotly, JavaScript, HTML, CSS, and D3.js.

In step 1 of the project, I create a **horizontal bar chart** with a **dropdown menu** to display the top 10 OTUs found in that individual.
  - Using sample_values as the values for the bar chart.
  - Using otu_ids as the labels for the bar chart.
  - Using otu_labels as the hovertext for the chart.

<img width="650" alt="Screenshot 2023-05-15 at 1 23 08 AM" src="https://github.com/amatutuwaa/belly-button-challenge/assets/114604829/56970e8c-3ecb-4dd0-b2df-2ad2eccc477f">


In step 2 of the project I create a bubble chart that displays each sample.
  - Using otu_ids for the x values.
  - Using sample_values for the y values.
  - Using sample_values for the marker size.
  - Using otu_ids for the marker colors.
  - Using otu_labels for the text values.

<img width="1168" alt="Screenshot 2023-05-15 at 1 25 54 AM" src="https://github.com/amatutuwaa/belly-button-challenge/assets/114604829/3dac00f8-1866-4b91-b71d-765297113cad">

In step 3 I display the sample metadata, i.e., an individual's demographic information as well as each key-value pair from the metadata JSON object.

<img width="220" alt="Screenshot 2023-05-15 at 1 27 52 AM" src="https://github.com/amatutuwaa/belly-button-challenge/assets/114604829/c33fef38-8b6e-4120-8992-6619f763efa6">

In step 4 I ensure an update all the plots when a new sample is selected will be made.

Finally I adapted the Gauge Chart to plot the weekly washing frequency of the individual.

<img width="426" alt="Screenshot 2023-05-15 at 1 30 42 AM" src="https://github.com/amatutuwaa/belly-button-challenge/assets/114604829/780c9094-ca4b-40b6-9b46-9761e08ec525">

Live dashboard site: https://amatutuwaa.github.io/belly-button-challenge/
