import {
  nav,
  hero,
  pain,
  solution,
  moment,
  author,
  socialProof,
  offer,
  guarantee,
  faq,
  closing,
  footer,
  platform,
} from '@/data/charles'

import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Pain from '@/components/Pain'
import Solution from '@/components/Solution'
import Moment from '@/components/Moment'
import Authority from '@/components/Authority'
import SocialProof from '@/components/SocialProof'
import Offer from '@/components/Offer'
import Guarantee from '@/components/Guarantee'
import FAQ from '@/components/FAQ'
import Closing from '@/components/Closing'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <>
      <Nav
        logoTop={nav.logoTop}
        logoScrolled={nav.logoScrolled}
        ctaText={nav.ctaText}
        ctaUrl={platform.checkoutUrl}
      />
      <main>
        <Hero
          tag={hero.tag}
          headline={hero.headline}
          subheadline={hero.subheadline}
          context={hero.context}
          ctaText={hero.ctaText}
          ctaMicrocopy={hero.ctaMicrocopy}
          ctaUrl={platform.checkoutUrl}
          heroImage={author.photos.hero}
          authorName={author.name}
        />
        <Pain />
        <Solution
          label={solution.label}
          headline={solution.headline}
          description={solution.description}
          pillars={solution.pillars}
          closing={solution.closing}
          ctaText={hero.ctaText}
          ctaUrl={platform.checkoutUrl}
        />
        <Moment
          headline={moment.headline}
          narrative={moment.narrative}
          quote={moment.quote}
          closing={moment.closing}
        />
        <Authority
          name={author.name}
          title={author.title}
          bioFull={author.bioFull}
          credentials={author.credentials}
          photo={author.photos.authority}
        />
        <SocialProof
          testimonials={socialProof.testimonials}
          stats={socialProof.stats}
        />
        <Offer
          headline={offer.headline}
          anchorText={offer.anchorText}
          priceList={offer.priceList}
          priceCurrent={offer.priceCurrent}
          priceMonthly={offer.priceMonthly}
          pricePeriod={offer.pricePeriod}
          priceNote={offer.priceNote}
          priceComparison={offer.priceComparison}
          ctaText={offer.ctaText}
          ctaUrl={platform.checkoutUrl}
        />
        <Guarantee
          days={guarantee.days}
          text={guarantee.text}
        />
        <FAQ items={faq} />
        <Closing
          headline={closing.headline}
          pathA={closing.pathA}
          pathB={closing.pathB}
          summary={closing.summary}
          ctaText={closing.ctaText}
          ctaUrl={platform.checkoutUrl}
          photo={author.photos.closing}
          authorName={author.name}
          authorTitle={author.title}
        />
      </main>
      <Footer
        logo={footer.logo}
        links={footer.links}
        copyright={footer.copyright}
      />
    </>
  )
}
