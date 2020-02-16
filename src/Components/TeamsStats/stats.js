import statsData from '../../Data/stats';

const sortTeams = () => {};

export default sortTeams;

export const x = () => {
	let s = [];
	let newObj = new Object();
	const j2 = statsData.filter((p) => p.Session === 'SH - 3');
	const year = j2.filter((p) => p.Year === '2015');
	year.forEach(function(p) {
		if (!newObj[p.Session]) {
			newObj[p.Session] = {};
			newObj[p.Session]['Session'] = 'SH - 3';
			newObj[p.Session]['Year'] = '2015';
			newObj[p.Session]['PA'] = 0;
			newObj[p.Session]['AB'] = 0;
			newObj[p.Session]['Hits'] = 0;
			newObj[p.Session]['S'] = 0;
			newObj[p.Session]['D'] = 0;
			newObj[p.Session]['T'] = 0;
			newObj[p.Session]['HR'] = 0;
			newObj[p.Session]['BB'] = 0;
			newObj[p.Session]['SF'] = 0;
			newObj[p.Session]['FC'] = 0;
			newObj[p.Session]['K'] = 0;
			newObj[p.Session]['RBI'] = 0;
			newObj[p.Session]['R'] = 0;
			newObj[p.Session]['BARISP'] = 0;
			newObj[p.Session]['LOB'] = 0;
			newObj[p.Session]['TWOOUTRBI'] = 0;
		}
		newObj[p.Session]['PA'] += p.PA;
		newObj[p.Session]['AB'] += p.AB;
		newObj[p.Session]['Hits'] += p.Hits;
		newObj[p.Session]['S'] += p.S;
		newObj[p.Session]['D'] += p.D;
		newObj[p.Session]['T'] += p.T;
		newObj[p.Session]['HR'] += p.HR;
		newObj[p.Session]['BB'] += p.BB;
		newObj[p.Session]['SF'] += p.SF;
		newObj[p.Session]['FC'] += p.FC;
		newObj[p.Session]['K'] += p.K;
		newObj[p.Session]['RBI'] += p.RBI;
		newObj[p.Session]['R'] += p.R;
		newObj[p.Session]['BARISP'] += p.BARISP;
		newObj[p.Session]['LOB'] += p.LOB;
		newObj[p.Session]['TWOOUTRBI'] += p.TWOOUTRBI;
	});

	s.push(newObj);

	//console.log(newObj);
	console.log(s);
	return s;
};

// var animals = [{title: 'cat', optionid: 7, points: 1 },
// {title: 'cat', optionid: 7, points: 3 },
// {title: 'cat', optionid: 7, points: 1 },
// {title: 'dog', optionid: 8, points: 3 },
// {title: 'dog', optionid: 8, points: 2 },
// {title: 'dog', optionid: 8, points: 3 },
// {title: 'pig', optionid: 9, points: 2 },
// {title: 'pig', optionid: 9, points: 1 },
// {title: 'pig', optionid: 9, points: 1 }];

// // create new object to store results in
// newObj = {};

// // loop through animal objects
// animals.forEach(function(animal){
//  // check if animal type has already been added to newObj
//  if(!newObj[animal.title]){
//   // If it is the first time seeing this animal type
//   // we need to add title and points to prevent errors
//   newObj[animal.title] = {};
//   newObj[animal.title]['points'] = 0;
//  }
//  // add animal points to newObj for that animal type.
//  newObj[animal.title]['points'] += animal.points
// })
// console.log(newObj)
