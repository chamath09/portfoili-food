import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Blog } from './components/sections/Blog';
import { Contact } from './components/sections/Contact';

function App() {
    return (
        <Layout>
            <Hero />
            <About />
            <Experience />
            <Blog />
            <Contact />
        </Layout>
    );
}

export default App;
