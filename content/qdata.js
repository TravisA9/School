var tester = [

{ q:"Dennis is waiting __________ for his friends to come to his house.", 
a:["[*] patiently", "loudly", "neatly", "bravely"], 
format:"dropdown", repeat:10 },

{ q:"A verb can be...", a:["[*] a state", "[*] an action", "a banana", "a noun"], 
format:"multiple", repeat:10 },

{ q:"Please select all past tense verbs the following sentence:", 
a:["Today, Monica and her friends -<went>- to the park and -<played>- basketball."], 

format:"findInText", repeat:10 },

{ q:"woman said to serpant", a:["Genesis 3:2-3", "Genesis", "Genesis 3"], format:"type", repeat:10 },
{ q:"you must not murder", a:["Deuteronomy 5:17", "Deuteronomy", "Deuteronomy 5"], format:"type", repeat:10 },
{ q:"should not be found Sons pass through the fire", a:["Deuteronomy 8:10-11", "Deuteronomy", "Deuteronomy 8"], format:"type", repeat:10 },
{ q:"Jehovah said to satan", a:["Job 1:8", "Job", "Job 1"], format:"type", repeat:10 },
{ q:"a god merciful and gracious", a:["Exodus 34:6", "Exodus", "Exodus 34"], format:"type", repeat:10 },
{ q:"men should struggle with each other", a:["Exodus 21:22-23", "Exodus", "Exodus 21"], format:"type", repeat:10 },
{ q:"you men of heart listen to me", a:["Job 34:10", "Job", "Job 34"], format:"type", repeat:10 },
	]

