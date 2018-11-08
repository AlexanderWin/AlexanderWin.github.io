

var canvas = document.getElementById('canvas').getContext('2d'), lines = [
[100, 120, 110, 120, 100, 1],
[120, 120, 130, 120, 200, 1],
[140, 120, 150, 120, 300, 1],
[160, 120, 170, 120, 400, 1],
[180, 120, 190, 120, 500, 1],
[200, 120, 210, 120, 600, 1],
[220, 120, 230, 120, 700, 1],
[240, 110, 250, 100, 800, 1],
[260, 90, 270, 80, 900, 1],
[270, 50, 270, 65, 1000, 1],
[270, 25, 270, 40, 1100, 1]

];
lines.forEach(array => {
    setTimeout(() => {        
        canvas.globalAlpha = array[5];
        canvas.beginPath();        
        canvas.moveTo(array[0], array[1]);
        canvas.lineTo(array[2], array[3]);              
        canvas.stroke();
    }, array[4]);
});

// LEFT TOP

var canvas_2 = document.getElementById('canvas_2').getContext('2d'), lines = [
[220, 120, 230, 120, 100, 1],     
[200, 120, 210, 120, 200, 1], 
[180, 120, 190, 120, 300, 1],
[160, 120, 170, 120, 400, 1],     
[140, 120, 150, 120, 500, 1],  
[120, 120, 130, 120, 600, 1],     
[100, 120, 110, 120, 700, 1],    
[80, 100, 90, 110, 800, 1],       
[60, 80, 70, 90, 900, 1],
[60, 55, 60, 70, 1000, 1],
[60, 30, 60, 45, 1100, 1]

];
lines.forEach(array => {
    setTimeout(() => {        
        canvas_2.globalAlpha = array[5];
        canvas_2.beginPath();        
        canvas_2.moveTo(array[0], array[1]);
        canvas_2.lineTo(array[2], array[3]);              
        canvas_2.stroke();
    }, array[4]);
});

// LEFT BOT

var canvas_3 = document.getElementById('canvas_3').getContext('2d'), lines = [
[220, 33, 230, 33, 100, 1],     
[200, 33, 210, 33, 200, 1], 
[180, 33, 190, 33, 300, 1],
[160, 33, 170, 33, 400, 1],     
[140, 33, 150, 33, 500, 1],  
[120, 33, 130, 33, 600, 1],     
[100, 33, 110, 33, 700, 1],    
[80, 50, 90, 40, 800, 1],       
[60, 70, 70, 60, 900, 1],
[60, 95, 60, 80, 1000, 1],
[60, 120, 60, 105, 1100, 1]

];
lines.forEach(array => {
    setTimeout(() => {        
        canvas_3.globalAlpha = array[5];
        canvas_3.beginPath();        
        canvas_3.moveTo(array[0], array[1]);
        canvas_3.lineTo(array[2], array[3]);              
        canvas_3.stroke();
    }, array[4]);
});

// RIGHT BOT

var canvas_4 = document.getElementById('canvas_4').getContext('2d'), lines = [
[100, 33, 110, 33, 100, 1],
[120, 33, 130, 33, 200, 1],
[140, 33, 150, 33, 300, 1],
[160, 33, 170, 33, 400, 1],
[180, 33, 190, 33, 500, 1],
[200, 33, 210, 33, 600, 1],
[220, 33, 230, 33, 700, 1],
[240, 40, 250, 50, 800, 1],
[260, 60, 270, 70, 900, 1],
[270, 80, 270, 95, 1000, 1],
[270, 105, 270, 120, 1100, 1]

];
lines.forEach(array => {
    setTimeout(() => {        
        canvas_4.globalAlpha = array[5];
        canvas_4.beginPath();        
        canvas_4.moveTo(array[0], array[1]);
        canvas_4.lineTo(array[2], array[3]);              
        canvas_4.stroke();
    }, array[4]);
});
