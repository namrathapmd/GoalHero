// import axios from "axios";

// const GET_HERO = "GET_HERO";

// const defaultHero = {};

// const getHero = (hero) => ({ type: GET_HERO, hero });

// export const fetchHero = (heroId) => async (dispatch) => {
//   try {
//     const { data } = await axios.get(`/api/users/${heroId}`);
//     dispatch(getHero(data));
//   } catch (error) {
//     console.log("failed to get api/hero/:id");
//   }
// };

// export default function (state = defaultHero, action) {
//   switch (action.type) {
//     case GET_HERO:
//       return action.hero;
//   }
// }