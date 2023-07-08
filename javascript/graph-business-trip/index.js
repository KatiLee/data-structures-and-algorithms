function businessTrip(graph, itinerary) {
    const routes = {};
  
    for (const [city1, city2, cost] of graph) {
      if (!routes[city1]) {
        routes[city1] = {};
      }
      routes[city1][city2] = cost;
    }
  
    let totalCost = 0;
    for (let i = 0; i < itinerary.length - 1; i++) {
      const currentCity = itinerary[i];
      const nextCity = itinerary[i + 1];
  
      if (routes[currentCity] && routes[currentCity][nextCity]) {
        totalCost += routes[currentCity][nextCity];
      } else {

        return null;
      }
    }
  
    return itinerary.length > 0 ? `$${totalCost}` : null;
  }
  
  module.exports = businessTrip;
  