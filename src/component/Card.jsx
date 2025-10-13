import "./Card.css"

function Card() {
  return (
    <div className='main'>
        <div className="one">
            <h1>Stepping Up Progress in this Defining Decade</h1>
            <small>Alongside communities, we’re urgently clearing obstacles and finding solutions to the climate and biodiversity crises.</small>
        </div>


        <div className='another-main'>

            <div className="item">
                <h1>Who we are</h1>
                <small>We are dedicated staff, scientists and members advancing effective, lasting conservation in more than 80 countries and territories.</small>
            </div>

            <div className="item">
                <h1>What we do</h1>
                <small>To make the highest possible impact on the climate and biodiversity crises between now and 2030, we’re developing breakthrough ideas.</small>
            </div>

            <div className="item">
                <h1>How to help</h1>
                <small>There are so many ways to make positive change for our planet. Volunteer with us. Learn how to reduce your carbon footprint. Donate to conservation work.</small>
            </div>

            <div className="item">
                <h1>Where we work</h1>
                <small>Dense rainforests, remote coral reefs and the hearts of major cities. Our strategies are as diverse as the habitats and geographies in which we work.</small>
            </div>

        </div>

    </div>
  )
}

export default Card
