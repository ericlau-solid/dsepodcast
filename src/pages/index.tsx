import * as React from "react"
import {Helmet} from 'react-helmet';
import {ChakraProvider} from "@chakra-ui/react"
import Layout from "../components/Layout";
import "@fontsource/poppins/400.css"
import theme from "../theme";


const Head = () => (
    <Helmet htmlAttributes={{lang: 'en'}}>
        <meta charSet="utf-8"/>
        <meta name="description"
              content="Diverse Software Engineers Podcast is the definitive podcast for learning the soft skills that are essential for gaining fulfilling work, and keep them coming. We empower you to break some glass ceilings, and build software that delights. Subscribe today!"/>
        <meta name="author" content="Eric Lau"/>
        <title>5 Latest Diverse Software Engineers Podcast Episodes</title>
        <link rel="canonical" href="https://dsepodcast.com"/>
    </Helmet>
)

const heroConfig = {
    title: "Diverse Software Engineers Podcast",
    subtitle:
        "Available on Apple Podcasts, Spotify, Google, Stitcher, and more!",
    ctaText: "Subscribe now",
    ctaLink: "/subscribe"
};

// markup
const IndexPage = () => {
    return (
        <ChakraProvider theme={theme}>
            <Head/>
            <Layout heroConfig={heroConfig}>
                <div>
                    <h1>Bender, I didn't know you liked cooking. That's so cute.</h1>
                    <p>Can I use the gun? Say what? Kif might! Of all the friends I've had… you're the first.</p>
                    <p>I love this planet! I've got wealth, fame, and access to the depths of sleaze that those things bring. <strong> I'll tell them you went down prying the wedding ring off his cold, dead finger.</strong> <em> I guess because my parents keep telling me to be more ladylike.</em> As though!</p>
                    <h2>Soon enough.</h2>
                    <p>Goodbye, cruel world. Goodbye, cruel lamp. Goodbye, cruel velvet drapes, lined with what would appear to be some sort of cruel muslin and the cute little pom-pom curtain pull cords. Cruel though they may be… I could if you hadn't turned on the light and shut off my stereo.</p>
                    <ol>

                        <li>There's no part of that sentence I didn't like!</li><li>You'll have all the Slurm you can drink when you're partying with Slurms McKenzie!</li><li>And why did 'I' have to take a cab?</li>

                    </ol>

                    <h3>Shinier than yours, meatbag.</h3>
                    <p>Yes. You gave me a dollar and some candy. Kif, I have mated with a woman. Inform the men. Leela, Bender, we're going grave robbing. There, now he's trapped in a book I wrote: a crummy world of plot holes and spelling errors!</p>
                    <ul>

                        <li>Hi, I'm a naughty nurse, and I really need someone to talk to. $9.95 a minute.</li><li>Leela, are you alright? You got wanged on the head.</li><li>I've got to find a way to escape the horrible ravages of youth. Suddenly, I'm going to the bathroom like clockwork, every three hours. And those jerks at Social Security stopped sending me checks. Now 'I'' have to pay ''them'!</li>

                    </ul>

                    <p>You'll have all the Slurm you can drink when you're partying with Slurms McKenzie! Bender! Ship! Stop bickering or I'm going to come back there and change your opinions manually! Tell them I hate them.</p>
                    <p>I meant 'physically'. Look, perhaps you could let me work for a little food? I could clean the floors or paint a fence, or service you sexually? It's just like the story of the grasshopper and the octopus. All year long, the grasshopper kept burying acorns for winter, while the octopus mooched off his girlfriend and watched TV. But then the winter came, and the grasshopper died, and the octopus ate all his acorns. Also he got a race car. Is any of this getting through to you?</p>
                    <p>You'll have all the Slurm you can drink when you're partying with Slurms McKenzie! Pansy. Oh, I think we should just stay friends. Shinier than yours, meatbag.</p>
                    <p>Maybe I love you so much I love you no matter who you are pretending to be. Yes, if you make it look like an electrical fire. When you do things right, people won't be sure you've done anything at all.</p>
                    <p>Leela, Bender, we're going grave robbing. And so we say goodbye to our beloved pet, Nibbler, who's gone to a place where I, too, hope one day to go. The toilet. We're also Santa Claus! It must be wonderful.</p>
                    <p>Robot 1-X, save my friends! And Zoidberg! My fellow Earthicans, as I have explained in my book 'Earth in the Balance'', and the much more popular ''Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards.</p>
                    <p>You lived before you met me?! Who said that? SURE you can die! You want to die?! Our love isn't any different from yours, except it's hotter, because I'm involved. Yep, I remember. They came in last at the Olympics, then retired to promote alcoholic beverages!</p>
                    <p>Spare me your space age technobabble, Attila the Hun! Too much work. Let's burn it and say we dumped it in the sewer. I was having the most wonderful dream. Except you were there, and you were there, and you were there!</p>
                    <p>Ooh, name it after me! Kif, I have mated with a woman. Inform the men. Who said that? SURE you can die! You want to die?! No, of course not. It was… uh… porno. Yeah, that's it. You mean while I'm sleeping in it?</p>
                    <p>Professor, make a woman out of me. We're rescuing ya. Also Zoidberg. Look, everyone wants to be like Germany, but do we really have the pure strength of 'will'?</p>
                    <p>When will that be? You seem malnourished. Are you suffering from intestinal parasites? My fellow Earthicans, as I have explained in my book 'Earth in the Balance'', and the much more popular ''Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards.</p>
                </div>
            </Layout>
        </ChakraProvider>
    )
}

export default IndexPage
