import type { Entity } from "./types";

export const moreCreatures: Entity[] = [
  {
    slug: "skoll-and-hati",
    name: "Sköll and Hati",
    oldNorse: "Sköll ok Hati",
    pronunciation: "SKUL, HAH-tee",
    category: "creatures",
    kind: "The wolves that chase the sun and moon",
    summary:
      "Two wolves of the Ironwood brood who chase the sun and moon across the sky every day — and catch them at Ragnarök.",
    description: [
      "Why do the sun and moon hurry? Because they are prey. Sköll ('Mockery') runs behind the sun's chariot, Hati Hróðvitnisson ('Hate, son of the famed wolf') ahead of the moon, and every eclipse is teeth closing. In old Scandinavia people made noise at eclipses to scare the wolf off — solar rescue as public duty.",
      "The wolves are of the Ironwood line, bred by the old giantess of Járnviðr, and Hati's patronymic makes him Fenrir's son. At Ragnarök the chase ends: sun and moon are swallowed, and the sky goes dark for the last battle. But the sun, Vafþrúðnismál promises, has already borne a daughter as fair as herself, who will walk her mother's road in the new sky — the chase ends; the light continues.",
    ],
    facts: [
      { label: "Prey", value: "Sköll hunts the sun; Hati hunts the moon" },
      { label: "Lineage", value: "The Ironwood brood; Hati is Fenrir's son" },
      { label: "At Ragnarök", value: "They catch — and the sky goes dark" },
    ],
    relations: [
      { type: "Sire", slug: "fenrir", name: "Fenrir" },
      { type: "Bred by", slug: "angrboda", name: "The hag of Ironwood" },
    ],
    attestations: ["Poetic Edda (Grímnismál, Vafþrúðnismál)", "Prose Edda (Gylfaginning)"],
    tags: ["wolves", "sun", "moon", "ragnarok"],
  },
  {
    slug: "geri-and-freki",
    name: "Geri and Freki",
    oldNorse: "Geri ok Freki",
    pronunciation: "GAIR-ee, FRECK-ee",
    category: "creatures",
    kind: "Odin's wolves",
    summary:
      "'Greedy' and 'Ravenous' — the two wolves who flank Odin's throne and eat all his food, since the Allfather lives on wine alone.",
    description: [
      "At the feast in Valhalla, Odin does not eat. Every dish set before him goes to the two wolves at his feet, Geri and Freki — both names meaning, more or less, 'the greedy one' — while the god takes only wine. It is a small tableau with a cold logic: the god of the battle-dead keeps wolves, the battlefield's cleanup crew, as his table companions.",
      "With the ravens Huginn and Muninn above and the wolves below, Odin sits at the centre of a carrion ecosystem — thought, memory, and appetite. Warriors called wolves 'Viðrir's hounds' (Odin's hounds), and to feed them meant to make corpses. Wolf and raven following an army were Odin's outriders, and the poets never let anyone forget it.",
    ],
    facts: [
      { label: "Names", value: "Both mean 'greedy, ravenous'" },
      { label: "Diet", value: "Everything served to Odin, who drinks only wine" },
    ],
    relations: [
      { type: "Master", slug: "odin", name: "Odin" },
      { type: "Fellow companions", slug: "huginn-and-muninn", name: "Huginn and Muninn" },
    ],
    attestations: ["Poetic Edda (Grímnismál)", "Prose Edda (Gylfaginning)"],
    tags: ["wolves", "odin", "valhalla"],
  },
  {
    slug: "gullinbursti",
    name: "Gullinbursti",
    oldNorse: "Gullinbursti",
    pronunciation: "GOOL-in-burst-ee",
    category: "creatures",
    kind: "Freyr's golden boar",
    summary:
      "The dwarf-forged boar with bristles of living gold that shine in the dark, who runs through air and over sea faster than any horse.",
    description: [
      "Gullinbursti ('Golden-Bristles') came out of Sindri's forge in the great wager against Loki: a pigskin went into the fire, and a living boar of gold came out. He outruns any horse, crosses air and water alike, and his bristles light the darkest night — a vehicle, a lamp, and an emblem in one animal.",
      "Freyr rides him, or drives him harnessed to his chariot — he carried the god to Baldr's funeral. The boar was sacred to the Vanir generally: warriors wore boar-crested helmets for protection, the Yule boar was sworn on and sacrificed at midwinter, and today's Swedish Christmas ham is, at the far end of a very long thread, Gullinbursti's table portion.",
    ],
    facts: [
      { label: "Forged by", value: "Sindri (with Brokkr), from a pigskin" },
      { label: "Powers", value: "Faster than horses, over sea and air; glowing bristles" },
      { label: "Legacy", value: "Boar-helmets, the Yule boar, the Christmas ham" },
    ],
    relations: [
      { type: "Rider", slug: "freyr", name: "Freyr" },
      { type: "Forgers", slug: "brokkr-and-sindri", name: "Brokkr and Sindri" },
    ],
    attestations: ["Prose Edda (Skáldskaparmál, Gylfaginning)", "Húsdrápa"],
    tags: ["boar", "freyr", "gold", "dwarves"],
  },
  {
    slug: "heidrun",
    name: "Heiðrún",
    oldNorse: "Heiðrún",
    pronunciation: "HAYTH-roon",
    category: "creatures",
    kind: "The mead-goat of Valhalla",
    summary:
      "The goat who stands on Valhalla's roof eating the tree Læraðr — and fills a vat with clear mead enough for every warrior, every day, forever.",
    description: [
      "Valhalla's bar has one supplier: a goat. Heiðrún stands on the hall's roof browsing the foliage of the tree Læraðr, and from her udders runs not milk but shining mead — a vatful so large that all the einherjar drink their fill and it never runs dry. The Norse afterlife solved logistics before it solved anything else.",
      "Beside her the hart Eikþyrnir grazes the same tree, and from his antlers water drips into Hvergelmir, feeding all the world's rivers — the roof of the warriors' hall quietly irrigating the cosmos. Practical note from the myths: paradise is a place where the drink pours itself.",
    ],
    facts: [
      { label: "Station", value: "The roof of Valhalla, browsing the tree Læraðr" },
      { label: "Produces", value: "Endless clear mead for the einherjar" },
    ],
    relations: [
      { type: "Supplies", slug: "valhalla", name: "Valhalla" },
      { type: "Drinkers", slug: "einherjar", name: "The Einherjar" },
    ],
    attestations: ["Poetic Edda (Grímnismál)", "Prose Edda (Gylfaginning)"],
    tags: ["goat", "mead", "valhalla"],
  },
  {
    slug: "saehrimnir",
    name: "Sæhrímnir",
    oldNorse: "Sæhrímnir",
    pronunciation: "SIGH-hrim-nir",
    category: "creatures",
    kind: "The ever-renewing boar of Valhalla",
    summary:
      "The boar cooked every day in Valhalla to feed the chosen slain — and whole again every evening, ready to be eaten forever.",
    description: [
      "Every day the cook Andhrímnir boils the boar Sæhrímnir in the great cauldron Eldhrímnir, and every einherji in Valhalla eats his fill; every evening the boar is whole again. 'It is the best of meats,' Grímnismál notes, then adds the mythology's driest aside: 'few know what the einherjar feed on.'",
      "The boar, the cook, and the kettle all share the element -hrímnir, 'the sooty one' — a matched kitchen set for eternity. Sæhrímnir is the food-supply answer to Heiðrún's drink supply: the afterlife of warriors runs on one immortal pig and one unkillable goat, resurrection applied first of all to dinner.",
    ],
    facts: [
      { label: "Cycle", value: "Boiled daily by Andhrímnir in Eldhrímnir; whole by night" },
      { label: "Rank", value: "'Best of meats'" },
    ],
    relations: [
      { type: "Feeds", slug: "einherjar", name: "The Einherjar" },
      { type: "Served in", slug: "valhalla", name: "Valhalla" },
    ],
    attestations: ["Poetic Edda (Grímnismál)", "Prose Edda (Gylfaginning)"],
    tags: ["boar", "feast", "valhalla"],
  },
  {
    slug: "tanngrisnir-and-tanngnjostr",
    name: "Tanngrisnir and Tanngnjóstr",
    oldNorse: "Tanngrisnir ok Tanngnjóstr",
    pronunciation: "TAN-gris-nir, TAN-gnyost-r",
    category: "creatures",
    kind: "Thor's chariot goats",
    summary:
      "'Teeth-Barer' and 'Teeth-Grinder', the goats who pull Thor's chariot across the sky — and can be eaten at night and resurrected by hammer in the morning.",
    description: [
      "Thunder is goat-drawn: Thor's chariot is pulled by Tanngrisnir and Tanngnjóstr, whose hooves and wheels roll the storm across the sky. Their most useful property is culinary: Thor can slaughter and eat them for supper, and if the bones are laid unbroken on the hides, a touch of Mjölnir at dawn brings them back bleating.",
      "Once, guesting at a farmer's house, Thor shared the meal — and the boy Þjálfi split a leg-bone for the marrow. Next morning one goat limped, the god's knuckles whitened on the hammer, and the terrified family bought peace with their children: Þjálfi and Röskva serve Thor still. Moral, as practical as the myths get: eat what a god serves you exactly the way he tells you to.",
    ],
    facts: [
      { label: "Names", value: "'Teeth-Barer' and 'Teeth-Grinder'" },
      { label: "Trick", value: "Eaten at night, hammer-revived at dawn — bones unbroken" },
      { label: "The limp", value: "Þjálfi's marrow-theft; paid for in servitude" },
    ],
    relations: [{ type: "Driver", slug: "thor", name: "Thor" }],
    attestations: ["Prose Edda (Gylfaginning)", "Poetic Edda (Hymiskviða)"],
    tags: ["goats", "thor", "chariot", "resurrection"],
  },
  {
    slug: "svadilfari",
    name: "Svaðilfari",
    oldNorse: "Svaðilfari",
    pronunciation: "SVATH-il-far-ee",
    category: "creatures",
    kind: "The wall-builder's stallion",
    summary:
      "The stallion who hauled stone so tirelessly that Asgard's wall nearly cost the gods the sun, the moon, and Freyja — until a mare with Loki's eyes trotted out of the woods.",
    description: [
      "The unnamed builder who offered to wall Asgard in one winter had a secret asset: his stallion Svaðilfari, who hauled boulders by night that doubled the day's work. Three days from the deadline the wall was all but done, and the gods faced paying a giant the sun, the moon, and Freyja — and turned, as ever, on the advisor whose fault it was.",
      "Loki's solution was thorough. A mare ran from the forest, whinnying; Svaðilfari snapped his traces and followed; the builder's deadline died in the underbrush. The builder raged into his giant's shape and met Mjölnir. Some months later Loki returned from an awkward absence with a grey, eight-legged foal — Sleipnir, best of horses, whom Odin rides between the worlds. The greatest steed in mythology exists because a horse got distracted at work.",
    ],
    facts: [
      { label: "Owner", value: "The giant builder of Asgard's wall" },
      { label: "Feat", value: "Hauled the wall's stone almost to completion" },
      { label: "Offspring", value: "Sleipnir — by Loki, in mare's shape" },
    ],
    relations: [
      { type: "Foal", slug: "sleipnir", name: "Sleipnir" },
      { type: "Lured by", slug: "loki", name: "Loki" },
      { type: "The story", slug: "building-of-asgards-wall", name: "The Building of Asgard's Wall" },
    ],
    attestations: ["Prose Edda (Gylfaginning)"],
    tags: ["horse", "wall", "loki", "sleipnir"],
  },
  {
    slug: "fafnir",
    name: "Fáfnir",
    oldNorse: "Fáfnir",
    pronunciation: "FAV-nir",
    category: "creatures",
    kind: "The dragon of the cursed gold",
    summary:
      "The dwarf's son who murdered his father for Andvari's cursed hoard and became a dragon guarding it on the Gnita-heath — slain from below by Sigurðr.",
    description: [
      "Fáfnir was not born a dragon; he became one, and that is the story's engine. Son of the magician Hreiðmarr, he took the weregild the gods paid for his brother Otr — the dwarf Andvari's gold, cursed ring and all — by killing his father, then carried the hoard to Gnita-heath, put on an 'ægishjálmr,' the helm of terror, and lay down on the gold until his shape matched his heart: the serpent-dragon of the North.",
      "Sigurðr, coached by Fáfnir's own brother Reginn, dug a pit in the dragon's track to the water and drove the sword Gram up into the soft belly. The dying dragon's dialogue with his killer is eerie and courtly: he warns the boy, truthfully, that the gold dooms everyone who holds it. Roasting the heart, Sigurðr burnt his thumb, sucked it — and understood the speech of birds, who told him Reginn planned murder. Fáfnir on his hoard is the ancestor of every dragon on gold since, Tolkien's Smaug most gratefully of all.",
    ],
    facts: [
      { label: "Origin", value: "A dwarf's son, transformed by greed and the ægishjálmr" },
      { label: "Hoard", value: "Andvari's cursed gold, on Gnita-heath" },
      { label: "Death", value: "Gram, thrust from a pit into his belly" },
    ],
    relations: [
      { type: "Slayer", slug: "sigurd", name: "Sigurðr" },
      { type: "Brother", slug: "regin", name: "Reginn" },
      { type: "The gold", slug: "andvaranaut", name: "Andvaranaut" },
    ],
    attestations: ["Poetic Edda (Fáfnismál)", "Völsunga saga", "Prose Edda (Skáldskaparmál)"],
    tags: ["dragon", "gold", "curse", "sigurd"],
  },
  {
    slug: "eagle-of-yggdrasil",
    name: "The Eagle of Yggdrasil",
    oldNorse: "—",
    category: "creatures",
    kind: "The unnamed eagle at the world-tree's crown",
    summary:
      "The wise, nameless eagle perched at the top of Yggdrasil, with the hawk Veðrfölnir sitting between its eyes — locked in an eternal insult-feud with the dragon below.",
    description: [
      "At the very top of the world-tree sits an eagle whom the sources, maddeningly, never name — only credit with 'knowledge of many things.' Between its eyes perches a hawk, Veðrfölnir ('storm-pale'), a lookout upon a lookout, one of the strangest and least explained images in the cosmology.",
      "The eagle's one recorded activity is the feud: the squirrel Ratatoskr runs the trunk carrying insults between the eagle above and Níðhöggr gnawing below. Wisdom at the crown, malice at the root, and a rodent monetising the traffic — the world-tree's ecosystem, and possibly the first flame war.",
    ],
    facts: [
      { label: "Perch", value: "The crown of Yggdrasil" },
      { label: "Companion", value: "The hawk Veðrfölnir, between its eyes" },
      { label: "Feud", value: "With Níðhöggr, via Ratatoskr" },
    ],
    relations: [
      { type: "Tree", slug: "yggdrasil", name: "Yggdrasil" },
      { type: "Enemy", slug: "nidhogg", name: "Níðhöggr" },
      { type: "Courier", slug: "ratatoskr", name: "Ratatoskr" },
    ],
    attestations: ["Poetic Edda (Grímnismál)", "Prose Edda (Gylfaginning)"],
    tags: ["eagle", "yggdrasil", "wisdom"],
  },
  {
    slug: "brokkr-and-sindri",
    name: "Brokkr and Sindri",
    oldNorse: "Brokkr ok Sindri",
    pronunciation: "BROK-kr, SIN-dree",
    category: "creatures",
    kind: "Dwarves — forgers of Mjölnir",
    summary:
      "The dwarf brothers who bet Loki his head that they could out-forge the sons of Ivaldi — and won with Mjölnir, Draupnir, and Gullinbursti.",
    description: [
      "When Loki, freshly forgiven for shearing Sif, boasted that the sons of Ivaldi's treasures could never be equalled, the dwarf Brokkr wagered Loki's head that his brother Sindri could do better. Sindri worked the forge while Brokkr pumped the bellows, and Loki, hedging his bet, became a fly: he bit Brokkr's hand during the boar, his neck during the ring, and his eyelid — drawing blood — during the hammer. Only the last bite told: Mjölnir's handle came out short.",
      "The gods judged the hammer the greatest treasure ever forged and the brothers winners. Loki saved his neck with a lawyer's parry — the wager was for his head, and no part of his neck might be touched — so Brokkr contented himself with sewing the trickster's lips shut with an awl. The scars, presumably, healed; the grudge did not.",
    ],
    facts: [
      { label: "The wager", value: "Loki's head, against the sons of Ivaldi's work" },
      { label: "Forged", value: "Gullinbursti, Draupnir, and Mjölnir" },
      { label: "Settlement", value: "Loki's lips sewn shut with an awl" },
    ],
    relations: [
      { type: "Masterwork", slug: "mjolnir", name: "Mjölnir" },
      { type: "Duped by", slug: "loki", name: "Loki (on a technicality)" },
      { type: "Rivals", slug: "sons-of-ivaldi", name: "The Sons of Ivaldi" },
    ],
    attestations: ["Prose Edda (Skáldskaparmál)"],
    tags: ["dwarves", "forge", "mjolnir", "wager"],
  },
  {
    slug: "sons-of-ivaldi",
    name: "The Sons of Ivaldi",
    oldNorse: "Ívalda synir",
    pronunciation: "EE-val-dee",
    category: "creatures",
    kind: "Dwarves — forgers of the first treasures",
    summary:
      "The dwarf brothers who forged Sif's golden hair, the spear Gungnir, and the folding ship Skíðblaðnir — the first half of the gods' armoury.",
    description: [
      "After Loki sheared Sif's hair, it was to the sons of Ivaldi he crawled for a fix — and they over-delivered: hair of living gold, and, unasked, the spear Gungnir that never misses its thrust and the ship Skíðblaðnir that folds like a napkin and always finds its wind. Three of the pantheon's six great treasures came off their bench in one commission.",
      "Then Loki's boasting about them triggered the wager with Brokkr and Sindri that produced the other three — so the brothers are, indirectly, responsible for Mjölnir too. The sources never name them individually or say what became of them: the mythology's greatest artisans are a job title, which is roughly how the Norse treated smiths — indispensable, uncanny, and anonymous.",
    ],
    facts: [
      { label: "Commission", value: "Sif's golden hair — plus Gungnir and Skíðblaðnir, unasked" },
      { label: "Legacy", value: "Their work provoked the wager that forged Mjölnir" },
    ],
    relations: [
      { type: "Masterwork", slug: "gungnir", name: "Gungnir" },
      { type: "Masterwork", slug: "skidbladnir", name: "Skíðblaðnir" },
      { type: "Rivals", slug: "brokkr-and-sindri", name: "Brokkr and Sindri" },
    ],
    attestations: ["Prose Edda (Skáldskaparmál)", "Poetic Edda (Grímnismál)"],
    tags: ["dwarves", "forge", "treasures"],
  },
  {
    slug: "andvari",
    name: "Andvari",
    oldNorse: "Andvari",
    pronunciation: "AND-var-ee",
    category: "creatures",
    kind: "Dwarf — owner of the cursed gold",
    summary:
      "The dwarf who lived as a pike beneath a waterfall, hoarding gold — until Loki netted him, stripped him of everything, and took the ring he cursed on the spot.",
    description: [
      "Andvari kept his wealth the sensible way: as a fish. Living in pike-shape beneath his waterfall, he was safe from everyone except a god with Rán's drowning-net and a debt to pay. Loki, needing gold to ransom the gods for the killing of Otr, netted the pike, and squeezed the dwarf for every ounce — including the small ring Andvaranaut with which Andvari hoped to 'breed back' his fortune, for it was a ring that begets gold.",
      "Denied even that, the dwarf spoke the curse that powers the entire Völsung tragedy: the ring and the gold shall be the death of whoever owns them. He then vanishes from the story, the only holder of the hoard to survive it — proof that in Norse economics, the best position in a cursed asset is early and involuntary divestment.",
    ],
    facts: [
      { label: "Disguise", value: "A pike beneath a waterfall" },
      { label: "Robbed by", value: "Loki, with Rán's net" },
      { label: "Legacy", value: "The curse on Andvaranaut and the hoard" },
    ],
    relations: [
      { type: "Robber", slug: "loki", name: "Loki" },
      { type: "The ring", slug: "andvaranaut", name: "Andvaranaut" },
      { type: "The story", slug: "otters-ransom", name: "The Otter's Ransom" },
    ],
    attestations: ["Poetic Edda (Reginsmál)", "Völsunga saga", "Prose Edda (Skáldskaparmál)"],
    tags: ["dwarf", "gold", "curse", "pike"],
  },
  {
    slug: "fjalar-and-galar",
    name: "Fjalar and Galar",
    oldNorse: "Fjalarr ok Galarr",
    pronunciation: "FYAL-ar, GAL-ar",
    category: "creatures",
    kind: "Dwarves — murderers of Kvasir",
    summary:
      "The dwarf brothers who murdered the wisest being alive and brewed his blood into the Mead of Poetry — then lost it all as blood-money for their next two murders.",
    description: [
      "Fjalar and Galar invited Kvasir — the being born of the gods' truce, who could answer any question — to a quiet word, and killed him. His blood, brewed with honey in the vessels Óðrerir, Boðn, and Són, became the mead that makes poets; their explanation to the gods, that Kvasir had choked on his own wisdom for lack of good questions, is the blackest joke in the corpus.",
      "Murder was apparently a habit: they drowned the giant Gilling for sport and dropped a millstone on his wife's head when her weeping annoyed them. Gilling's son Suttungr marooned them on a skerry below the tide-line, and the brothers bought their lives with the whole hoard of mead. Poetry's chain of custody thus begins: made by murder, surrendered in terror, hidden in a mountain, and stolen by a god. No one's hands are clean, which the poets have always found rather fitting.",
    ],
    facts: [
      { label: "Victims", value: "Kvasir; the giant Gilling and his wife" },
      { label: "Brewed", value: "The Mead of Poetry, in Óðrerir, Boðn, and Són" },
      { label: "Lost it", value: "To Suttungr, as ransom on a drowning skerry" },
    ],
    relations: [
      { type: "Murdered", slug: "kvasir", name: "Kvasir" },
      { type: "Paid", slug: "suttungr", name: "Suttungr" },
    ],
    attestations: ["Prose Edda (Skáldskaparmál)"],
    tags: ["dwarves", "murder", "mead", "poetry"],
  },
  {
    slug: "modgud",
    name: "Móðguðr",
    oldNorse: "Móðguðr",
    pronunciation: "MOHTH-guthr",
    category: "creatures",
    kind: "Guardian maiden of the Hel-road bridge",
    summary:
      "The maiden who keeps the gold-roofed bridge over the river Gjöll on the road to Hel, asking every dead traveller their name and errand.",
    description: [
      "The dead travelling the Helvegr must cross the river Gjöll on its bridge thatched with shining gold, and at the bridgehead stands Móðguðr ('Battle-weary' or 'Fierce-battler'), the underworld's gatekeeper and census. She is no monster — she asks names and business, and she notices things.",
      "Her one scene is with Hermóðr, riding to ransom Baldr: yesterday, she tells him, five battalions of dead men crossed this bridge, 'but it thunders no less under you alone — and you have not the colour of dead men.' She points him the road: north, and downward. A minor official with perfect dialogue: the living are louder than armies of the dead, and the underworld keeps records.",
    ],
    facts: [
      { label: "Post", value: "The Gjallarbrú — gold-roofed bridge over the river Gjöll" },
      { label: "Duty", value: "Question all who cross into Hel" },
    ],
    relations: [
      { type: "Realm", slug: "helheim", name: "Helheimr" },
      { type: "Questioned", slug: "hermodr", name: "Hermóðr" },
    ],
    attestations: ["Prose Edda (Gylfaginning)"],
    tags: ["hel", "bridge", "guardian"],
  },
  {
    slug: "dvergar",
    name: "The Dwarves",
    oldNorse: "Dvergar",
    pronunciation: "DVER-gar",
    category: "creatures",
    kind: "The master-smiths under the earth",
    summary:
      "Born as maggots in Ymir's flesh and given wit by the gods, the dwarves forged every treasure the gods own — and turn to stone in sunlight.",
    description: [
      "The dwarves began ignobly: maggots quickening in the flesh of the slain giant Ymir, granted mind and human shape by the gods. They live under stones and in the Dark Fields, and four of them — Norðri, Suðri, Austri, Vestri — were assigned to hold up the sky itself, one at each corner of Ymir's skull. Völuspá pauses its apocalypse to recite a long roll of their names, and medieval readers noticed 'Gandálfr' and a dozen others: Tolkien lifted his dwarves (and his wizard's name) from that list wholesale.",
      "Everything irreplaceable in the mythology is their work — Mjölnir, Gungnir, Draupnir, Gleipnir, Brísingamen, Skíðblaðnir, the Mead of Poetry — and almost none of it was paid for honestly, which the dwarves noticed. They are craft embodied and grievance collected: short-changed, sun-shy (daylight turns them to stone, as the dwarf Alvíss learns fatally when Thor stalls him until dawn), and utterly indispensable. The gods win the myths; the dwarves' invoices remain outstanding at Ragnarök.",
    ],
    facts: [
      { label: "Origin", value: "Maggots in Ymir's flesh, given wit by the gods" },
      { label: "Realm", value: "Svartálfaheimr / Niðavellir, under the earth" },
      { label: "Weakness", value: "Sunlight turns them to stone" },
      { label: "Legacy", value: "Every great treasure of the gods — and Tolkien's name-list" },
    ],
    relations: [
      { type: "Realm", slug: "svartalfheim", name: "Svartálfaheimr" },
      { type: "Notable smiths", slug: "brokkr-and-sindri", name: "Brokkr and Sindri" },
    ],
    attestations: ["Poetic Edda (Völuspá, Alvíssmál)", "Prose Edda (Gylfaginning)"],
    tags: ["dwarves", "smiths", "origin", "tolkien"],
  },
];
