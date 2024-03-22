/*const zodiac_info = [
    {name: 'Aries',
    dates: 'March 21 - April 19',
    text: 'You are Daruk! A very ambitious individual who becoms wildly excitable when in battle. Although he is usually very calm, he becomes very loud and ferocious when fighting. He is very courageous when it comes protecting the ones you love and extremely strong!'
    },
    {name: 'Taurus',
    dates: 'April 20 - May 20',
    text: 'You are Hestu! He had a very strong passion for music and dancing when it suits him, often seen using his maracas and chanting. He can be absent-minded at times, which results in him having a habit of getting lost and often a target of the Koroks pranks.'
    },
    {name: 'Gemini',
    dates: 'May 21 - June 20',
    text: 'You are Revali! Revali exudes confidence, often bordering on arrogance. He is fully aware of his skills as a warrior and a skilled archer. He has a competitive streak, especially when it comes to comparing himself to Link and takes pride in his abilities and expects respect from others and can become defensive if his pride is challenged.'
    },
    {name: 'Cancer',
    dates: 'June 21 - July 22',
    text: 'You are Mipha! Mipha is known for her kind and caring nature. She genuinely cares for others, especially for Link, whom she has known since childhood. Mipha is deep affection for Link is evident in her willingness to sacrifice herself to save him and her kingdom. Her selflessness is a defining aspect of her character.'
    },
    {name: 'Leo',
    dates: 'July 23 - August 22',
    text: 'You are Urbosa! She exudes confidence and self-assurance in every aspect of her character. She is secure in her abilities as a warrior and a leader, and she commands respect from those around her. Urbosa is not afraid to speak her mind and assert herself when necessary. She is a decisive leader who takes charge of situations with authority. Despite her formidable exterior, Urbosa also has a compassionate side. She cares deeply for her people and is willing to put herself in harm is way to defend them.'
    },
    {name: 'Virgo',
    dates: 'August 23 - September 22',
    text: 'You are Zelda! Zelda is incredibly determined and driven, especially in her quest to unlock her sealing powers and defeat Calamity Ganon. Zelda is highly intelligent and possesses a keen intellect. She is well-versed in ancient Sheikah technology and lore, using her knowledge to aid Link in his quest. As the princess of Hyrule, Zelda carries the weight of her kingdoms fate on her shoulders. Despite her royal status, Zelda is not immune to feelings of vulnerability and self-doubt. She struggles with the expectations placed upon her since she is the chosen hero and the pressure to live up to her familys legacy.'
    },
    {name: 'Libra',
    dates: 'September 23 - October 22',
    text: 'You are Impa! Impa is dedicated to her role as a protector of the royal family and guardian of Hyrules secrets. She takes her responsibilities seriously and is willing to do whatever it takes to ensure the safety of the kingdom. Impa is fiercely loyal to the royal family of Hyrule, particularly to Princess Zelda. She serves as a trusted advisor and confidante to the royal family, offering her support and guidance whenever needed. Impa is deeply committed to protecting Hyrule and its people from external threats, particularly the forces of darkness and evil.    '
    },
    {name: 'Scorpio',
    dates: 'October 23 - November 21',
    text: 'You are Riju! Despite her youth, Riju displays remarkable courage and resilience. She is unafraid to face danger head-on, especially when it threatens her people or her kingdom. Riju cares deeply for the well-being of her people, and she is willing to do whatever it takes to protect them. She shows kindness and empathy towards others, especially those in need.  As the leader of the Gerudo, Riju is determined to prove herself and earn the respect of her people. She takes her responsibilities seriously and works tirelessly to ensure the prosperity and safety of her kingdom.    '
    },
    {name: 'Sagittarius',
    dates: 'November 22 - December 21',
    text: 'You are Sidon! Sidon is incredibly optimistic, always looking on the bright side of things even in the face of adversity. He maintains a positive attitude and encourages others to do the same. Sidon is highly charismatic and has a natural ability to charm those around him. His infectious enthusiasm and friendly demeanor make him well-liked among both his fellow Zoras and other inhabitants of Hyrule. Sidon is full of energy and enthusiasm, often seen bounding around with boundless energy. His dynamic personality adds a sense of liveliness to any situation he finds himself in.'
    },
    {name: 'Capricorn',
    dates: 'December 22 - January 19',
    text: 'You are Link! Link demonstrates unwavering determination in his quest to fulfill his destiny and protect the land of Hyrule. Despite facing numerous challenges and setbacks, he persists in his mission to overcome adversity and restore peace to the kingdom. In many of the games, Link is portrayed as a silent protagonist, communicating through actions rather than words. This allows players to project their own emotions and intentions onto the character. Despite his stoic demeanor, Link often demonstrates compassion and empathy towards those in need. He forms meaningful connections with other characters and goes out of his way to help them in their times of need.    '
    },
    {name: 'Aquarius',
    dates: 'January 20 - February 18',
    text: 'You are Robbie! Robbie is a highly intelligent and inventive scientist, renowned for his groundbreaking research and technological innovations. He possesses a keen intellect and a deep understanding of ancient Sheikah technology. Robbie has a quirky and eccentric personality, often displaying unconventional behavior and mannerisms. He is known for his enthusiastic and energetic demeanor, which can sometimes come across as eccentric or peculiar. Robbie has a quirky sense of humor and often makes witty or sarcastic remarks. He has a playful side to his personality, which he occasionally displays through his interactions with others.'
    },
    {name: 'Pisces',
    dates: 'February 19 - March 20',
    text: 'You are Purah! Purah has boundless energy and enthusiasm, often bouncing around with excitement and exuberance. She approaches everything with a sense of vitality and vigor. Purah has an insatiable curiosity and thirst for knowledge. She is deeply interested in ancient Sheikah technology and is constantly experimenting and tinkering with new inventions. Despite her youthful appearance, Purah is incredibly intelligent and gifted in the field of science and engineering. She is responsible for many breakthroughs in Sheikah technology, including the creation of the Guidance Stone.'
    }
]


const open = document.getElementById('open')
const modal_container = document.getElementById('modal_container')
const close = document.getElementById('close')