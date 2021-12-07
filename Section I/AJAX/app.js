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

// async function getUsers() {
//   const res = await axios.get('https://reqres.in/api/users');
//   console.log(res);
// }

// async function createUser() {
//   const res = await axios.post('https://reqres.in/api/users', {
//     username: 'ButtersTheChicken',
//     email: 'butters@gmail.com',
//     age: 1,
//   });
//   console.log(res);
// }
// // getUsers();
// createUser();

// CREATING USER WITH TOKEN --------------------------------

async function getUsers(token) {
  const res = await axios.get(
    'https://hack-or-snooze.herokuapp.com/users?skip=0&limit=10',
    { params: { token } }
  );
  console.log(res);
}

getUsers();

async function signUp(username, password, name) {
  const res = await axios.post(
    'https://hack-or-snooze-v3.herokuapp.com/users',
    {
      user: { name, username, password },
    }
  );
  console.log(res);
}

async function login(username, password) {
  const res = await axios.post(
    'https://hack-or-snooze-v3.herokuapp.com/users',
    {
      user: { username, password },
    }
  );
  console.log(res);
  return res.data.token;
}

async function getUsersWithAuth() {
  const token = await login('butterschicken', '23412432');
  getUsers(token);
}

async function createStory() {
  const token = await login('butterschicken', '23412432');
  const newStory = {
    token,
    story: {
      author: 'Butters',
      title: 'BokBokBok',
      url: 'http://chickens4lyfe.com',
    },
  };
  const res = await axios.post(
    'https://hack-or-snooze-v3.herokuapp.com/users',
    newStory
  );
  console.log(res);
}

signUp('butterschicken', '23412432', 'butters the chicken');
getUsersWithAuth();
// login('butterschicken', '23412432');
