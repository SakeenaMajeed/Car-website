import '@/styling/FeaturedCars.css';

const FeaturedCars = () => {
  const cars = [
    { name: 'BMW 6-Series Gran Coupe', price: '$89,395', model: 2017, mileage: '3100 Mi', hp: '240HP', transmission: 'automatic' },
    { name: 'Chevrolet Camaro WMV20', price: '$66,575', model: 2017, mileage: '3100 Mi', hp: '240HP', transmission: 'automatic' },
    { name: 'Lamborghini V520', price: '$125,250', model: 2017, mileage: '3100 Mi', hp: '240HP', transmission: 'automatic' },
    { name: 'Audi A3 Sedan', price: '$95,500', model: 2017, mileage: '3100 Mi', hp: '240HP', transmission: 'automatic' },
    { name: 'Infiniti Z5', price: '$36,850', model: 2017, mileage: '3100 Mi', hp: '240HP', transmission: 'automatic' },
    { name: 'Porsche 718 Cayman', price: '$48,500', model: 2017, mileage: '3100 Mi', hp: '240HP', transmission: 'automatic' },
    { name: 'BMW 8-Series Coupe', price: '$56,000', model: 2017, mileage: '3100 Mi', hp: '240HP', transmission: 'automatic' },
    { name: 'BMW Xseries-6', price: '$76,800', model: 2017, mileage: '3100 Mi', hp: '240HP', transmission: 'automatic' },
  ];

  return (
    <div id="featuredcars">
      <h2 className="heading">Featured Cars</h2>
      <div className="grid">
        {cars.map((car, index) => (
          <div key={index} className="card">
            {/* Static Images */}
            <img 
              src={`/images/fc${index + 1}.png`}  // Dynamically load fc1.png, fc2.png, ..., fc8.png
              alt={`Car ${index + 1}`} 
              className="image"
            />
            <div className="details">
              <p>Model: {car.model} | {car.mileage} | {car.hp} | {car.transmission}</p>
              <h3>{car.name}</h3>
              <p>{car.price}</p>
              <p className="description">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCars;
