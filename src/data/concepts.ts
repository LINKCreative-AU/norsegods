import type { Entity } from "./types";

export const concepts: Entity[] = [
  {
    slug: "yggdrasil",
    name: "Yggdrasil",
    oldNorse: "Yggdrasill",
    pronunciation: "IG-drah-sil",
    category: "concepts",
    kind: "The world-tree",
    summary:
      "The immense ash tree at the centre of the cosmos, holding the nine worlds in its branches and roots — watered by the norns, gnawed by a dragon, and the gallows where Odin hung for the runes.",
    description: [
      "Yggdrasil is the axis of everything: an evergreen ash whose branches spread over all worlds and reach above heaven. Three roots anchor it — one among the gods by the well of Urðr, where the norns water the tree with white clay and holy water and the gods hold their daily court; one among the frost-giants by Mímir's well of wisdom; one over Niflheimr, where the spring Hvergelmir boils and Níðhöggr gnaws from below.",
      "The tree is an ecosystem of the cosmos's tensions: an eagle at the crown, the dragon at the root, the squirrel Ratatoskr running insults between them; four harts biting the new shoots; more serpents beneath than any fool imagines, says Grímnismál — 'the ash of Yggdrasil suffers hardship more than men know.' It holds the worlds together while everything chews on it, which is as good a summary of Norse cosmology as exists.",
      "Its name means 'Yggr's horse' — Yggr, 'the Terrible One,' is Odin, and the horse is the gallows he rode: nine nights hanged, wounded with his own spear, himself to himself, to seize the runes. At Ragnarök the ash shudders and groans but is never said to fall — and inside its wood the two humans Líf and Lífþrasir shelter through the fire to repeople the new world. The tree survives its gods.",
    ],
    facts: [
      { label: "Species", value: "Ash, evergreen" },
      { label: "Three roots", value: "To Urðr's well, Mímir's well, and Hvergelmir" },
      { label: "Name", value: "'Odin's horse' — the gallows of his rune-sacrifice" },
      { label: "At Ragnarök", value: "Shakes but stands; shelters the last two humans" },
    ],
    relations: [
      { type: "Hanged upon it", slug: "odin", name: "Odin" },
      { type: "Gnawed by", slug: "nidhogg", name: "Níðhöggr" },
      { type: "Messenger", slug: "ratatoskr", name: "Ratatoskr" },
      { type: "Tended by", slug: "norns", name: "The Norns" },
    ],
    attestations: ["Poetic Edda (Völuspá, Grímnismál, Hávamál)", "Prose Edda (Gylfaginning)"],
    tags: ["world-tree", "cosmology", "axis", "runes"],
  },
  {
    slug: "valhalla",
    name: "Valhalla",
    oldNorse: "Valhöll",
    pronunciation: "val-HALL-ah",
    category: "concepts",
    kind: "Odin's hall of the slain",
    summary:
      "Odin's golden hall roofed with shields, where the valkyries bring half the battle-slain to fight all day, be healed at dusk, and feast all night — an army in training for Ragnarök.",
    description: [
      "Valhöll, 'the hall of the slain,' rises in Asgard golden and unmistakable: rafters of spears, a roof of shields, mail-coats strewn on the benches, a wolf hanging over the western door and an eagle above it. It has five hundred and forty doors, and through each, eight hundred warriors will march out abreast when the wolf comes — Valhalla is not a reward so much as a barracks with excellent catering.",
      "The chosen — the einherjar — are picked from the battlefield by Odin's valkyries. Each day they arm themselves and cut each other down in the courtyard; at evening they rise whole and ride home to drink. The mead flows endless from the udders of the goat Heiðrún, who grazes the leaves of the tree Læraðr on the roof; the cook Andhrímnir boils the boar Sæhrímnir, who is whole again each night. Odin himself eats nothing, giving his meat to his wolves and living on wine alone, watching his army grow.",
      "Yet the arithmetic is grim and the gods know it: however many muster, the wolf still swallows Odin. Valhalla shaped how the Norse died more than how they lived — kings were burned with weapons to arrive equipped, and the other half of the slain, never forget, go to Freyja's field Fólkvangr, a detail the Valhalla legend has nearly erased.",
    ],
    facts: [
      { label: "Location", value: "Glaðsheimr, in Asgard" },
      { label: "Architecture", value: "Spear-rafters, shield-roof, 540 doors" },
      { label: "Provisions", value: "The boar Sæhrímnir, reborn nightly; mead from the goat Heiðrún" },
      { label: "Purpose", value: "Mustering the einherjar for Ragnarök" },
    ],
    relations: [
      { type: "Lord", slug: "odin", name: "Odin" },
      { type: "Choosers", slug: "valkyries", name: "The Valkyries" },
      { type: "Its army", slug: "einherjar", name: "The Einherjar" },
    ],
    attestations: ["Poetic Edda (Grímnismál, Völuspá)", "Prose Edda (Gylfaginning)", "Eiríksmál, Hákonarmál"],
    tags: ["afterlife", "odin", "warriors", "asgard"],
  },
  {
    slug: "valkyries",
    name: "Valkyries",
    oldNorse: "Valkyrjur",
    pronunciation: "VAL-ker-yur",
    category: "concepts",
    kind: "Choosers of the slain",
    summary:
      "Odin's warrior-women who ride over battlefields deciding who falls and who lives, and carry the chosen dead to Valhalla — where they serve them mead.",
    description: [
      "The valkyries ('choosers of the slain') are Odin's agency on the battlefield: armoured women riding through air and over sea, granting victory and death according to the Allfather's ledger. In Valhalla they pour ale for the warriors they harvested — Grímnismál names thirteen doing just that, with names like Hildr ('Battle'), Göndul, Skögul, and Geirskögul ('Spear-Battle').",
      "The poetry gives them two faces. The grand one: in Hákonarmál, Göndul and Skögul come for a dying king 'sitting on horseback, with helmets and shields,' courteous and terrible. The dark one: in Darraðarljóð, twelve valkyries weave the fate of a battle on a loom strung with men's guts, weighted with severed heads, singing as they work. The romantic one came later still: valkyries like Brynhildr and Sigrdrífa are punished by Odin for choosing against his will, put to sleep behind walls of shields or fire, and loved by mortal heroes — the swan-maiden brides of legend.",
      "Between grimness and glamour, they encode a real idea: that battle-luck was a woman's hand on the scales, and that dying well meant being chosen.",
    ],
    facts: [
      { label: "Meaning", value: "Valkyrja — 'chooser of the slain'" },
      { label: "Duties", value: "Deciding the fallen; escorting them; serving mead in Valhalla" },
      { label: "Named", value: "Hildr, Göndul, Skögul, Sigrdrífa, Brynhildr, and more" },
    ],
    relations: [
      { type: "Master", slug: "odin", name: "Odin" },
      { type: "Destination", slug: "valhalla", name: "Valhalla" },
    ],
    attestations: ["Poetic Edda (Grímnismál, Völuspá, Helgi poems, Sigrdrífumál)", "Prose Edda", "Darraðarljóð (Njáls saga)"],
    tags: ["battle", "fate", "odin", "warrior-women"],
  },
  {
    slug: "norns",
    name: "The Norns",
    oldNorse: "Nornir",
    pronunciation: "NOR-nir",
    category: "concepts",
    kind: "The fates",
    summary:
      "The three maidens — Urðr, Verðandi, and Skuld — who dwell at the well beneath Yggdrasil and carve the fates of all beings, gods included; even Odin cannot appeal their verdicts.",
    description: [
      "From a hall by the well of Urðr, beneath the world-tree, three maidens 'mighty in wisdom' set the laws of fate: Urðr ('What Became'), Verðandi ('What Is Becoming'), and Skuld ('What Shall Be' — or 'Debt'). They carve fates on wood, says Völuspá; they water the world-tree daily with the well's white clay and holy water. Their arrival in the mythic timeline ends the gods' golden age — Völuspá's gods play chess in the grass, 'until three came, the maidens from Jötunheimr,' and nothing is carefree again.",
      "Fate (ørlög, 'the primal law') is the deepest thing in the Norse imagination: deeper than the gods, who are themselves fated and know their own deaths in advance. What the norns have spoken, no one — not Odin, not sacrifice, not cunning — can amend; the only freedom left is the manner of meeting it, which is why Norse heroism is a style of dying. Beyond the great three, lesser norns attend every birth to shape the child's life, and a hard life was simply called 'the judgment of the norns.'",
    ],
    facts: [
      { label: "The three", value: "Urðr, Verðandi, Skuld — became, becoming, shall-be" },
      { label: "Seat", value: "The well of Urðr, beneath Yggdrasil" },
      { label: "Work", value: "Carving fates; watering the world-tree" },
      { label: "Jurisdiction", value: "All beings — gods included, without appeal" },
    ],
    relations: [
      { type: "Tend", slug: "yggdrasil", name: "Yggdrasil" },
    ],
    attestations: ["Poetic Edda (Völuspá, Fáfnismál)", "Prose Edda (Gylfaginning)"],
    tags: ["fate", "wyrd", "well", "three"],
  },
  {
    slug: "einherjar",
    name: "Einherjar",
    oldNorse: "Einherjar",
    pronunciation: "AYN-her-yar",
    category: "concepts",
    kind: "The chosen slain",
    summary:
      "The battle-dead chosen for Valhalla, who fight and fall each day and feast whole each night — Odin's army in endless rehearsal for a battle they are fated to lose.",
    description: [
      "The einherjar ('those who fight alone', or 'the unique warriors') are the elect of the Norse afterlife: warriors picked from the slain by the valkyries and mustered in Valhalla. Their routine never varies — arm at dawn, hew each other down in the courtyard, rise unwounded at dusk, ride home together, and drink the night through on pork from the deathless boar Sæhrímnir and mead from the goat Heiðrún. Death has already happened to them; what remains is practice.",
      "Vafþrúðnismál calls them out plainly: they are training for the day the wolf comes. At Ragnarök they march out of Valhalla's five hundred and forty doors, eight hundred abreast through each, and fight beside the gods on Vígríðr — and lose, because the prophecy says so, and they know it, and they go anyway. The einherjar are the purest expression of the Norse ethic: the certainty of defeat is not a reason to stay home. Skaldic funeral poems like Eiríksmál show Odin explaining why he lets great kings die young: he needs them mustered, 'for none can know when the grey wolf comes.'",
    ],
    facts: [
      { label: "Chosen by", value: "The valkyries, from the battle-slain" },
      { label: "Routine", value: "Fight and fall by day; rise and feast by night" },
      { label: "Purpose", value: "Odin's army at Ragnarök — a battle they know they lose" },
    ],
    relations: [
      { type: "Hall", slug: "valhalla", name: "Valhalla" },
      { type: "Commander", slug: "odin", name: "Odin" },
      { type: "Chosen by", slug: "valkyries", name: "The Valkyries" },
    ],
    attestations: ["Poetic Edda (Vafþrúðnismál, Grímnismál)", "Prose Edda (Gylfaginning)", "Eiríksmál"],
    tags: ["afterlife", "warriors", "valhalla", "ragnarok"],
  },
  {
    slug: "seidr",
    name: "Seiðr",
    oldNorse: "Seiðr",
    pronunciation: "SAY-thr",
    category: "concepts",
    kind: "Norse sorcery",
    summary:
      "The ecstatic magic of fate — prophecy, mind-bending, and misfortune-weaving — taught by Freyja, practised by Odin at the cost of his honour, and worked by staff-bearing seeresses called völur.",
    description: [
      "Seiðr is the old magic of seeing and steering fate: entering trance to learn what is coming, and reaching into the weave to snag an enemy's luck, madden his mind, or still the sea. It came from the Vanir — Freyja taught it to the Æsir — and its human practitioners were above all the völur, staff-carrying seeresses who travelled between farms; the völva of Eiríks saga rauða is described down to her catskin gloves, brass-bound staff, and the high platform she prophesied from, with a choir singing the spirit-songs around her.",
      "Its scandal is at the heart of the pantheon: seiðr was ergi — unmanly, shameful for men to practise — and Odin practises it anyway. Loki flings it at him in Lokasenna ('you beat on drums like a witch... that I call perversion'), and Saxo has Odin exiled for it. That the Allfather trades honour for power is perfectly in character: he traded an eye for wisdom and hung on a tree for runes; seiðr is the same bargain with shame as the currency. Archaeology keeps finding the völur: rich female graves across Scandinavia holding iron and bronze staffs, amulets, and henbane seeds.",
    ],
    facts: [
      { label: "Powers", value: "Prophecy, mind-affecting, luck-weaving, weather" },
      { label: "Teacher", value: "Freyja, of the Vanir" },
      { label: "Practitioners", value: "The völur — staff-bearing seeresses; and Odin, at cost of honour" },
      { label: "Stigma", value: "Ergi — shameful for men" },
    ],
    relations: [
      { type: "Mistress", slug: "freyja", name: "Freyja" },
      { type: "Shamed practitioner", slug: "odin", name: "Odin" },
    ],
    attestations: ["Poetic Edda (Völuspá, Lokasenna)", "Heimskringla (Ynglinga saga)", "Eiríks saga rauða", "staff-graves across Scandinavia"],
    tags: ["magic", "prophecy", "volva", "freyja"],
  },
  {
    slug: "bifrost",
    name: "Bifröst",
    oldNorse: "Bifröst",
    pronunciation: "BIV-rost",
    category: "concepts",
    kind: "The rainbow bridge",
    summary:
      "The burning three-coloured bridge between earth and Asgard — best of bridges, guarded by Heimdallr, fated to shatter under the riders of Múspell at Ragnarök.",
    description: [
      "The gods built Bifröst ('the swaying road' or 'shimmering path') from three colours and more craft than any other work, and it is still the best of bridges, says Grímnismál — humans see it as the rainbow. The red in it is burning fire, a defence: the frost-giants cannot cross flame. Every day the gods ride over it to their court at the well of Urðr — all but Thor, who is too heavy for it, or too charged, and wades the rivers instead.",
      "At its top stands Himinbjörg, where Heimdallr keeps his watch over the one road an army could take. And yet: 'that bridge will break,' Snorri says plainly, 'when the sons of Múspell ride over it' — nothing in this world, he adds, can be relied on when Múspell's sons are hunting. The gods built their best work knowing its load-limit and posted their best watchman on it anyway; Bifröst in one image is the whole Norse posture toward doom.",
    ],
    facts: [
      { label: "Appearance", value: "The rainbow — three colours, the red burning fire" },
      { label: "Guardian", value: "Heimdallr, at Himinbjörg" },
      { label: "Exception", value: "Thor may not cross; he wades the rivers" },
      { label: "Fate", value: "Shatters under the sons of Múspell at Ragnarök" },
    ],
    relations: [
      { type: "Guardian", slug: "heimdall", name: "Heimdallr" },
      { type: "Connects", slug: "asgard", name: "Midgard and Asgard" },
    ],
    attestations: ["Poetic Edda (Grímnismál, Fáfnismál)", "Prose Edda (Gylfaginning)"],
    tags: ["bridge", "rainbow", "heimdall", "asgard"],
  },
  {
    slug: "runes",
    name: "Runes",
    oldNorse: "Rúnar",
    pronunciation: "ROO-nar",
    category: "concepts",
    kind: "The sacred script",
    summary:
      "The angular letters of the North — a working alphabet and a magical technology at once, won by Odin in his nine-night hanging on the world-tree.",
    description: [
      "Rúnar means 'secrets,' and the runes were always double: a practical script for carving names on combs and prices on trade-tags, and a technology of power — for victory, healing, sea-calming, speech-loosening, and curse. The alphabet is called the futhark after its first six letters; the older, 24-letter futhark served the whole Germanic world, and the Viking Age pared it to sixteen. Their angular forms are knife-shapes: made to be cut across the grain of wood, not drawn.",
      "Their myth is the mythology's core scene: Odin hung nine nights on the windy tree, spear-wounded, given to himself, without bread or horn — 'I peered downward, I took up the runes, screaming I took them, and fell back.' Wisdom in the North is bought, never given. Sigrdrífumál teaches victory-runes carved on sword-hilts and ale-runes against betrayal, and Egils saga shows Egill detecting poison by reddening runes on the horn — and correcting a botched healing-carving with the professional's warning: 'no man should carve runes unless he can read them well.'",
      "Some four thousand runic inscriptions survive, from spearheads and gold horns to the graffiti a Viking cut into a Hagia Sophia parapet — 'Halfdan carved these runes' — the alphabet Odin screamed for, used across a thousand years for everything from prayer to price-tag.",
    ],
    facts: [
      { label: "Name", value: "Rún — 'secret, whisper'" },
      { label: "Alphabets", value: "Elder futhark (24 letters); younger futhark (16)" },
      { label: "Won by", value: "Odin, hanging nine nights on Yggdrasil" },
      { label: "Surviving inscriptions", value: "≈4,000, across a millennium" },
    ],
    relations: [
      { type: "Winner", slug: "odin", name: "Odin" },
      { type: "The gallows", slug: "yggdrasil", name: "Yggdrasil" },
    ],
    attestations: ["Poetic Edda (Hávamál, Sigrdrífumál)", "Egils saga", "≈4,000 runic inscriptions"],
    tags: ["writing", "magic", "odin", "futhark"],
  },
];
