class CountdownTimer {
  constructor(endDate) {
    this.endDate = endDate;
    this.intervalId = null;
  }

  start() {
    this.intervalId = setInterval(() => {
      const currentDate = new Date();
      const differenceInMs = this.endDate - currentDate;
      if (differenceInMs < 0) {
        clearInterval(this.intervalId);
        console.log('Countdown complete!');
        return;
      }

      const days = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
      const hours = Math.floor((differenceInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((differenceInMs % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((differenceInMs % (1000 * 60)) / 1000);

      console.log(`${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`);
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
  }
}

// Example usage
const endDate = new Date('January 21, 2023 16:00:00 GMT+0300');
const timer = new CountdownTimer(endDate);
timer.start();
