import type { Entity } from "./types";

export const giants: Entity[] = [
  {
    slug: "ymir",
    name: "Ymir",
    oldNorse: "Ymir",
    pronunciation: "EE-mir",
    category: "giants",
    kind: "Primordial jötunn",
    epithets: ["Aurgelmir", "The First Being"],
    summary:
      "The first living being, born of fire meeting ice in the void Ginnungagap; slain by Odin and his brothers, who built the world from his corpse.",
    description: [
      "Before earth, sea, or sky there was only Ginnungagap, the yawning void, with icy Niflheimr to the north and burning Múspellsheimr to the south. Where rime met sparks, the melt quickened into Ymir, ancestor of all jötnar. As he slept, a male and female grew from the sweat of his armpit, and one leg begot a son upon the other. He fed on the milk of the primordial cow Auðumbla, who licked the salty ice into the shape of Búri, grandfather of Odin.",
      "Odin and his brothers Vili and Vé slew Ymir, and the blood of his wounds drowned all the frost-giants but two. Then they carried the corpse to the middle of Ginnungagap and made the world of him: his flesh the earth, his blood the sea, his bones the mountains, his teeth the scree, his skull the dome of the sky — held up by four dwarves named North, South, East, and West — and his brains the clouds. From his eyebrows they walled Midgard, the world of men. Norse cosmology thus begins with a murder, and the world is a body.",
    ],
    facts: [
      { label: "Born of", value: "Fire and ice meeting in Ginnungagap" },
      { label: "Nourished by", value: "The primordial cow Auðumbla" },
      { label: "Slain by", value: "Odin, Vili, and Vé" },
      { label: "Became", value: "The world itself — flesh to earth, blood to sea, skull to sky" },
    ],
    relations: [
      { type: "Slayer", slug: "odin", name: "Odin (with Vili and Vé)" },
      { type: "Nurse", slug: "audhumla", name: "Auðumbla" },
    ],
    attestations: ["Poetic Edda (Völuspá, Vafþrúðnismál, Grímnismál)", "Prose Edda (Gylfaginning)"],
    tags: ["creation", "primordial", "jotunn", "cosmology"],
  },
  {
    slug: "surtr",
    name: "Surtr",
    oldNorse: "Surtr",
    pronunciation: "SOOR-tr",
    category: "giants",
    kind: "Fire-jötunn — lord of Múspellsheimr",
    epithets: ["The Black One", "Fire's Ruler"],
    summary:
      "The fire-giant who has guarded the frontier of Múspellsheimr since before the world began, and who will burn all creation with his flaming sword at Ragnarök.",
    description: [
      "Surtr ('the Black') is older than the gods' order and outside it: he sits at the border of the fire-world Múspellsheimr with a burning sword, and the myths barely mention him again until the end — because he is the end. He is less a character than a horizon: the fire that waits.",
      "At Ragnarök, Surtr rides out at the head of the sons of Múspell; the rainbow bridge Bifröst shatters under their crossing. On the plain of Vígríðr he meets Freyr, who long ago gave away his own sword for love, and cuts him down. Then Surtr flings fire over the whole world, and earth, gods, and stars burn together before the world rises green again from the sea. Iceland's volcanic cave Surtshellir bears his name — early Icelanders knew exactly who lived under their island.",
    ],
    facts: [
      { label: "Realm", value: "Múspellsheimr, the world of fire" },
      { label: "Weapon", value: "A sword brighter than the sun" },
      { label: "Deeds at Ragnarök", value: "Slays Freyr; burns the world" },
    ],
    relations: [
      { type: "Slays", slug: "freyr", name: "Freyr" },
      { type: "Realm", slug: "muspelheim", name: "Múspellsheimr" },
    ],
    attestations: ["Poetic Edda (Völuspá, Vafþrúðnismál)", "Prose Edda (Gylfaginning)"],
    tags: ["fire", "ragnarok", "jotunn", "muspelheim"],
  },
  {
    slug: "aegir",
    name: "Ægir",
    oldNorse: "Ægir",
    pronunciation: "EYE-year",
    category: "giants",
    kind: "Jötunn of the sea — host of the gods",
    epithets: ["Hlér", "Gymir", "The Ale-Brewer"],
    summary:
      "The giant of the deep sea, famed brewer and host whose golden-lit hall welcomes the gods to feast; husband of Rán and father of the nine wave-daughters.",
    description: [
      "Ægir personifies the ocean at its most generous: not the drowning sea but the feasting sea. Though a jötunn, he is on hospitable terms with the Æsir, brewing ale for all the gods in a cauldron a mile deep — the quest to fetch that cauldron from the giant Hymir is the plot of Hymiskviða. In his undersea hall, gleaming gold serves in place of firelight, and the ale-horns fill themselves.",
      "His wife is Rán, who drags the drowned down in her net; their nine daughters are the waves, named for the sea's moods — and in some tellings these nine sisters are the mothers of Heimdallr. It was at Ægir's feast that Loki burst in to insult every god in turn, the poem Lokasenna. Skalds called the sea 'Ægir's jaws' and gold 'Ægir's fire.'",
    ],
    facts: [
      { label: "Domain", value: "The open sea" },
      { label: "Famed for", value: "Brewing and hosting the feasts of the gods" },
      { label: "Hall", value: "Beneath the sea, lit by shining gold" },
    ],
    relations: [
      { type: "Wife", slug: "ran", name: "Rán" },
      { type: "Daughters", name: "The nine waves" },
    ],
    attestations: ["Poetic Edda (Hymiskviða, Lokasenna)", "Prose Edda (Skáldskaparmál)"],
    tags: ["sea", "jotunn", "feast", "brewing"],
  },
  {
    slug: "ran",
    name: "Rán",
    oldNorse: "Rán",
    pronunciation: "RAWN",
    category: "giants",
    kind: "Jötunn goddess of the drowning sea",
    summary:
      "Goddess of the sea's hunger, who catches drowning sailors in her net and keeps them in her hall beneath the waves.",
    description: [
      "Where her husband Ægir is the sea as host, Rán ('Robbery') is the sea as taker. She sweeps a great net through the water and gathers the drowned to her hall; sailors who went down were said to have 'fared to Rán.' Norse seafarers carried gold on voyages so as not to arrive in her hall empty-handed — the drowned who came with gold were well received.",
      "Her net has a history: Loki borrowed it to catch the dwarf Andvari in his fish-shape, the theft that started the cursed gold of the Völsungs on its way. With Ægir she mothered the nine wave-maidens. In Friðþjófs saga, storm-tossed sailors divide their gold so that each man can pay his way in Rán's hall — one of the clearest glimpses of a real Norse belief about death at sea.",
    ],
    facts: [
      { label: "Domain", value: "Drowning, the sea's dead" },
      { label: "Tool", value: "A net that gathers the drowned" },
      { label: "Custom", value: "Sailors carried gold to pay their way in her hall" },
    ],
    relations: [
      { type: "Husband", slug: "aegir", name: "Ægir" },
      { type: "Daughters", name: "The nine waves" },
    ],
    attestations: ["Poetic Edda (Helgi poems)", "Prose Edda (Skáldskaparmál)", "Völsunga saga, Friðþjófs saga"],
    tags: ["sea", "death", "jotunn", "drowned"],
  },
  {
    slug: "angrboda",
    name: "Angrboða",
    oldNorse: "Angrboða",
    pronunciation: "ANG-r-boh-tha",
    category: "giants",
    kind: "Jötunn — mother of monsters",
    epithets: ["Bringer of Grief", "The Hag of Ironwood"],
    summary:
      "The giantess of Ironwood who bore Loki three children — Fenrir, Jörmungandr, and Hel — the monsters of Ragnarök.",
    description: [
      "Angrboða ('she who brings grief') appears in few lines of the sources, but those lines carry the whole doom of the gods: by Loki she is mother of the wolf Fenrir, the World Serpent Jörmungandr, and half-dead Hel. When prophecy warned the gods what these children would become, Odin had them seized — the serpent hurled into the sea, Hel cast down to rule the dead, the wolf raised (and then bound) in Asgard.",
      "She is generally identified with the old giantess of Völuspá who sits in Járnviðr, the Ironwood east of Midgard, breeding the wolf-kin from whom will come Sköll and Hati, the wolves that finally devour the sun and moon. Grief, as her name promises, on a cosmic schedule.",
    ],
    facts: [
      { label: "Home", value: "Járnviðr, the Ironwood" },
      { label: "Children", value: "Fenrir, Jörmungandr, Hel — by Loki" },
    ],
    relations: [
      { type: "Consort", slug: "loki", name: "Loki" },
      { type: "Children", slug: "fenrir", name: "Fenrir, Jörmungandr, Hel" },
    ],
    attestations: ["Poetic Edda (Völuspá, Hyndluljóð)", "Prose Edda (Gylfaginning)"],
    tags: ["jotunn", "ironwood", "monsters", "ragnarok"],
  },
  {
    slug: "thjazi",
    name: "Þjazi",
    oldNorse: "Þjazi",
    pronunciation: "THYAH-tsee",
    category: "giants",
    kind: "Jötunn — the eagle-giant",
    summary:
      "The eagle-giant who abducted Iðunn and her apples of youth, and was burned at Asgard's wall; his eyes became stars, and his daughter Skaði came for redress.",
    description: [
      "Þjazi of Þrymheimr, in eagle-shape, trapped Loki mid-flight and ransomed him for Iðunn and her apples of youth. With the goddess gone the gods began to grey, and Loki was ordered to undo his deal: in Freyja's falcon-cloak he stole into Jötunheimr, turned Iðunn into a nut, and flew for home with the eagle a wingbeat behind. The gods heaped kindling at Asgard's wall and lit it as Loki dived over — Þjazi's wings caught, and the gods killed him where he fell.",
      "His daughter Skaði came armed for vengeance, and the settlement she extracted — a husband from among the gods and her father's eyes flung into the sky as stars — turned the eagle-giant into a constellation and his daughter into a goddess. Þjazi is one of the rare jötnar to be, in a sense, honoured by his killers.",
    ],
    facts: [
      { label: "Hall", value: "Þrymheimr, in the mountains" },
      { label: "Crime", value: "Abducted Iðunn and the apples of youth" },
      { label: "Legacy", value: "His eyes set in the sky as stars" },
    ],
    relations: [
      { type: "Daughter", slug: "skadi", name: "Skaði" },
      { type: "Abducted", slug: "idun", name: "Iðunn" },
    ],
    attestations: ["Prose Edda (Skáldskaparmál)", "Haustlöng", "Poetic Edda (Lokasenna, Hárbarðsljóð)"],
    tags: ["jotunn", "eagle", "idun", "stars"],
  },
  {
    slug: "utgarda-loki",
    name: "Útgarða-Loki",
    oldNorse: "Útgarða-Loki",
    pronunciation: "OOT-gar-tha LOH-kee",
    category: "giants",
    kind: "Jötunn king of illusions",
    epithets: ["Skrýmir"],
    summary:
      "The giant-king of Útgarðr whose contests of illusion humiliated Thor — whose drinking horn was the sea, whose cat was the World Serpent, and whose old nurse was Old Age itself.",
    description: [
      "In the best comic myth in the Eddas, Thor, Loki, and the servant Þjálfi travel to the castle of Útgarða-Loki, king of the giants of the Outer Yards. On the way a giant called Skrýmir — so huge the travellers sleep in the thumb of his glove — snores beside them; Thor strikes his head three times with Mjölnir and the giant wakes asking if a leaf fell on him.",
      "At the castle the travellers are set contests and lose them all: Loki loses an eating race to Logi; Þjálfi loses a footrace to Hugi; Thor fails to drain a drinking horn, cannot lift a grey cat's paw off the floor, and is wrestled to one knee by the crone Elli. Only at their departure does the giant-king dissolve the illusions: Logi was wildfire, Hugi was thought, the horn's far end stood in the ocean — and Thor's drinking made the tides — the cat was Jörmungandr, and Elli was Old Age, who fells everyone. Thor turns with his hammer raised, and the castle vanishes. It is the myths' sly admission that even divine strength loses to fire, thought, sea, and time.",
    ],
    facts: [
      { label: "Stronghold", value: "Útgarðr, in Jötunheimr" },
      { label: "Method", value: "Sjónhverfing — deceiving illusions" },
      { label: "The contests", value: "Wildfire, thought, the sea, the World Serpent, Old Age" },
    ],
    relations: [
      { type: "Humiliated", slug: "thor", name: "Thor" },
    ],
    attestations: ["Prose Edda (Gylfaginning)", "Gesta Danorum (as Utgarthilocus)"],
    tags: ["jotunn", "illusion", "thor", "utgard"],
  },
];
