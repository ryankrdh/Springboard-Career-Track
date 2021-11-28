// async function getData() {
//   const response = axios.get('https://swapi.co/api/planets/');
//   const { next, results } = response.data;
//   console.log(next);
//   for (let planet of results) {
//     console.log(planet.name);
//   }
//   const response2 = await axios.get(next);
//   //   const { results } = response.data;
//   const results2 = response2.data.results);
//   for (let planet of results) {
//     console.log(planet.name);
//   }
// }

// getData();
// console.log('I happen after getData()');

// ROCKET EXAMPLE --------------------------------------

// async function getLaunches() {
//   const res = await axios.get(
//     'https://api.spacexdata.com/v3/launches/upcoming'
//   );
//   renderLaunches(res.data);
//   //   console.log(res.data);
// }

// function renderLaunches(launches) {
//   const ul = document.querySelector('#launches');
//   for (let launch of launches) {
//     ul.append(makeLaunchLI(launch));
//     // console.log(launch.mission_name);
//     // console.log(launch.rocket.rocket_name);
//   }
// }

// function makeLaunchLI(launch) {
//   const newLI = document.createElement('LI');
//   const mission = document.createElement('B');
//   // newLI.innerText = launch.mission_name;
//   mission.innerText = launch.mission_name;
//   newLI.append(mission);
//   newLI.innerHTML += ` - ${launch.rocket.rocket_name}`;
//   return newLI;
// }

// document.querySelector;

// DOG EXAMPLE --------------------------------------

/*
get the random categories first

state: the events that will happen. 
default states: ?

looping to create the table. this can determine the state of the box.

transform the data 
*/

// AXIOS POST EXAMPLE ---------------------------------

async function getUsers() {
  const res = await axios.get('https://reqres.in');
}
