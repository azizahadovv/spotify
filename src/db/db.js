// const axios = require('axios');

// const options = {
//     method: 'GET',
//     url: 'search/',
//     params: {
//         q: 'anvar sanayev',
//         type: 'multi',
//         offset: '0',
//         limit: '5',
//         numberOfTopResults: '5'
//     },
//     headers: {
//         'X-RapidAPI-Key': '37b2e4684amsh054bbdab5794b7dp16fe44jsn034e26a3e436',
//         'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
//     }
// };

// try {
//     const response = await axios.request(options);
//     console.log(response.data);
// } catch (error) {
//     console.error(error);
// }

// const [search, setSearch] = useState()
// console.log(search);
// useEffect(() => {
//     axios({
//         method: 'GET',
//         url: 'https://spotify23.p.rapidapi.com/tracks/',
//         params: {
//             ids: '4WNcduiCmDNfmTEz7JvmLv'
//         },
//         headers: {
//             'X-RapidAPI-Key': '37b2e4684amsh054bbdab5794b7dp16fe44jsn034e26a3e436',
//             'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
//         }
//     }).then((res) => {
//         setSearch(res.data)
//     }).catch((err) => console.log(err.message))
// }, [])