// factor = quanto vale 1 unidade, expresso na unidade base.
// Valores exatos de definição internacional, não aproximações.
export const categories = {
  length: {
    base: 'meter',
    units: {
      meter: 1,
      kilometer: 1000,
      decimeter: 0.1,
      centimeter: 0.01,
      millimeter: 0.001,
      micrometer: 1e-6,
      nanometer: 1e-9,
      mile: 1609.344,
      yard: 0.9144,
      foot: 0.3048,
      inch: 0.0254,
      nauticalMile: 1852,
      lightYear: 9.4607304725808e15
    }
  },
  mass: {
    base: 'kilogram',
    units: {
      kilogram: 1,
      gram: 0.001,
      milligram: 1e-6,
      microgram: 1e-9,
      tonne: 1000,
      pound: 0.45359237,
      ounce: 0.028349523125,
      stone: 6.35029318
    }
  },
  temperature: {
    base: 'celsius',
    affine: true,
    units: { celsius: null, fahrenheit: null, kelvin: null }
  },
  area: {
    base: 'squareMeter',
    units: {
      squareMeter: 1,
      squareKilometer: 1e6,
      squareCentimeter: 1e-4,
      squareMile: 2589988.110336,
      squareYard: 0.83612736,
      squareFoot: 0.09290304,
      squareInch: 0.00064516,
      hectare: 10000,
      acre: 4046.8564224
    }
  },
  volume: {
    base: 'liter',
    units: {
      liter: 1,
      milliliter: 0.001,
      deciliter: 0.1,
      kiloliter: 1000,
      cubicMeter: 1000,
      cubicCentimeter: 0.001,
      gallonUS: 3.785411784,
      gallonUK: 4.54609,
      quartUS: 0.946352946,
      pintUS: 0.473176473,
      fluidOunceUS: 0.0295735295625,
      cupUS: 0.2365882365,
      cupMetric: 0.25
    }
  },
  time: {
    base: 'second',
    units: {
      second: 1,
      millisecond: 0.001,
      minute: 60,
      hour: 3600,
      day: 86400,
      week: 604800,
      month30: 2592000,
      year365: 31536000
    }
  },
  pressure: {
    base: 'pascal',
    units: {
      pascal: 1,
      kilopascal: 1000,
      bar: 100000,
      millibar: 100,
      psi: 6894.757293168361,
      atmosphere: 101325,
      torr: 101325 / 760
    }
  },
  energy: {
    base: 'joule',
    units: {
      joule: 1,
      kilojoule: 1000,
      calorie: 4.184,
      kilocalorie: 4184,
      wattHour: 3600,
      kilowattHour: 3.6e6,
      electronvolt: 1.602176634e-19,
      btu: 1055.05585262,
      footPound: 1.3558179483314004
    }
  },
  speed: {
    base: 'meterPerSecond',
    units: {
      meterPerSecond: 1,
      kilometerPerHour: 1 / 3.6,
      milePerHour: 0.44704,
      footPerSecond: 0.3048,
      knot: 1852 / 3600
    }
  }
};

export const categoryKeys = Object.keys(categories);