var verses1 = [
{ q:"woman said to serpant", a:["Genesis 3:2-3", "Genesis", "Genesis 3"], format:"type", repeat:10 },
{ q:"you must not murder", a:["Deuteronomy 5:17", "Deuteronomy", "Deuteronomy 5"], format:"type", repeat:10 },
{ q:"should not be found Sons pass through the fire", a:["Deuteronomy 8:10-11", "Deuteronomy", "Deuteronomy 8"], format:"type", repeat:10 },
{ q:"Jehovah said to satan", a:["Job 1:8", "Job", "Job 1"], format:"type", repeat:10 },
{ q:"a god merciful and gracious", a:["Exodus 34:6", "Exodus", "Exodus 34"], format:"type", repeat:10 },
{ q:"men should struggle with each other", a:["Exodus 21:22-23", "Exodus", "Exodus 21"], format:"type", repeat:10 },
{ q:"you men of heart listen to me", a:["Job 34:10", "Job", "Job 34"], format:"type", repeat:10 },
{ q:"for with you is the source of life", a:["Psalm 36:9", "Psalm", "Psalm 36"], format:"type", repeat:10 },
{ q:"Treasure up my own commandments", a:["Proverbs 2:1-5", "Proverbs", "Proverbs 2"], format:"type", repeat:10 },
{ q:"the dead they are conscious of nothing", a:["Ecclesiastes 9:5", "Ecclesiastes", "Ecclesiastes 9"], format:"type", repeat:10 },
{ q:"Trust in Jehovah not upon your own understanding", a:["Proverbs 3:5-6", "Proverbs", "Proverbs 3"], format:"type", repeat:10 },
{ q:"serpant said to woman", a:["Genesis 3:4-5", "Genesis", "Genesis 3"], format:"type", repeat:10 },
{ q:"hearer of prayer", a:["Psalm 65:2", "Psalm", "Psalm 65"], format:"type", repeat:10 },
{ q:"whose name is Jehovah, you are the most high", a:["Psalm 83:18", "Psalm", "Psalm 83"], format:"type", repeat:10 },
{ q:"not make carved image", a:["Exodus 20:4-5", "Exodus", "Exodus 20"], format:"type", repeat:10 },
{ q:"Wars to cease to the extremity of the earth", a:["Psalm 46:9", "Psalm", "Psalm 46"], format:"type", repeat:10 },
{ q:"God is not a man that he should tell lies", a:["Numbers 23:19", "Numbers", "Numbers 23"], format:"type", repeat:10 },
{ q:"Satan answered Jehovah", a:["Job 2:4", "Job", "Job 2"], format:"type", repeat:10 },
{ q:"little bit longer wicked will be no more", a:["Psalm 37:10-11", "Psalm", "Psalm 37"], format:"type", repeat:10 },
{ q:"Love god with all your heart", a:["Deuteronomy 6:5", "Deuteronomy", "Deuteronomy 6"], format:"type", repeat:10 },
{ q:"The fruitage of the belly is a reward", a:["Psalm 127:3", "Psalm", "Psalm 127"], format:"type", repeat:10 },
{ q:"Sheol you would conceal me", a:["Job 14:13-15", "Job", "Job 14"], format:"type", repeat:10 },
{ q:"be wisee my son make my heart rejoice", a:["Proverbs 27:11", "Proverbs", "Proverbs 27"], format:"type", repeat:10 },
{ q:"Righteous will possess the earth", a:["Psalm 37:29", "Psalm", "Psalm 37"], format:"type", repeat:10 },
{ q:"plenty of grain on the earth", a:["Psalm 72:16", "Psalm", "Psalm 72"], format:"type", repeat:10 },
{ q:"words I am commanding you must be on your heart", a:["Deuteronomy 6:6-7", "Deuteronomy", "Deuteronomy 6"], format:"type", repeat:10 },
]
var verses2 = [
{ q:"All things you pray for have faith that you have practically received", a:["Mark 11:24", "Mark", "Mark 11"], format:"type", repeat:10 },
{ q:"my words that goes forth from my mouth will prove to be", a:["Isaiah 5:11", "Isaiah", "Isaiah 5"], format:"type", repeat:10 },
{ q:"They will build houses and have occupancy", a:["Isaiah 65:21-22", "Isaiah", "Isaiah 65"], format:"type", repeat:10 },
{ q:"No man has ascended into heaven", a:["John 3:13", "John", "John 3"], format:"type", repeat:10 },
{ q:"let him disown himself and take his torture stake", a:["Mark 8:34", "Mark", "Mark 8"], format:"type", repeat:10 },
{ q:"No resident will say I am sick", a:["Isaiah 33:24", "Isaiah", "Isaiah 33"], format:"type", repeat:10 },
{ q:"the eyes of the blind will be opened", a:["Isaiah 35:5-6", "Isaiah", "Isaiah 35"], format:"type", repeat:10 },
{ q:"the hour is coming in which all those in the memorial toms will hear his voice and come out", a:["John 5:28-29", "John", "John 5"], format:"type", repeat:10 },
{ q:"there will be great earthquakes pestilences and food shortages", a:["Luke 21:11", "Luke", "Luke 21"], format:"type", repeat:10 },
{ q:"I am Jehovah and there is no one else", a:["Isaiah 45:18", "Isaiah", "Isaiah 45"], format:"type", repeat:10 },
{ q:"Nation will rise against nation", a:["Matthew 24:7", "Matthew", "Matthew 24"], format:"type", repeat:10 },
{ q:"sit under his fig tree", a:["Micah 4:4", "Micah", "Micah 4"], format:"type", repeat:10 },
{ q:"your Repurchaser the Holy One of Isreal", a:["Isaiah 48:17-18", "Isaiah", "Isaiah 48"], format:"type", repeat:10 },
{ q:"by their fruits you will recognize them", a:["Matthew 7:16-17", "Matthew", "Matthew 7"], format:"type", repeat:10 },
{ q:"earthling man his way does not belong", a:["Jeremiah 10:23", "Jeremiah", "Jeremiah 10"], format:"type", repeat:10 },
{ q:"God loved the world so much he gave his only-begotten son", a:["John 3:16", "John", "John 3"], format:"type", repeat:10 },
{ q:"Jesus set out teaching the good news of the kingdom", a:["Matthew 9:35-36", "Matthew", "Matthew 9"], format:"type", repeat:10 },
{ q:"Good news will be preached in all the inhabited earth", a:["Matthew 4:14", "Matthew", "Matthew 4"], format:"type", repeat:10 },
{ q:"after being baptized jesus came up and the heavens were opended up", a:["Matthew 3:16", "Matthew", "Matthew 3"], format:"type", repeat:10 },
{ q:"Go make disciples of people of all the nations", a:["Matthew 28:19-20", "Matthew", "Matthew 28"], format:"type", repeat:10 },
{ q:"go through the narrow Gate", a:["Matthew 7:13-14", "Matthew", "Matthew 7"], format:"type", repeat:10 },
{ q:"you are the christ the son of the living god", a:["Matthew 16:16", "Matthew", "Matthew 16"], format:"type", repeat:10 },
{ q:"you are my witnesses", a:["Isaiah 43:10", "Isaiah", "Isaiah 43"], format:"type", repeat:10 },
{ q:"you must pray then this way", a:["Matthew 6:9", "Matthew", "Matthew 6"], format:"type", repeat:10 },
]

