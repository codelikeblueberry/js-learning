// object literals

const heros = {
    name:"superman",
    comic:"dc",
    movies:3,
    release_year : [2001,2005,1988,2023] 
}


// ACCESS
// console.log(typeof heros.name);
// console.log(heros['name full']);
// console.log(heros.release_year);

// BUILT-IN FUNCTIONS

// 1. assign
// const hories2 = {
//     director : "holland",
//     duration : "2HRS"
// }

// const newheroes=Object.assign({2:"two"},heros,hories2)
// console.log(newheroes);

// const newheroes = {...heros,...hories2}
// console.log(newheroes);

// 2. hasOwnProperty

// const json = {
//     "name": "18-07-2022",
//     "start_date": "2022-07-18T09:00:00.000+01:00",
//     "end_date": "2022-07-24T23:59:59.000+01:00",
//     "discount_metafield_key": "xx-hh",
//     "bundle_key": "LKLK",
//     "bundle_bed_key": "LOPLOP",
//     "bundles_meta_key": "xxx-xx",
//     "bundles_bed_meta_key": "ccdd-dd",
//     "promobar": {
//         "enabled": true,
//         "text": "<span class='' style='font-weight:500'>text here</span> (<a href='/pages/a'>T&Cs</a>)</span>",
//         "bg_color": "#05c3de",
//         "color": "white",
//         "countdown": {
//             "enabled": true,
//             "display_from": "2022-07-22T00:01:00.000+01:00",
//             "ends_at": "2022-07-24T23:59:59.000+01:00",
//             "bg_color": "#041F42",
//             "color": "white"
//         }
//     }
//   }

// console.log(json.hasOwnProperty("display_from"));

// only check for top variables not nested ones

// .values() , .keys() 

// console.log(heros.keys());


// console.log(heros.hasOwnProperty("name"));


// console.log(Object.keys(heros));


// //////////////////////////////////////////// UNPACKING OR DESTRUCNITON

console.log(heros.name);
console.log(heros.comic);
console.log(heros.movies);
console.log(heros.release_year);

const {comic , name, movies} = heros

console.log(comic);
console.log(name);
console.log(movies);
