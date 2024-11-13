import React from 'react'

const page = () => {
    return (
        <div className="travel-guide">
          <header>
            <h1>Travel Guide</h1>
            <p>Explore the world's most beautiful destinations and plan your perfect trip.</p>
          </header>
    
          <section className="destinations">
            <h2>Top Destinations</h2>
            <div className="destination">
              <h3>Paris</h3>
              <p>Known for its iconic landmarks like the Eiffel Tower and the Louvre Museum, Paris is a must-visit for history and culture lovers.</p>
            </div>
            <div className="destination">
              <h3>Tokyo</h3>
              <p>From ancient temples to futuristic skyscrapers, Tokyo blends the old with the new, offering something for every traveler.</p>
            </div>
            <div className="destination">
              <h3>New York City</h3>
              <p>The city that never sleeps, NYC offers world-class shopping, theaters, and iconic landmarks like Central Park and Times Square.</p>
            </div>
          </section>
    
          <section className="travel-tips">
            <h2>Travel Tips</h2>
            <ul>
              <li>Always keep a copy of your passport and important documents.</li>
              <li>Learn a few basic phrases in the local language.</li>
              <li>Pack light to avoid unnecessary baggage fees.</li>
              <li>Research the best time to visit each destination for optimal weather.</li>
            </ul>
          </section>
    
          <section className="food">
            <h2>Food You Must Try</h2>
            <p>Food is an integral part of traveling. Here are some dishes you should try during your trip:</p>
            <ul>
              <li>French Croissant in Paris</li>
              <li>Sushi in Tokyo</li>
              <li>New York-style Pizza in NYC</li>
            </ul>
          </section>
    
          <footer>
            <p>Start planning your next adventure now!</p>
          </footer>
        </div>
      );
}

export default page
