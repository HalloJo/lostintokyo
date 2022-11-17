import one from "../assets/image_1.jpg";
import two from "../assets/image_2.jpg";
import three from "../assets/image_3.jpg";
import four from "../assets/image_4.jpg";
import five from "../assets/image_5.jpg";
import six from "../assets/image_6.jpg";
import seven from "../assets/image_7.jpg";
import eight from "../assets/image_8.jpg";
import nine from "../assets/image_9.jpg";
import ten from "../assets/image_10.jpg";

type Attraction = {
  title: string,
  description: string,
  link?: string,
  image: string,
  className: string,
}

export const attractions:Attraction[] = [
  {
    title: 'Mori Art Museum',
    description:
      'The Mori Art Museum strives to be a place for enjoyment, stimulation and discussion - a place where what is important in our culture and society is openly debated.',
    link: 'http://www.mori.art.museum',
    image: one,
    className: 'w-50-l'
  },
  {
    title: 'Robot Restaurant',
    description:
      'Located in Shinjuku, the Robot Restaurant features a raucous pop-culture show with robotic monsters, dancers & lasers. A weird but wonderfully exciting experience.',
    link: 'http://www.shinjuku-robot.com/pc/system.php?lng=en',
    image: two,
    className: 'w-third-l ml5-l'
  },
  {
    title: 'JBS Jazz Bar',
    description:
      'Home to over 10,000 records, JBS Jazz Bar is burrowed away in Shibuya. If simplicity, vinyl and fine whisky are what you’re in search of, this place is for you.',
    image: three,
    className: 'w-third-l ml-auto-ns'
  },
  {
    title: 'Nyan da Neko',
    description:
      'If you love coffee, but you love cats more, Nyan da Neko is worthy of a visit. Located in Odaiba, you can enjoy your beverage with the company of up to 40 cats. Meow.',
    image: four,
    className: 'w-40-l ml5-l mr5-l'
  },
  {
    title: 'Yayoi Kusama Museum',
    description:
      'It could be said that it is Kusama’s second golden age. So after much anticipation, the Yayoi Kusama Museum finally opened its doors. We recommend getting tickets, as it’s deservingly popular.',
    link: 'http://yayoi-kusama.jp',
    image: five,
    className: 'w-30-l'
  },
  {
    title: 'Mount Zine',
    description:
      'Selling every zine they’re presented with, Mount Zine replace their stock every 6 months. Simply have a browse, or join one of the zine-making workshops they regularly host.',
    link: 'https://zine.mount.co.jp/',
    image: six,
    className: 'w-third-l ml5-l mr-auto-l'
  },
  {
    title: 'Sanrio Puroland',
    description:
      'An indoor theme park with appearances from Hello Kitty, My Melody, Cinnamoroll and many more. Need we say more?',
    link: 'https://en.puroland.jp/homeen/',
    image: seven,
    className: 'w-third-l ml-auto-l mr5-l'
  },
  {
    title: 'Sumida Hokusai Museum',
    description:
      'Now a cultural landmark in Tokyo, the Hokusai Museum amalgamates modern architecture and the artist’s traditional woodblock prints. It’s definitely worth checking out.',
    link: 'http://hokusai-museum.jp/?lang=en',
    image: eight,
    className: 'w-third-l mr-auto-l'
  },
  {
    title: 'Ghibli Museum',
    description:
      'A short ride outside of Tokyo, the Ghibli museum showcases the work of Studio Ghibli – the creators of Spirited Away, My Neighbour Totoro and many other Anime feature films. This is one for the animation-lovers.',
    link: 'http://www.ghibli-museum.jp/en/',
    image: nine,
    className: 'w-third-l ml-auto-l'
  }
];
