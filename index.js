function randombackgroundimage(){
let randomImg=(Math.floor(Math.random()*44))
let Images=["https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg",
"https://images.pexels.com/photos/122244/pexels-photo-122244.jpeg",
"https://images.pexels.com/photos/2291599/pexels-photo-2291599.jpeg",
"https://images.pexels.com/photos/2896135/pexels-photo-2896135.jpeg",
"https://images.pexels.com/photos/1121123/pexels-photo-1121123.jpeg",
"https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg",
"https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
"https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg",
"https://images.pexels.com/photos/68389/pexels-photo-68389.jpeg",
"https://images.pexels.com/photos/209978/pexels-photo-209978.jpeg",
"https://images.pexels.com/photos/326259/pexels-photo-326259.jpeg",
"https://images.pexels.com/photos/6945094/pexels-photo-6945094.jpeg",
"https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg",
"https://images.pexels.com/photos/54101/magic-cube-cube-puzzle-play-54101.jpeg",
"https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg",
"https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg",
"https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg",
"https://images.pexels.com/photos/9998331/pexels-photo-9998331.jpeg",
"https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg",
"https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg",
"https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg",
"https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
"https://images.pexels.com/photos/1296720/pexels-photo-1296720.jpeg",
"https://images.pexels.com/photos/13243711/pexels-photo-13243711.png",
"https://images.pexels.com/photos/2960887/pexels-photo-2960887.jpeg",
"https://images.pexels.com/photos/1546893/pexels-photo-1546893.jpeg",
"https://images.pexels.com/photos/3484001/pexels-photo-3484001.jpeg",
"https://images.pexels.com/photos/3049806/pexels-photo-3049806.jpeg",
"https://images.pexels.com/photos/1482822/pexels-photo-1482822.jpeg",
"https://images.pexels.com/photos/8349186/pexels-photo-8349186.jpeg",
"https://images.pexels.com/photos/8349186/pexels-photo-8349186.jpeg",
"https://images.pexels.com/photos/56590/chicago-skyline-tall-buildings-56590.jpeg",
"https://images.pexels.com/photos/1727799/pexels-photo-1727799.jpeg",
"https://images.pexels.com/photos/2547616/pexels-photo-2547616.jpeg",
"https://images.pexels.com/photos/3037096/pexels-photo-3037096.jpeg",
"https://images.pexels.com/photos/2813858/pexels-photo-2813858.jpeg",
"https://images.pexels.com/photos/2813858/pexels-photo-2813858.jpeg",
"https://images.pexels.com/photos/2817488/pexels-photo-2817488.jpeg",
"https://images.pexels.com/photos/674041/pexels-photo-674041.jpeg",
"https://images.pexels.com/photos/1583244/pexels-photo-1583244.jpeg",
"https://images.pexels.com/photos/2123337/pexels-photo-2123337.jpeg",
"https://images.pexels.com/photos/2570059/pexels-photo-2570059.jpeg",
"https://images.pexels.com/photos/2167395/pexels-photo-2167395.jpeg",
"https://images.pexels.com/photos/3683194/pexels-photo-3683194.jpeg",
"https://images.pexels.com/photos/159862/art-school-of-athens-raphael-italian-painter-fresco-159862.jpeg",
"https://images.pexels.com/photos/2723450/pexels-photo-2723450.jpeg"
]
console.log(randomImg)
document.getElementById("backgroundimage").style.backgroundImage="url("+Images[randomImg]+")"
console.log(Images[randomImg])
}

