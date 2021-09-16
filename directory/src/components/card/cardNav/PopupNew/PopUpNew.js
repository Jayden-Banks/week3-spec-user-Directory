export function PopUpNew(props) {
  const { emptyPopout, DataSetter, dataCopyLength } = props

  const onNewHandle = (e) => {
    e.preventDefault()
    
    const {target} = e
    const newCard = {
      id: (dataCopyLength() + 1), //index
      name: { first: target.firstName.value, last: target.lastName.value },
      city: target.city.value,
      country: target.country.value,
      employer: target.employer.value,
      title: target.title.value,
      favoriteMovies: [
        target.movie1.value,
        target.movie2.value,
        target.movie3.value,
      ]
    }
    DataSetter(dataCopyLength + 1, newCard);
    emptyPopout()
  };
  return (
    <form action="" onSubmit={(e) => onNewHandle(e)}>
      <div id="div-form-name">
        <input type="text" name="firstName" placeholder="name.first" />
        <input type="text" name="lastName" placeholder="name.last" />
      </div>
      <label htmlFor="input-city">City:</label>
      <input type="text" name="city" id="input-city" placeholder="city" />
      <input type="text" name="country" placeholder="country" />
      <input type="text" name="employer" placeholder="employer" />
      <input type="text" name="title" placeholder="title" />
      <div id="div-form-movie">
        <input type="text" name="movie1" placeholder="favoriteMovie 1" />
        <input type="text" name="movie2" placeholder="favoriteMovie 2" />
        <input type="text" name="movie3" placeholder="favoriteMovie 3" />
      </div>
      <button id="button-form-submit">Submit</button>
    </form>
  );
}
