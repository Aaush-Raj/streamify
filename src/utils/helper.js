const nameList = [
    "Amitabh Bachchan",
    "Priyanka Chopra",
    "Shah Rukh Khan",
    "Cristiano Ronaldo",
    "Beyoncé",
    "Taylor Swift",
    "Dwayne 'The Rock' Johnson",
    "Serena Williams",
    "Emma Watson",
    "Tom Hanks",
    "Ellen DeGeneres",
    "Oprah Winfrey",
    "David Beckham",
    "Narendra Modi",
    "Donald Trump",
    "Angela Merkel",
    "Malala Yousafzai",
    "Elon Musk",
    "Jeff Bezos",
    "Bill Gates",
    "Stephen Hawking",
    "Emma Stone",
    "Leonardo DiCaprio",
    "Chris Hemsworth",
    "Lionel Messi",
    "Roger Federer",
    "Usain Bolt",
    "Michael Jordan",
    "Kanye West",
    "Lady Gaga",
    "Michelle Obama",
    "Mark Zuckerberg",
    "Shakira",
    "Malala Yousafzai",
    "Malcolm X",
    "Marilyn Monroe",
    "Che Guevara",
    "Albert Einstein",
    "Rosa Parks",
    "Nelson Mandela",
    "Mother Teresa",
    "Princess Diana",
    "Mahatma Gandhi",
    "Abraham Lincoln",
    "Martin Luther King Jr.",
    "Steve Jobs",
    "Elvis Presley",
    "Michael Jackson",
    "Charlie Chaplin",
    "Pablo Picasso",
    "Vincent van Gogh",
    "Marie Curie",
    "Amelia Earhart",
  ];
  
export function generateRandomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}
export function makeRandomMessage() {
  const words = [
    "apple🍎",
    "banana",
    "orange",
    "kiwi",
    "grape",
    "lemon",
    "dog",
    "cat",
    "bird",
    "fish",
    "elephant",
    "monkey",
    "sun",
    "moon",
    "star",
    "cloud",
    "rain",
    "wind",
    "iphone",
    "📱",
    "Aaush",
    "is",
    "Avengers🦸",
    "Rocket",
    "Nasa",
    "plants",
    "Home",
    "DELHI",
    "JAAVAAASCRIPT🚀",
    "REACTJS🧑‍🔬",
    "DEVELOPER🧑‍💻"
  ];

  const getRandomWord = () => words[Math.floor(Math.random() * words.length)];

  const sentenceLength = Math.floor(Math.random() * 3) + 4; // Random length between 4 and 6 words
  let result = "";

  for (let i = 0; i < sentenceLength; i++) {
    result += getRandomWord();
    if (i < sentenceLength - 1) {
      result += " "; // Add space between words
    }
  }

  return result;
}

export const findPrime = (num) => {
  let i,
    primes = [2, 3],
    n = 5;
  const isPrime = (n) => {
    let i = 1,
      p = primes[i],
      limit = Math.ceil(Math.sqrt(n));
    while (p <= limit) {
      if (n % p === 0) {
        return false;
      }
      i += 1;
      p = primes[i];
    }
    return true;
  };
  for (i = 2; i <= num; i += 1) {
    while (!isPrime(n)) {
      n += 2;
    }
    primes.push(n);
    n += 2;
  }
  return primes[num - 1];
};


export function generateRandomID() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomID = '';

  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomID += characters.charAt(randomIndex);
  }

  return randomID;
}