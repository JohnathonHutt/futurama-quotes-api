//jshint esversion:6

const quotes = [
        ["Good news everyone!", "Hubert J. Farnsworth", 1],
        ["Bite my shiny metal a$$!", "Bender B. Rodriguez", 1],
        ["Let's go microwave. I'm in a hurry here.", "Philip J. Fry", 2],
        ["I don't know what happened, but we've taken on a lot of clocks.", "Turanga Leela", 2],
        ["By the way, I took the liberty of fertilizing your caviar.", "Dr. John Zoidberg", 2],
        ["Now it's time to go home and relax the traditional jamaican way. A glass of warm milk and a good nights sleep", "Hermes Conrad", 1],
        ["Sweet gorrilla of Manilla!", "Hermes Conrad", 1],
        ["Look, everyone wants to be like Germany, but do we really have the pure strength of will?", "Amy Wong", 2],
        ["When I'm in command, every mission is a suicide mission", "Zapp Brannigan", 2],
        ["This company is going to shoot straight to the top and stay there - like Cyndi Lauper", "That Guy", 3],
        ["A complete sandwich? Ha! You got fleeced! I would have settled for a hard roll with ketchup inside.", "Dr. John Zoidberg", 2],
        ["Well, then good news! It's a suppository.", "Hubert J. Farnsworth", 2],
        ["Posers! I was hating Zoidberg before it was cool.", "Bender B. Rodriguez", 2],
        ["There are two kinds of people: sheep and sharks. Anyone who is a sheep is fired. Who is a sheep?", "That Guy", 3],
        ["What smells like blue?", "Philip J. Fry", 2],
        ["I’m so embarrassed. I wish everybody else was dead.", "Bender B. Rodriguez", 2],
        ["There. Now no one can say I don’t own John Larroquette’s spine.", "Bender B. Rodriguez", 2],
        ["If, For Any Reason You're Not Satisfied, I Hate You.", "Sales Clerk", 2],
        ["Now, Now, There Will Be Plenty Of Time To Discuss Your Objections When And If You Return.", "Hubert J. Farnsworth", 2],
        ["I did do the nasty in the pasty", "Philip J. Fry", 2],
        ["Windmills do not work that way!", "Morbo", 3],
        ["Ah the scent of a rose, curious how an aromatic chain of hydrocarbons can evoke our deepest emotions", "Philip J. Fry", 3],
        ["Oh, the hypochondriac's back! So what is it this time?", "Dr. John Zoidberg", 2],
        ["Ow! It's hot. The butter in my pocket is melting!", "Philip J. Fry", 2],
        ["Well, my lead pipe hurts a little.", "Philip J. Fry", 2],
        ["Quick! We can escape through that nasal capillary into the sinus.", "Dr. John Zoidberg", 2],
        ["That's such a beautiful thought, Fry. And what's more amazing, you expressed it without spewing crumbs at me.", "Turanga Leela", 2],
        ["But I don't like being a delivery boy.", "Philip J. Fry", 2],
        ["Shinier than yours, meatbag!", "Bender B. Rodriguez", 1],
        ["You kidding? I was a star! I could bend a girder to any angle: 30 degrees, 32 degrees, you name it!    ....31.", "Bender B. Rodriguez", 1],
        ["I'm never going to get used to the 31st century. Caffinated bacon? Baconated grapefruit? Admiral Crunch?", "Philip J. Fry", 1],
        ["Ah, Hermes! Crew, meet Hermes Conrad. He manages my delivery business, pays the bills, notifies next of kin, what have you.", "Hubert J. Farnsworth", 1],
        ["Now open your mouth and let's have a look at that brain.", "Dr. John Zoidberg", 2],
        ["Yeah, like you don't have crap in your neck!", "Bender B. Rodriguez", 2],
        ["Ah, to be young again. And also a robot.", "Hubert J. Farnsworth", 1],
        ["Ooh Big Pink! It's the only gum with the breath freshening power of ham!", "Philip J. Fry", 3],
        ["And it pinkens your teeth while you chew", "Bender B. Rodriguez", 3],
        ["Hey Fry, I'm steering with my a$$", "Bender B. Rodriguez", 1],
        ["That's the best thing I ever saw!", "Philip J. Fry", 3],
        ["I guess a robot would have to be crazy to wanna be a folk singer...", "Bender B. Rodriguez", 1],
        ["Sheesh! 40,000 channels and only 150 have anything good on.", "Philip J. Fry", 3],
        ["I don't know. Something I couldn't quite put my finger on. Possibly his vile lizard tongue.", "Turanga Leela", 2],
        ["Yeah. If you rule out every guy with a lizard tongue or a low I.Q. or an explosive violent temper, of course you're gonna be lonely.", "Philip J. Fry", 2],
        ["You just have to give guys a chance. Sometimes you meet a guy and think he's a pig, but then later you realise he actually has a really good body.", "Amy Wong", 2],
        ["We have detected a vessel attempting to break the security cordon around Vergon 6. I'm anticipating an all-out tactical dogfight, followed by a light dinner ... ravioli, ham, sundae bar.", "Zapp Brannigan", 1],
        ["In the game of chess, you can never let your adversary see your pieces.", "Zapp Brannigan", 2],
        ["You see, Killbots have a preset kill limit. Knowing their weakness, I sent wave after wave of my own men at them, until they reached their limit and shutdown.", "Zapp Brannigan", 2],
        ["I doubt I've seen more than three or four captains sexier than you, and only one who was deadlier.", "Zapp Brannigan", 2],
        ["I’ll take it. We’ll meet you tonight for part of dinner and the first half of a movie.", "Zapp Brannigan", 2],
        ["You win again, gravity!", "Zapp Brannigan", 2],
        ["Ah, yes. Comets, the icebergs of the sky.", "Zapp Brannigan", 2],
        ["I’m swelling with patriotic mucus!", "Dr. John Zoidberg", 2],
        ["Two oil changes for the price of one! Now if I could afford the one, and the car.", "Dr. John Zoidberg", 2],
        ["Friends! Help! A guinea pig tricked me!", "Dr. John Zoidberg", 2],
        ["Whoop! Whoop! Whoop!", "Dr. John Zoidberg", 1],
        ["Switzerland is small and neutral! We are more like Germany, ambitious and misunderstood!", "That Guy", 3],
        ["Yep, I remember. They came in last at the Olympics, then retired to promote alcoholic beverages.", "Philip J. Fry", 2],
        ["If we can hit that bulls-eye, the rest of the dominoes will fall like a house of cards. Checkmate.", "Zapp Brannigan", 2],
      ];

function newQuote() {
//requires quotes array
//returns random quote object
let num = Math.floor(Math.random()*quotes.length);
return {quote: quotes[num][0], name: quotes[num][1], score: quotes[num][2]};
}

function allQuotes() {
  const quotesObj = quotes.map((q) => {
    return {quote: q[0], name: q[1], score: q[2]};
  });
  return quotesObj;
}

exports.newQuote = newQuote;
exports.allQuotes = allQuotes;
