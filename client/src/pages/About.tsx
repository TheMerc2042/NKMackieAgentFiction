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
              <div className="absolute -bottom-4 -right-4 bg-teal text-white py-1 px-4 font-courier text-sm">
                CREDENTIALS VERIFIED
              </div>
            </div>
          </div>
          
          <div className="lg:w-3/5 fade-in">
            <p className="mb-6">N.K. Mackie is a former federal agent and seasoned financial crimes investigator, whose career took her deep into the world of fraud, corruption, and white-collar criminal networks. With a bachelor's degree, a master's, and a law degree, she brings a sharp legal mind and a deep understanding of the justice system to every page she writes.</p>
            
            <p className="mb-6">Her debut novel, Dismissed, launches the Empire Crime Investigations series, where Mackie weaves gripping stories inspired by her time in the field. Drawing from real-world experience, she offers readers an insider's view of criminal investigations—highlighting not only the intricacies of law enforcement work but also the emotional and psychological weight that comes with it.</p>
            
            <p className="mb-6">A proud New England native, she credits her parents for instilling in her the belief that anything is possible with hard work and a little luck.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
