//DRAW LINES RIGHT UPPER

var canvas = document.getElementById('canvas').getContext('2d'),
    drawMap = [
        {
            moveTo: [1200,380],
            lineTo: [1220,380],
            t: [2000]
        },
        {
            moveTo: [1230,380],
            lineTo: [1250,380],
            t: [2000]
        },
        {
            moveTo: [1260,380],
            lineTo: [1280,380],
            t: [2000]
        },
        {
            moveTo: [1290,380],
            lineTo: [1310,380],
            t: [2000]
        }, 
        {
            moveTo: [1320,370],
            lineTo: [1330,360],
            t: [2000]
        },    
        {
            moveTo: [1340,350],
            lineTo: [1350,340],
            t: [2000]
        },
        {
            moveTo: [1360,330],
            lineTo: [1370,320],
            t: [2000]
        }, 
        {
            moveTo: [1380,310],
            lineTo: [1390,300],
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
  tStart += 120;
});

//DRAW LINES RIGHT LOWER

var canvas = document.getElementById('canvas').getContext('2d'),
    drawMap = [
        {
            moveTo: [1200,500],
            lineTo: [1220,500],
            t: [2000]
        },
        {
            moveTo: [1230,500],
            lineTo: [1250,500],
            t: [2000]
        },
        {
            moveTo: [1260,500],
            lineTo: [1280,500],
            t: [2000]
        },
        {
            moveTo: [1290,500],
            lineTo: [1310,500],
            t: [2000]
        }, 
        {
            moveTo: [1320,510],
            lineTo: [1330,520],
            t: [2000]
        },    
        {
            moveTo: [1340,530],
            lineTo: [1350,540],
            t: [2000]
        },
        {
            moveTo: [1360,550],
            lineTo: [1370,560],
            t: [2000]
        }, 
        {
            moveTo: [1380,570],
            lineTo: [1390,580],
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
  tStart += 120;
});

//DRAWING LINES LEFT UPPER

var canvas = document.getElementById('canvas').getContext('2d'),
    drawMap = [
        {
            moveTo: [680,380],
            lineTo: [700,380],
            t: [2000]
        },
        {
            moveTo: [670,380],
            lineTo: [650,380],
            t: [2000]
        },
        {
            moveTo: [640,380],
            lineTo: [620,380],
            t: [2000]
        },
        {
            moveTo: [610,380],
            lineTo: [590,380],
            t: [2000]
        }, 
        {
            moveTo: [580,370],
            lineTo: [570,360],
            t: [2000]
        },    
        {
            moveTo: [560,350],
            lineTo: [550,340],
            t: [2000]
        },
        {
            moveTo: [540,330],
            lineTo: [530,320],
            t: [2000]
        }, 
        {
            moveTo: [520,310],
            lineTo: [510,300],
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
  tStart += 120;
});

//DRAWING LINES LEFT LOWER

var canvas = document.getElementById('canvas').getContext('2d'),
    drawMap = [
        {
            moveTo: [680,500],
            lineTo: [700,500],
            t: [2000]
        },
        {
            moveTo: [670,500],
            lineTo: [650,500],
            t: [2000]
        },
        {
            moveTo: [640,500],
            lineTo: [620,500],
            t: [2000]
        },
        {
            moveTo: [610,500],
            lineTo: [590,500],
            t: [2000]
        }, 
        {
            moveTo: [580,510],
            lineTo: [570,520],
            t: [2000]
        },    
        {
            moveTo: [560,530],
            lineTo: [550,540],
            t: [2000]
        },
        {
            moveTo: [540,550],
            lineTo: [530,560],
            t: [2000]
        }, 
        {
            moveTo: [520,570],
            lineTo: [510,580],
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
  tStart += 120;
});








// INSERTING IMAGE IN CANVAS 

var context = document.getElementById('canvas').getContext('2d');

var image = document.getElementById('image'); 
    
    image.onload = function(){
        context.drawImage(image, 750, 230);  
        image.style.display = 'none';       
    }
    image.src = 'img/brain.svg';




