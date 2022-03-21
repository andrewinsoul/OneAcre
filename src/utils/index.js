/**
 * @description - checks if the area of a farmland can be calculated
 * @param {[{latitude: Number, longitude: Number}]} coordinates - coordinates of farmland
 * @param {Number} precision - precision in calculating distance
 * @returns {Boolean} - determines if the size of the farmland can be calculated
 */
export const checkIfAreaCanBeCalculated = (coordinates, precision = 0.01) => {
  const firstPoint = coordinates[0];
  const lastPoint = coordinates.slice(-1)[0];
  const x1 = firstPoint.latitude;
  const y1 = firstPoint.longitude;
  const x2 = lastPoint.latitude;
  const y2 = lastPoint.longitude;
  const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  if (distance > precision) {
    return false;
  }
  return true;
};

function calculateYSegment(latitudeRef, latitude, circumference) {
  return ((latitude - latitudeRef) * circumference) / 360.0;
}

function calculateXSegment(longitudeRef, longitude, latitude, circumference) {
  return (
    ((longitude - longitudeRef) *
      circumference *
      Math.cos(latitude * (Math.PI / 180))) /
    360.0
  );
}

function calculateAreaInAcre(x1, x2, y1, y2) {
  return (y1 * x2 - x1 * y2) / 2 / 4047;
}

/**
 * @description - computes the area or size of the farmland
 * @param {[{latitude: Number, longitude: Number}]} coordinates - list of farm coordinates
 * @returns {Number} - area or size of the farmland
 */
export const calculateSizeOfLand = coordinates => {
  const newCords = {...coordinates};
  newCords[newCords.length - 1] = newCords[0];
  let radius = 6371000;

  const diameter = radius * 2;
  const circumference = diameter * Math.PI;
  const listY = [];
  const listX = [];
  const listArea = [];
  // calculate segment x and y in degrees for each point

  const latitudeRef = newCords[0].latitude;
  const longitudeRef = newCords[0].longitude;
  for (let i = 1; i < newCords.length; i++) {
    let latitude = newCords[i].latitude;
    let longitude = newCords[i].longitude;
    listY.push(calculateYSegment(latitudeRef, latitude, circumference));

    listX.push(
      calculateXSegment(longitudeRef, longitude, latitude, circumference),
    );
  }

  // calculate areas for each triangle segment
  for (let i = 1; i < listX.length; i++) {
    let x1 = listX[i - 1];
    let y1 = listY[i - 1];
    let x2 = listX[i];
    let y2 = listY[i];
    listArea.push(calculateAreaInAcre(x1, x2, y1, y2));
  }

  // sum areas of all triangle segments
  let areasSum = 0;
  listArea.forEach(area => (areasSum = areasSum + area));

  // get absolute value of area, it can't be negative
  let areaCalc = Math.abs(areasSum); // Math.sqrt(areasSum * areasSum);
  return areaCalc;
};

/**
 * @description - computes the area or size of the farmland
 * @param {[{latitude: Number, longitude: Number}]} coordinates - list of farm coordinates
 * @returns {{latitude: Number, longitude: Number}} - return cordinate of the center of farmland
 */
export const calculateFarmLandCenter = coordinates => {
  const x = coordinates.map(item => item.latitude);
  const y = coordinates.map(item => item.longitude);
  const cx = (Math.min(...x) + Math.max(...x)) / 2;
  const cy = (Math.min(...y) + Math.max(...y)) / 2;
  return {latitude: cx, longitude: cy};
};