// Atomic Habits
function atomicQuotes(){
    let randomeAtomicQuotes=(Math.floor(Math.random()*27))
    let allAtomicQuotes=["The work that hurts you less than it hurts others is the work you were made to do.",
    "The first mistake is never the one that ruins you. It is the spiral of repeated mistakes that follows. Missing once is an accident. Missing twice is the start of a new habit.",
    "People get so caught up in the fact that they have limits that they rarely exert the effort required to get close to them.",
    "Conventional wisdom holds that motivation is the key to habit change. Maybe if you really wanted it, you’d actually do it. But the truth is, our real motivation is to be lazy and to do what is convenient. And despite what the latest productivity best seller will tell you, this is a smart strategy, not a dumb one.",
    "It is easy to get bogged down trying to find the optimal plan for change: the fastest way to lose weight, the best program to build muscle, the perfect idea for a side hustle. We are so focused on figuring out the best approach that we never get around to taking action. As Voltaire once wrote, 'The best is the enemy of the good.'",
    "When scientists analyze people who appear to have tremendous self-control, it turns out those individuals aren’t all that different from those who are struggling. Instead, ‘disciplined' people are better at structuring their lives in a way that does not require heroic willpower and self-control.",
    "Some people spend their entire lives waiting for the time to be right to make an improvement.",
    "Whenever you want to change your behavior, you can simply ask yourself: How can I make it obvious? How can I make it attractive? How can I make it easy? How can I make it satisfying?",
    "Over the long run, however, the real reason you fail to stick with habits is that your self-image gets in the way. This is why you can’t get too attached to one version of your identity. Progress requires unlearning. Becoming the best version of yourself requires you to continuously edit your beliefs, and to upgrade and expand your identity.",
    "It’s hard to change your habits if you never change the underlying beliefs that led to your past behavior. You have a new goal and a new plan, but you haven’t changed who you are.",
    "When you fall in love with the process rather than the product, you don’t have to wait to give yourself permission to be happy. You can be satisfied anytime your system is running. And a system can be successful in many different forms, not just the one you first envision.",
    "The implicit assumption behind any goal is this: “Once I reach my goal, then I’ll be happy.” The problem with a goals-first mentality is that you’re continually putting happiness off until the next milestone.",
    "In order to improve for good, you need to solve problems at the systems level. Fix the inputs and the outputs will fix themselves.",
    "Complaining about not achieving success despite working hard is like complaining about an ice cube not melting when you heated it from twenty-five to thirty-one degrees. Your work was not wasted; it is just being stored. All the action happens at thirty-two degrees.",
    "Your outcomes are a lagging measure of your habits. Your net worth is a lagging measure of your financial habits. Your weight is a lagging measure of your eating habits. Your knowledge is a lagging measure of your learning habits. Your clutter is a lagging measure of your cleaning habits. You get what you repeat.",
    "Making a choice that is 1 percent better or 1 percent worse seems insignificant in the moment, but over the span of moments that make up a lifetime these choices determine the difference between who you are and who you could be. Success is the product of daily habits—not once-in-a-lifetime transformations.",
    "The greatest threat to success is not failure but boredom. We get bored with habits because they stop delighting us. The outcome becomes expected. And as our habits become ordinary, we start derailing our progress to seek novelty.",
    "The ultimate form of intrinsic motivation is when a habit becomes part of your identity. It’s one thing to say I’m the type of person who wants this. It’s something very different to say I’m the type of person who is this.",
    "Your actions reveal how badly you want something. If you keep saying something is a priority but you never act on it, then you don’t really want it. It’s time to have an honest conversation with yourself. Your actions reveal your true motivations.",
    "The more pride you have in a particular aspect of your identity, the more motivated you will be to maintain the habits associated with it. If you’re proud of how your hair looks, you’ll develop all sorts of habits to care for and maintain it. If you’re proud of the size of your biceps, you’ll make sure you never skip an upper-body workout. If you’re proud of the scarves you knit, you’ll be more likely to spend hours knitting each week. Once your pride gets involved, you’ll fight tooth and nail to maintain your habits.",
    "The purpose of setting goals is to win the game. The purpose of building systems is to continue playing the game. True long-term thinking is goal-less thinking. It’s not about any single accomplishment. It is about the cycle of endless refinement and continuous improvement. Ultimately, it is your commitment to the process that will determine your progress.",
    "Be the designer of your world and not merely the consumer of it.",
    "All big things come from small beginnings. The seed of every habit is a single, tiny decision. But as that decision is repeated, a habit sprouts and grows stronger. Roots entrench themselves and branches grow. The task of breaking a bad habit is like uprooting a powerful oak within us. And the task of building a good habit is like cultivating a delicate flower one day at a time.",
    "Habits are the compound interest of self-improvement.",
    "Goals are good for setting a direction, but systems are best for making progress.",
    "You should be far more concerned with your current trajectory than with your current results.",
    "You do not rise to the level of your goals. You fall to the level of your systems.",
    "Every action you take is a vote for the type of person you wish to become. No single instance will transform your beliefs, but as the votes build up, so does the evidence of your new identity. This is one reason why meaningful change does not require radical change. Small habits can make a meaningful difference by providing evidence of a new identity. And if a change is meaningful, it is actually big. That's the paradox of making small improvements.",
    ]
    document.getElementById("booktitle").innerHTML="Atomic Habits"
    document.getElementById("author").innerHTML=" - James Clear "
    document.getElementById("quote").innerHTML=allAtomicQuotes[randomeAtomicQuotes]
    randombackgroundimage()
}

