import AuthorImg from "@assets/close-up - Mackie.jpg";

const About = () => {
  return (
    <section className="py-16 md:py-24 bg-navy-light text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="case-number text-sm mb-2">PERSONNEL FILE</p>
          <h1 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">About the Author</h1>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-2/5">
            <div className="relative inline-block">
              <img 
                src={AuthorImg} 
                alt="N.K. Mackie Author Photo" 
                className="rounded-lg shadow-xl max-w-xs mx-auto"
              />
              <div className="absolute -bottom-4 -right-4 bg-teal text-navy py-1 px-4 font-courier text-sm">
                CREDENTIALS VERIFIED
              </div>
            </div>
          </div>
          
          <div className="lg:w-3/5 fade-in">
            <p className="mb-6">N.K. Mackie served as an FBI agent for over twenty years, specializing in complex criminal investigations. During her career, she worked on numerous high-profile cases involving organized crime, financial fraud, and cold case homicides.</p>
            
            <p className="mb-6">After retiring from the Bureau, she decided to channel her knowledge of investigative procedures, criminal psychology, and the justice system into writing fiction that captures the authentic challenges faced by law enforcement professionals.</p>
            
            <p className="mb-6">Her debut novel, <em>Dismissed</em>, marks the beginning of the Empire Crime Investigations series, drawing heavily from her experiences in the field while crafting compelling narratives that both entertain and illuminate the realities of criminal investigation.</p>
            
            <p className="mb-6">When not writing, she consults on security matters and speaks at law enforcement conferences across the country. She lives with her family in the Northeast.</p>
            
            <div className="inline-block border-l-4 border-teal pl-4 italic">
              "I write the kinds of stories that reflect the true complexities of investigative work—the procedures, the politics, and the perseverance required to find justice."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
