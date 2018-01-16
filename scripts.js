let animal = {}

animal.username = 'Barney';
animal['tagline'] = 'A sassy beagle without good manners.';

let noises = []
animal['noises'] = noises;


let count = 0;
for (let key in animal) {
    count++;

    if (key === 'username') {
        console.log('Hi, my name is ' + animal[key])
    } else if (key === 'tagline') {
        console.log('I like to say: ' + animal[key])
    }
};