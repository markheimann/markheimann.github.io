// Site-wide details. Anything set to null is left off the pages,
// so you can fill these in whenever you are ready.

export const site = {
  name: 'Mark Heimann',
  email: 'maheimann64@gmail.com',
  description:
    'Mark Heimann is a research scientist at Ivo working on post-training large language models for knowledge-intensive domains, a chess grandmaster and a competitive powerlifter.',
  resume: '/assets/MarkHeimann_Resume.pdf',

  links: {
    github: 'https://github.com/markheimann',
    scholar: 'https://scholar.google.com/citations?user=EXeTcRUAAAAJ&hl=en',
    fide: 'https://ratings.fide.com/card.phtml?event=2028441',
    wikipedia: 'https://en.wikipedia.org/wiki/Mark_Heimann',
    instagram: 'https://www.instagram.com/theirongm',
    openpowerlifting: 'https://www.openpowerlifting.org/u/markheimann',
  },
  instagramHandle: '@theirongm',

  chess: {
    // Ratings change monthly; leave null to show only the FIDE link.
    fideRating: null,
    // e.g. 'San Francisco Bay Area'. Shown on the chess page when set.
    basedIn: null,
  },
};
