import type { Entity } from "./types";

export const creatures: Entity[] = [
  {
    slug: "fenrir",
    name: "Fenrir",
    oldNorse: "Fenrir",
    pronunciation: "FEN-rir",
    category: "creatures",
    kind: "Monstrous wolf",
    epithets: ["Fenrisúlfr", "Vánagandr"],
    summary:
      "The great wolf, son of Loki, bound by the gods with the dwarven ribbon Gleipnir at the cost of Týr's hand — fated to break free and devour Odin at Ragnarök.",
    description: [
      "Fenrir was raised in Asgard because the gods feared what he would become if left to grow in Jötunheimr — and he grew anyway, so fast that soon only Týr dared feed him. Prophecy said the wolf would be the ruin of the gods, so they resolved to bind him, dressing treachery as sport: twice they chained him with great fetters, Læðing and Drómi, and twice he burst them.",
      "Then the dwarves forged Gleipnir from six impossible things — the sound of a cat's footfall, a woman's beard, a mountain's roots, a bear's sinews, a fish's breath, a bird's spittle — a ribbon soft as silk. Fenrir, suspicious, agreed to be tied only if a god laid a hand in his mouth as pledge. Týr did. The ribbon held, and the wolf took the hand. Bound to a rock, a sword propping his jaws, Fenrir howls until Ragnarök — when he breaks loose, runs with his lower jaw on the earth and his upper against the sky, and swallows Odin whole, before Odin's son Víðarr tears him apart.",
    ],
    facts: [
      { label: "Parents", value: "Loki and Angrboða" },
      { label: "Bound by", value: "Gleipnir, forged by the dwarves" },
      { label: "Cost", value: "Týr's right hand" },
      { label: "Fate", value: "Devours Odin at Ragnarök; slain by Víðarr" },
    ],
    relations: [
      { type: "Father", slug: "loki", name: "Loki" },
      { type: "Mother", slug: "angrboda", name: "Angrboða" },
      { type: "Siblings", slug: "jormungandr", name: "Jörmungandr and Hel" },
      { type: "Binding", slug: "gleipnir", name: "Gleipnir" },
      { type: "Devours", slug: "odin", name: "Odin" },
      { type: "Slain by", slug: "vidar", name: "Víðarr" },
    ],
    attestations: ["Poetic Edda (Völuspá, Lokasenna)", "Prose Edda (Gylfaginning)"],
    tags: ["wolf", "ragnarok", "loki", "binding"],
  },
  {
    slug: "jormungandr",
    name: "Jörmungandr",
    oldNorse: "Jörmungandr",
    pronunciation: "YOR-mun-gan-dr",
    category: "creatures",
    kind: "The Midgard Serpent",
    epithets: ["Midgarðsormr", "The World Serpent"],
    summary:
      "The serpent so vast it circles the world beneath the sea, biting its own tail; Thor's destined enemy — each will kill the other at Ragnarök.",
    description: [
      "Odin hurled the infant serpent, child of Loki and Angrboða, into the sea that rings Midgard — where it grew until it encircled the whole world and gripped its own tail. When it lets go, the end has begun.",
      "Thor and the serpent meet three times. In Útgarða-Loki's castle, the 'cat' Thor could barely lift off the floor was Jörmungandr in disguise — and the giants paled to see it. On Hymir's fishing boat, Thor baited a hook with an ox-head and pulled the serpent's venom-spitting head above the waves, and only Hymir cutting the line saved the world an early apocalypse. At Ragnarök they finish it: the serpent comes ashore flooding the land and spraying venom; Thor crushes its skull with Mjölnir, strides nine paces, and falls dead of its poison.",
    ],
    facts: [
      { label: "Parents", value: "Loki and Angrboða" },
      { label: "Size", value: "Encircles Midgard, tail in mouth" },
      { label: "Arch-enemy", value: "Thor" },
      { label: "Fate", value: "Slain by Thor at Ragnarök; its venom kills him nine steps later" },
    ],
    relations: [
      { type: "Father", slug: "loki", name: "Loki" },
      { type: "Mother", slug: "angrboda", name: "Angrboða" },
      { type: "Siblings", slug: "fenrir", name: "Fenrir and Hel" },
      { type: "Mutual slayer", slug: "thor", name: "Thor" },
    ],
    attestations: ["Poetic Edda (Völuspá, Hymiskviða)", "Prose Edda (Gylfaginning)", "Gosforth Cross and picture stones"],
    tags: ["serpent", "sea", "ragnarok", "thor"],
  },
  {
    slug: "sleipnir",
    name: "Sleipnir",
    oldNorse: "Sleipnir",
    pronunciation: "SLAYP-nir",
    category: "creatures",
    kind: "Odin's eight-legged horse",
    summary:
      "The eight-legged grey horse of Odin, best of all horses, able to ride between the worlds of the living and the dead — foaled, strangely, by Loki.",
    description: [
      "Sleipnir ('Slipper' or 'Glider') is the finest of horses, grey and eight-legged, who carries Odin over sea and sky and down the long dark road to Hel. His origin is the myths' strangest: when a giant builder offered to wall Asgard in a single winter — with the sun, the moon, and Freyja as his price — it was his stallion Svaðilfari that made the work possible. To wreck the bargain on its last day, Loki became a mare and lured the stallion away; some months later Loki bore the foal.",
      "Hermóðr rode Sleipnir on the failed embassy to ransom Baldr from Hel, leaping the gates of the dead. The horse's eight legs have been read many ways — the four pallbearers of a bier, the drumming gait of the shaman's journey — and he appears, eight-legged and unmistakable, on Gotland picture stones carved a thousand years ago.",
    ],
    facts: [
      { label: "Rider", value: "Odin" },
      { label: "Legs", value: "Eight" },
      { label: "Parents", value: "The stallion Svaðilfari and Loki (as a mare)" },
      { label: "Famed feat", value: "Leaping the gates of Hel" },
    ],
    relations: [
      { type: "Rider", slug: "odin", name: "Odin" },
      { type: "Mother", slug: "loki", name: "Loki (in mare's shape)" },
    ],
    attestations: ["Poetic Edda (Grímnismál, Baldrs draumar)", "Prose Edda (Gylfaginning)", "Gotland picture stones"],
    tags: ["horse", "odin", "eight-legged", "hel"],
  },
  {
    slug: "huginn-and-muninn",
    name: "Huginn and Muninn",
    oldNorse: "Huginn ok Muninn",
    pronunciation: "HOO-gin, MOO-nin",
    category: "creatures",
    kind: "Odin's ravens",
    summary:
      "Thought and Memory — the two ravens who fly across all the worlds each day and return to whisper what they have seen into Odin's ears.",
    description: [
      "Every dawn Odin sends out his ravens Huginn ('Thought') and Muninn ('Memory'), and by breakfast they are back on his shoulders, whispering the news of the nine worlds. They are why Odin is called Hrafnaguð, the raven-god, and why nothing happens far from his knowing.",
      "In Grímnismál, Odin admits an anxiety: 'I fear for Huginn, that he come not back, yet more anxious am I for Muninn' — thought can be risked; memory, once lost, is lost. Ravens followed real armies to real battlefields, and skalds called the raven 'Huginn's...' anything as a kenning for the carrion bird; to feed the raven was to kill men. The pair appear on helmet plates and brooches centuries older than the written myths.",
    ],
    facts: [
      { label: "Names", value: "Huginn ('Thought') and Muninn ('Memory')" },
      { label: "Task", value: "Fly over all the worlds each day; report to Odin" },
      { label: "Kenning", value: "Odin is Hrafnaguð, 'the raven-god'" },
    ],
    relations: [{ type: "Master", slug: "odin", name: "Odin" }],
    attestations: ["Poetic Edda (Grímnismál)", "Prose Edda (Gylfaginning)", "Vendel-era helmet plates"],
    tags: ["ravens", "odin", "thought", "memory"],
  },
  {
    slug: "nidhogg",
    name: "Níðhöggr",
    oldNorse: "Níðhöggr",
    pronunciation: "NEETH-hug",
    category: "creatures",
    kind: "Corpse-eating dragon",
    epithets: ["Malice-Striker"],
    summary:
      "The dragon that gnaws the deepest root of Yggdrasil and chews the corpses of the worst of the dead — oath-breakers, murderers, and betrayers.",
    description: [
      "At the bottom of the cosmos, beneath the third root of the world-tree by the spring Hvergelmir, Níðhöggr ('Malice-Striker') gnaws eternally at the root of everything. On the shore of corpses, Náströnd — a hall woven of serpents whose venom drips inward — he sucks the bodies of the worst dead: oath-breakers, murderers, and seducers of other men's wives. The name carries the force of níð, the Norse term for unforgivable dishonour.",
      "He conducts a running feud by messenger: the squirrel Ratatoskr scurries the length of Yggdrasil carrying insults between the dragon below and the eagle at the crown. In the last lines of Völuspá, after the new world has risen, Níðhöggr flies up from the depths with corpses in his wings — either the old evil surviving into the new age, or its final departure; the poem leaves it dark.",
    ],
    facts: [
      { label: "Lair", value: "Beneath Yggdrasil's root, by Hvergelmir; Náströnd" },
      { label: "Diet", value: "The world-tree's root, and the corpses of oath-breakers" },
      { label: "Feud", value: "Trades insults with the eagle via Ratatoskr" },
    ],
    relations: [
      { type: "Gnaws", slug: "yggdrasil", name: "Yggdrasil" },
      { type: "Messenger", slug: "ratatoskr", name: "Ratatoskr" },
    ],
    attestations: ["Poetic Edda (Völuspá, Grímnismál)", "Prose Edda (Gylfaginning)"],
    tags: ["dragon", "yggdrasil", "dead", "nastrond"],
  },
  {
    slug: "ratatoskr",
    name: "Ratatoskr",
    oldNorse: "Ratatoskr",
    pronunciation: "RAT-ah-tosk",
    category: "creatures",
    kind: "The squirrel of Yggdrasil",
    summary:
      "The squirrel who runs up and down the world-tree Yggdrasil, ferrying insults between the eagle at its crown and the dragon Níðhöggr at its root.",
    description: [
      "Ratatoskr ('Drill-tooth') has the cosmos's strangest job: he is the courier of a feud. Up the trunk of Yggdrasil to the unnamed eagle who sits at its top, down again to the dragon Níðhöggr gnawing the deepest root — carrying, Snorri says, 'slanderous words' between them, presumably improved in transit.",
      "He is comic relief with a dark function: the world-tree that holds all things together is being chewed from below and quarrelled over from above, and the squirrel keeps the hostility circulating. Norse cosmology's picture of the world includes, built-in, a small tireless agent of malicious gossip.",
    ],
    facts: [
      { label: "Route", value: "Yggdrasil, crown to root and back" },
      { label: "Cargo", value: "Insults between the eagle and Níðhöggr" },
    ],
    relations: [
      { type: "Tree", slug: "yggdrasil", name: "Yggdrasil" },
      { type: "Client below", slug: "nidhogg", name: "Níðhöggr" },
    ],
    attestations: ["Poetic Edda (Grímnismál)", "Prose Edda (Gylfaginning)"],
    tags: ["squirrel", "yggdrasil", "messenger"],
  },
  {
    slug: "garm",
    name: "Garmr",
    oldNorse: "Garmr",
    pronunciation: "GARM-r",
    category: "creatures",
    kind: "The hound of Hel",
    summary:
      "The blood-chested hound bound before the cave Gnipahellir at the gates of Hel, whose howl announces Ragnarök; he and Týr slay each other.",
    description: [
      "Garmr is the dog of the underworld: bound at Gnipahellir, the cliff-cave at the border of Hel, blood on his chest, baying at the dead who pass. The refrain of Völuspá tolls him like a bell through the poem — 'Now Garmr howls loud before Gnipahellir; the fetter will break and the wolf run free' — his voice the alarm-clock of doomsday.",
      "Grímnismál calls him 'best of hounds' as Odin is best of gods and Yggdrasil best of trees. When the hound of Hel greeted Hermóðr on the road to ransom Baldr, tradition sees Garmr. At Ragnarök he breaks his bond and meets the war-god Týr — the one-handed against the hound — and each kills the other. Whether Garmr began as a doublet of Fenrir or Fenrir of Garmr, the sources are too worn to say.",
    ],
    facts: [
      { label: "Post", value: "Bound before Gnipahellir, at Hel's gate" },
      { label: "Signal", value: "His howl announces Ragnarök" },
      { label: "Fate", value: "He and Týr kill each other" },
    ],
    relations: [
      { type: "Realm", slug: "helheim", name: "Helheimr" },
      { type: "Mutual slayer", slug: "tyr", name: "Týr" },
    ],
    attestations: ["Poetic Edda (Völuspá, Grímnismál)", "Prose Edda (Gylfaginning)"],
    tags: ["hound", "hel", "ragnarok"],
  },
  {
    slug: "audhumla",
    name: "Auðumbla",
    oldNorse: "Auðumbla",
    pronunciation: "OW-thoom-blah",
    category: "creatures",
    kind: "The primordial cow",
    summary:
      "The primeval cow formed from the melting ice of Ginnungagap, who fed the first giant Ymir and licked the ancestor of the gods out of the salty rime.",
    description: [
      "Auðumbla is the second living thing in the cosmos and its first nurturer. Formed from the same dripping rime as Ymir, she fed the primordial giant with four rivers of milk — and fed herself by licking the salty ice-blocks of the void.",
      "Her licking was a slow act of creation: on the first day a man's hair emerged from the ice, on the second a head, on the third the whole of Búri — beautiful, great, and strong — whose grandsons Odin, Vili, and Vé would slay the very giant Auðumbla nursed and build the world from his body. The cow who uncovered the gods appears only in a few sentences of Gylfaginning, yet whole cosmologies hang on her tongue.",
    ],
    facts: [
      { label: "Born of", value: "The melting rime of Ginnungagap" },
      { label: "Fed", value: "Ymir, with four rivers of milk" },
      { label: "Uncovered", value: "Búri, ancestor of the gods, from the ice" },
    ],
    relations: [
      { type: "Nursling", slug: "ymir", name: "Ymir" },
      { type: "Uncovered", name: "Búri, grandfather of Odin" },
    ],
    attestations: ["Prose Edda (Gylfaginning)"],
    tags: ["creation", "cow", "primordial"],
  },
];
