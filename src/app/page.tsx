import Hero from "@/components/Hero";
import TechStackMarquee from "@/components/TechStackMarquee";
import About from "@/app/about/page";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  // https://ui.aceternity.com/components/lamp-effect as loading for new pages?
  // https://ui.aceternity.com/components/placeholders-and-vanish-input for search options on portfolio site and other sites.
  // https://ui.aceternity.com/components/sparkles landing page
  // https://ui.aceternity.com/components/text-generate-effect on main page maybe about me.
  // https://www.hyperui.dev/components/marketing/headers for headers.
  // https://ui.aceternity.com/components/timeline this is timeline add this 100%.
  // https://www.hyperui.dev/components/application/timelines another timeline.
  // https://ui.shadcn.com/docs/components/carousel maybe for photos or projects?
  // https://ui.shadcn.com/docs/components/sidebar sidebar for saas
  // https://ui.shadcn.com/docs/components/checkbox for saas
  // https://ui.shadcn.com/charts/radar#charts skills chart
  // https://uiverse.io/Praashoo7/quick-fish-43 for socials?
  // https://www.heroui.com/docs/components/pagination for pagination on papers page.
  // https://www.heroui.com/docs/components/range-calendar calender for site.
  // https://www.heroui.com/docs/components/slider for sliders.
  // https://www.heroui.com/docs/components/snippet for copy.
  // https://www.heroui.com/docs/components/switch switches for toggle buttons.
  // https://www.hyperui.dev/components/marketing/pricing for pricing.
  // https://www.hyperui.dev/components/application/steps this is for progress for completing forms.
  // https://www.hyperui.dev/components/marketing/carts for checkout carts.
  // https://www.hyperui.dev/components/marketing/faqs frequently asked questions.
  // https://daisyui.com/components/countdown/ coundown page
  // https://www.heroui.com/docs/components/tabs sign up and sign in?
  // https://daisyui.com/components/mockup-phone/ iphone mockup

  return (
    <main>
      <Hero />
      <TechStackMarquee />
      <About />
      <CallToAction />
    </main>
  );
}