var verses3 = [
{ q:"I have hope toward god", a:["Acts 24:15", "Acts", "Acts 24"], format:"type", repeat:10 },
{ q:"Lazarus come out", a:["John 11:43", "John", "John 11"], format:"type", repeat:10 },
{ q:"all scripture is inspired from god", a:["2 Timothy 3:16-17", "2 Timothy", "2 Timothy 3"], format:"type", repeat:10 },
{ q:"one mans sin entered into the world", a:["Romans 5:12", "Romans", "Romans 5"], format:"type", repeat:10 },
{ q:"tresuring up a fine foundation for the future", a:["1 Timothy 6:19", "1 Timothy", "1 Timothy 6"], format:"type", repeat:10 },
{ q:"let your love be without hypocrisy", a:["Romans 12:9", "Romans", "Romans 12"], format:"type", repeat:10 },
{ q:"I am the way and the truth and the life", a:["John 14:6", "John", "John 14"], format:"type", repeat:10 },
{ q:"fight the fine fight of the faith", a:["1 Timothy 6:12", "1 Timothy", "1 Timothy 6"], format:"type", repeat:10 },
{ q:"making sure of what is acceptable to the lord", a:["Ephesians 5:10", "Ephesians", "Ephesians 5"], format:"type", repeat:10 },
{ q:"abstaining from things scrificed to idols and from blood", a:["Acts 5:28-29", "Acts", "Acts 5"], format:"type", repeat:10 },
{ q:"love one another just as i have loved you", a:["John 13:34-35", "John", "John 13"], format:"type", repeat:10 },
{ q:"Bad associations spoil useful habits", a:["1 Corinthians 15:33", "1 Cornithians", "1 Corinthians 15"], format:"type", repeat:10 },
{ q:"unrighteous persons will not inherit gods kingdom", a:["1 Cornithians 6:9-10", "1 Cornithians", "1 Cornithians 6"], format:"type", repeat:10 },
{ q:"do not be anxious over anything", a:["Philippians 4:6-7", "Philippians", "Philippians 4"], format:"type", repeat:10 },
{ q:"times hard to deal with will be here", a:["2 Timothy 3:1", "2 Timothy", "2 Timothy 3"], format:"type", repeat:10 },
{ q:"by means of him we have the release by ransom through the blood of that one", a:["Ephesians 1:7", "Ephesians", "Ephesians 1"], format:"type", repeat:10 },
{ q:"let utterance be always with graciousness", a:["Colossians 4:6", "Colossians", "Colossians 4"], format:"type", repeat:10 },
{ q:"there is a judging of this world", a:["John 12:31", "John", "John 12"], format:"type", repeat:10 },
{ q:"children, be obedient to your parents", a:["Ephesians 6:1-3", "Ephesians", "Ephesians 6"], format:"type", repeat:10 },
{ q:"Crispus became a beliver in the lord and so his household", a:["Acts 8:8", "Acts", "Acts 8"], format:"type", repeat:10 },
{ q:"husbands ought tobe loving to their wives", a:["Ephesians 5:28-29", "Ephesians", "Ephesians 5"], format:"type", repeat:10 },
{ q:"Repent and turn around so as to get your sins blotted out", a:["Acts 3:19", "Acts", "Acts 3"], format:"type", repeat:10 },
{ q:"pray incessantly", a:["1 Thessalonians 5:17", "1 Thessalonians", "1 Thessalonians 5"], format:"type", repeat:10 },
{ q:"Lazarus has gone to rest", a:["John 11:11", "John", "John 11"], format:"type", repeat:10 },
{ q:"this means everlasting life", a:["John 17:3", "John", "John 17"], format:"type", repeat:10 },
{ q:"obey god as ruler rather then men", a:["Acts 5:29", "Acts", "Acts 5"], format:"type", repeat:10 },
{ q:"the wages sin pays is death", a:["Romans 6:23", "Romans", "Romans 6"], format:"type", repeat:10 },
]
var verses4 = [
{ q:"Keep yourselves in Gods love while you are waiting for mercy", a:["Jude 21", "Jude"], format:"type", repeat:10 },
{ q:"no more for the desires of men but for gods will", a:["1 Peter 4:2", "1  Peter", "1 Peter 4"], format:"type", repeat:10 },
{ q:"recall young women to love their husbands, children", a:["Titus 2:4-5", "Titus", "Titus 2"], format:"type", repeat:10 },
{ q:"a Great crowd, which no man was able to number", a:["Revelation 7:9", "Revelation", "Revelation 7"], format:"type", repeat:10 },
{ q:"Woe for them earth and for sea", a:["Revelation 12:12", "Revelation", "Revelation 12"], format:"type", repeat:10 },
{ q:"you are worthy, Jehovah, even our Gods", a:["Revelation 4:11", "Revelation", "Revelation 4"], format:"type", repeat:10 },
{ q:"He that does not love has not come to know god", a:["1 John 4:8, 16", "1 John", "1 John 4"], format:"type", repeat:10 },
{ q:"These are the ones that did not defile themselves with women", a:["Revelation 14:4", "Revelation", "Revelation 14"], format:"type", repeat:10 },
{ q:"we know we originate with God", a:["1 John 5:19", "1 John", "1 John 5"], format:"type", repeat:10 },
{ q:"So down the great dragon was hurled", a:["Revelation 12:9", "Revelation", "Revelation 12"], format:"type", repeat:10 },
{ q:"Christ suffered for you leaving a model for you to follow", a:["1  Peter 2:21", "1  Peter", "1  Peter 2"], format:"type", repeat:10 },
{ q:"that we observe his commandments; and yet his commandments are not burdensome", a:["1 John 5:3", "1 John", "1 John 5"], format:"type", repeat:10 },
{ q:"They are, in fact, expressions inspired by demons and perform signs", a:["Revelation 16:14, 16", "Revelation", "Revelation 16"], format:"type", repeat:10 },
{ q:"look the tent of good is with mankind", a:["Revelation 21:3-4", "Revelation", "Revelation 21"], format:"type", repeat:10 },
{ q:"incite to love and fine works", a:["Hebrews 10:24-25", "Hebrews", "Hebrews 10"], format:"type", repeat:10 },
{ q:"the scripture was fulfilled which says: Abraham put faith in Jehovah", a:["James 2:23", "James", "James 2"], format:"type", repeat:10 },
{ q:"Devil has been sinning from the beginning", a:["1 John 3:8", "1 John", "1 John 3"], format:"type", repeat:10 },
{ q:"humble yourselves under the mighty hand of god", a:["1 Peter 5:6-7", "1  Peter", "1 Peter 5"], format:"type", repeat:10 },
{ q:"Subject yourselves therefore to god", a:["James 4:7-8", "James", "James 4"], format:"type", repeat:10 },
{ q:"his angels spirits and his public servans a flame of fire", a:["Hebrews 1:7,14", "Hebrews", "Hebrews 1"], format:"type", repeat:10 },
{ q:"\"we have no sin\" we are misleading ourselves and truth is not in us", a:["1 John 1:8-9", "1 John", "1 John 1"], format:"type", repeat:10 },
{ q:"The love of God was made manifest in our case", a:["1 John 4:9-10", "1 John", "1 John 4"], format:"type", repeat:10 },
{ q:"The Lamb standing upon the Mount Zion", a:["Revelation 14:1", "Revelation", "Revelation 14"], format:"type", repeat:10 },
]










