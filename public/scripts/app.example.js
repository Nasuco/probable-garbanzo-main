class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
  }

  async init() {
    await this.load();

    // Register click listener
    this.clearButton.onclick = this.clear;
    this.loadButton.onclick = this.run;
  }

  run = () => {
    let dateTime = this.tgl.value + "T" + this.wkt.value;
    let formdate = Date.parse(dateTime);
    let waktu = Date.parse(car.availableAt);
    Car.list.forEach((car) => {
      let penumpang = this.penumpang.value;
      let driver = this.sopir.value;
      if (driver == "true") {
        driver = true;
      } else {
        driver = "false";
      }

      if (
        car.available == driver &&
        waktu >= formdate &&
        car.capacity >= penumpang
      ) {
        const node = document.createElement("div");
        node.innerHTML = car.render();
        this.carContainerElement.appendChild(node);
      }
    });
  };

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
