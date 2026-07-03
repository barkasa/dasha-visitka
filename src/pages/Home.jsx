import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Gallery from "../components/Gallery";
import PageTitle from "../components/PageTitle";
export default function Home({ lang }) {
  return (
    <div>
      <PageTitle title={null} />
      <Hero lang={lang} />
      <About lang={lang} />
      <Projects lang={lang} />
      <Gallery lang={lang} />
    </div>
  );
}