var bible1 = [
{ q:"Demonstrates the importance of following God's commands as disregarding them leads to consequences.", a:["[*] Genesis 3:2-3", "Deuteronomy 8:10-11", "Psalm 65:2", "Deuteronomy 6:6-7"], format:"multiple", repeat:10 },
{ q:"Upholds the commandment against murder, emphasizing the sanctity of human life.", a:["[*] Deuteronomy 5:17", "Psalm 37:10-11", "Exodus 20:4-5", "Exodus 34:6"], format:"multiple", repeat:10 },
{ q:"Teaches gratitude and humility, emphasizing the importance of acknowledging God's provisions and blessings.", a:["[*] Deuteronomy 8:10-11", "Ecclesiastes 9:5", "Exodus 21:22-23", "Job 34:10"], format:"multiple", repeat:10 },
{ q:"Highlights Job's righteousness, illustrating the faithful servant's loyalty to God despite severe trials.", a:["[*] Job 1:8", "Genesis 3:4-5", "Genesis 3:2-3", "Proverbs 27:11"], format:"multiple", repeat:10 },
{ q:"Reveals God's merciful and compassionate nature, encouraging trust in His forgiveness and grace.", a:["[*] Exodus 34:6", "Job 2:4", "Psalm 83:18", "Proverbs 3:5-6"], format:"multiple", repeat:10 },
{ q:"Provides guidelines on compensation for harm to an unborn child, indicating respect for the value of life even in the womb.", a:["[*] Exodus 21:22-23", "Psalm 36:9", "Deuteronomy 5:17", "Numbers 23:19"], format:"multiple", repeat:10 },
{ q:"Reinforces God's justice, assuring that He is fair and impartial in His dealings with humanity.", a:["[*] Job 34:10", "Proverbs 2:1-5", "Deuteronomy 6:5", "Psalm 127:3"], format:"multiple", repeat:10 },
{ q:"Describes God as the source of life, emphasizing dependence on Him for spiritual enlightenment and guidance.", a:["[*] Psalm 36:9", "Psalm 46:9", "Job 14:13-15", "Psalm 37:29"], format:"multiple", repeat:10 },
{ q:"Encourages the pursuit of wisdom and understanding, demonstrating the value of seeking God's knowledge in everyday life.", a:["[*] Proverbs 2:1-5", "Job 14:13-15", "Job 1:8", "Psalm 72:16"], format:"multiple", repeat:10 },
{ q:"Highlights the state of the dead, supporting the belief in the unconsciousness of the soul after death until resurrection.", a:["[*] Ecclesiastes 9:5", "Proverbs 3:5-6", "Psalm 65:2", "Numbers 23:19"], format:"multiple", repeat:10 },
{ q:"Encourages trust in God's wisdom and guidance, emphasizing reliance on Him in all decisions and paths taken.", a:["[*] Proverbs 3:5-6", "Psalm 46:9", "Proverbs 27:11", "Ecclesiastes 9:5"], format:"multiple", repeat:10 },
{ q:"Demonstrates the danger of disobedience and self-reliance, highlighting the consequences of rejecting God's command.", a:["[*] Genesis 3:4-5", "Proverbs 2:1-5", "Psalm 72:16", "Job 2:4"], format:"multiple", repeat:10 },
{ q:"Acknowledges God as a listener to prayers, underscoring the importance of communication with Him.", a:["[*] Psalm 65:2", "Exodus 34:6", "Deuteronomy 5:17", "Psalm 37:10-11"], format:"multiple", repeat:10 },
{ q:"Affirms God's uniqueness and sovereignty, reinforcing the belief in His supreme authority and name.", a:["[*] Psalm 83:18", "Psalm 36:9", "Deuteronomy 6:6-7", "Exodus 21:22-23"], format:"multiple", repeat:10 },
{ q:"Prohibits idolatry, emphasizing the exclusive worship of God and the rejection of any form of idol worship.", a:["[*] Exodus 20:4-5", "Psalm 127:3", "Job 34:10", "Genesis 3:2-3"], format:"multiple", repeat:10 },
{ q:"Promotes peace and trust in God's ultimate power, encouraging reliance on His ability to bring about peace.", a:["[*] Psalm 46:9", "Deuteronomy 6:5", "Psalm 83:18", "Exodus 20:4-5"], format:"multiple", repeat:10 },
{ q:"Asserts God's faithfulness and unchanging nature, emphasizing His reliability and trustworthiness.", a:["[*] Numbers 23:19", "Psalm 37:29", "Deuteronomy 8:10-11", "Genesis 3:4-5"], format:"multiple", repeat:10 },
{ q:"Challenges Satan's accusation against Job, illustrating Job's integrity and loyalty to God even in suffering.", a:["[*] Job 2:4", "Job 1:8", "Proverbs 3:5-6", "Psalm 65:2"], format:"multiple", repeat:10 },
{ q:"Foretells the future of the wicked and righteous, promising that the meek will inherit the earth.", a:["[*] Psalm 37:10-11", "Numbers 23:19", "Job 14:13-15", "Exodus 34:6"], format:"multiple", repeat:10 },
{ q:"Summarizes the essence of God's commandments, emphasizing love for God with all one's heart, soul, and strength.", a:["[*] Deuteronomy 6:5", "Job 34:10", "Exodus 21:22-23", "Psalm 65:2"], format:"multiple", repeat:10 },
{ q:"Celebrates children as a blessing from God, underscoring the sanctity of life and the importance of family.", a:["[*] Psalm 127:3", "Proverbs 2:1-5", "Deuteronomy 6:5", "Numbers 23:19"], format:"multiple", repeat:10 },
{ q:"Expresses hope in resurrection, indicating faith in God's ability to restore life after death.", a:["[*] Job 14:13-15", "Deuteronomy 5:17", "Proverbs 27:11", "Genesis 3:2-3"], format:"multiple", repeat:10 },
{ q:"Emphasizes the importance of wisdom and understanding, encouraging continual learning and growth.", a:["[*] Proverbs 27:11", "Job 14:13-15", "Psalm 127:3", "Psalm 72:16"], format:"multiple", repeat:10 },
{ q:"Assures the righteous of their eternal inheritance, promising them a permanent dwelling in the land.", a:["[*] Psalm 37:29", "Ecclesiastes 9:5", "Job 2:4", "Deuteronomy 8:10-11"], format:"multiple", repeat:10 },
{ q:"Portrays the abundance of grain as a symbol of God's blessings, illustrating His provision and prosperity.", a:["[*] Psalm 72:16", "Genesis 3:4-5", "Exodus 20:4-5", "Job 1:8"], format:"multiple", repeat:10 },
{ q:"Instructs parents to teach God's commandments to their children, emphasizing the importance of passing down faith and knowledge through generations.", a:["[*] Deuteronomy 6:6-7", "Psalm 36:9", "Proverbs 3:5-6", "Psalm 37:10-11"], format:"multiple", repeat:10 },
]














