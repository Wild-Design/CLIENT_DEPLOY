import { getCurrentUser } from "../store/slices/users/index.js";

export function getUser(dispatch, email) {
  // fetch(`http://localhost:3001/users/${email}`)
  fetch(`https://wildapi.smag.ar/${email}`)
    .then((response) => response.json())
    .then((response) => dispatch(getCurrentUser(response)))

    .catch((error) => {
      console.log(error);
    });
}
