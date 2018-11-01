//DRAW LINES

var canvas = document.getElementById('canvas').getContext('2d'),
    drawMap = [
        {
            moveTo: [20,20],
            lineTo: [30,30],
            t: [2000]
        },
        {
            moveTo: [40,40],
            lineTo: [50,50],
            t: [2000]
        },
        {
            moveTo: [60,60],
            lineTo: [70,70],
            t: [2000]
        },
        {
            moveTo: [80,80],
            lineTo: [90,90],
            t: [2000]
        }, 
        {
            moveTo: [100,100],
            lineTo: [110,110],
            t: [2000]
        }

    
    ],
  tStart = 500;
    
drawMap.forEach(function(el, i) {
    setTimeout(function() {
        canvas.moveTo(el.moveTo[0], el.moveTo[1]);
        canvas.lineTo(el.lineTo[0], el.lineTo[1]);
        canvas.stroke();
        console.log(i);
    }, 
  //el.t
    tStart
  );
  tStart += 1000;
});

var canvas = document.getElementById('canvas').getContext('2d'),
    drawMap = [
        {
            moveTo: [1200, 500],
            lineTo: [1100, 500],
            t: [2000]
        },
        {
            moveTo: [240,240],
            lineTo: [250,250],
            t: [2000]
        },
        {
            moveTo: [260,260],
            lineTo: [270,270],
            t: [2000]
        },
        {
            moveTo: [280,280],
            lineTo: [290,290],
            t: [2000]
        }, 
        {
            moveTo: [200,200],
            lineTo: [210,210],
            t: [2000]
        }

    
    ],
  tStart = 500;
    
drawMap.forEach(function(el, i) {
    setTimeout(function() {
        canvas.moveTo(el.moveTo[0], el.moveTo[1]);
        canvas.lineTo(el.lineTo[0], el.lineTo[1]);
        canvas.stroke();
        console.log(i);
    }, 
  //el.t
    tStart
  );
  tStart += 1000;
});


var context = document.getElementById('canvas').getContext('2d');

var image = document.getElementById('image'); 
    
    image.onload = function(){
        context.drawImage(image, 750, 230);  
        image.style.display = 'none';       
    }
    image.src = 'img/brain.svg';


