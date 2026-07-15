import type { Entity } from "./types";

export const moreGiants: Entity[] = [
  {
    slug: "thrym",
    name: "Þrymr",
    oldNorse: "Þrymr",
    pronunciation: "THRIM-r",
    category: "giants",
    kind: "Jötunn king — thief of Mjölnir",
    summary:
      "The giant-king who stole Thor's hammer and demanded Freyja as ransom — and got Thor in a bridal veil instead, briefly.",
    description: [
      "Þrymr, 'lord of the þursar,' sat plaiting gold collars for his hounds when Loki came asking after Thor's stolen hammer. He admitted it cheerfully: buried eight leagues deep, and the price is Freyja as his bride. He had prepared for the wedding of his dreams — gold-horned cattle, jewels, everything, he boasts, but Freyja.",
      "What arrived was Thor, veiled and bridal, with Loki as bridesmaid. Þrymr wondered at a bride who ate an ox and eight salmon and whose eyes burned like fire — Loki explained she had not eaten or slept for eight nights of longing — and, satisfied, called for the hammer to hallow the bride. It was laid in 'her' lap, and Þrymskviða ends in one of literature's great massacres-at-a-wedding.",
    ],
    facts: [
      { label: "Crime", value: "Stole Mjölnir; buried it eight leagues deep" },
      { label: "Price", value: "Freyja as his bride" },
      { label: "Fate", value: "First to die when the 'bride' got her hammer back" },
    ],
    relations: [
      { type: "Stole from", slug: "thor", name: "Thor" },
      { type: "The story", slug: "theft-of-mjolnir", name: "The Theft of Mjölnir" },
    ],
    attestations: ["Poetic Edda (Þrymskviða)"],
    tags: ["jotunn", "mjolnir", "wedding", "comedy"],
  },
  {
    slug: "hymir",
    name: "Hymir",
    oldNorse: "Hymir",
    pronunciation: "HEE-mir",
    category: "giants",
    kind: "Jötunn — owner of the mile-deep cauldron",
    summary:
      "The sour sea-giant whose mile-deep brewing cauldron the gods needed for their feasts — and whose fishing trip with Thor nearly ended the world early.",
    description: [
      "When the gods wanted Ægir to brew ale for them all, he stalled: no cauldron big enough. Týr knew where one was — his own kinsman Hymir owned a kettle a mile deep. Thor and Týr went to fetch it, and the visit is a masterpiece of hostile hospitality: Hymir's glare split a stone pillar, he grudged every ox Thor ate (two, at one sitting), and set escalating tests — smash his cup (only Hymir's own skull was hard enough, on his wife's whispered advice), then carry the cauldron, which Thor wore away on his head like a monstrous helmet.",
      "In between comes the myth's centrepiece: Thor rowing them far past the safe grounds, baiting a hook with an ox-head, and pulling the Midgard Serpent itself to the gunwale. Hymir, grey with terror, cut the line as the hammer swung. Snorri says Thor knocked him overboard for it; the poem lets him live to be killed in the lava-wave of pursuing giants. Either way: never cut another god's fishing line.",
    ],
    facts: [
      { label: "Possession", value: "A brewing cauldron one mile deep" },
      { label: "Famous outing", value: "The fishing trip that hooked Jörmungandr" },
      { label: "His error", value: "Cutting the line" },
    ],
    relations: [
      { type: "Guest and taker", slug: "thor", name: "Thor" },
      { type: "Kinsman", slug: "tyr", name: "Týr" },
      { type: "The story", slug: "thors-fishing-trip", name: "Thor's Fishing Trip" },
    ],
    attestations: ["Poetic Edda (Hymiskviða)", "Prose Edda (Gylfaginning)"],
    tags: ["jotunn", "cauldron", "fishing", "serpent"],
  },
  {
    slug: "suttungr",
    name: "Suttungr",
    oldNorse: "Suttungr",
    pronunciation: "SOOT-toong-r",
    category: "giants",
    kind: "Jötunn — hoarder of the Mead of Poetry",
    summary:
      "The giant who extorted the Mead of Poetry from his parents' murderers and sealed it inside a mountain — until Odin drank his hoard and seduced his daughter.",
    description: [
      "Suttungr came by the mead lawfully, by Norse standards: the dwarves Fjalar and Galar had drowned his father Gilling and dropped a millstone on his mother, so Suttungr marooned them on a tidal skerry and accepted the Mead of Poetry as the price of their lives. He hid it in three vats inside the mountain Hnitbjörg and set his daughter Gunnlöð to guard it — wisdom as a locked asset, earning no interest.",
      "Odin came as a farmhand, bored through the mountain as a snake, spent three nights with Gunnlöð, drained all three vats in three swallows, and left as an eagle. Suttungr took eagle-shape and nearly caught him — close enough that the gods lit fires at Asgard's wall — and 'Suttungr's mead' became the skalds' standard name for poetry itself: every poem toasts the giant who lost it.",
    ],
    facts: [
      { label: "Acquired", value: "The Mead of Poetry, as blood-price from the dwarves" },
      { label: "Hoard", value: "Three vats in the mountain Hnitbjörg" },
      { label: "Lost it to", value: "Odin — snake, lover, eagle" },
    ],
    relations: [
      { type: "Daughter", slug: "gunnlod", name: "Gunnlöð" },
      { type: "Robbed by", slug: "odin", name: "Odin" },
      { type: "The story", slug: "mead-of-poetry", name: "The Mead of Poetry" },
    ],
    attestations: ["Prose Edda (Skáldskaparmál)", "Poetic Edda (Hávamál)"],
    tags: ["jotunn", "mead", "hoard", "odin"],
  },
  {
    slug: "gunnlod",
    name: "Gunnlöð",
    oldNorse: "Gunnlöð",
    pronunciation: "GOON-luth",
    category: "giants",
    kind: "Jötunn — guardian of the mead",
    summary:
      "Suttungr's daughter, set to guard the Mead of Poetry inside the mountain — seduced and abandoned by Odin, who drank everything she was guarding.",
    description: [
      "Gunnlöð ('war-summons') sat on a golden stool inside Hnitbjörg with one job: guard her father's three vats of the Mead of Poetry. Odin bored in as a snake, and for three nights she was his — and for each night she granted him one sip. Three sips, three empty vats: the poets' technicality that swallowed an ocean.",
      "Then he was gone through the rock as an eagle, leaving her to face her father. Remarkably, Hávamál — Odin's own wisdom poem — takes her side: 'Gunnlöð gave me from her golden seat a drink of the precious mead; ill reward she got for her whole heart, her heavy spirit.' The god keeps the mead but files the guilt; poetry remembers the woman it was stolen from.",
    ],
    facts: [
      { label: "Charge", value: "The three vats of the Mead of Poetry" },
      { label: "Bargain", value: "Three nights for three sips — which emptied everything" },
      { label: "Recorded by", value: "Odin's own remorse, in Hávamál" },
    ],
    relations: [
      { type: "Father", slug: "suttungr", name: "Suttungr" },
      { type: "Seduced by", slug: "odin", name: "Odin" },
    ],
    attestations: ["Poetic Edda (Hávamál)", "Prose Edda (Skáldskaparmál)"],
    tags: ["jotunn", "mead", "betrayal"],
  },
  {
    slug: "vafthrudnir",
    name: "Vafþrúðnir",
    oldNorse: "Vafþrúðnir",
    pronunciation: "vav-THROOTH-nir",
    category: "giants",
    kind: "Jötunn — the all-wise riddler",
    summary:
      "The wisest of giants, who wagered his head in a knowledge-duel with a disguised Odin — and lost on the one question only Odin can answer.",
    description: [
      "Vafþrúðnir ('mighty weaver' — of riddles) was the acknowledged champion of cosmic knowledge, and Odin, over Frigg's objections, went to his hall to test him, calling himself Gagnráðr. The stakes settled at heads: whoever failed a question forfeited his. What follows in Vafþrúðnismál is the Norse cosmos as a quiz show — the horses of day and night, the river between gods and giants, the fates at Ragnarök — with the giant answering everything and asking well.",
      "Then the guest asked his last question: 'What did Odin whisper in the ear of his son, before Baldr was borne to the pyre?' Only one being alive knows that. 'No man knows what you said, in bygone days, into your dead son's ear,' the giant answered — 'with a doomed mouth I have spoken my ancient lore. Now I know I have matched wits with Odin: you will always be wisest.' The poem ends there, on the gasp; it does not need to show the axe.",
    ],
    facts: [
      { label: "Rank", value: "Wisest of the jötnar" },
      { label: "Wager", value: "His head, against a disguised Odin's" },
      { label: "The unanswerable question", value: "What Odin whispered to dead Baldr" },
    ],
    relations: [
      { type: "Out-riddled by", slug: "odin", name: "Odin" },
      { type: "The poem", slug: "vafthrudnismal", name: "Vafþrúðnismál" },
    ],
    attestations: ["Poetic Edda (Vafþrúðnismál)"],
    tags: ["jotunn", "wisdom", "riddle", "wager"],
  },
  {
    slug: "gerd",
    name: "Gerðr",
    oldNorse: "Gerðr",
    pronunciation: "GAIR-thr",
    category: "giants",
    kind: "Jötunn — bride of Freyr",
    summary:
      "The giantess so beautiful her raised arms lit the sky and sea, for whose hand Freyr gave away the sword he will need at Ragnarök.",
    description: [
      "Freyr saw her from Hliðskjálf, Odin's forbidden high seat: a girl in her father Gymir's courtyard whose arms, as she lifted them, made air and water shine. The lovesickness that followed cost him his appetite, his sleep, and — when his servant Skírnir agreed to woo her in his place — his self-fighting sword.",
      "Skírnismál is the wooing, and it is not romantic: Gerðr refuses Freyr's gold (eleven apples, the ring Draupnir) and his threats, until Skírnir carves curse-runes promising her madness, monstrousness, and endless unwanted desire. She yields to the curse, not the gifts, naming a grove nine nights hence. 'Long is a night,' groans Freyr, 'longer are two — how shall I bear three?' Their union — sky-fertility and frozen earth, thawed by force — reads as an old seasonal myth with its bruises showing; their son Fjölnir begins the Yngling line of Swedish kings.",
    ],
    facts: [
      { label: "Beauty", value: "Her raised arms lit sky and sea" },
      { label: "Bride-price", value: "Freyr's self-fighting sword — his doom at Ragnarök" },
      { label: "Descendants", value: "The Yngling kings of Sweden" },
    ],
    relations: [
      { type: "Husband", slug: "freyr", name: "Freyr" },
      { type: "The poem", slug: "skirnismal", name: "Skírnismál" },
    ],
    attestations: ["Poetic Edda (Skírnismál)", "Prose Edda (Gylfaginning)", "Heimskringla (Ynglinga saga)"],
    tags: ["jotunn", "freyr", "bride", "curse"],
  },
  {
    slug: "grid",
    name: "Gríðr",
    oldNorse: "Gríðr",
    pronunciation: "GREETH-r",
    category: "giants",
    kind: "Jötunn — Thor's outfitter",
    summary:
      "The friendly giantess who warned Thor about Geirröðr's treachery and lent him the gear that saved his life — and the mother of Odin's son Víðarr.",
    description: [
      "Not every giant wants the gods dead. When Loki tricked a hammerless Thor into visiting the murderous giant Geirröðr, the road passed Gríðr's cave, and she talked: Geirröðr means to kill you. Then she armed him from her own kit — her belt of strength, her iron gloves, and her unbreakable staff, Gríðarvölr — the equipment that let Thor survive a rising river of giantess piss and a chair pressed toward the roof to crush him.",
      "She is also the mother, by Odin, of Víðarr — the silent god who avenges the Allfather at Ragnarök. The gods' survival kit and their avenger both come from a giantess's cave: the myths' quiet reminder that the border between Asgard and Jötunheimr runs through bedrooms as often as battlefields.",
    ],
    facts: [
      { label: "Lent Thor", value: "Strength-belt, iron gloves, and the staff Gríðarvölr" },
      { label: "Son", value: "Víðarr, by Odin" },
    ],
    relations: [
      { type: "Saved", slug: "thor", name: "Thor" },
      { type: "Son", slug: "vidar", name: "Víðarr" },
      { type: "Warned against", slug: "geirrod", name: "Geirröðr" },
    ],
    attestations: ["Prose Edda (Skáldskaparmál)"],
    tags: ["jotunn", "ally", "thor", "vidar"],
  },
  {
    slug: "hrungnir",
    name: "Hrungnir",
    oldNorse: "Hrungnir",
    pronunciation: "HROONG-nir",
    category: "giants",
    kind: "Jötunn — the stone-headed dueller",
    summary:
      "The strongest of giants, with a head and heart of stone, who drunkenly threatened all Asgard and died in the first formal duel of the myths — leaving a whetstone shard in Thor's skull.",
    description: [
      "It began with a horse race: Odin on Sleipnir wagered his head against Hrungnir's golden-maned Gullfaxi, won, and rode home with the furious giant galloping into Asgard behind him. The gods, oddly, poured him a drink. Many drinks. Hrungnir boasted he would sink Asgard, kill every god, and carry off Freyja and Sif — at which point the gods named Thor.",
      "The duel was arranged at the borderland with formal rules, the first hólmganga of myth. The giants built a clay decoy nine leagues tall (its heart failed on seeing Thor); Hrungnir stood behind his stone shield until told Thor would attack from below — then stood on the shield, which is why giants lose. Hammer met hurled whetstone in mid-air: the whetstone shattered, a shard lodging forever in Thor's skull; Mjölnir continued to its appointment. The giant's leg fell across the god's neck, and no one could lift it but Magni, Thor's son, aged three. Whetstones tremble, the skalds said, whenever Thor's shard itches.",
    ],
    facts: [
      { label: "Made of", value: "Stone head, stone heart, stone shield" },
      { label: "The duel", value: "First formal hólmganga; whetstone vs Mjölnir" },
      { label: "Legacy", value: "A whetstone shard in Thor's skull; Gullfaxi given to Magni" },
    ],
    relations: [
      { type: "Slain by", slug: "thor", name: "Thor" },
      { type: "Leg lifted by", slug: "magni-and-modi", name: "Magni" },
      { type: "The story", slug: "duel-with-hrungnir", name: "The Duel with Hrungnir" },
    ],
    attestations: ["Prose Edda (Skáldskaparmál)", "Haustlöng"],
    tags: ["jotunn", "duel", "thor", "stone"],
  },
  {
    slug: "geirrod",
    name: "Geirröðr",
    oldNorse: "Geirröðr",
    pronunciation: "GAYR-ruthr",
    category: "giants",
    kind: "Jötunn — Thor's would-be murderer",
    summary:
      "The giant who caught Loki in falcon-shape and ransomed him for a promise: deliver Thor, without his hammer or belt. It nearly worked.",
    description: [
      "Geirröðr caught a falcon that would not leave his window ledge and recognised the eyes: Loki, in Freyja's feather cloak. Three months in a chest without food bought Loki's promise to bring Thor to Geirröðr's courts with neither hammer, belt, nor iron gloves — the only assassination plot in the myths aimed at a disarmed Thor.",
      "The giantess Gríðr's warning and loaned gear turned the trap. Thor survived the river Vimur, swollen by Geirröðr's daughter straddling it upstream ('a river must be dammed at its source,' he observed, throwing a boulder); survived the guest-chair his daughters pushed toward the roof, breaking both their backs with the staff; and when Geirröðr flung a glowing iron ingot with tongs, Thor caught it in the iron gloves and sent it back through a pillar, through the giant, and through the wall behind him. Hospitality myths cut both ways: Geirröðr is what happens when the host is the monster.",
    ],
    facts: [
      { label: "The trap", value: "Thor, promised without hammer, belt, or gloves" },
      { label: "Foiled by", value: "Gríðr's warning and loaned war-gear" },
      { label: "Death", value: "His own molten iron, caught and returned" },
    ],
    relations: [
      { type: "Blackmailed", slug: "loki", name: "Loki" },
      { type: "Target", slug: "thor", name: "Thor" },
      { type: "Undone by", slug: "grid", name: "Gríðr" },
    ],
    attestations: ["Prose Edda (Skáldskaparmál)", "Þórsdrápa"],
    tags: ["jotunn", "trap", "thor", "loki"],
  },
  {
    slug: "bestla",
    name: "Bestla",
    oldNorse: "Bestla",
    pronunciation: "BEST-la",
    category: "giants",
    kind: "Jötunn — mother of Odin",
    summary:
      "The frost-giantess who mothered Odin, Vili, and Vé — meaning the Allfather himself is half jötunn, and the whole war of gods and giants is a family quarrel.",
    description: [
      "Bestla, daughter of the giant Bölþorn, married Borr, son of ice-licked Búri, and bore the three brothers who would murder her kin and build the world from the corpse. Every drop of Æsir blood descends through her: the gods are the giants' sister-sons, and Norse myth's endless war is, genealogically, a nephews-against-uncles feud.",
      "One glinting detail survives in Hávamál: Odin says he learned nine mighty songs from 'the famous son of Bölþorn, Bestla's father' — a maternal uncle, unnamed, teaching the young god magic. Some scholars suspect that uncle is Mímir, which would make the keeper of the wisdom-well Odin's own kinsman — and the whole economy of pledged eyes and preserved heads a family business.",
    ],
    facts: [
      { label: "Father", value: "The giant Bölþorn" },
      { label: "Husband", value: "Borr" },
      { label: "Sons", value: "Odin, Vili, and Vé" },
    ],
    relations: [
      { type: "Son", slug: "odin", name: "Odin" },
      { type: "Sons", slug: "vili-and-ve", name: "Vili and Vé" },
    ],
    attestations: ["Prose Edda (Gylfaginning)", "Poetic Edda (Hávamál)"],
    tags: ["jotunn", "ancestry", "odin"],
  },
  {
    slug: "hraesvelgr",
    name: "Hræsvelgr",
    oldNorse: "Hræsvelgr",
    pronunciation: "HRICE-vel-gr",
    category: "giants",
    kind: "Jötunn — the corpse-swallowing eagle of the winds",
    summary:
      "The giant in eagle's shape who sits at the northern edge of heaven — every wind in the world is the beat of his wings.",
    description: [
      "At the end of the sky sits a giant dressed as an eagle, and his name is 'Corpse-Swallower.' When Hræsvelgr beats his wings, wind crosses the world; that is where weather comes from, Vafþrúðnir the all-wise tells Odin, as an examination answer.",
      "It is one of the mythology's most economical images: meteorology as one enormous, sinister bird. His grisly name is usually read against the old belief that the eagle feeds on the dead — the wind that fills your sail is the wingbeat of something that eats battlefields. Sailors of a drowning-prone civilisation knew exactly what the wind wanted.",
    ],
    facts: [
      { label: "Form", value: "A giant in eagle's shape, at heaven's northern rim" },
      { label: "Function", value: "His wingbeats are all the world's winds" },
      { label: "Name", value: "'Corpse-Swallower'" },
    ],
    relations: [{ type: "Attested by", slug: "vafthrudnir", name: "Vafþrúðnir's testimony" }],
    attestations: ["Poetic Edda (Vafþrúðnismál)", "Prose Edda (Gylfaginning)"],
    tags: ["jotunn", "eagle", "wind", "cosmology"],
  },
  {
    slug: "elli",
    name: "Elli",
    oldNorse: "Elli",
    pronunciation: "EL-lee",
    category: "giants",
    kind: "Old Age personified",
    summary:
      "The ancient crone in Útgarða-Loki's hall who wrestled Thor to one knee — because she was Old Age itself, and no one beats her.",
    description: [
      "The final humiliation in Útgarða-Loki's castle of illusions: the mightiest of gods, offered a wrestling match, gets — as the giant-king's mock courtesy — his old foster-mother, Elli. The harder Thor gripped, the steadier she stood; with a few holds she brought the thunder-god down to one knee before the match was mercifully stopped.",
      "The reveal came at the gate: Elli is old age, 'and there never has been, nor ever will be, anyone that old age does not bring down at last.' One knee, the giant-king admitted, was a marvel — everyone else goes all the way to the ground. She is the shortest and most universal myth the Norse told: you lose this one.",
    ],
    facts: [
      { label: "Identity", value: "Old Age, in the shape of a crone" },
      { label: "Record", value: "Undefeated, forever" },
      { label: "Best result against her", value: "Thor — one knee" },
    ],
    relations: [
      { type: "Wrestled", slug: "thor", name: "Thor" },
      { type: "Staged by", slug: "utgarda-loki", name: "Útgarða-Loki" },
    ],
    attestations: ["Prose Edda (Gylfaginning)"],
    tags: ["personification", "age", "thor", "illusion"],
  },
  {
    slug: "farbauti-and-laufey",
    name: "Fárbauti and Laufey",
    oldNorse: "Fárbauti ok Laufey",
    pronunciation: "FAR-bow-tee, LOW-vay",
    category: "giants",
    kind: "Loki's parents — lightning and leaves",
    summary:
      "The giant 'Dangerous-Striker' and the slender goddess 'Leafy Isle' — Loki's parents, whose names suggest the trickster was born when lightning struck dry foliage.",
    description: [
      "Loki's father is the jötunn Fárbauti, 'the dangerous striker'; his mother is Laufey, 'leafy island,' also called Nál, 'needle,' for her slimness. The old reading of this marriage is elemental and irresistible: lightning strikes leaf-litter, and what is born is wildfire — Loki, bright, quick, warming, and catastrophic when unwatched.",
      "The telling detail is the surname: Loki is always 'Loki Laufeyjarson' — his mother's son, in a culture that named by fathers. Whether that dodges the giant father, honours a goddess mother, or just alliterates with Loki, the trickster carries the one matronymic in Asgard: even his name refuses the usual rules.",
    ],
    facts: [
      { label: "Names", value: "'Dangerous-Striker' and 'Leafy Isle' (or Nál, 'Needle')" },
      { label: "Reading", value: "Lightning + kindling = wildfire = Loki" },
      { label: "Oddity", value: "Loki bears his mother's name — Laufeyjarson" },
    ],
    relations: [{ type: "Son", slug: "loki", name: "Loki" }],
    attestations: ["Prose Edda (Gylfaginning, Skáldskaparmál)", "Sörla þáttr"],
    tags: ["jotunn", "loki", "parents", "fire"],
  },
  {
    slug: "hyrrokkin",
    name: "Hyrrokkin",
    oldNorse: "Hyrrokkin",
    pronunciation: "HEER-rok-kin",
    category: "giants",
    kind: "Jötunn — launcher of Baldr's funeral ship",
    summary:
      "The giantess summoned when not even Thor could launch Baldr's funeral ship — she arrived riding a wolf bridled with vipers and shoved it to sea in one push.",
    description: [
      "Baldr's ship Hringhorni, greatest of vessels, was to be his pyre — but grief-weakened gods could not budge it down the rollers. So they sent to Jötunheimr for strength, and got theatre: Hyrrokkin ('fire-withered') arrived riding a giant wolf with venomous snakes for reins. Odin's four berserkers, assigned her mount, could not hold it until they wrestled it flat.",
      "She walked to the prow and pushed the ship to sea in one heave — fire bursting from the rollers, the whole earth shaking. Thor, humiliated by proxy, gripped his hammer and would have broken her skull had the gods not begged peace on a funeral day. A giantess out-lifting the strength of the gods at their lowest moment: even the enemy came to bury Baldr.",
    ],
    facts: [
      { label: "Mount", value: "A wolf, bridled with living vipers" },
      { label: "Feat", value: "Launched Hringhorni in one push — fire from the rollers" },
      { label: "Nearly", value: "Brained by an embarrassed Thor" },
    ],
    relations: [
      { type: "Launched", slug: "hringhorni", name: "Hringhorni" },
      { type: "At the funeral of", slug: "baldr", name: "Baldr" },
    ],
    attestations: ["Prose Edda (Gylfaginning)", "Húsdrápa", "Hunnestad Monument (probable depiction)"],
    tags: ["jotunn", "funeral", "strength", "wolf"],
  },
  {
    slug: "narfi-and-vali-lokason",
    name: "Narfi and Váli Lokason",
    oldNorse: "Narfi ok Váli",
    pronunciation: "NAR-vee, VAW-lee",
    category: "giants",
    kind: "Sons of Loki and Sigyn",
    summary:
      "Loki's sons by faithful Sigyn: the gods turned Váli into a wolf, who tore his brother Narfi apart — and Narfi's entrails became his father's chains.",
    description: [
      "When the gods finally hunted Loki down after Baldr's death, mere binding was not sentence enough. They took his two sons by Sigyn and turned Váli into a wolf; the wolf tore his brother Narfi apart, and the gods bound Loki with his own son's entrails, which hardened into iron. Punishment, in the mythology's endgame, has stopped observing rules the gods once kept.",
      "The brothers exist only for this scene, and that is the horror of it: two names invented to die, so the myth can weigh what the gods became on the road to Ragnarök. Sigyn — their mother — stays in the cave anyway, holding the bowl over the man chained in her child.",
    ],
    facts: [
      { label: "Parents", value: "Loki and Sigyn" },
      { label: "Fate", value: "Váli, made a wolf, killed Narfi; Narfi's entrails bind Loki" },
    ],
    relations: [
      { type: "Father", slug: "loki", name: "Loki" },
      { type: "Mother", slug: "sigyn", name: "Sigyn" },
      { type: "The event", slug: "binding-of-loki", name: "The Binding of Loki" },
    ],
    attestations: ["Prose Edda (Gylfaginning)", "Poetic Edda (Lokasenna prose)"],
    tags: ["loki", "punishment", "tragedy"],
  },
];
