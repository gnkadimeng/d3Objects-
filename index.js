const data = [
    {name: "simon", score: 80},
    {name: "Mary", score: 90},
    {name: "Jack", score: 60}
];

//SVG thats going to hold the char 

const width = 800;
const height = 400; 
const margin = {top: 50, bottom: 50, left:50, right:50};

const svg = d3.select('#d3-container')
    .append('svg')
    .attr('height', height - margin.top - margin.bottom)
    .attr('width', width - margin.left - margin.right)
    .attr('viewBox', [0,0,width, height]);

//scale for the 


