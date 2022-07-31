// CONSTANTS
const FEE_PER_HOUR = 1.5;
const HOUR_IN_MIN = 60;
const DAY_IN_MIN = 60 * 24;

class ParkingTicket {
  //TYPE ANNOTATION
  clientName: string;
  vehicleType: 'car' | 'motorcycle';
  plate: string;
  parkingSpot: number;
  entryTime: number;

  constructor(
    clientName: string,
    vehicleType: 'car' | 'motorcycle',
    plate: string,
    parkingSpot: number,
    entryTime: string
  ) {
    //PROPERTIES
    this.clientName = clientName;
    this.vehicleType = vehicleType;
    this.plate = plate;
    this.parkingSpot = parkingSpot;
    this.entryTime = this.stringTimeToMinutes(entryTime);
  }

  //METHODS
  printTicketData() {
    for (let key in this) {
      if (key === 'entryTime') {
        let prop = Number(this[key]);
        console.log(this.toTimeString(prop));
      } else {
        console.log(this[key]);
      }
    }
  }

  printTimeDiff(time: string = null) {
    let now = new Date();

    let exitTime =
      time === null
        ? now.getHours() * HOUR_IN_MIN + now.getMinutes()
        : this.stringTimeToMinutes(time);

    let diffTime = this.calculateTimeDiff(exitTime);

    console.log(this.toTimeString(diffTime));
  }

  calculateTimeDiff(exitTime: number) {
    let diffTime =
      exitTime > this.entryTime
        ? exitTime - this.entryTime
        : exitTime + DAY_IN_MIN - this.entryTime;

    return diffTime;
  }

  printFeeAmountPerHour(time: string = null) {
    let now = new Date();

    let exitTime =
      time === null
        ? now.getHours() * HOUR_IN_MIN + now.getMinutes()
        : this.stringTimeToMinutes(time);

    let diffTime = this.calculateTimeDiff(exitTime);
    let fee = ((diffTime - (diffTime % 60)) / 60) * FEE_PER_HOUR;

    console.log(this.formatCurrency(fee));
  }

  // HELPER FUNCTIONS
  stringTimeToMinutes(time: string) {
    const arrTime = time.split(':');
    let timeInMinutes = Number(arrTime[0]) * HOUR_IN_MIN + Number(arrTime[1]);

    return timeInMinutes;
  }

  toTimeString(timeInMinutes: number) {
    const minutes = timeInMinutes % 60;
    const hours = (timeInMinutes - minutes) / 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(
      2,
      '0'
    )}`;
  }

  formatCurrency(amount: number) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(amount);
  }
}

//INSTANTIATING OBJECTS
const ticket1 = new ParkingTicket('Lucas', 'car', 'BRA-2E19', 15, '20:35');

ticket1.printTicketData(); // 'Lucas', 'car', 'BRA-2E19', 15, '20:35'
ticket1.printTimeDiff('1:02'); // 04:27
ticket1.printFeeAmountPerHour('1:02'); // R$ 6,00
