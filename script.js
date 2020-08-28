   function setDate(){
       const secondHand = document.querySelector('.seconds-hand');
       const minuteHand = document.querySelector('.minute-hand');
       const hourHand = document.querySelector('.hour-hand');

      const now = new Date();
      const second = now.getSeconds();
      const secondsDegree = ((second/60) *360)+90; 
      secondHand.style.transform=`rotate(${secondsDegree}deg)`;

      const minutes= now.getMinutes();
      const minutesDegree = ((minutes/60)*360)+90;
      minuteHand.style.transform = `rotate(${minutesDegree}deg)`;

      const Hours = now.getHours();
      const hoursDegree = ((Hours/12)*360) +90;
      hourHand.style.transform =`rotate(${hoursDegree}deg)`;
   }
   setInterval(setDate,1000);