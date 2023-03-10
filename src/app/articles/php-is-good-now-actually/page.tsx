import Link from 'next/link'

export default function Home() {
    return (
        <div className='grid grid-cols-4'>
            <div></div>
            <article className='col-span-2'>

                <h2 className='pt-5'>PHP is good now, actually</h2>
                <p className='pt-5'>
                    I’ve been using PHP for well over a decade and have heard many criticisms of it.

                    The thing is, virtually all of the comments, sneers, claims, and negative observations have been, well, fair enough.</p>

                <ul className='pt-5 list-disc ml-5'>
                    <li>Python is way easier to pick up for beginners. True.</li>
                    <li>It’s slow, and in some cases really slow. True.</li>
                    <li>The lack of strong typing features makes it prone to errors. True</li>
                    <li>There are too many ways to write insecurely. True.</li>
                    <li>Dependency management is a nightmare. True.</li>
                    <li> There are way too many inconsistencies. True.</li>
                    <li> Not having a robust and feature-rich object model. True.</li>
                </ul>

                <p className='pt-5'>I think the most comprehensive article I ever read on this topic was  PHP: a fractal of bad design, published almost exactly 10 years ago today.  I do remember reading this and thinking to myself “I can’t actually disagree with this, why am I bothering with PHP?”.  The answer at the time was that the company I was working for was using it so I had no real choice.  On top of this, PHP was essentially what EVERYONE was using for backend programming.  I felt trapped using bad language forever.</p>

                <p className='pt-5'>he origins of PHP have meant that in a strange way it was cursed from the start.  Initially created as a wrapper for C to create a common interface for creating personal web pages, it was never created to be a full-blown full-featured general programming language.   So why did anyone use it at all?  It provided a vertically consistent (from C) straight-line solution to get dynamic web pages up and running with the least amount of effort possible. In short, it worked.  Rasmus Lerdorf is a genius, he provided a solution to the problems people were actually having, not some far-flung long way off enterprise applications issues that didn’t need to be considered on day one.</p>

                <p className='pt-5'>What happened in the early years was a slow accretion of new features. It grew organically from a very simple procedural language to a ‘real‘ programing language with PHP5 which added a lot of OOP functionality (e.g. constructors, interfaces, property visibility) and empowered developers to develop more complex and robust applications.  Subsequent PHP5.x versions continued to add new features such as late static binding.</p>

                <p className='pt-5'>Even though the language was adding new features it was still dogged by old problems,  the unwillingness to introduce backward breaking changes has left a litany of seeming inconsistencies that have been discussed forever, (2013, 2014, 2015, 2016, 2017…) but for good reason they were unfixable and remain so to this day unless a hard fork is created that goes back and fixes them.</p>

                <p className='pt-5'>PHP6 was a spectacular failure and caused a lot of pain in the community.  Books were written and published using this version, but it was never released.  Many of the new features were simply added to PHP5.4. It was around this time that the work I was doing with PHP was becoming more serious and Python+Django was looking very tempting. I was very concerned that the entire ecosystem was about to collapse.  There were at this point still many missing features, performance was poor, development was slow and didn’t seem well planned or thought through, the PEAR dependency manager was feeling less and less fit for purpose.  PHP really did feel like it was going to die.  I was pretty much ready to jump ship, many others did.</p>

                <p className='pt-5'>But then something happened.  Looking back, the way I remember it, it happened all at the same time.  Several strands confluence to really change my mind on PHP:</p>

                <ul className='pt-5 list-disc ml-5'>
                    <li>The community found a new pace</li>
                    <li>Composer became the defacto dependency manager</li>
                    <li>PHP7 was released</li>
                    <li>The PSR was maturing</li>
                    <li>Laravel was created</li>
                </ul>

                <p className='pt-5'>And boy did these factors change things for me.</p>

                <p className='pt-5'>All of a sudden it felt like PHP development had really found a new groove. PHP7 brought huge increases in performance and masses of useful features (type hinting, the null coalescing operator,  the spaceship operator etc) that really helped in building more robust and consistent applications.</p>

                <p className='pt-5'>This has only continued since.</p>

                <p className='pt-5'>Composer has fully revolutionised dependency management,  with a consistent, predictable, and stable platform that the community has become the de facto standard.  Performance has only gotten better, with PHP7.x overtaking the HHVM implementation, OPCaching further increasing speed and reducing resource needs, and PHP8.x now continuing to make significant positive strides with additions such as first-party Enums.  Security has been dramatically improved with feature deprecations (self-generated password salts for example). Nearly all areas have been significantly upgraded in recent years.  PHP development has for the most part hit upon accepted standards and practices.  The core PHP team and their processes seem to have found a very comfortable place and we are all better off for it.</p>

                <p className='pt-5'>The final piece in the puzzle for me is Laravel.  An MVC full-stack framework that provides routing, an ORM, caching, queueing, a service container to promote dependency injection/inversion of control, testing, front-end asset compilation, collections (thank you!), string helpers, and many other features right out of the box.  On top of this Laravel has great documentation and a thriving community providing training, server management, zero-downtime deployment, an admin panel, and even a SaaS starter kit.</p>

                <p className='pt-5'>Are there still issues?  Yes, of course. The inconsistent naming and action of built-in methods are still there.  Some features such as generics are still missing (for now!).</p>

                <p className='pt-5'>Will it ever be a ‘perfect‘ language for web development?  Possibly not, I’m not sure such a thing can even be defined.  It is the direction of travel that matters most.  Some things we may have to just live with forever, I have to admit I still get caught out from time to time</p>

                <p className='py-5'>For the first time ever, I’m proud to be a PHP developer.  We should all be proud to be PHP developers.  It’s no longer the toy language it once was.  We are blessed with a great community and a bright future.</p>
            </article>
            <div></div>
        </div>
    )
}