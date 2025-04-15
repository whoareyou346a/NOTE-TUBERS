function drawClock() {
    const canvas = document.getElementById("clock");
    const ctx = canvas.getContext("2d");
  
    function updateClock() {
      const now = new Date();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      const radius = canvas.width / 2;
      ctx.translate(radius, radius);
      ctx.beginPath();
      ctx.arc(0, 0, radius - 5, 0, 2 * Math.PI);
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 5;
      ctx.stroke();
  
      const hour = now.getHours() % 12;
      const minute = now.getMinutes();
      const second = now.getSeconds();
  
      drawHand((hour * 30) + (minute / 2), radius * 0.5, 6);
      drawHand(minute * 6, radius * 0.75, 4);
      drawHand(second * 6, radius * 0.9, 2, "red");
  
      ctx.translate(-radius, -radius);
    }
  
    function drawHand(angle, length, width, color = "white") {
      ctx.beginPath();
      ctx.lineWidth = width;
      ctx.strokeStyle = color;
      ctx.moveTo(0, 0);
      ctx.rotate((angle * Math.PI) / 180);
      ctx.lineTo(0, -length);
      ctx.stroke();
      ctx.rotate(-(angle * Math.PI) / 180);
    }
  
    setInterval(updateClock, 1000);
  }
  