export interface Story {
  slug: string;
  title: string;
  subtitle: string;
  /** approximate listening time in minutes at bedtime pace */
  minutes: number;
  paragraphs: string[];
  /** entity slugs to link below the story */
  related: string[];
  /**
   * Path to a real narration file, e.g. "/audio/how-the-world-was-made.mp3"
   * (drop the file in public/audio/). When set, the player uses it;
   * otherwise it falls back to the browser's built-in voice.
   */
  audioUrl?: string;
  /** Credit line shown under the player, e.g. "Narrated by James" */
  narrator?: string;
}

import { odinAllfather } from "./epics/odin-allfather";
import { lokiTrickster } from "./epics/loki-trickster";
import { thorDefender } from "./epics/thor-defender";
import { cursedGold } from "./epics/cursed-gold";
import { ragnarokTwilight } from "./epics/ragnarok-twilight";

const shortStories: Story[] = [
  {
    slug: "how-the-world-was-made",
    title: "How the World Was Made",
    subtitle: "A bedtime telling of the beginning of everything",
    minutes: 6,
    paragraphs: [
      "Long ago — and this was before long ago, before there was anyone to remember, before remembering itself — there was no world at all. There was no sand, no sea, no cool wave on any shore. There was no earth below and no sky above. There was only a great, quiet emptiness, wide as everything, called Ginnungagap. If you had stood in it, you would have heard nothing at all. But there was no one to stand in it. Not yet.",
      "Now, far to the north of that emptiness there was a land of mist and ice called Niflheim, where eleven rivers crept along in the dark, and froze, and creaked, and pushed their ice out into the great gap, layer upon layer, year upon year — though there were no years yet, only the slow breathing of the cold. And far to the south there was a land of fire called Muspelheim, where everything glowed and crackled, and warm sparks drifted out over the emptiness like fireflies over a summer field.",
      "And in the very middle, where the ice from the north met the warmth from the south, something wonderful happened. The ice began to melt. Drop by drop, drip by drip — and the drops drew themselves together, the way raindrops do on a window, and they took a shape. The shape was alive. He was a giant, the very first being in all the world, and his name was Ymir. When he slept, he snored, and even his snoring was creative: more giants grew from him as he dreamed, the strange old family of the frost.",
      "The melting ice made a second creature too, and this one was gentler: a great cow, called Audhumla. Her milk fed Ymir. And what fed Audhumla? Well — she licked the salty ice, the way cows lick a salt stone in a field. And here is the strange and lovely thing: as she licked, day after day, a shape came slowly out of the ice, as if she were uncovering someone who had been waiting inside it all along. The first day, hair. The second day, a head. The third day, there he stood: Buri, tall and fair, the first of the family that would one day be called gods.",
      "Buri had a son named Borr, and Borr married Bestla, a daughter of the giants — for in those days there were only giants to marry — and they had three sons. The first was called Odin. And Odin and his brothers looked around at the mist and the ice and the dark, and they thought what young people have thought in every age since: we could make something better than this.",
      "So they did. It was hard, and it was sad too, in the way that great changes often are: the world they built, they built from old Ymir himself, when his long life ended. His body became the good dark earth. His blood became the sea, ringed around everything like a moat. His bones stood up as mountains, and his teeth were scattered as boulders and scree. His great round skull they lifted up high, high, high over everything, and that is the sky; and they set a dwarf at each corner to hold it — their names were North, South, East and West, and they are holding it still.",
      "The brothers caught the drifting sparks of Muspelheim and set them in the sky to be stars. Two of the brightest they put in chariots: the Sun and the Moon, who drive across the sky to this very night — and if they seem to hurry, well, that is a story for another evening. From Ymir's eyebrows, which were bushy and enormous as you might imagine, they built a fence around the middle of the world, a snug green garden safe from the wild things outside. They called it Midgard: the middle yard. It is where you live. You are tucked inside it right now.",
      "Then, one day, walking on the new shore with the new sea shushing at their feet, the three brothers found two trees: an ash and an elm, standing together where the tide had left them. And Odin said: something is missing. He breathed on the trees, and gave them life. His brother gave them thought and feeling — the little voice inside that wonders about things, the same one listening to this story. And the third brother gave them warm faces, and speech, and hearing, and the colour that comes to your cheeks when you laugh. The ash tree became the first man, and his name was Ask. The elm became the first woman, Embla. Every single person you have ever met is their grandchild's grandchild's grandchild, many times over — which means, if you follow it all the way back, that people are made of trees, and trees are made of the world, and the world is as old as ice and fire.",
      "High over Midgard the gods built their own shining home, Asgard, and between the two they hung a bridge made of rainbow. On quiet evenings, they say, you can still see it, after the rain, arching from the sky down to the earth — the road home, left out like a lamp in a window.",
      "And that is how everything began: with ice, and fire, and a cow uncovering a sleeping god, and three brothers who looked at the dark and decided to build. The world they made is the one you are lying in tonight, warm under Ymir's sky, safe inside the middle yard. The stars are old sparks. The sea is still salty. And the story, like the world, is yours now too. Sleep well.",
    ],
    related: ["ymir", "audhumla", "odin", "midgard", "asgard", "ginnungagap", "creation-of-the-world"],
  },
  {
    slug: "the-day-thor-lost-his-hammer",
    title: "The Day Thor Lost His Hammer",
    subtitle: "The funniest wedding in the nine worlds, told softly",
    minutes: 6,
    paragraphs: [
      "One morning, in the shining city of the gods, Thor woke up and reached out sleepily for his hammer — because that is what Thor did every morning, the way you might reach for a favourite toy or a glass of water — and his hand found nothing at all. He patted the blanket. He looked under the bed. He lifted the pillow, which is a silly place for a hammer, but he was getting worried. The hammer was gone. And Thor's hammer was not any hammer: it was Mjolnir, the thunder itself, the one thing that kept all the wild giants of the world politely on their own side of the fence.",
      "His beard bristled. His hair stood on end. The whole of Asgard shook a little, the way a house does when someone very large is upset in it. And then he did what even gods do when things go properly wrong: he went to find the cleverest person he knew. That was Loki — who was not always good, it must be said, but was always clever, and on his good days those came to the same thing.",
      "Loki borrowed a cloak of falcon feathers from the goddess Freyja, and the moment it settled on his shoulders he was a falcon, and away he flew, over the wall, over the rainbow bridge, out over the grey lands of the giants, until he came to a great cold hall where a giant king named Thrym sat on a mound, braiding golden collars for his dogs, looking extremely pleased with himself.",
      "'I have hidden the thunder-god's hammer,' said Thrym, before Loki had asked anything at all, which tells you how badly he wanted to talk about it. 'Eight leagues deep in the earth, where no one will ever find it. And no one shall have it back — unless the beautiful Freyja is brought to me, to be my bride.' And he smiled a smile with too many teeth in it, and went back to braiding his dog-collars.",
      "Well. Loki flew home, feathers whistling, and told the gods, and the gods told Freyja, and Freyja said no. She said no so magnificently that her famous necklace burst right off her neck, and the whole hall of the gods trembled. Nobody asked her twice. But that left the problem sitting in the middle of the floor: no Freyja, no hammer; no hammer, and sooner or later the giants would come over the wall.",
      "It was Heimdall, the watchman who sees everything, who had the idea — and it was such an idea that the gods sat in silence for a moment after he said it. Let Thor go to the wedding, said Heimdall. In the dress. As the bride. There was, history records, quite a long argument, in which Thor pointed out several times that he was Thor, and the gods pointed out several times that this was exactly the problem, and Loki settled it with one quiet sentence: 'Would you rather explain the dress, or explain to the giants why they may live in Asgard now?'",
      "So they dressed him. Bridal linen from head to foot, and a veil, and keys jingling at his waist as brides wore then, and stones and jewels, and — the finishing touch — Freyja's own mended necklace at his throat. Loki, who was enjoying himself enormously by now, put on a maid's dress and declared he would come along as the bridesmaid, to do the talking. And off they went to giant-land in Thor's goat-cart, with the mountains cracking and the ground smoking under the wheels, which is not usual for brides, but nobody in the giants' country wanted to be the one to mention it.",
      "Thrym was overjoyed. Bring in my bride, he cried; light the fires, set the tables, this is the finest day of my life! And the feast began — and very nearly ended, right there. Because the bride was hungry. Under her veil, the bride ate an entire ox. Then eight whole salmon. Then every single one of the sweet cakes that had been set out for the ladies, and washed it all down with three great barrels of mead. Thrym watched this with very round eyes. 'Never,' he said faintly, 'have I seen a bride so… hungry.' But the bridesmaid leaned in, quick as ever: 'She has not eaten for eight days,' said Loki sweetly, 'so great was her longing for you.' And Thrym straightened his collar and felt splendid.",
      "Then the giant lifted a corner of the veil to steal a kiss — and staggered back the whole length of the hall. Her eyes! Why are her eyes like burning coals? The bridesmaid was ready. 'She has not slept for eight nights,' sighed Loki, 'so great was her longing for you.' And the giant king, feeling by now that he was the luckiest fellow in the nine worlds, called out for the holy hammer to be brought and laid in the bride's lap, to bless the marriage in the good old way.",
      "Ah. Well. You know, and I know, and every listener for a thousand years has known what happens when you put Thor's hammer in Thor's lap. His fingers closed around the handle, and under the veil, his heart laughed. And the wedding was over rather quickly after that, and the giants' hall needed considerable tidying, and no giant ever again thought that stealing from the gods was a clever way to find a wife.",
      "Thor drove home under the stars, with the hammer safe in his lap and the wind in the goats' horns, still wearing the dress — there had been no time to change, and, truth be told, it was rather a good dress. And in Asgard the gods laughed until the rafters rang, and none louder than Thor himself, in the end. For that is the thing about the strongest of the gods, and it is worth keeping under your pillow: he was mighty enough not to mind looking silly, and there is a kind of strength in that too, perhaps the best kind. Goodnight.",
    ],
    related: ["thor", "loki", "freyja", "heimdall", "thrym", "mjolnir", "theft-of-mjolnir", "thrymskvida"],
  },
  {
    slug: "odin-and-the-well-of-wisdom",
    title: "Odin and the Well of Wisdom",
    subtitle: "A quiet story about a high price gladly paid",
    minutes: 6,
    paragraphs: [
      "At the centre of all the worlds — further down than the roots of the mountains, further in than the middle of the sea — there grows a tree. It is an ash tree, the greatest thing that has ever lived, and its name is Yggdrasil. Its branches hold up the sky, and birds you and I will never see nest in the light of its highest leaves. Its roots go down into three lands, and under one of those roots, in the blue-grey country of the giants, there is a well.",
      "It is not a wishing well. It is older and stranger than that. Its water is dark and very still, and in the stillness there is everything: everything that has happened, everything that is happening, and the long quiet shape of everything to come. Whoever drinks from that well understands the world — not the way you understand a sum, but the way you understand a song. And beside the well, in all weathers, sits its keeper: an old, deep-voiced being named Mimir, who drinks a little of the water every morning, and says very little, and knows very nearly everything.",
      "Now Odin, the highest of the gods, had a hall with a silver roof and a throne from which he could see the whole world at once. He had two ravens who flew out every morning and whispered the day's news in his ears. He had an army of the bravest souls, and a spear that never missed, and the love and fear of every living thing. And none of it was enough — because Odin could see that a hard day was coming, far off, the way you can smell rain before it falls, and seeing is not the same as understanding. So one grey morning he wrapped himself in a traveller's cloak, and pulled a wide hat down over his brow, and walked down the long root of the world-tree to the well, and asked the keeper for a drink.",
      "Mimir looked at the king of the gods for a long, quiet time. Wells like this one do not give their water away, and Mimir did not make exceptions, not even for family, not even for kings. 'One drink,' said Mimir at last, 'costs one eye. Your own. Left in the water, forever.' He did not say it to be cruel. It is simply the oldest rule there is: the things that matter most are the things that cost us something, and wisdom — real wisdom — costs the most of all.",
      "And here is the part of the story that people have wondered at around fires for a thousand years and more. Odin did not argue. He did not offer gold instead, though he had rooms of it, or his spear, or his throne, or a hundred years of service. He understood — perhaps he was already a little wise, to understand it — that the well was not bargaining. The price was the price. And he decided that half of everything he could see was a fair trade for the whole of everything there was to understand. So the Allfather paid.",
      "We will let the quiet of the well cover the moment itself. Say only this: when it was done, Odin knelt and drank, and the water was cold and tasted of the beginning of the world, and understanding came into him like light coming into a room — slowly, and then all at once. He saw how all the stories fit together, the sad ones and the bright ones. He saw what the price of things was, and why it must be paid gladly or not at all. And they say he stood at the well a long while, watching, and then laughed softly, once, and went back up the long root to the morning, one eye the poorer and a whole world the wiser.",
      "His eye stayed in the well. It is there still, they say, resting in the dark water like the moon resting in a midnight lake, seeing everything from below while Odin sees everything from above. And that is why, in all the old carvings and all the old tales, the wisest of the gods has one eye and a wide hat worn low: not a wound, if you look at it rightly, but a receipt. Proof of the best bargain ever struck.",
      "So if ever you wonder why wise people so often seem to have lost something along the way — a little time, a little ease, a little of the luck that lazier folk keep — now you know the shape of the answer. Wisdom is a well with a keeper, and everyone who truly drinks has paid. The wonderful secret, the one Odin carried home under his grey hat, is that it is worth it. It is always worth it. Close your eyes now — both of them; you may keep both, tonight and always — and sleep, and grow wise slowly, the gentle way, dream by dream.",
    ],
    related: ["odin", "mimir", "mimisbrunnr", "yggdrasil"],
  },
];

/** The hour-long epics — full histories of the great figures and events. */
const epics: Story[] = [
  odinAllfather,
  lokiTrickster,
  thorDefender,
  cursedGold,
  ragnarokTwilight,
];

export const stories: Story[] = [...epics, ...shortStories];

export function getStory(slug: string): Story | undefined {
  return stories.find((s) => s.slug === slug);
}