var lesson1 = [

{ a:["I'm glad"], q:"ဝမ်းသာတယ်", tip:"wan: tha de", format:"type", repeat:10 },
{ a:["Repeat", "speak again"], q:"ထပ်စကား", tip:"tha' sa ga:", format:"type", repeat:10 },
{ a:["Again"], q:"ထပ်", tip:"tha'", format:"type", repeat:10 },
{ a:["allowed", "opertunity", "chance"], q:"ခွင့်ရတာ", tip:"khwin. ya da", format:"type", repeat:10 },
{ a:["friend"], q:"မိတ်ဆွေ", tip:"mei' hswei", format:"type", repeat:10 },
{ a:["important"], q:"အရေးကြီးတဲ့", tip:"a yei: jyi: de.", format:"type", repeat:10 },
{ a:["One thing", "something"], q:"အကြောင်းတစ်ခု", tip:"a jyaun: dă khu", format:"type", repeat:10 },
{ a:["come"], q:"လာ", tip:"la", format:"type", repeat:10 },
{ a:["I tell you"], q:"ပြောပြတာ", tip:"pyo pya da", format:"type", repeat:10 },
{ a:["say"], q:"ပြေ", tip:"pyo", format:"type", repeat:10 },
{ a:["Literature"], q:"စာပေတွေ", tip:"sa pei dwei", format:"type", repeat:10 },
{ a:["brought"], q:"ယူလာပေးတယ်", tip:"yu la pei: de", format:"type", repeat:10 },
   
{ a:["In language"], q:"ဘာသာစကားနဲ့", tip:"ba tha sa ga: ne.", format:"type", repeat:10 },
{ a:["to my friend"], q:"မိတ်ဆွေကို", tip:"mei' hswei go", format:"type", repeat:10 },
{ a:["from the bible"], q:"ကျမ်းစာထဲက", tip:"jyan: sa the ga", format:"type", repeat:10 },

{ a:["An important thing"], q:"အရေးကြီးတဲ့အကြောင်းတစ်ခု", tip:"a yei: jyi: de. a jyaun: dă khu", format:"type", repeat:10 },
{ a:["I came to tell you"], q:"လာပြောပြတာပါ။", tip:"la pyo pya da pa", format:"type", repeat:10 },
{ a:["in the language of"], q:"ရဲ့ဘာသာစကားနဲ့", tip:"ye. ba tha sa ga: ne.", format:"type", repeat:10 },

{ a:["The opportunity to speak"], q:"ပြောခွင့်ရတာ", tip:"pyo khwin. ya da", format:"type", repeat:10 },
{ a:["The chance to talk again"], q:"ထပ်စကားပြောခွင့်ရတာ", tip:"tha' sa ga: pyo khwin. ya da", format:"type", repeat:10 },
{ a:["In your friend's language"], q:"မိတ်ဆွေရဲ့ဘာသာစကားနဲ့", tip:"mei' hswei ye. ba tha sa ga: ne.", format:"type", repeat:10 },
   
{ a:["It's good that I can talk to you again."], q:"ထပ်စကားပြောခွင့်ရတာ ဝမ်းသာတယ်။", tip:"tha' sa ga: pyo khwin. ya da wan: tha de။", format:"type", repeat:10 },
{ a:["If I make a mistake, please correct me."], q:"မှားရင် ပြင်ပေးပါ။", tip:"hma:-yin pyin pei: ba", format:"type", repeat:10 },
{ a:["I came to share an important thought with you from the Bible."], q:"မိတ်ဆွေကို ကျမ်းစာထဲက အရေးကြီးတဲ့အကြောင်းတစ်ခု လာပြောပြတာပါ။", tip:"mei' hswei go  jyan: sa the ga  a yei: jyi: de. a jyaun: dă khu  la pyo pya da pa။", format:"type", repeat:10 },
{ a:["I have come to give you some information in your own language."], q:"မိတ်ဆွေရဲ့ဘာသာစကားနဲ့ စာပေတွေ ယူလာပေးတယ်။", tip:"mei' hswei ye. ba tha sa ga: ne.  sa pei dwei  yu la pei: de။", format:"type", repeat:10 },
]



