import { Movie, MovieDetails } from '@nx-conf-2023/shared-types';

const pawRatings: Record<string, number> = {};

const movies: Movie[] = [
  {
    id: 'dog-yoga',
    title: 'Dog Yoga',
  },
  { id: 'paws', title: 'Paws: Terror in the Tub' },
  { id: 'fluffy-thief', title: 'The Quest for the Unreachable Bite' },
  { id: 'cat-jumpscare', title: 'Feline Fury: Bin of Doom' },
  { id: 'blind-fetch', title: 'Sniff & Fetch: The Unseen Adventure' },
  {
    id: 'dancing-dog',
    title: 'Frosty Paws: Breaking the Ice',
  },
  {
    id: 'ninja-sliding-cat',
    title: 'Silent Paws: The Shadow Whisker Chronicles',
  },
  {
    id: 'cat-flower',
    title: 'Petunia Panic',
  },
  {
    id: 'cat-thug-life',
    title: 'Litter Alley: Paws and Claws',
  },
  {
    id: 'aquarium-cat',
    title: 'Under the Whiskerwaves',
  },
  {
    id: 'kitten-scratches',
    title: 'The Unscratchable Itch',
  },
  {
    id: 'con-cat',
    title: 'Feline Masquerade',
  },
];

const movieDetails: Record<string, MovieDetails> = {
  'dog-yoga': {
    id: 'dog-yoga',
    title: 'Dog Yoga',
    tagline:
      "Can true balance be found on a yoga mat, or is it hidden in the chaotic love of man's best friend? 🐾  ",
    description:
      "This Fall, prepare to bend your expectations and stretch your imagination! Meet Dave, a stressed-out workaholic seeking solace in the ancient art of yoga. But just as he's about to nail that elusive Handstand Scorpion, in bursts Max—a Golden Retriever with the soul of a saint but the timing of a trickster.",
  },
  paws: {
    id: 'paws',
    title: 'Paws: Terror in the Tub',
    description:
      "Dive into the shallow end of horror this summer! In the tranquil suburb of Woofington, residents are scratching their heads and holding onto their chew toys. No, it’s not a great white shark causing the chaos, but “Bubbles”, an audacious pug donning a shark costume. Garden parties, bubble baths, and plastic fish are under a new kind of threat. Witness as a stubborn mayor, an aspiring YouTube pet influencer, and a fish enthusiast with an odd allergy to pugs unite to tackle the side-splitting antics of this tiny menace. Prepare for splashes, giggles, and an underwater adventure you won't forget. Will the tub ever be the same?",
    tagline: 'Every tub has a pug.',
  },
  'fluffy-thief': {
    id: 'fluffy-thief',
    title: 'The Quest for the Unreachable Bite',
    description: `In a world where gravity reigns supreme and tables are unnecessarily high, one small, fluffy, white dog named Sir Fluffington III faces the ultimate challenge: a delectable morsel of food, precariously perched on the edge of an unfathomably tall table. Every jump, every paw placement, every desperate whine, has led him to this moment.
    Witness the hilariously epic journey as Sir Fluffington III navigates an array of increasingly ridiculous and bizarre obstacles. From plotting cats and slippery hardwood floors, to enigmatic vacuum cleaners and overly-helpful toddlers, our furry hero is determined to taste victory.
    Will Sir Fluffington III's determination and fluffiness be enough to conquer the insurmountable odds? Or will the tantalizing treat remain just out of tongue's reach?`,
    tagline: 'One leap for a dog, one giant bite for dogkind.',
  },
  'cat-jumpscare': {
    id: 'cat-jumpscare',
    title: 'Feline Fury: Bin of Doom',
    description: `In the quiet suburban town of Whiskerville, residents have been experiencing a series of chilling and unexpected ambushes. The culprit? A malevolent, seemingly supernatural feline named Mr. Whiskers, lurking in the shadows of the most unassuming of trash bins. As the death toll rises, a misfit team of locals, including a barista with a PhD in Cat Psychology and an ex-catnip dealer, joins forces to unmask the furry terror. But can they catch Mr. Whiskers before they're all "catted" out? Dive into this purr-fect storm of suspense, claws, and garbage as the trash bin trembles and the terror unravels.`,
    tagline: "You can't escape the hiss... from the abyss!",
  },
  'blind-fetch': {
    id: 'blind-fetch',
    title: 'Sniff & Fetch: The Unseen Adventure',
    description: `In the quiet town of Pawsington, where every dog has its day, meet Barkley: a lovable Golden Retriever with a slight "visionary" challenge. When life throws Barkley a stick he can't see, he discovers that true vision isn't about what you can see, but how you perceive the world around you. With a nose that can sniff out a tennis ball a mile away and ears sharper than a dog whistle, Barkley is on a quest to become Pawsington's fetch champion. Laugh, cry, and shake your head in amazement as Barkley proves that sometimes the underdog (even without sight) can have the most fetching view of life. Join Barkley and the Miller family on a journey of nose-twitching sniff-offs, hilarious hiccups, and heartwarming moments that redefine the meaning of "seeing is believing".`,
    tagline:
      'Sometimes, the best visions come from the heart... and a really good sniffer!',
  },
  'dancing-dog': {
    id: 'dancing-dog',
    title: 'Frosty Paws: Breaking the Ice',
    description: `In a world blanketed in snow, where dance battles dictate who's the alpha dog, one short-haired, brown canine with two left paws dares to pirouette his way to the top! Meet "Boogie", a dancing prodigy, who's not letting the biting cold or snarky squirrels get in his way. From snow drifts to ice splits, watch as this paw-tastic underdog melts hearts and slides his way into dance history.`,
    tagline: 'The colder the floor, the hotter the moves!',
  },
  'ninja-sliding-cat': {
    id: 'ninja-sliding-cat',
    title: 'Silent Paws: The Shadow Whisker Chronicles',
    description:
      "In a world where ninja skills and fur coats reign supreme, one feline stands out – Whiskerado, the sliding ninja cat. When the city's food bowls are mysteriously empty, only Whiskerado's smooth moves can uncover the treacherous truth. But lurking in the shadows is his arch-nemesis, Clawstro, an enigmatic cat with a vendetta. Their battles will be epic, their techniques purr-fect, and their hairballs...unavoidable. Fur will fly, and the city's fate hangs by a thread (of yarn). It’s not about the nine lives; it's about the one reputation.",
    tagline:
      'In the alleyways of fur and fury, only the slickest will land on their feet!',
  },
  'cat-flower': {
    id: 'cat-flower',
    title: 'Petunia Panic',
    description: `In a world where feline fashion rules, Mr. Whiskers is the top cat in the neighborhood. With his impeccable sense of style, he's always been one paw ahead of the latest trends. But when a mysterious flower named Petunia makes an unexpected appearance on his pristine head, his life turns upside down!
    Is the flower a foe or a friend? Why won't it budge? How can Mr. Whiskers chase mice, nap for 18 hours, or even groom himself with such a botanical burden? Dive into this purr-fectly hilarious comedy as Mr. Whiskers embarks on a wild journey to regain his reputation, facing nosy neighbors, cunning canines, and a rather enthusiastic gardener.`,
    tagline: "Petals, purrs, and panic: one cat's blooming dilemma!",
  },
  'cat-thug-life': {
    id: 'cat-thug-life',
    title: 'Litter Alley: Paws and Claws',
    description: `    
    In the grimy backstreets of Paws Angeles, Claw'Daddy reigns supreme. This tuxedo tabby is no lap cat; with his gleaming gold collar and diamond-studded claws, he’s the thug life embodiment in a furry package. He doesn't meow – he spits bars, leaving a trail of defeated street cats in his wake.
    Known for his ruthless tactics, Claw'Daddy has laid claim to the best sunbathing spots and the freshest milk supplies. But when a sly Siamese named Slink moves into Litter Alley, seeking a chunk of Claw'Daddy's territory, fur is about to fly.
    Amidst catnip deals gone wrong and the infamous 'tail tagging' showdowns, Claw'Daddy and his crew must fend off Slink's relentless onslaught. It's not just about territory – it's about respect, reputation, and the unwritten 'Kitty Kode' that governs the streets.`,
    tagline:
      "In the Streets of Litter Alley, You've Either Got Claws... or You're Claws-t History.",
  },
  'aquarium-cat': {
    id: 'aquarium-cat',
    title: 'Under the Whiskerwaves',
    description: `In a world where oceans stretch as far as the eye can see (or at least to the other end of the living room), one cat dares to defy the laws of land and sea. Sir Whiskerbottom, an undersea explorer with a tail to tell, ventures into the perilous depths of the mighty ocean. Armed with only his wits, a trusty fishing pole, and nine lives, he embarks on daring missions, studies exotic fish, and uncovers ancient treasures, all within the confines of the world's most expansive... aquarium.
    Through turbulent waters (thanks to the filter), unexpected dangers (like the vacuum cleaner), and baffling mysteries (like why that one fish keeps floating upside-down), Whiskerbottom navigates a wet world few cats dare to explore.
    But when the stakes get high, and bubbles rise, will Sir Whiskerbottom get the fish, or will the fish get him?`,
    tagline: `Dive in, it's a whole other world... in a glass box! 🐱🌊🐠`,
  },
  'cat-piano': {
    id: 'cat-piano',
    title: 'Purrfect Harmony',
    description: `In a world overwhelmed by electronic beats, trap music, and auto-tuned voices, Mittens, a chubby tabby with a taste for the classics, discovers the last grand piano in the city. Unbeknownst to her owner, Mrs. Fiddlesticks, who's just trying to make her way as the last piano teacher in a digital age, Mittens is about to become the feline savior of classical music. Join this quirky duo as they navigate mean street cats, scheming piano salesmen, and the city's attempt to go fully digital, all while trying to keep the sweet tunes of Beethoven and Mozart alive. Can one cat's obsession with the soothing sounds of the piano strike a chord and change the heart of a city? Find out in... Purrfect Harmony.`,
    tagline: 'When the world hits pause, Mittens plays on!',
  },
  'kitten-scratches': {
    id: 'kitten-scratches',
    title: 'The Unscratchable Itch',
    description: `In a world where the purr-fect life is just a scratch away, Muffin, a furr-ball of joy, has an insatiable itch... an itch so great, no human hand, no cat tower, not even that ritzy robo-scratcher 3000 can satisfy. Dive into a heartwarmingly hilarious journey as Muffin embarks on a quest for the Ultimate Scratch, encountering a host of quirky characters, from a meditation guru pug to a yoga-loving parrot, each offering their own peculiar scratching techniques. Get ready to laugh, cry, and say "Aww" as you witness the fluffy antics of a kitty on a mission.`,
    tagline: 'One Cat, One Desire... Infinite Scratches!',
  },
  'con-cat': {
    id: 'con-cat',
    title: 'Feline Masquerade',
    description: `In the glittering heart of urban jungle, con-cat Whiskerotti has a purrfect scam - pretend to be a majestic lion and enjoy the finer feline privileges that the big city has to offer. With the help of a ragtag group of animal accomplices, including a chatty parrot with an identity crisis and a hamster who believes he's a ferocious bear, they embark on their wildest heist yet: to raid the city's most luxurious pet store. But as suspicions arise and tails get twisted, can Whiskerotti keep up the roaring ruse before his 9 lives run out?`,
    tagline: `When the cat's away, the lion will play.`,
  },
};

export function getMovies() {
  return movies;
}

export function getMovieDetails(id: string) {
  return movieDetails[id];
}

export function getPawRatingFromDatastore(movieId: string) {
  return pawRatings[movieId] ?? 0;
}

export function addPawRatingToDatastore(movieId: string, rating: number) {
  pawRatings[movieId] = rating;
}
