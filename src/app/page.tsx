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
import VideoHero from '@/components/VideoHero'
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
          headline={hero.headline}
          subheadline={hero.subheadline}
          checklist={hero.checklist}
          checklistHighlight={hero.checklistHighlight}
          ctaText={hero.ctaText}
          ctaMicrocopy={hero.ctaMicrocopy}
          ctaUrl={platform.checkoutUrl}
          heroImage={author.photos.hero}
          authorName={author.name}
        />
        <VideoHero />
        <Pain 
          headline={pain.headline}
          narrative={pain.narrative}
          bulletsIntro={pain.bulletsIntro}
          bullets={pain.bullets}
          closing={pain.closing}
          closingBold={pain.closingBold}
        />
        <Solution
          label={solution.label}
          headline={solution.headline}
          description={solution.description}
          pillars={solution.pillars}
          closing={solution.closing}
          ctaText={solution.ctaText}
          ctaUrl={platform.checkoutUrl}
        />
        <Moment
          headline={moment.headline}
          narrative={moment.narrative}
          bullets={moment.bullets}
          closing={moment.closing}
          closingBold={moment.closingBold}
        />
        <Authority
          name={author.name}
          title={author.title}
          bioFull={author.bioFull}
          credentials={author.credentials}
          photo={author.photos.authority}
        />
        <SocialProof
          headline={socialProof.headline}
          testimonials={socialProof.testimonials}
          stats={socialProof.stats}
        />
        <Offer
          headline={offer.headline}
          cardTitle={offer.cardTitle}
          priceList={offer.priceList}
          priceCurrent={offer.priceCurrent}
          priceMonthly={offer.priceMonthly}
          pricePeriod={offer.pricePeriod}
          badge={offer.badge}
          priceComparison={offer.priceComparison}
          benefitsTitle={offer.benefitsTitle}
          benefits={offer.benefits}
          ctaText={offer.ctaText}
          ctaUrl={platform.checkoutUrl}
        />
        <Guarantee
          headline={guarantee.headline}
          subheadline={guarantee.subheadline}
          text={guarantee.text}
          photo={author.photos.guarantee}
        />
        <FAQ items={faq} />
        <Closing
          label={closing.label}
          headline={closing.headline}
          subheadline={closing.subheadline}
          checklist={closing.checklist}
          ctaText={closing.ctaText}
          ctaUrl={platform.checkoutUrl}
          photo={author.photos.closing}
          authorName={author.name}
        />
      </main>
      <Footer
        logo={footer.logo}
        tagline={footer.tagline}
        links={footer.links}
        copyright={footer.copyright}
      />
    </>
  )
}
