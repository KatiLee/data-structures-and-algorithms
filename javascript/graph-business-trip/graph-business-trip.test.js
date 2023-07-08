const businessTrip = require('./index');

describe('businessTrip', () => {
  const graph = [
    ['Metroville', 'Pandora', 82],
    ['Arendelle', 'New Monstropolis', 42],
    ['New Monstropolis', 'Naboo', 73],
  ];

  it('should return the total cost of the trip when it is possible', () => {
    expect(businessTrip(graph, ['Metroville', 'Pandora'])).toBe('$82');
    expect(businessTrip(graph, ['Arendelle', 'New Monstropolis', 'Naboo'])).toBe('$115');
  });

  it('should return null when the trip is not possible', () => {
    expect(businessTrip(graph, ['Naboo', 'Pandora'])).toBeNull();
    expect(businessTrip(graph, ['Narnia', 'Arendelle', 'Naboo'])).toBeNull();
  });

  it('should return null for an empty itinerary', () => {
    expect(businessTrip(graph, [])).toBeNull();
  });
});
