"use client"

import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import "./BlogPost.css"

import day11 from "../../assets/RIZALME.jpg"
import day12 from "../../assets/church.jpg"
import day13 from "../../assets/fort.jpg"

import day21 from "../../assets/mussubic.jpg"
import day22 from "../../assets/SUBIC LAWENFORCEment.jpg"
import day23 from "../../assets/SUBIC BAY PORT.jpg"

import day31 from "../../assets/museum.jpg"
import day32 from "../../assets/car.jpg"
import day33 from "../../assets/manuel.jpg"

import day41 from "../../assets/hytec1.jpg"
import day42 from "../../assets/hytecwelding.jpg"
import day43 from "../../assets/robot.jpg"

import day51 from "../../assets/LRT.jpg"
import day52 from "../../assets/MMDA.jpg"
import day53 from "../../assets/tayoLRT.jpg"

import day61 from "../../assets/pma.jpg"
import day62 from "../../assets/mines.jpg"
import day63 from "../../assets/mansion.jpg"

import day71 from "../../assets/smbaguio.jpg"
import day72 from "../../assets/smbag.jpg"
import day73 from "../../assets/baguio.jpg"

import day81 from "../../assets/depart.jpg"
import day82 from "../../assets/wings.jpg"
import day83 from "../../assets/land.jpg"

