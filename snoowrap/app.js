console.log('Node is installed!');

require('dotenv').config();

const Snoowrap = require('snoowrap');
const Snoostorm = require('snoostorm');


// Build Snoowrap and Snoostorm clients
const r = new Snoowrap({
    userAgent: 'reddit-bot-example-node',
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    username: process.env.REDDIT_USER,
    password: process.env.REDDIT_PASS
});
const client = new Snoostorm(r);

// Configure options for stream: subreddit & results per query
const streamOpts = {
    subreddit: 'EarthPorn',
    results: 25
};

// Create a Snoostorm CommentStream with the specified options
const comments = client.CommentStream(streamOpts);

// On comment, perform whatever logic you want to do
comments.on('comment', (comment) => {
    console.log(comment);
});



/*  subreddit: Subreddit { display_name: 'MMA' },
  name: 't1_dpg57ek',
  score_hidden: false,
  permalink: '/r/MMA/comments/7b8ljs/how_georges_stpierre_made_history_at_ufc_21
7_and/dpg57ek/',
  num_reports: null,
  link_permalink: 'https://www.reddit.com/r/MMA/comments/7b8ljs/how_georges_stpi
erre_made_history_at_ufc_217_and/',
  stickied: false,
  created: 1510038384,
  author_flair_text: '? Jack Slack | Vice, Author',
  link_url: 'https://sports.vice.com/en_us/article/evb55w/how-georges-st-pierre-
made-history-at-ufc-217-and-took-bispings-belt',
  created_utc: 1510009584,
  subreddit_name_prefixed: 'r/MMA',
  controversiality: 0,
  mod_reports: [],
  subreddit_type: 'public',
  ups: 1 }
Comment { subreddit_id: 't5_2rq8n',
  approved_at_utc: null,
  edited: false,
  banned_by: null,
  removal_reason: null,
  link_id: 't3_7b7pwf',
  link_author: 'JoshGTO',
  likes: null,
  replies: Listing [],
  user_reports: [],
  saved: false,
  id: 'dpg57he',
  banned_at_utc: null,
  gilded: 0,
  archived: false,
  report_reasons: null,
  author: RedditUser { name: 'uncle_muscle98' },
  num_comments: 63,
  can_mod_post: false,
  parent_id: 't3_7b7pwf',
  score: 1,
  approved_by: null,
  over_18: false,
  collapsed: false,
  body: 'Think this can handle a 45/70?',
  link_title: '[Optics] Bushnell TRS-25; $50.04; $0.04 higher than lowest price
ever on Amazon',
  author_flair_css_class: null,
  downs: 0,
  is_submitter: false,
  collapsed_reason: null,
  body_html: '<div class="md"><p>Think this can handle a 45/70?</p>\n</div>',
  distinguished: null,
  quarantine: false,
  can_gild: true,
  subreddit: Subreddit { display_name: 'gundeals' },
  name: 't1_dpg57he',
  score_hidden: false,
  permalink: '/r/gundeals/comments/7b7pwf/optics_bushnell_trs25_5004_004_higher_
than_lowest/dpg57he/',
  num_reports: null,
  link_permalink: 'https://www.reddit.com/r/gundeals/comments/7b7pwf/optics_bush
nell_trs25_5004_004_higher_than_lowest/',
  stickied: false,
  created: 1510038387,
  author_flair_text: null,
  link_url: 'https://www.amazon.com/Bushnell-Trophy-TRS-25-Sight-Riflescope/dp/B
00200E0HM/ref=sr_1_3?ie=UTF8&qid=1509998419&sr=8-3&keywords=trs-25',
  created_utc: 1510009587,
  subreddit_name_prefixed: 'r/gundeals',
  controversiality: 0,
  mod_reports: [],
  subreddit_type: 'public',
  ups: 1 }
Comment { subreddit_id: 't5_2qs08',
  approved_at_utc: null,
  edited: false,
  banned_by: null,
  removal_reason: null,
  link_id: 't3_7b5gwu',
  link_author: 'nascarjarrod',
  likes: null,
  replies: Listing [],
  user_reports: [],
  saved: false,
  id: 'dpg57k1',
  banned_at_utc: null,
  gilded: 0,
  archived: false,
  report_reasons: null,
  author: RedditUser { name: 'darthXmagnus' },
  num_comments: 247,
  can_mod_post: false,
  parent_id: 't1_dpfjrxt',
  score: 1,
  approved_by: null,
  over_18: false,
  collapsed: false,
  body: 'That\'s ironic as all hell, considering your flair.\n\nRemember, people
 felt the same way about Gordon all throughout the 90s. This is no different tha
n that. ',
  link_title: 'Under the olds point system Martin Truex Jr would have clinched h
is 1st championship yesterday at Texas.',
  author_flair_css_class: '18',
  downs: 0,
  is_submitter: false,
  collapsed_reason: null,
  body_html: '<div class="md"><p>That&#39;s ironic as all hell, considering your
 flair.</p>\n\n<p>Remember, people felt the same way about Gordon all throughout
 the 90s. This is no different than that. </p>\n</div>',
  distinguished: null,
  quarantine: false,
  can_gild: true,
  subreddit: Subreddit { display_name: 'NASCAR' },
  name: 't1_dpg57k1',
  score_hidden: true,
  permalink: '/r/NASCAR/comments/7b5gwu/under_the_olds_point_system_martin_truex
_jr_would/dpg57k1/',
  num_reports: null,
  link_permalink: 'https://www.reddit.com/r/NASCAR/comments/7b5gwu/under_the_old
s_point_system_martin_truex_jr_would/',
  stickied: false,
  created: 1510038389,
  author_flair_text: 'Kyle Busch',
  link_url: 'https://www.reddit.com/r/NASCAR/comments/7b5gwu/under_the_olds_poin
t_system_martin_truex_jr_would/',
  created_utc: 1510009589,
  subreddit_name_prefixed: 'r/NASCAR',
  controversiality: 0,
  mod_reports: [],
  subreddit_type: 'public',
  ups: 1 }
Comment { subreddit_id: 't5_2qh63',
  approved_at_utc: null,
  edited: false,
  banned_by: null,
  removal_reason: null,
  link_id: 't3_7b6f6y',
  link_author: 'Master_knows_Best',
  likes: null,
  replies: Listing [],
  user_reports: [],
  saved: false,
  id: 'dpg57mv',
  banned_at_utc: null,
  gilded: 0,
  archived: false,
  report_reasons: null,
  author: RedditUser { name: 'sotomayormccheese' },
  num_comments: 10,
  can_mod_post: false,
  parent_id: 't3_7b6f6y',
  score: 1,
  approved_by: null,
  over_18: false,
  collapsed: false,
  body: 'Also, if cops are carrying guns like that they got from the IS military
 they are WEAPONS OF WAR that make libertarians very scared ',
  link_title: 'How to tell if a gun is a scary "assault weapon" or not.',
  author_flair_css_class: null,
  downs: 0,
  is_submitter: false,
  collapsed_reason: null,
  body_html: '<div class="md"><p>Also, if cops are carrying guns like that they
got from the IS military they are WEAPONS OF WAR that make libertarians very sca
red </p>\n</div>',
  distinguished: null,
  quarantine: false,
  can_gild: true,
  subreddit: Subreddit { display_name: 'Libertarian' },
  name: 't1_dpg57mv',
  score_hidden: false,
  permalink: '/r/Libertarian/comments/7b6f6y/how_to_tell_if_a_gun_is_a_scary_ass
ault_weapon_or/dpg57mv/',
  num_reports: null,
  link_permalink: 'https://www.reddit.com/r/Libertarian/comments/7b6f6y/how_to_t
ell_if_a_gun_is_a_scary_assault_weapon_or/',
  stickied: false,
  created: 1510038392,
  author_flair_text: null,
  link_url: 'https://i.imgur.com/2DFQ8wk.png',
  created_utc: 1510009592,
  subreddit_name_prefixed: 'r/Libertarian',
  controversiality: 0,
  mod_reports: [],
  subreddit_type: 'public',
  ups: 1 }
Comment { subreddit_id: 't5_2rxse',
  approved_at_utc: null,
  edited: false,
  banned_by: null,
  removal_reason: null,
  link_id: 't3_7b8y6o',
  link_author: 'Eton77',
  likes: null,
  replies: Listing [],
  user_reports: [],
  saved: false,
  id: 'dpg58n2',
  banned_at_utc: null,
  gilded: 0,
  archived: false,
  report_reasons: null,
  author: RedditUser { name: 'Eton77' },
  num_comments: 3,
  can_mod_post: false,
  parent_id: 't3_7b8y6o',
  score: 1,
  approved_by: null,
  over_18: false,
  collapsed: false,
  body: 'This just shows that Ozil hasn't really had a dip in form and he is sti
ll a world class playmaker unlike a lot of pundits are saying, it's just Arsenal
's fault that he doesn't have the stats to show for it. ',
  link_title: 'I don't know if this is aloud, but this is an interesting argumen
t for getting Ozil in January, or on a free.',
  author_flair_css_class: null,
  downs: 0,
  is_submitter: true,
  collapsed_reason: null,
  body_html: '<div class="md"><p>This just shows that Ozil hasn't really had a d
ip in form and he is still a world class playmaker unlike a lot of pundits are s
aying, it's just Arsenal's fault that he doesn't have the stats to show for it.
</p>\n</div>',
  distinguished: null,
  quarantine: false,
  can_gild: true,
  subreddit: Subreddit { display_name: 'reddevils' },
  name: 't1_dpg58n2',
  score_hidden: false,
  permalink: '/r/reddevils/comments/7b8y6o/i_dont_know_if_this_is_aloud_but_this
_is_an/dpg58n2/',
  num_reports: null,
  link_permalink: 'https://www.reddit.com/r/reddevils/comments/7b8y6o/i_dont_kno
w_if_this_is_aloud_but_this_is_an/',
  stickied: false,
  created: 1510038425,
  author_flair_text: null,
  link_url: 'https://i.redd.it/hoqaihqjrfwz.jpg',
  created_utc: 1510009625,
  subreddit_name_prefixed: 'r/reddevils',
  controversiality: 0,
  mod_reports: [],
  subreddit_type: 'public',
  ups: 1 }
Comment { subreddit_id: 't5_2vsta',
  approved_at_utc: null,
  edited: false,
  banned_by: null,
  removal_reason: null,
  link_id: 't3_7b8pms',
  link_author: 'Mosqnk',
  likes: null,
  replies: Listing [],
  user_reports: [],
  saved: false,
  id: 'dpg58pt',
  banned_at_utc: null,
  gilded: 0,
  archived: false,
  report_reasons: null,
  author: RedditUser { name: 'Mosqnk' },
  num_comments: 5,
  can_mod_post: false,
  parent_id: 't1_dpg4ui7',
  score: 1,
  approved_by: null,
  over_18: false,
  collapsed: false,
  body: 'Yep better to stay home and play video games. Avoid partying and alcoho
l at all cost too!! :^)',
  link_title: 'Daily reminder that microdosing LSD is God's gift to man.',
  author_flair_css_class: null,
  downs: 0,
  is_submitter: true,
  collapsed_reason: null,
  body_html: '<div class="md"><p>Yep better to stay home and play video games. A
void partying and alcohol at all cost too!! :<sup>)</sup></p>\n</div>',
  distinguished: null,
  quarantine: false,
  can_gild: true,
  subreddit: Subreddit { display_name: 'milliondollarextreme' },
  name: 't1_dpg58pt',
  score_hidden: true,
  permalink: '/r/milliondollarextreme/comments/7b8pms/daily_reminder_that_microd
osing_lsd_is_gods_gift/dpg58pt/',
  num_reports: null,
  link_permalink: 'https://www.reddit.com/r/milliondollarextreme/comments/7b8pms
/daily_reminder_that_microdosing_lsd_is_gods_gift/',
  stickied: false,
  created: 1510038428,
  author_flair_text: null,
  link_url: 'https://www.reddit.com/r/milliondollarextreme/comments/7b8pms/daily
_reminder_that_microdosing_lsd_is_gods_gift/',
  created_utc: 1510009628,
  subreddit_name_prefixed: 'r/milliondollarextreme',
  controversiality: 0,
  mod_reports: [],
  subreddit_type: 'public',
  ups: 1 }
*/

