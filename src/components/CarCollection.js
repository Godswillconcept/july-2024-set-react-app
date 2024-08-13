const carCollection = [
  { id: 1, make: 'Toyota', model: 'Camry', year:'2022' },
  { id: 2, make: 'Honda', model: 'Accord',  year:'2012' },
  { id: 3, make: 'Ford', model: 'Mustang', year:'2021' },
];

const Garage = () => {
  return (
    <div>
      <h2>Car Collection</h2>
      <ol>
        {carCollection.map(cary => (
          <li key={cary.id}>
            {cary.make} {cary.model} {cary.year} version
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Garage;