// Updated blog post data with the travel journal entries and actual images
const blogPostsData = {
  1: {
    title: "Manila Arrival & Historic Exploration",
    date: "April 7, 2025",
    day: "Monday",
    content: `
      <div class="blog-header-image">
        <img src="${day11}" alt="Manila Skyline" />
      </div>
      
      <p>Our journey began as our Cebu Pacific flight touched down in Manila at 10:20 AM, greeted by the gentle embrace of a warm morning sun. Though I have flown before, that familiar rush of excitement — a mix of wonder and anticipation — still stirred within me as we descended upon a city teeming with life.</p>
      
      <div class="blog-image-right">
        <img src="${day12}" alt="Intramuros Historic Site" />
        <span class="image-caption">The historic walls of Intramuros</span>
      </div>
      
      <p>After settling into the welcoming simplicity of DJM Dormitory and sharing a comforting lunch, we set out to explore Manila's storied heart. Intramuros, Fort Santiago, and other historic treasures awaited us, each stone and corridor whispering echoes of a bygone era. As my companions admired the grand architecture and preserved relics, I found my fascination drawn to the silent strength of the ancient stonework — craftsmanship that, through centuries of change, continued to stand resilient and proud.</p>
      
      <div class="blog-image-left">
        <img src="${day13}" alt="Fort Santiago" />
        <span class="image-caption">The historic Fort Santiago</span>
      </div>
      
      <p>By the time dusk draped itself over the city, we wrapped up our tour around 6:30 PM. The day had been a graceful dance between history and modern chaos, and as we wandered through the Cultural Center of the Philippines and the bustling expanse of Mall of Asia, I marveled at how past and present coexist — often imperfectly, yet beautifully.</p>
      
      <p>That night, as I rested, I felt a quiet eagerness settle in my chest. The technical adventures still awaited, and the promise of learning thrilled me.</p>
    `,
    images: [day11, day12, day13],
  },
  2: {
    title: "Journey to Subic & Maritime Operations",
    date: "April 8, 2025",
    day: "Tuesday",
    content: `
      <div class="blog-header-image">
        <img src="${day21}" alt="Subic Bay Morning" />
      </div>
      
      <p>The day began long before the sun rose, with breakfast served at 5:00 AM, preparing us for the road to Subic. The journey northward was bathed in the soft, sleepy hues of early morning.</p>
      
      <div class="blog-image-right">
        <img src="${day22}" alt="SBMA Law Enforcement" />
        <span class="image-caption">SBMA Law Enforcement Department</span>
      </div>
      
      <p>Our first visit led us to the SBMA Law Enforcement Department's Communication Branch. Though the field wasn't tied directly to mechanics, I found myself captivated by the precision and order that underpinned their communication systems — a reminder that whether it be machinery or people, coordination and seamless information flow are the lifeblood of any great operation.</p>
      
      <div class="blog-image-left">
        <img src="${day23}" alt="Subic Bay Port" />
        <span class="image-caption">The impressive Subic Bay Port facilities</span>
      </div>
      
      <p>After a simple yet satisfying packed lunch, we made our way to the SBMA Seaport Department. There, the Vessel Traffic Management System unfolded before us — an intricate choreography of ships, guided safely and efficiently through unseen hands and eyes. It struck me how similar this was to traffic management on land, just grander, broader, and even more vital.</p>
      
      <p>Duty-free shopping and a leisurely dinner back at the dormitory closed our day, leaving me quietly content. Logistics, after all, is a world where mechanics, organization, and human trust converge — and today, I saw that truth firsthand.</p>
    `,
    images: [day21, day22, day23],
  },
  3: {
    title: "Museums & Natural History Exploration",
    date: "April 9, 2025",
    day: "Wednesday",
    content: `
      <div class="blog-header-image">
        <img src="${day31}" alt="Museum Visit" />
      </div>
      
      <p>We allowed ourselves a slightly slower start, with breakfast at 6:30 AM. By 7:30 AM, we were off to the Museo ni Manuel Quezon. My expectations were modest, yet I was pleasantly surprised by how thoughtfully history was preserved and presented. Beyond the exhibits, it was the methods of preservation — the careful curation, the structures themselves — that captivated the engineer in me.</p>
      
      <div class="blog-image-right">
        <img src="${day32}" alt="Museum Exhibits" />
        <span class="image-caption">Fascinating historical exhibits</span>
      </div>
      
      <p>The afternoon found us in the National Museum of Natural History, where the living tapestry of nature was displayed with artistry and care. Many admired the dazzling biodiversity; I found myself gazing upward, marveling at the museum's grand dome — a marvel of mechanical elegance and architectural ingenuity.</p>
      
      <div class="blog-image-left">
        <img src="${day33}" alt="Manuel Quezon Museum" />
        <span class="image-caption">The Museo ni Manuel Quezon</span>
      </div>
      
      <p>Dinner that evening was simple but satisfying. As night fell, I reflected on how even in places where machines seemed absent, the spirit of engineering thrived — in design, in systems, in every well-thought-out plan meant to withstand the passage of time.</p>
    `,
    images: [day31, day32, day33],
  },
  4: {
    title: "Banking Systems & Power Technology",
    date: "April 10, 2025",
    day: "Thursday",
    content: `
      <div class="blog-header-image">
        <img src="${day41}" alt="Hytec Power Inc" />
      </div>
      
      <p>The morning began with another early rise, but excitement replaced any lingering sleepiness. Our first stop was the Bangko Sentral ng Pilipinas — the nation's guardian of currency and economic stability. Touring its facilities opened my eyes to the sheer scale and complexity of securing something as intangible yet vital as financial trust.</p>
      
      <div class="blog-image-right">
        <img src="${day42}" alt="Hytec Welding Equipment" />
        <span class="image-caption">Advanced welding equipment at Hytec Power</span>
      </div>
      
      <p>The highlight of the day, however, was Hytec Power Inc. Here, the pulse of my passion quickened. Surrounded by training equipment, motor systems, and simulation technology, I felt truly at home. I imagined myself navigating those complex systems, mastering the machines that power industries.</p>
      
      <div class="blog-image-left">
        <img src="${day43}" alt="Robotics System" />
        <span class="image-caption">Sophisticated robotics systems</span>
      </div>
      
      <p>Returning to the dormitory that evening, fatigue tugged at my body, but inspiration lifted my spirit. Days like this reignite dreams — tangible, electrifying dreams that remind me why I chose this path.</p>
    `,
    images: [day41, day42, day43],
  },
  5: {
    title: "Transit Systems & Traffic Engineering",
    date: "April 11, 2025",
    day: "Friday",
    content: `
      <div class="blog-header-image">
        <img src="${day51}" alt="LRT Line 2 System" />
      </div>
      
      <p>Our bus carried us to the Light Rail Transit Authority Line 2, where the veil was lifted on the world behind the trains I had so often ridden. Walking through control rooms and maintenance areas, I marveled at the intricate ballet of electric trains, signals, and human operators working together seamlessly.</p>
      
      <div class="blog-image-right">
        <img src="${day52}" alt="MMDA Traffic Management" />
        <span class="image-caption">MMDA Traffic Engineering Center</span>
      </div>
      
      <p>The afternoon brought us to the Traffic Engineering Center — the unseen mind orchestrating the city's roadways. Through surveillance systems, simulation models, and traffic management strategies, I glimpsed the artistry of maintaining order in what often feels like chaos.</p>
      
      <div class="blog-image-left">
        <img src="${day53}" alt="LRT Station" />
        <span class="image-caption">Our group at the LRT station</span>
      </div>
      
      <p>Dinner that evening felt well-earned. Each day peeled back another layer of understanding, revealing the depth and complexity behind everyday conveniences we so easily take for granted.</p>
    `,
    images: [day51, day52, day53],
  },
  6: {
    title: "Journey to Baguio City",
    date: "April 12, 2025",
    day: "Saturday",
    content: `
      <div class="blog-header-image">
        <img src="${day61}" alt="Philippine Military Academy" />
      </div>
      
      <p>At the hour when most of the city still slept, we departed at 1:00 AM for Baguio City. The long road, embraced by darkness, eventually gave way to the cool, misty embrace of Baguio's dawn. By 6:30 AM, we had arrived, welcomed by air crisp enough to awaken even the sleepiest traveler.</p>
      
      <div class="blog-image-right">
        <img src="${day62}" alt="Mines View Park" />
        <span class="image-caption">The breathtaking Mines View Park</span>
      </div>
      
      <p>Our first visit was to the Strawberry Farm — a place of serenity, where the gentle order of cultivated rows reflected a quiet engineering of nature itself. The climb to Bell Church rewarded us with sweeping views of the awakening city, and in that stillness, I found a peaceful reminder that good design extends beyond structures; it breathes into spaces of reflection and spirit.</p>
      
      <div class="blog-image-left">
        <img src="${day63}" alt="Mansion House" />
        <span class="image-caption">The historic Mansion House</span>
      </div>
      
      <p>After checking in at Prince Plaza Hotel and enjoying a much-needed breakfast, we visited the Philippine Military Academy. Discipline, order, precision — every corner, every drill resonated with these principles. To me, it was like witnessing a living, breathing machine — one that runs not on gears or circuits, but on values and tradition.</p>
      
      <p>Our afternoon tour of Wright Park, Mansion House, and Mines View Park offered a softer, scenic counterbalance to the day's earlier intensity. Fresh air and breathtaking views became the perfect backdrop for quiet contemplation.</p>
    `,
    images: [day61, day62, day63],
  },
  7: {
    title: "Leisure Day in Baguio",
    date: "April 13, 2025",
    day: "Sunday",
    content: `
      <div class="blog-header-image">
        <img src="${day71}" alt="SM Baguio Exterior" />
      </div>
      
      <p>A slower, more leisurely day welcomed us. After breakfast, we were granted free time, and a few friends and I wandered to SM Baguio. What struck me most was the mall's remarkable design — built to embrace the cool climate naturally, without the crutch of artificial air conditioning. Environmental integration like that commands my deep respect; it is engineering that listens to nature rather than overpowering it.</p>
      
      <div class="blog-image-right">
        <img src="${day72}" alt="SM Baguio Interior" />
        <span class="image-caption">The naturally ventilated interior of SM Baguio</span>
      </div>
      
      <p>After lunch, we began our journey back to Manila. As the road unwound behind us, I felt a bittersweet longing for more time amid Baguio's calm beauty. We returned to the dormitory in the evening, sharing our final dinner together — some savoring one last stroll through the city's lively streets, others simply reflecting on the week's memories.</p>
      
      <div class="blog-image-left">
        <img src="${day73}" alt="Baguio City View" />
        <span class="image-caption">The breathtaking views of Baguio City</span>
      </div>
      
      <p>As the evening settled into night, I found myself mentally cataloging the experiences of the past week — each site, each system, each moment of discovery. Tomorrow would bring our journey to a close, but the impressions left upon my mind would linger far longer.</p>
    `,
    images: [day71, day72, day73],
  },
  8: {
    title: "Return to Zamboanga & Reflections",
    date: "April 14, 2025",
    day: "Monday",
    content: `
      <div class="blog-header-image">
        <img src="${day81}" alt="Departure Day" />
      </div>
      
      <p>Our final morning arrived gently. After breakfast, we packed our belongings and boarded the bus, taking one last drive through the familiar streets that had, in a short time, become intertwined with our memories.</p>
      
      <div class="blog-image-right">
        <img src="${day82}" alt="Airplane Wing View" />
        <span class="image-caption">View from the airplane window</span>
      </div>
      
      <p>At the airport, we bid farewell to our ever-patient tour guide and the kind DJM staff who had cared for us along the way. As our plane ascended into the skies once more, I watched the sprawling landscape of Manila shrink beneath us — a living, breathing city of dreams, history, and innovation.</p>
      
      <div class="blog-image-left">
        <img src="${day83}" alt="Landing in Zamboanga" />
        <span class="image-caption">Landing back in Zamboanga</span>
      </div>
      
      <p>Returning to Zamboanga, I stepped off the plane with a full heart. At home, as I embraced my family and my ever-loyal dog, I realized that this journey had gifted me more than just technical knowledge. It had offered me perspective — a deeper understanding of the invisible forces that shape our world, the unseen hands that build, preserve, and sustain the systems we often take for granted.</p>
      
      <p>For someone who finds poetry in machines and beauty in systems, it was the perfect adventure — a week spent not just exploring, but awakening to the deeper rhythm of progress itself.</p>
    `,
    images: [day81, day82, day83],
  },
}