// EAT THAT FROG
function etfQuotes(){
    let randomeEtfQuotes=(Math.floor(Math.random()*29))
    let allEtfQuotes=[
    "One of the very worst uses of time is to do something very well that need not to be done at all.",
    "...you cannot eat every tadpole and frog in the pond, but you can eat the biggest and ugliest one, and that will be enough, at least for the time being.",
    "If you have to eat two frogs, eat the ugliest one first.",
    "This is another way of saying that if you have two important tasks before you, start with the biggest, hardest, and most important task first.",
    "If you have to eat two frogs, eat the ugliest one first.",
    "The hardest part of any important task is getting started on it in the first place. Once you actually begin work on a valuable task, you seem to be naturally motivated to continue.",
    "Do not wait; the time will never be 'just right.' Start where you stand, and work with whatever tools you may have at your command, and better tools will be found as you go along. NAPOLEON HILL",
    "Rule: Continuous learning is the minimum requirement for success in any field.",
    "Everyone procrastinates. The difference between high performers and low performers is largely determined by what they choose to procrastinate on.",
    "Goals are the fuel in the furnace of achievement. The bigger your goals and the clearer they are, the more excited you become about achieving them. The more you think about your goals, the greater becomes your inner drive and desire to accomplish them.",
    "People who take a long view of their lives and careers always seem to make much better decisions about their time and activities than people who give very little thought to the future.",
    "The Key to Success is Action",
    "The most valuable tasks you can do each day are often the hardest and most complex. But the payoff and rewards for completing these tasks efficiently can be tremendous.",
    "This is a wonderful time to be alive. There have never been more possibilities and opportunities for you to achieve more of your goals than exist today.",
    "As Pat Riley, the basketball coach, said, 'Anytime you stop striving to get better, you're bound to get worse.",
    "The law of Forced Efficiency says that There is never enough time to do everything, but there is always enough time to do the most important thing",
    "Galileo once wrote, You cannot teach a man anything; you can only help him find it within himself",
    "Rule: It is the quality of time at work that counts and the quantity of time at home that matters",
    "There is an old saying that by the yard it's hard; but inch by inch, anything's a cinch!",
    "You can get your time and your life under control only to the degree to which you discontinue lower-value activities",
    "Say no to anything that is not a high-value use of your time and your life.",
    "If you have to eat a live frog at all, it doesn't pay to sit and look at it for very long",
    "The first requisite for success is the ability to apply your physical and mental energies to one problem incessantly without growing weary.",
    "What are your three most important business or career goals right now? What are your three most important family or relationship goals right now? What are your three most important financial goals right now? What are your three most important health goals right now? What are your three most important personal and professional development goals right now? What are your three most important social and community goals right now? What are your three biggest problems or concerns in life right now?",
    "Refuse to complain about your problems. Keep them to yourself. As speaker-humorist Ed Foreman says, 'You should never share your problems with others because 80 percent of people don't care about them anyway, and the other 20 percent are kind of glad that you have got them in the first place'.",
    "Refuse to allow a weakness or a lack of ability in any area to hold you back. Everything is learnable. And what others have learned, you can learn as well.",
    "Anytime you stop striving to get better, you're bound to get worse.",
    "What one skill, if I developed and did it in an excellent fashion, would have the greatest positive impact on my career?",
    "When everything is laid out neatly and in sequence, you will feel much more like getting on with the job",
    "Practice 'zero-based thinking' in every part of your life. Ask yourself continually, If I were not doing this already, knowing what I now know, would I start doing it again today?"
    ]
    document.getElementById("booktitle").innerHTML="Eat that frog"
    document.getElementById("author").innerHTML=" - Brian Tracy"
    document.getElementById("quote").innerHTML=allEtfQuotes[randomeEtfQuotes]
    randombackgroundimage()
}


