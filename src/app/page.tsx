
import Image from 'next/image'
import Link from 'next/link'

import ribbon1 from '../../public/KenshinKyu_hellscape_with_a_hint_of_hope_on_the_horizon_ef7f680a-0291-493a-9cd0-0d0cea85ad3c.png'
import ribbon2 from '../../public/KenshinKyu_morgan_taking_down_the_support_site_b37e9428-993a-4e94-9489-8b041e7b3d44.png'
import ribbon3 from '../../public/KenshinKyu_parrot_cat_bagel_dancing_smoking_green_5d534404-4d6c-467d-a429-628c480b7b0a.png'
import ribbon4 from '../../public/KenshinKyu_annihilation_of_the_universe_celebrated_by_crowds_of_545577e3-f6f2-4e66-b679-866dbb3ebf52.png'


export default function Home() {
  return (
    <div className="info">
      <h2 className="mb-10">Ooooh he made some art using ai</h2>
      <div className="infopanel">
        <div className="info-item">
          <Image src={ribbon1} alt="Hi" className="m-auto" width={200} height={200} quality={80} />
          <p>Hellscape with a hint of hope</p>
        </div>
        <div className="info-item">
          <Image src={ribbon2} alt="Hi" className="m-auto" width={200} height={200} quality={80} />
          <p>Morgan takes down the site again</p>
        </div>
        <div className="info-item">
          <Image src={ribbon3} alt="Hi" className="m-auto" width={200} height={200} quality={80} />
          <p>Parrot cat dancing and smoking green</p>
        </div>
        <div className="info-item">
          <Image src={ribbon4} alt="Hi" className="m-auto" width={200} height={200} quality={80} />
          <p>Annihilation of the universe celebrated by billions</p>
        </div>
      </div>
      <p className="italic confession">* I can&apos;t any take credit for this at all, the great guys at <a href="https://www.midjourney.com/home/">Midjouney</a> did all the work here, plus all of the <strong>real</strong> artists who produced the source work the AI smudged together.<br /></p>
      <p className="mt-10 mb-5"><Link scroll={false} href="/about">More quotes...</Link></p>
      <ul>
        <li className="mb-5"><Link href="/articles/php-is-good-now-actually">PHP Is Good</Link></li>
        <li className="mb-5"><Link href="/articles/1">Dynamic article</Link></li>
        <li className="mb-5"><Link href="/articles/2">Another dynamic article</Link></li>
      </ul>
    </div>
  )
}