var L2 = [
{ a:["type"], q:"အမျိုးအစား", tip:"a myo: a sa:", format:"type", repeat:10 },
{ a:["time"], q:"အချိန်", tip:"a chein", format:"type", repeat:10 },
{ a:["sun"], q:"နေ", tip:"nei", format:"type", repeat:10 },
{ a:["animal"], q:"တိရစ္ဆာန်", tip:"di yi' hsan", format:"type", repeat:10 },
{ a:["answer"], q:"ဖြေ", tip:"hpyei", format:"type", repeat:10 },
{ a:["bag"], q:"အိတ်", tip:"aei", format:"type", repeat:10 },
{ a:["song"], q:"သီချင်း", tip:"thi chin:", format:"type", repeat:10 },
{ a:["place"], q:"နေရာ", tip:"nei ya", format:"type", repeat:10 },
{ a:["now"], q:"ယခု", tip:"ya khu", format:"type", repeat:10 },
{ a:["door"], q:"တံခါး", tip:"dan kha:", format:"type", repeat:10 },
{ a:["light", "fire"], q:"မီး", tip:"mi:", format:"type", repeat:10 },
{ a:["bird"], q:"ငှက်", tip:"nghe'", format:"type", repeat:10 },
{ a:["tree"], q:"သစ်ပင်", tip:"thă pin", format:"type", repeat:10 },
{ a:["market"], q:"စျေး", tip:"syei:", format:"type", repeat:10 },
{ a:["restaurant"], q:"စားသောက်ဆိုင်", tip:"sa: thau' hsain", format:"type", repeat:10 },
{ a:["room"], q:"အခန်း", tip:"a khan:", format:"type", repeat:10 },
{ a:["today"], q:"ဒီနေ့", tip:"di nei.", format:"type", repeat:10 },
{ a:["month"], q:"လ", tip:"la", format:"type", repeat:10 },
{ a:["year"], q:"နှစ်", tip:"nhi", format:"type", repeat:10 },
{ a:["ice"], q:"ရေခဲ", tip:"yei khe", format:"type", repeat:10 },
]

  