//                HOW TO WIN FRIENDS AND INFLUENCE PEOPLE
function htwQuotes(){
    let randomeHtwQuotes=(Math.floor(Math.random()*29))
    let allHTWQuotes=[
        "Every man I meet is my superior in some way. In that, I learn of him.",
        "Criticisms are like homing pigeons. They always return home.",
        "Only knowledge that is used sticks in your mind.",
        "The rare individual who unselfishly tries to serve others has an enormous advantage.",
        "The only way I can get you to do anything is by giving you what you want.",
        "A person’s name is to that person the sweetest and most important sound in any language.",
        "Arouse in the other person an eager want. He who can do this has the whole world with him.",
        "Every successful person loves the game. The chance to prove his worth, to excel, to win.",
        "Success in dealing with people depends on a sympathetic grasp of the other person’s viewpoint.",
        "Pay less attention to what men say. Just watch what they do.",
        "Ask questions instead of giving orders.",
        "The average person is more interested in her own name than in all the other names on earth put together.",
        "Remember a name and call it easily and you have paid a subtle and very effective compliment.",
        "There is only one way to get the best of an argument -- and that is to avoid it.",
        "Three-fourths of the people you will meet are hungering for sympathy. Give it to them and they will love you.",
        "People are more likely to accept an order if they had a part in the decision that caused the order to be issued.",
        "Flaming enthusiasm backed up by horse sense and persistence is the quality that most frequently makes for success.",
        "Ask yourself: What is the worst that can happen? Then prepare to accept it. Then proceed to improve on the worst.",
        "Happiness doesn’t depend on any external conditions, it is governed by our mental attitude.",
        "One reason why birds and horses are not unhappy is because they are not trying to impress other birds and horses.",
        "To be interesting, be interested.",
        "All men have fears, but the brave put down their fears and go forward.",
        "Give the other person a fine reputation to live up to.",
        "Talk to someone about themselves and they’ll listen for hours.",
        "You cannot teach a man anything; you can only help him to find it within himself.",
        "Criticism is dangerous because it wounds a person’s pride, hurts his sense of importance, and arouses resentment.",
        "Actions speak louder than words. A smile says, 'I like you. I am glad to see you.'",
        "You can't win an argument. If you lose it, you lose it; and if you win it, you lose it.",
        "If you want to gather honey, don’t kick over the beehive.",
        "It raises one above the herd and gives one a feeling of nobility and exaltation to admit one's mistakes."
    ]
    document.getElementById("booktitle").innerHTML="How to win friends and influence people"
    document.getElementById("author").innerHTML=" - Dale Carnage"
    document.getElementById("quote").innerHTML=allHTWQuotes[randomeHtwQuotes]
    randombackgroundimage()
}

