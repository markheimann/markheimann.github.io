// Content for the Chess page.

// What you offer. `detail` is optional (length, format, rate) and is
// shown under the description when set.
export const offerings = [
  {
    title: 'Technical lectures',
    text: 'Game analysis and training topics for club and tournament players, built around my own games.',
    detail: null,
  },
  {
    title: 'Talks for general audiences',
    text: 'Chess for people who do not play it: what the game teaches, and what it took to reach the top title around a full-time research job.',
    detail: null,
  },
  {
    title: 'Exhibitions and demonstrations',
    text: 'Simultaneous exhibitions, exhibition matches and live demonstrations for clubs, schools and events.',
    detail: null,
  },
  {
    title: 'Lessons',
    text: 'One-on-one coaching for improving players.',
    detail: null,
  },
];

// Career highlights, newest first.
export const highlights = [
  { year: '2025', title: 'Grandmaster title awarded', text: 'The highest title in chess, earned while working full time in research.' },
  { year: '2024', title: 'Saint Louis Masters', text: 'Final grandmaster norm, a week after the U.S. Masters.' },
  { year: '2024', title: 'U.S. Masters', text: 'Grandmaster norm, finishing on board one against Fabiano Caruana in the last round.' },
  { year: '2022', title: 'International master title', text: 'Three norms in four months as a non-career player.' },
  { year: '2020', title: 'States Chess Cup', text: 'Reached the playoff finals. Two annotated games published by US Chess.' },
  { year: '2012', title: 'Pan-American Intercollegiate', text: 'Division II national champions, playing first board for Washington University in St. Louis.' },
];

// Upcoming tournaments and events. The section only appears when this
// list has entries, e.g.
//   { date: 'Nov 20–24, 2026', title: 'U.S. Masters', place: 'Charlotte, NC', url: 'https://…' },
export const upcoming = [];

export const media = [
  {
    kind: 'Live broadcast',
    title: 'Heimann vs. Caruana, final round of the 2024 U.S. Masters',
    url: 'https://www.youtube.com/watch?v=BV51KZZdnCI',
    youtubeId: 'BV51KZZdnCI',
  },
  {
    kind: 'Interview',
    title: 'Saint Louis Chess Club, right after the game that secured the title',
    url: 'https://www.youtube.com/watch?v=xXByk3WqXic',
    youtubeId: 'xXByk3WqXic',
  },
  {
    kind: 'Podcast',
    title: 'Perpetual Chess: the road to grandmaster with a job outside chess',
    url: 'https://www.youtube.com/watch?v=sv8HJSiF_sc',
    youtubeId: 'sv8HJSiF_sc',
  },
];

export const press = [
  {
    source: 'US Chess',
    title: 'States Chess Cup playoffs, with my annotations of two games',
    year: '2020',
    url: 'https://new.uschess.org/news/states-chess-cup-playoffs',
  },
  {
    source: 'Student Life (WUSTL)',
    title: 'A man of many talents',
    year: '2014',
    url: 'http://www.studlife.com/scene/profile/2014/02/27/a-man-of-many-talents-mark-heimanns-intensive-quest-to-conquer-everything-wash-u-has-to-offer/',
  },
  {
    source: 'Student Life (WUSTL)',
    title: 'Chess club wins Division II championship',
    year: '2013',
    url: 'http://www.studlife.com/news/2013/01/28/chess-club-wins-division-ii-championship/',
  },
];

// Chess Life articles, newest first.
export const writing = [
  {
    year: '2025',
    title: 'The 2024 U.S. Masters',
    text: 'The tournament that produced one of my grandmaster title results.',
    url: '/papers/general/2025CL_chess_usmasters.pdf',
  },
  {
    year: '2024',
    title: 'The 2024 National Open',
    text: 'The fight for grandmaster norms at one of the biggest opens on the American circuit.',
    url: '/papers/general/2024CL_chess_vegas.pdf',
  },
  {
    year: '2023',
    title: 'The 2023 U.S. Amateur Team North Championship',
    text: 'Competing with a team of University of Michigan alums.',
    url: '/papers/general/2023CL_chess_usatn.pdf',
  },
  {
    year: '2022',
    title: 'My first international master norm',
    text: 'On earning a norm as a non-career chess player.',
    url: '/papers/general/2022CL_chess_im_norm.pdf',
    award: 'Nominated for Best Personal Narrative, Chess Journalists of America',
  },
];