var L1 = [
{ a:["throw"], q:"ပစ်", tip:"pă", format:"type", repeat:10 },
{ a:["think"], q:"စဉ်းစား", tip:"sin: sa:", format:"type", repeat:10 },
{ a:["answer"], q:"ပြန်ပြေ", tip:"pyan pyei", format:"type", repeat:10 },
{ a:["arrive"], q:"ရောက်လာ", tip:"yau' la", format:"type", repeat:10 },
{ a:["ask"], q:"မေး", tip:"mei:", format:"type", repeat:10 },
{ a:["asleep"], q:"အိပ်နေ", tip:"aei' nei", format:"type", repeat:10 },
{ a:["be well"], q:"နေကောင်း", tip:"nei gaun:", format:"type", repeat:10 },
{ a:["walk"], q:"လမ်းလျှောက်", tip:"lan: lyhau'", format:"type", repeat:10 },
{ a:["work"], q:"အလုပ်လုပ်", tip:"a lou' lou'", format:"type", repeat:10 },
{ a:["take a long time"], q:"အချိန်ကြာ", tip:"a chein jya", format:"type", repeat:10 },
// { a:["share"], q:"ခဲဝွေ", tip:"khe wwei", format:"type", repeat:10 },
{ a:["open", "turn on"], q:"ဖွင့်", tip:"hpwin.", format:"type", repeat:10 },
{ a:["tired"], q:"မော", tip:"mo", format:"type", repeat:10 },
{ a:["happy"], q:"ပျော်", tip:"pyo", format:"type", repeat:10 },
{ a:["be lazy", "be bored"], q:"ပျင်း", tip:"pyin:", format:"type", repeat:10 },
{ a:["break"], q:"ချိုး", tip:"cho:", format:"type", repeat:10 },
{ a:["go"], q:"သွား", tip:"thwa:", format:"type", repeat:10 },
{ a:["go back", "return"], q:"ပြန်", tip:"pyan", format:"type", repeat:10 },
{ a:["want"], q:"လိုချင်", tip:"lo chin", format:"type", repeat:10 },
{ a:["buy"], q:"ဝယ်", tip:"we", format:"type", repeat:10 },
]

