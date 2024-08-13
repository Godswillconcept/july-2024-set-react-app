const Conditional = () => {
  const d = new Date();
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  const day = d.getDay() - 1;

  let result;
  switch (day) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      result = <p key={day}>{weekdays[day]}</p>;
      break;

    default:
      result = <p>Day range not found</p>;
      break;
  }
  return result;
};

export default Conditional;