function mindQuotes(){
    let randomeMindQuotes=(Math.floor(Math.random()*27))
    let allMindQuotes=[
        "Just keep your conscious mind busy with expectation of the best.",
        "The only path by which another person can upset you is through your own thought.",
        "Busy your mind with the concepts of harmony, health, peace, and good will, and wonders will happen in your life.",
        "Prayer is the soul's sincere desire. Your desire is your prayer. It comes out of your deepest needs and it reveals the things you want in life.",
        "The way to get rid of darkness is with light; the way to overcome cold is with heat; the way to overcome the negative thought is to substitute the good thought. Affirm the good, and the bad will vanish.",
        "Give no one in all the world the power to deflect you from your goal, your aim in life, which is to express your hidden talents to the world, to serve humanity, and to reveal more and more of God’s wisdom, truth, and beauty to all people in the world. Remain true to your ideal. Know definitely and absolutely that whatever contributes to your peace, happiness, and fulfillment must of necessity bless all men who walk the earth. The harmony of the part is the harmony of the whole, for the whole is in the part, and the part is in the whole. All you owe the other, as Paul says, is love, and love is the fulfilling of the law of health, happiness, and peace of mind.",
        "Never finish a negative statement; reverse it immediately, and wonders will happen in your life.",
        "All of us have our own inner fears, beliefs, opinions. These inner assumptions rule and govern our lives. A suggestion has no power in and of itself. its power arises from the fact that you accept it mentally.",
        "As you sow in your subconscious mind, so shall you reap in your body and environment.",
        "You grow old when you lose interest in life, when you cease to dream, to hunger after new truths, and to search for new worlds to conquer. When your mind is open to new ideas, new interests, and when you raise the curtain and let in the sunshine and inspiration of new truths of life and the universe, you will be young and vital.",
        "age has its own glory, beauty, and wisdom that belong to it.",
        "I like money, I love it, I use it wisely, constructively, and judiciously. Money is constantly circulating in my life. I release it with joy, and it returns to me multiplied in a wonderful way. It is good and very good. Money flows to me in avalanches of abundance. I use it for good only, and I am grateful for my good and for the riches of my mind.",
        "you remain faithful to your mental attitude, your prayer will be answered.",
        "Remember, you have the capacity to choose. Choose life! Choose love! Choose health!",
        "Every cell, nerve, tissue, and muscle of my lungs are now being made whole, pure, and perfect. My whole body is being restored to health and harmony.",
        "You must make certain to give your subconscious only suggestions, which heal, bless, elevate, and inspire you in all your ways. Remember that your subconscious mind cannot take a joke. It takes you at your word.",
        "Know that in your deeper mind are Infinite Intelligence and Infinite Power.",
        "All disease originates in the mind. Nothing appears on the body unless there is a mental pattern corresponding to it.",
        "He awakened to the simple truth that it is never what a person says or does that affects him, it is his reaction to what is said or done that matters.",
        "Remember, you are spiritually recharged during sleep, and adequate sleep is essential to produce joy and vitality in life.",
        "Trying to accumulate wealth by the sweat of your brow and hard labor is one way to become the richest man in the graveyard. You do not have to strive or slave hard.",
        "The doctor dresses the wound, but God heals it.",
        "You are as young as you think you are. You are as strong as you think you are. You are as useful as you think you are. You are as young as your thoughts.",
        "the law of the subconscious mind works for good and bad ideas alike. This law, when applied in a negative way, is the cause of failure, frustration, and unhappiness. However, when your habitual thinking is harmonious and constructive, you experience perfect health, success, and prosperity.",
        "Keep on keeping on until the day breaks and the shadows flee away.",
        "I am whole, perfect, strong, powerful, loving, harmonious, and happy.",
        "Age is not the flight of years; it is the dawn of wisdom in the mind of man.",
        "You must give to receive.",
        "Do not let others do your thinking for you. Choose your own thoughts and make your own decisions."
    
    ]
    document.getElementById("booktitle").innerHTML="Power of subconcious mind"
    document.getElementById("author").innerHTML=" - Joseph Murphy"
    document.getElementById("quote").innerHTML=allMindQuotes[randomeMindQuotes]
    randombackgroundimage()
}


