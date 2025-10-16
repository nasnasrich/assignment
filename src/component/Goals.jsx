import "./Goals.css"
import tnc from '../assets/tnc.svg';


function Goals() {
  return (
    <div className="Goals">

        <div className="Goa">
            <h1>Our Goals for 2030</h1>
            <small>We’re racing to hit these targets to help the world reverse climate change and biodiversity loss. Together, we find the paths to make change possible.</small>
            <br/>
            <button>VIEW OUR PRIORITIES</button>
        </div>

        <div className="Goalsone">
            
            <div className="items">
                <img className="logo1" src={tnc} alt="Nature Conservancy Logo" />
                <h1>3B</h1>
                <small>Avoid or sequester 3 billion metric tons of carbon dioxide emissions annually—the same as taking 650 million cars off the road every year.</small>
            </div>

            <div className="items">
                <img className="logo1" src={tnc} alt="Nature Conservancy Logo" />
                <h1>100M</h1>
                <small>Help 100 million people at severe risk of climate-related emergencies by safeguarding habitats that protect communities.</small>
            </div>

                <div className="items">
                    <img className="logo1" src={tnc} alt="Nature Conservancy Logo" />
                    <h1>100M</h1>
                    <small>Help 100 million people at severe risk of climate-related emergencies by safeguarding habitats that protect communities.</small>
                </div>

                <div className="items">
                    <img className="logo1" src={tnc} alt="Nature Conservancy Logo" />
                    <h1>650M</h1>
                    <small>Conserve 650 million hectares—a land area twice the size of India—of biodiverse habitats such as forests, grasslands and desert.</small>
                </div>

                <div className="items">
                    <img className="logo1" src={tnc} alt="Nature Conservancy Logo" />
                    <h1>4B</h1>
                    <small>Conserve 4 billion hectares of marine habitat—more than 10% of the world’s oceans—through protected areas, sustainable fishing and more.</small>
                </div>

                <div className="items">
                    <img className="logo1" src={tnc} alt="Nature Conservancy Logo" />
                    <h1>1M+30M</h1>
                    <small>Conserve 1 million kilometers of rivers—enough to stretch 25 times around the globe—plus 30 million hectares of lakes and wetlands.</small>
                </div>

                <div className="items">
                    <img className="logo1" src={tnc} alt="Nature Conservancy Logo" />
                    <h1>45M</h1>
                    <small>Conserve 1 million kilometers of rivers—enough to stretch 25 times around the globe—plus 30 million hectares of lakes and wetlands.</small>
                </div>

        </div>
    </div>
  )
}

export default Goals

