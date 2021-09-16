

export const PopUpEdit = props => {
  const { dataCopy, DataSetter, index, emptyPopout } = props
  console.log(props)
  const { name, city, country, employer, title, favoriteMovies } = dataCopy[index - 1];


  const onEditHandle = (e) => {
    e.preventDefault()
    const {target} = e
    const newCard = {
      id: index,
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
    DataSetter(index, newCard);
    emptyPopout()
  };

  return (
    <form action="" onSubmit={(e) => onEditHandle(e)}>
      <div id="div-form-name">
        <input type="text" name="firstName" defaultValue={name.first} />
        <input type="text" name="lastName" defaultValue={name.last} />
      </div>
      <label htmlFor="input-city">City:</label>
      <input type="text" name="city" id="input-city" defaultValue={city}/>
      <input type="text" name="country" defaultValue={country} />
      <input type="text" name="employer" defaultValue={employer} />
      <input type="text" name="title" defaultValue={title} />
      <div id="div-form-movie">
        <input type="text" name="movie1" defaultValue={favoriteMovies[0]}/>
        <input type="text" name="movie2" defaultValue={favoriteMovies[1]}/>
        <input type="text" name="movie3" defaultValue={favoriteMovies[2]}/>
      </div>
      <button id="button-form-submit">
        Submit
      </button>
    </form>
  );

  
};