function powerQuotes(){
    let randomePowerQuotes=(Math.floor(Math.random()*29))
    let allPowerQuotes=[
    "When you show yourself to the world and display your talents, you naturally stir all kinds of resentment, envy, and other manifestations of insecurity... you cannot spend your life worrying about the petty feelings of others",
    "Always Say Less Than Necessary    When you are trying to impress people with words, the more you say, the more common you appear, and the less in control. Even if you are saying something banal, it will seem original if you make it vague, open-ended, and sphinxlike. Powerful people impress and intimidate by saying less. The more you say, the more likely you are to say something foolish.",
    "If you are unsure of a course of action, do not attempt it. Your doubts and hesitations will infect your execution. Timidity is dangerous: Better to enter with boldness. Any mistakes you commit through audacity are easily corrected with more audacity. Everyone admires the bold; no one honors the timid.",
    "Keep your friends for friendship, but work with the skilled and competent",
    "Do not leave your reputation to chance or gossip; it is your life's artwork, and you must craft it, hone it, and display it with the care of an artist",
    "Appearing better than others is always dangerous, but most dangerous of all is to appear to have no faults or weaknesses. Envy creates silent enemies. It is smart to occasionally display defects, and admit to harmless vices, in order to deflect envy and appear more human and approachable. Only gods and the dead can seem perfect with impunity",
    "Do not accept the roles that society foists on you. Re-create yourself by forging a new identity, one that commands attention and never bores the audience. Be the master of your own image rather than letting others define if for you. Incorporate dramatic devices into your public gestures and actions – your power will be enhanced and your character will seem larger than life.",
    "Never assume that the person you are dealing with is weaker or less important than you are. Some people are slow to take offense, which may make you misjudge the thickness of their skin, and fail to worry about insulting them. But should you offend their honor and their pride, they will overwhelm you with a violence that seems sudden and extreme given their slowness to anger. If you want to turn people down, it is best to do so politely and respectfully, even if you feel their request is impudent or their offer ridiculous",
    "Many a serious thinker has been produced in prisons, where we have nothing to do but think.",
    "...But the human tongue is a beast that few can master. It strains constantly to break out of its cage, and if it is not tamed, it will tun wild and cause you grief",
    "LAW 38-Think As You Like But Behave Like Others:'If you make a show of going against the times, flaunting your unconventional ideas and unorthodox ways, people will think that you only want attention and that you look down upon them. They will find a way to punish you for making them feel inferior. It is far safer to blend in and nurture the common touch. Share your originality only with tolerant friends and those who are sure to appreciate your uniqueness'.",
    "Never waste valuable time, or mental peace of mind, on the affairs of others—that is too high a price to pay",
    "Lord, protect me from my friends; I can take care of my enemies",
    "There is nothing more intoxicating than victory, and nothing more dangerous.",
    "Strike the shepherd and the sheep will scatter",
    "person who cannot control his words shows that he cannot control himself, and is unworthy of respect.",
    "Be wary of friends—they will betray you more quickly, for they are easily aroused to envy. They also become spoiled and tyrannical. But hire a former enemy and he will be more loyal than a friend, because he has more to prove. In fact, you have more to fear from friends than from enemies. If you have no enemies, find a way to make them.",
    "You choose to let things bother you. You can just as easily choose not to notice the irritating offender, to consider the matter trivial and unworthy of your interest. That is the powerful move. What you do not react to cannot drag you down in a futile engagement. Your pride is not involved. The best lesson you can teach an irritating gnat is to consign it to oblivion by ignoring it.",
    "For the future, the motto is, 'No days unalert'",
    "Few are born bold. Even Napoleon had to cultivate the habit on the battlefield, where he knew it was a matter of life and death. In social settings he was awkward and timid, but he overcame this and practice boldness in every part of his life because he saw its tremendous power, how it could literally enlarge a man(even one who, like Napoleon, was in fact conspicuously small)",
    "Despise The Free Lunch",
    "Be Royal in your Own Fashion: Act like a King to be treated",
    "To succeed in the game of power, you have to master your emotions. But even if you succeed in gaining such self-control, you can never control the temperamental dispositions of those around you. And this presents a great danger.",
    "When you meet a swordsman, draw your sword: Do not recite poetry to one who is not a poet",
    "Remember: The best deceivers do everything they can to cloak their roguish qualities. They cultivate an air of honesty in one area to disguise their dishonesty in others. Honesty is merely another decoy in their arsenal of weapons.",
    "An emotional response to a situation is the single greatest barrier to power, a mistake that will cost you a lot more than any temporary satisfaction you might gain by expressing your feelings.",
    "A Prince asked the dying spanish statesman, 'Does your Excellency forgive all your enemies?', 'I do not have to forgive all my enemies', answered the stateman, 'I have had them all shot'.",
    "do I not destroy my enemies when I make them my friends?",
    "Never be distracted by people’s glamorous portraits of themselves and their lives; search and dig for what really imprisons them.",
    "A heckler once interrupted Nikita Khrushchev in the middle of a speech in which he was denouncing the crimes of Stalin. “You were a colleague of Stalin’s,” the heckler yelled, “why didn’t you stop him then?” Khrushschev apparently could not see the heckler and barked out, “Who said that?” No hand went up. No one moved a muscle. After a few seconds of tense silence, Khrushchev finally said in a quiet voice, “Now you know why I didn’t stop him.” Instead of just arguing that anyone facing Stalin was afraid, knowing that the slightest sign of rebellion would mean certain death, he had made them feel what it was like to face Stalin—had made them feel the paranoia, the fear of speaking up, the terror of confronting the leader, in this case Khrushchev. The demonstration was visceral and no more argument was necessary"
    ]
    document.getElementById("booktitle").innerHTML="48 Laws of Power"
    document.getElementById("author").innerHTML=" - Robert Greene"
    document.getElementById("quote").innerHTML=allPowerQuotes[randomePowerQuotes]
    randombackgroundimage()
} 