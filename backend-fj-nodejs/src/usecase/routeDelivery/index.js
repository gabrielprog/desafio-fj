class DistanceCalculator {
    static calculateDistance(point1, point2) {
      const deltaX = point1.coordenada_x - point2.coordenada_x;
      const deltaY = point1.coordenada_y - point2.coordenada_y;
      return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    }
  
    static compareDistance(a, b) {
      const referencePoint = {
        coordenada_x: 0,
        coordenada_y: 0
      };
  
      const distanceA = DistanceCalculator.calculateDistance(a, referencePoint);
      const distanceB = DistanceCalculator.calculateDistance(b, referencePoint);
  
      return distanceA - distanceB;
    }
  
    static sortCitiesByDistance(cityList) {
      return cityList.slice().sort(DistanceCalculator.compareDistance);
    }
s}
  
export default DistanceCalculator;
  