//ခဲဝွေ
///////////////////////////////////////////////////////
var Sp1 = [
{ a:["tipo", "clase"], q:"အမျိုးအစား", tip:"a myo: a sa:", format:"type", repeat:10 },
{ a:["tiempo"], q:"အချိန်", tip:"a chein", format:"type", repeat:10 },
{ a:["sol"], q:"နေ", tip:"nei", format:"type", repeat:10 },
{ a:["animal"], q:"တိရစ္ဆာန်", tip:"di yi' hsan", format:"type", repeat:10 },
{ a:["respuesta"], q:"ဖြေ", tip:"hpyei", format:"type", repeat:10 },
{ a:["bolsa"], q:"အိတ်", tip:"aei", format:"type", repeat:10 },
{ a:["cancion"], q:"သီချင်း", tip:"thi chin:", format:"type", repeat:10 },
{ a:["lugar"], q:"နေရာ", tip:"nei ya", format:"type", repeat:10 },
{ a:["ahora"], q:"ယခု", tip:"ya khu", format:"type", repeat:10 },
{ a:["puerta"], q:"တံခါး", tip:"dan kha:", format:"type", repeat:10 },
{ a:["luz", "fuego"], q:"မီး", tip:"mi:", format:"type", repeat:10 },
{ a:["pajaro"], q:"ငှက်", tip:"nghe'", format:"type", repeat:10 },
{ a:["arbol"], q:"သစ်ပင်", tip:"thă pin", format:"type", repeat:10 },
{ a:["mercado"], q:"စျေး", tip:"syei:", format:"type", repeat:10 },
{ a:["restaurante"], q:"စားသောက်ဆိုင်", tip:"sa: thau' hsain", format:"type", repeat:10 },
{ a:["cuarto", "recamara"], q:"အခန်း", tip:"a khan:", format:"type", repeat:10 },
{ a:["hoy"], q:"ဒီနေ့", tip:"di nei.", format:"type", repeat:10 },
{ a:["mes"], q:"လ", tip:"la", format:"type", repeat:10 },
{ a:["año"], q:"နှစ်", tip:"nhi", format:"type", repeat:10 },
{ a:["hielo"], q:"ရေခဲ", tip:"yei khe", format:"type", repeat:10 },
]


var Sp2 = [
{ a:["arrojar"], q:"ပစ်", tip:"pă", format:"type", repeat:10 },
{ a:["penzar"], q:"စဉ်းစား", tip:"sin: sa:", format:"type", repeat:10 },
{ a:["contestar"], q:"ပြန်ပေြာ", tip:"pyan pyo", format:"type", repeat:10 },
{ a:["llegar"], q:"ရောက်လာ", tip:"yau' la", format:"type", repeat:10 },
{ a:["preguntar"], q:"မေး", tip:"mei:", format:"type", repeat:10 },
{ a:["dormido"], q:"အိပ်နေ", tip:"aei' nei", format:"type", repeat:10 },
{ a:["estar bien"], q:"နေကောင်း", tip:"nei gaun:", format:"type", repeat:10 },
{ a:["caminar"], q:"လမ်းလျှောက်", tip:"lan: lyhau'", format:"type", repeat:10 },
{ a:["trabajar"], q:"အလုပ်လုပ်", tip:"a lou' lou'", format:"type", repeat:10 },
{ a:["tardare"], q:"အချိန်ကြာ", tip:"a chein jya", format:"type", repeat:10 },
{ a:["compartir"], q:"ခဲွဝေ", tip:"khwe wei", format:"type", repeat:10 },
{ a:["abrir", "prender", "encender"], q:"ဖွင့်", tip:"hpwin.", format:"type", repeat:10 },
{ a:["cansado"], q:"မော", tip:"mo", format:"type", repeat:10 },
{ a:["feliz"], q:"ပျော်", tip:"pyo", format:"type", repeat:10 },
{ a:["flojo", "aburrido"], q:"ပျင်း", tip:"pyin:", format:"type", repeat:10 },
{ a:["romper"], q:"ချိုး", tip:"cho:", format:"type", repeat:10 },
{ a:["ir"], q:"သွား", tip:"thwa:", format:"type", repeat:10 },
{ a:["regresar"], q:"ပြန်", tip:"pyan", format:"type", repeat:10 },
{ a:["querer"], q:"လိုချင်", tip:"lo chin", format:"type", repeat:10 },
{ a:["comprar"], q:"ဝယ်", tip:"we", format:"type", repeat:10 },
]
