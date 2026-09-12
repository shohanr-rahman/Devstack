import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyCard, {
  type Technology,
} from "./components/TechnologyCard";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        const response = await fetch("/technologies.json");

        if (!response.ok) {
          throw new Error("Failed to load technologies");
        }

        const data: Technology[] = await response.json();
        setTechnologies(data);
      } catch (error) {
        console.error(error);

        toast.error("Failed to load technology data.");
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);
  useEffect(() => {
  const timer = setTimeout(() => {
    setShowSplash(false);
  }, 3000);

  return () => clearTimeout(timer);
}, []);

if (showSplash) {
  return (
    <div className="coming-soon-screen">
      <div className="coming-soon-glow"></div>

      <div className="coming-soon-content">
        

        <h1>
           By <span>Shohanur <span className="rahman-color">Rahman</span></span>
        </h1>

        <p>Please wait 🙂</p>
        <p>Loading.....</p>

        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
      </div>
    </div>
  );
}

  const addToStack = (technology: Technology) => {
    const alreadyExists = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyExists) {
      toast.warning(
        `${technology.name} is already in your stack!`
      );
      return;
    }

    setStack((previousStack) => [
      ...previousStack,
      technology,
    ]);

    toast.success(`${technology.name} added to your stack!`);
  };

  const removeFromStack = (id: string) => {
    const technology = stack.find((item) => item.id === id);

    setStack((previousStack) =>
      previousStack.filter((item) => item.id !== id)
    );

    if (technology) {
      toast.info(`${technology.name} removed from your stack.`);
    }
  };

  const removeAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);

    toast.info("All technologies removed from your stack.");
  };

  const navigateTo = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <Navbar onNavigate={navigateTo} />

      <main>
        <Hero
          onExplore={() => navigateTo("technologies")}
        />

        <section
          className="technology-section"
          id="technologies"
        >
          <div className="section-heading">
            <div>
              
              <h2>
                Explore the
                <span className="gradient-text">
                  {" "}
                  Technologies
                </span>
              </h2>

              <p>
                pick one technology category to build your ideal stack
              </p>
            </div>

            <div className="technology-count">
              {technologies.length} Technologies
            </div>
          </div>

          {loading ? (
            <div className="loading-state">
              <div className="spinner"></div>
              <p>Loading technologies...</p>
            </div>
          ) : (
            <div className="content-layout">
              <div className="technology-grid">
                {technologies.map((technology) => (
                  <TechnologyCard
                    key={technology.id}
                    technology={technology}
                    isAdded={stack.some(
                      (item) => item.id === technology.id
                    )}
                    onAdd={addToStack}
                  />
                ))}
              </div>

              <YourStack
                stack={stack}
                onRemove={removeFromStack}
                onRemoveAll={removeAll}
              />
            </div>
          )}
        </section>

      </main>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;