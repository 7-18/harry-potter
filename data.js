export default class Api {
  getCharacter = async (id) => {
    return await fetch(
      `https://fedeperin-harry-potter-api.herokuapp.com/personajes/${id}`
    )
      .then((response) => response.json())
      .then((data) => data);
  };
}