const BlogPost = () => {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setPost(blogPostsData[id])
      setLoading(false)
    }, 500)
  }, [id])

  if (loading) {
    return (
      <div className="blog-post-loading">
        <div className="loading-spinner"></div>
        <p>Loading post...</p>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="blog-post-not-found">
        <h2>Post Not Found</h2>
        <p>Sorry, the blog post you're looking for doesn't exist.</p>
        <Link to="/blog" className="btn">
          Back to Blog
        </Link>
      </div>
    )
  }

  return (
    <section className="section blog-post">
      <div className="container">
        <Link to="/blog" className="blog-back-link">
          ← Back to Travel Journal
        </Link>

        <article className="blog-post-content">
          <header className="blog-post-header">
            <h1 className="blog-post-title">{post.title}</h1>
            <div className="blog-post-meta">
              <span className="blog-post-date">
                {post.date} ({post.day})
              </span>
            </div>
          </header>

          <div className="blog-post-body" dangerouslySetInnerHTML={{ __html: post.content }}></div>

          <div className="blog-post-navigation">
            {Number.parseInt(id) > 1 && (
              <Link to={`/blog/${Number.parseInt(id) - 1}`} className="blog-post-prev">
                ← Previous Day
              </Link>
            )}
            {Number.parseInt(id) < Object.keys(blogPostsData).length && (
              <Link to={`/blog/${Number.parseInt(id) + 1}`} className="blog-post-next">
                Next Day →
              </Link>
            )}
          </div>
        </article>
      </div>
    </section>
  )
}

export default BlogPost
