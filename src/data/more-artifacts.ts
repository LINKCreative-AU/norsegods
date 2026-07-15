import type { Entity } from "./types";

export const moreArtifacts: Entity[] = [
  {
    slug: "naglfar",
    name: "Naglfar",
    oldNorse: "Naglfar",
    pronunciation: "NAG-l-far",
    category: "artifacts",
    kind: "The ship of dead men's nails",
    summary:
      "The largest ship in the cosmos, built from the untrimmed fingernails of the dead — it sails against the gods at Ragnarök, and trimming corpses' nails delays its launch.",
    description: [
      "Somewhere in the world of the dead, a ship is under construction, and its building material is the living's negligence: Naglfar is made of the uncut fingernails and toenails of dead men. Snorri pauses his apocalypse for the public-service announcement — anyone who dies with untrimmed nails contributes planking, 'and gods and men alike wish it built slowly.' Funeral grooming as civil defence.",
      "At Ragnarök the great flood of the serpent's coming ashore floats her free. Loki takes the helm (Hymiskviða's poets gave the giant Hrymr the steering oar; traditions vary), and the ship of neglect carries the dead of Hel and the hosts of Muspell to the plain of Vígríðr. She is the dark twin of Skíðblaðnir: the best ship folds into a pouch and serves a god of harvests; the biggest is built by entropy, one dead man's fingernail at a time.",
    ],
    facts: [
      { label: "Material", value: "The untrimmed nails of the dead" },
      { label: "Helmsman", value: "Loki (or the giant Hrymr)" },
      { label: "Countermeasure", value: "Trim the nails of your dead" },
    ],
    relations: [
      { type: "Helmsman", slug: "loki", name: "Loki" },
      { type: "Sails at", slug: "ragnarok", name: "Ragnarök" },
    ],
    attestations: ["Prose Edda (Gylfaginning)", "Poetic Edda (Völuspá)"],
    tags: ["ship", "dead", "ragnarok", "nails"],
  },
  {
    slug: "hringhorni",
    name: "Hringhorni",
    oldNorse: "Hringhorni",
    pronunciation: "HRING-hor-nee",
    category: "artifacts",
    kind: "Baldr's funeral ship",
    summary:
      "'Ring-prowed', the greatest of all ships — Baldr's vessel, which became his pyre, launched by a giantess when all the gods together could not move it.",
    description: [
      "Hringhorni was the greatest ship ever built, and it is remembered for one voyage that went nowhere: out from the shore, burning. When Baldr died, the gods resolved to give him a ship-funeral aboard his own vessel — and found that grief, or the ship's greatness, had rooted it: no god could shift it down the rollers.",
      "The giantess Hyrrokkin, summoned from Jötunheimr, shoved it to sea in one heave that struck fire from the rollers and shook the earth. Onto the pyre went Baldr; his wife Nanna, dead of grief; his horse, fully harnessed; Odin's whispered word into his son's ear; and the ring Draupnir. Thor hallowed the fire with Mjölnir — and, in the myth's one flash of ugly grief, kicked the dwarf Litr into the flames when he ran underfoot. The real Norse buried their great dead in real ships — Oseberg and Gokstad still exist — and Hringhorni is that rite at mythological scale: the finest hull built to carry a god exactly once.",
    ],
    facts: [
      { label: "Rank", value: "Greatest of all ships" },
      { label: "Voyage", value: "Baldr's burning funeral" },
      { label: "Launched by", value: "Hyrrokkin, in a single push" },
    ],
    relations: [
      { type: "Owner", slug: "baldr", name: "Baldr" },
      { type: "Launcher", slug: "hyrrokkin", name: "Hyrrokkin" },
      { type: "The event", slug: "death-of-baldr", name: "The Death of Baldr" },
    ],
    attestations: ["Prose Edda (Gylfaginning)", "Húsdrápa"],
    tags: ["ship", "funeral", "baldr"],
  },
  {
    slug: "megingjord",
    name: "Megingjörð",
    oldNorse: "Megingjörð",
    pronunciation: "MEG-in-gyurth",
    category: "artifacts",
    kind: "Thor's belt of strength",
    summary:
      "The girdle that doubles Thor's divine strength when he buckles it on — one third of the thunder-god's standard kit with the hammer and iron gloves.",
    description: [
      "Snorri inventories Thor's equipment in three items: the hammer Mjölnir, the iron gloves Járngreipr without which the hammer's shaft cannot be gripped, and Megingjörð, the 'main-girdle' or belt of power — when he clasps it, his ásmegin, his god-strength, doubles. The strongest being in the cosmos owns a strength multiplier: the Norse never saw a superlative they wouldn't stack.",
      "The belt matters most in the tale where he lacks it: lured toward Geirröðr's courts unarmed, Thor survives only because the giantess Gríðr lends him her own belt, gloves, and staff. The lesson his enemies never learn is that the gear is replaceable but the god is not — though it says something that the mythology's mightiest arm still buckles up before work.",
    ],
    facts: [
      { label: "Effect", value: "Doubles Thor's god-strength" },
      { label: "Kit-mates", value: "Mjölnir and the iron gloves Járngreipr" },
    ],
    relations: [
      { type: "Wearer", slug: "thor", name: "Thor" },
      { type: "Loaner substitute", slug: "grid", name: "Gríðr's belt" },
    ],
    attestations: ["Prose Edda (Gylfaginning, Skáldskaparmál)"],
    tags: ["thor", "belt", "strength"],
  },
  {
    slug: "jarngreipr",
    name: "Járngreipr",
    oldNorse: "Járngreipr",
    pronunciation: "YARN-grayp-r",
    category: "artifacts",
    kind: "Thor's iron gloves",
    summary:
      "The iron gauntlets Thor must wear to grip Mjölnir's shaft — and with which he once caught a glowing iron bolt out of the air and threw it back through a giant.",
    description: [
      "Third item in Thor's kit: Járngreipr, 'iron grippers,' the gauntlets without which even Thor cannot handle Mjölnir's stub of a handle — the flaw Loki's fly-bite left in the forging, compensated in ironmongery. The greatest weapon in the cosmos ships with mandatory safety equipment.",
      "Their finest hour is offensive: in Geirröðr's hall, the giant seized a glowing-hot iron ingot with tongs and hurled it; Thor, wearing borrowed iron gloves, caught the molten bolt mid-air — the hall's pillars couldn't hide Geirröðr fast enough, and the returned throw passed through pillar, giant, and wall. Catching what your enemy throws and sending it back harder is the entire Thor doctrine, expressed as handwear.",
    ],
    facts: [
      { label: "Function", value: "Required to grip Mjölnir's short handle" },
      { label: "Finest hour", value: "Catching Geirröðr's molten iron and returning it" },
    ],
    relations: [
      { type: "Wearer", slug: "thor", name: "Thor" },
      { type: "Compensates", slug: "mjolnir", name: "Mjölnir's short handle" },
    ],
    attestations: ["Prose Edda (Gylfaginning, Skáldskaparmál)"],
    tags: ["thor", "gloves", "iron"],
  },
  {
    slug: "andvaranaut",
    name: "Andvaranaut",
    oldNorse: "Andvaranaut",
    pronunciation: "AND-var-a-nowt",
    category: "artifacts",
    kind: "The cursed ring of the Völsungs",
    summary:
      "The gold-breeding ring Loki stripped from the dwarf Andvari, cursed to destroy every owner — engine of the whole Völsung tragedy, and ancestor of Tolkien's One Ring.",
    description: [
      "Andvaranaut ('Andvari's gift,' bitterly) was the one thing the dwarf begged to keep when Loki stripped his hoard — because it was the ring that breeds gold. Refused, Andvari laid his curse: the ring and its gold shall destroy every owner. The mythology took him at his word with bookkeeping precision.",
      "Loki paid it to Hreiðmarr as blood-money for Otr; Fáfnir killed his father Hreiðmarr for it and became a dragon on the hoard; Sigurðr slew Fáfnir and took it; gave it to Brynhildr as a love-token; the token surfaced in the wrong quarrel, exposing betrayal, and Sigurðr was murdered in his bed; Brynhildr rode his pyre; the gold ended sunk in the Rhine and every hand that held it, dead. A ring of power that corrupts and dooms its bearers, from a creature robbed in a riverbed — Tolkien, who knew this material professionally, denied nothing.",
    ],
    facts: [
      { label: "Power", value: "Breeds gold" },
      { label: "Curse", value: "Death to every owner — spoken by Andvari" },
      { label: "Body count", value: "Hreiðmarr, Fáfnir, Sigurðr, Brynhildr, and onward" },
    ],
    relations: [
      { type: "First owner", slug: "andvari", name: "Andvari" },
      { type: "Taken by", slug: "loki", name: "Loki" },
      { type: "Dragon on it", slug: "fafnir", name: "Fáfnir" },
      { type: "Hero doomed by it", slug: "sigurd", name: "Sigurðr" },
    ],
    attestations: ["Völsunga saga", "Poetic Edda (Reginsmál)", "Prose Edda (Skáldskaparmál)"],
    tags: ["ring", "curse", "gold", "volsungs"],
  },
  {
    slug: "gram",
    name: "Gram",
    oldNorse: "Gramr",
    pronunciation: "GRAHM",
    category: "artifacts",
    kind: "The sword of Sigurðr",
    summary:
      "The sword Odin drove into a tree for one man to draw, shattered against the god's own spear, and reforged for Sigurðr — who split the anvil testing it and killed the dragon with it.",
    description: [
      "Gram ('Wrath') enters the world in Odin's hand: a one-eyed stranger at a wedding drives a sword to the hilt in the house-tree Barnstokkr — whoever draws it, owns it. Only Sigmundr the Völsung could, and he refused a king's weight in gold for it; the sword served him until, in his last battle, Odin himself met him with raised spear and Gram broke on Gungnir. The god gives, the god collects.",
      "The shards were kept, as dying Sigmundr ordered, for his unborn son. The smith Reginn reforged them for young Sigurðr, and the new-old blade split Reginn's anvil to the base at the first test-blow, then cut a tuft of wool drifting downstream — edge and mass in one weapon. With Gram, Sigurðr pierced Fáfnir from the slaying-pit; with Gram, laid naked between himself and Brynhildr, he kept a vow now more famous than the sword. Wagner called it Nothung; every reforged-blade-of-the-father since — a certain shard-sword in Middle-earth included — is Gram's descendant.",
    ],
    facts: [
      { label: "Given", value: "By Odin, through the tree Barnstokkr" },
      { label: "Broken", value: "On Odin's own spear, at Sigmundr's death" },
      { label: "Reforged", value: "By Reginn — it split his anvil" },
      { label: "Great deed", value: "Slew the dragon Fáfnir" },
    ],
    relations: [
      { type: "First bearer", slug: "sigmund", name: "Sigmundr" },
      { type: "Reforged by", slug: "regin", name: "Reginn" },
      { type: "Bearer", slug: "sigurd", name: "Sigurðr" },
      { type: "Slew", slug: "fafnir", name: "Fáfnir" },
    ],
    attestations: ["Völsunga saga", "Poetic Edda (Reginsmál, Fáfnismál)", "Prose Edda (Skáldskaparmál)"],
    tags: ["sword", "sigurd", "odin", "volsungs"],
  },
  {
    slug: "tyrfing",
    name: "Tyrfing",
    oldNorse: "Tyrfingr",
    pronunciation: "TEER-ving",
    category: "artifacts",
    kind: "The cursed sword that cannot be sheathed unbloodied",
    summary:
      "The golden-hilted sword two dwarves forged under duress and cursed: it never rusts, never misses — and must kill a man every time it is drawn, three great evils before its end.",
    description: [
      "King Svafrlami trapped the dwarves Dvalinn and Durinn away from their stone and forced a commission: a sword with a gold hilt that would never rust, cut iron like cloth, and bring victory always. He got exactly that, plus the interest: as the dwarves vanished into the rock they cursed the blade to kill a man each time it was bared, to be the death of its every owner, and to work three deeds of ultimate evil. Svafrlami, satisfied, became owner number one and casualty number one — killed by the berserker Arngrímr, with Tyrfing.",
      "The sword's saga, Hervarar saga, is effectively its biography: twelve berserker brothers dead on Samsø; the heroine Hervör, in one of Old Norse literature's greatest scenes, standing at her father's burning grave-mound at night demanding the sword from his draugr, who warns her and hands it over; her son Heiðrekr, ruined by it on schedule. Tyrfing is the weapon system as moral: you can commission invincibility, but the terms and conditions are written by the people you enslaved to make it.",
    ],
    facts: [
      { label: "Smiths", value: "Dvalinn and Durinn, under coercion" },
      { label: "Blessings", value: "Never rusts, never misses, always victory" },
      { label: "Curse", value: "A death every drawing; the death of every owner; three great evils" },
    ],
    relations: [
      { type: "Claimed from a ghost by", slug: "hervor", name: "Hervör" },
    ],
    attestations: ["Hervarar saga ok Heiðreks"],
    tags: ["sword", "curse", "dwarves", "hervor"],
  },
  {
    slug: "valshamr",
    name: "The Falcon Cloak",
    oldNorse: "Valshamr",
    pronunciation: "VALS-ham-r",
    category: "artifacts",
    kind: "Freyja's feather-skin of flight",
    summary:
      "Freyja's falcon-feather cloak, which turns its wearer into a falcon — the gods' only aircraft, forever being borrowed by Loki for emergencies he caused.",
    description: [
      "The valshamr is a hamr — a 'skin' or shape — of falcon feathers: put it on and you are a falcon, mind intact, wings real. It belongs to Freyja (Frigg owns one too, the sources note, though hers never leaves the closet), and it is the pantheon's sole rapid-transit system across the border into Jötunheimr.",
      "Its flight log is all Loki, and all damage control: he borrows it to scout for stolen Iðunn and carries her home as a nut in his talons with Þjazi's eagle-wings roaring behind; he borrows it again to find Thor's stolen hammer, squeezing into Þrymr's windowsill for the world's tensest interview. The pattern amuses the poets: the goddess of love owns the strategic airlift capability, and the god of chaos holds the only pilot's licence.",
    ],
    facts: [
      { label: "Effect", value: "Transforms the wearer into a falcon" },
      { label: "Owner", value: "Freyja" },
      { label: "Habitual borrower", value: "Loki, for crises of his own making" },
    ],
    relations: [
      { type: "Owner", slug: "freyja", name: "Freyja" },
      { type: "Borrower", slug: "loki", name: "Loki" },
      { type: "Used in", slug: "theft-of-mjolnir", name: "The Theft of Mjölnir" },
    ],
    attestations: ["Prose Edda (Skáldskaparmál)", "Poetic Edda (Þrymskviða)"],
    tags: ["freyja", "flight", "shapeshifting", "loki"],
  },
  {
    slug: "mistilteinn",
    name: "Mistletoe",
    oldNorse: "Mistilteinn",
    pronunciation: "MIST-il-tayn",
    category: "artifacts",
    kind: "The weapon that killed Baldr",
    summary:
      "The one thing in creation too young to swear the oath — cut by Loki, thrown by a blind hand, and the death of the shining god. The kissing plant has a body count.",
    description: [
      "When Frigg collected oaths from all creation not to harm her son, she passed over one plant growing west of Valhalla — the mistletoe, too young, she judged, to swear. Loki, in disguise, teased that one exemption out of her, cut the sprig, and put it in blind Höðr's hand at the weapon-throwing game. The softest thing in the world killed the brightest: the myths understand that doom enters through the clause everyone thought too small to matter.",
      "Botanically the choice is perfect: mistletoe grows rootless between earth and sky, neither tree nor herb, evergreen amid winter — a plant that slips category the way Loki slips oaths. Its strange sanctity ran across the old world (Pliny's Druids cut it with golden sickles), and one much-repeated modern retelling even derives kissing under it from Frigg's grief-amnesty. In Hrómundar saga, a sword named Mistilteinn turns up in a draugr's barrow — the murder weapon reincarnated as heirloom steel.",
    ],
    facts: [
      { label: "Loophole", value: "Too young to swear Frigg's oath" },
      { label: "Cut by", value: "Loki; thrown by Höðr" },
      { label: "Victim", value: "Baldr" },
    ],
    relations: [
      { type: "Victim", slug: "baldr", name: "Baldr" },
      { type: "The hand", slug: "hodr", name: "Höðr" },
      { type: "The event", slug: "death-of-baldr", name: "The Death of Baldr" },
    ],
    attestations: ["Prose Edda (Gylfaginning)", "Poetic Edda (Völuspá)"],
    tags: ["baldr", "plant", "weapon", "loki"],
  },
];
