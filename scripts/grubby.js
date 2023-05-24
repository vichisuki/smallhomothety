var button = document.createElement("button");
button.innerHTML = "Meet your new friend!";

var certificate = document.getElementById("certificate");
certificate.appendChild(button);
button.id = "idk_your_id_here";

button.addEventListener("click", function() {
  var grubName = [
    'Gumbo',
    'Cholli',
    'Grubber',
    'Jen Jen',
    'Grubbin',
    'Grubbing',
    'Grublet',
    'Grubling',
    'Grub-in-the-Rough',
    'Grub-Tastic!',
    'Grubbing Around',
    'Grub-a-Doodle-Do',
    'Grub-a-Licious',
    'Grub\'s Grotto',
    'Grumble Grub',
    'Upside-Down Grub',
    'Grubberling',
    'Tunnel Grub',
    'Royal Grub',
    'Tootle',
    'Glitter',
    'Grub-Grub-Grumble',
    'Grub-with-Glee',
    'Grubby Groove Grub',
    'Grubster',
    'Grubnose',
    'Grumble',
    'Grumblethorn',
    'Grumbleweed',
    'Grumblewort',
    'Nimble',
    'Grumpshrimp',
    'Grumpty',
    'Grumptysnout',
    'Grumwyrm',
    'Grumpus',
    'Grounder',
    'Snaggle',
    'Wandering Grub',
    'Grubblegut the Gluttonous',
    'Chirp',
    'Glittersnaps',
    'Mordant the Ancient',
    'Grubby Little Grub',
    'Vengeful Spirit',
    'Grumpshrimp',
    'Jelly Grub',
    'Glow Grub',
    'Grubette',
    'Grubb',
    'Grubble',
    'Grubbly',
    'Grubberlin',
    'Grum',
    'Grumm',
    'Grumps',
    'Grumworm',
    'Mire',
    'Squirmy',
    'Curly',
    'Wiggles',
    'Gizmo',
    'Squirm',
    'Buzzy',
    'Scrunchy',
    'Squirmles',
    'Gloam',
    'Slitherwing',
    'Gritburger',
    'Gribbler',
    'Greepbuzz',
    'Three-Eye Grubshroom',
    'Mato Grub',
    'Spiny Wurm',
    'Thragg',
    'Ambrose',
    'Hushwing',
    'Necromancer',
    'Buzzsaw Grub',
    'Shadow Grub',
    'Glowing Grub',
    'DeepScale Grub',
    'Moss Grub',
    'Moss Matter',
    'Grub Sweeper',
    'Nibblebug',
    'Slime Galore',
    'Flop \'Em',
    'Dust Grub',
    'Needlemane',
    'King Grist',
    'The Molted Sentinel',
    'The Fargus Flycatcher',
    'Mantraphagus the Glutton',
    'Maggotcloud the Voracious',
    'Deepglide the Wriggler',
    'Queen Mantis Shade',
    'Grubguard the Thirsty',
    'Buzz-Wing',
    'Dustfly',
    'Muckoo',
    'Fungicle',
    'Squisk',
    'Soot Slug',
    'Silverhopper',
    'Shadow Flitter',
    'Greber the Grub',
    'Coggles the Crawler',
    'Snickle the Snurble',
    'Burbly the Snaffler',
    'Nibbs the Bug',
    'Orph the Nocto',
    'Clacco the Chirrup',
    'Squigzy the Goop',
    'Mothwing',
    'Needler',
    'Plush Bug',
    'Deep Grub',
    'Wire Bug',
    'Hive Knight',
    'Dawn Grub',
    'Glowing Snail',
    'Slumbercat',
    'Dream Grub',
    'Solon',
    'Lumafly',
    'Dustwing',
    'Mantisclaw',
    'Bristleback',
    'Prickly Pod',
    'Nail Grubble',
    'Neleb',
    'Gambril',
    'Entoza',
    'Meregol',
    'Lurker',
    'Gorgot',
    'Lapotch',
    'Slick',
    'Sludge Eel',
    'Lantern Grub',
    'Glowfly Grub',
    'Burrow Grub',
    'Gascoigne Grub',
    'Trappledoof',
    'Inkback',
    'Mawmaw',
    'Greyfur',
    'Hivebark',
    'Softmaker',
    'Nezzrazz',
    'Knightly Delight Grub',
    'Hollow Eel Grub',
    'Extrest Grub',
    'Chirping Grub',
    'Gripper Grub',
    'Willow Weevil',
    'Safe Creeper',
    'Lichen Hopper',
    'Pale Wriggler',
    'Gizzlaw',
    'Beeglob',
    'Mosstail',
    'Nibblesnout',
    'Scuttletail',
    'Whiskring',
    'Clawcrawler',
    'Sliverbug',
    'Vespa Grub',
    'Spiral Grub',
    'Burrower Grub',
    'Drifter Worm',
    'Spikeroot',
    'Grub Egg',
    'Nail Bug',
    'Pale Bearer',
    'Light Devourer',
    'Void Gazer',
    'Shade Lurker',
    'Shadeclaw',
    'Chirpee',
    'Duskwings',
    'Cinderpillar',
    'Nailbirb',
    'Grubboon',
    'Silksnail',
    'Seeker Grub',
    'Fire Dreamer',
    'Fury Sprout',
    'Mosskin',
    'Storm Crawler',
    'Charged Fat Grub',
    'Truffle Mite',
    'Tinkerfly',
    'Stalwart Grub',
    'Glowing Wriggler',
    'Buzzscuttle',
    'Nailclaw',
    'Wegsnar',
    'Shadow Shimmer',
    'Puru',
    'Mawlek',
    'Friggs',
    'Whitecap',
    'Blastfly',
    'Watchergleam',
    'Groggo',
    'Bogeeze',
    'Crestog',
    'Nodor',
    'Fracto',
    'Maggotry',
    'Flitt',
    'Buzzbuzz',
    'Skedaddle',
    'Clitch'
  ];

  document.getElementById("grubname").innerHTML = grubName[Math.floor((Math.random() * 214.99))];

  var grubPronoun = [
    'she/her',
    'he/him',
    'they/them'
  ];
  document.getElementById("pronouns").innerHTML = grubPronoun[Math.floor((Math.random() * 2.99))];

  var grubFood = [
    'Parsley',
    'Carrot',
    'Fennel',
    'Rue',
    'Dill'
  ];

  document.getElementById("food").innerHTML = grubFood[Math.floor((Math.random() * 4.99))];

  var grubPersonality = [
    'Curious',
    'Persistent',
    'Brave',
    'Explorer',
    'Playful',
    'Shy',
    'Tenacious',
    'Patient',
    'Adaptable',
    'Resourceful'
  ];

  document.getElementById("personality").innerHTML = grubPersonality[Math.floor((Math.random() * 9.99))];

  document.getElementById("namelabel").innerHTML = 'Your grub\'s name is...';
  document.getElementById("pronounlabel").innerHTML = 'Their pronouns are...';
  document.getElementById("foodlabel").innerHTML = 'Their favorite food is...';
  document.getElementById("personalitylabel").innerHTML = 'Their personality type is...';
  document.getElementById("congrats").innerHTML = 'Congratulations on making a new friend! Please make sure to take good care of them.';
  document.getElementById("grubbyimage").innerHTML = '<img src="images/grubby.png" alt="A grub!" height="100px" width="100px">';

  button.innerHTML = "Make another friend!";
});
