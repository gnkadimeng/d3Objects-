const data = [
    {name: "simon", score: 80},
    {name: "Mary", score: 90},
    {name: "Jack", score: 60},
    {name: "Ryn", score: 70}
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

//scale for the x / y axis bar chart is inside the svg 

const x = d3.scaleBand()
    .domain(d3.range(data.length))
    .range([margin.left, width - margin.right])
    .padding(0.1);

const y = d3.scaleLinear()
    .domain([0, 100]) // the score marks are between 0 & 100
    .range([height - margin.bottom, margin.top])

    // chart barriers 

    svg
        .append('g')
        .attr('fill', 'royalblue')
        .selectAll('rect')
        .data(data.sort((a,b) => d3.descending(a.score, b.score)))
        .join('rect')
            .attr('x', (d,i) => x(i))
            .attr('y', (d) => y(d.score))
            .attr('height', d => y(0) - y(d.score))
            .attr('width', x.bandwidth())
            .attr('class','rectangle' )

    function xAxis(g){
        g.attr('transform', `translate(0, ${height - margin.bottom})`)
        .call(d3.axisBottom(x).tickFormat(i => data[i].name))
        .attr('font-size', '20px')

    };

    function yAxis(g){
        g.attr('transform', `translate(${margin.left}, 0)`)
        .call(d3.axisLeft(y).ticks(null, data.format))

    }
    
    svg.append('g').call(xAxis); //append x labs 
    svg.append('g').call(yAxis); //append x labs 


    //drawing barries 
    svg.node();


