function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  for (let i of cars) {
    if (i.available == true) {
      result.push(i);
    }
  }

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
