export const asset = (name: string) => `/images/${name}`;
export const categories = ['Island Tours','Snorkeling','Adventure','Cultural','Food & Dining','Nature','City Tours','Private Tours','Sunset Tours'];
const rows = [
 ['Phi Phi Islands Speedboat Tour','Krabi','Island Tours','image 57',1450,'Full day'],
 ['James Bond Island Tour','Phuket','Island Tours','image 97',1890,'Full day'],
 ['4 Islands Day Trip','Krabi','Island Tours','image 93',1350,'Full day'],
 ['Similan Islands Tour','Phuket','Island Tours','image 96',2490,'Full day'],
 ['Rock Climbing in Railay','Krabi','Adventure','image 94',1290,'Half day'],
 ['ATV Jungle Adventure','Phuket','Adventure','image 100',1890,'Half day'],
 ['Zipline Forest Adventure','Chiang Mai','Adventure','image 101',1590,'Half day'],
 ['Kayaking in Phang Nga Bay','Phang Nga','Adventure','image 97',1490,'Half day'],
 ['Bangkok Temples Tour','Bangkok','Cultural','image 95',1290,'Full day'],
 ['Ayutthaya Historical Tour','Ayutthaya','Cultural','image 95',1590,'Full day'],
 ['Thai Cooking Class','Chiang Mai','Cultural','image 98',1390,'Half day'],
 ['Floating Market Tour','Bangkok','Cultural','image 96',1190,'Half day'],
] as const;
export const tours = rows.map(([title,location,category,image,price,duration],i)=>({id:i,slug:title.toLowerCase().replaceAll(' ','-'),title,location,category,image:asset(image+'.webp'),price,duration,tags:[category,...(i===0||i===2||i===3?['Snorkeling']:[]),...(i===1||i===7?['Nature']:[]),...(i===8||i===9||i===11?['City Tours']:[]),...(i===10?['Food & Dining']:[]),...(i===3?['Private Tours']:[]),...(i===1?['Sunset Tours']:[])]}));
export type Tour = typeof tours[number];
export const articles = [
 {slug:'krabi-after-dark',title:'Krabi After Dark: Sunset Views & Glowing Plankton',image:'image 97.webp',date:'October 14, 2026',excerpt:'As the afternoon light turns golden, Krabi offers a different kind of adventure. From quiet coves to sunset on the water.',paragraphs:['Stay a little longer by the water. The limestone cliffs soften in the late afternoon light, and the longtail boats make their way back to shore. Choose a west-facing beach and leave time to simply sit and watch.','For an evening on the water, ask a local operator about conditions, return transport, and what is included. Bioluminescence is a natural phenomenon: sightings depend on weather, moonlight, and water conditions, and are never guaranteed.','Bring a light layer, keep your belongings dry, and arrange your journey back before heading out. A slower evening often becomes the most memorable part of a trip.']},
 {slug:'choose-your-thailand-tour',title:'How to Choose the Right Thailand Tour for Your Trip',image:'image 96.webp',date:'October 7, 2026',excerpt:'Thailand has so many amazing places and experiences to choose from. Find the journey that feels like you.',paragraphs:['Start with the kind of day you want. A slow boat ride, a walk through a temple courtyard, and a morning on a forest trail all offer a different way to experience Thailand.','Look beyond the itinerary headline. Compare travel time, group size, included meals, meeting points, and the amount of free time. Choose a pace that leaves room to enjoy each stop.','Keep a little flexibility in your plans. Weather can change coastal itineraries, and a rest day can be just as valuable as another excursion. Confirm current details directly with your chosen operator before booking.']},
 {slug:'first-trip-to-thailand',title:'5 Things to Know Before Your First Trip to Thailand',image:'image 95.webp',date:'September 20, 2026',excerpt:'A little preparation goes a long way. Make space for local customs, slower mornings, and unexpected discoveries.',paragraphs:['1. Leave room in your itinerary. Traveling between islands and cities takes time, so build in breaks instead of filling every hour.','2. Dress thoughtfully at temples. Follow posted guidance, carry a light cover-up, and remove shoes where requested. 3. Pack for the climate: sun protection, a refillable bottle, and comfortable walking shoes are useful everyday companions.','4. Confirm transport arrangements before setting off. Save the meeting point and your accommodation details offline. 5. Be curious and considerate. Ask before taking portraits, respect local spaces, and take your time discovering the food and culture.']}
];
