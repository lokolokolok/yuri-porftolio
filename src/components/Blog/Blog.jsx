"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import "./Blog.css"

// Import the first image from each day for the blog card previews
import day11 from "../../assets/RIZALME.jpg"
import day21 from "../../assets/mussubic.jpg"
import day31 from "../../assets/museum.jpg"
import day41 from "../../assets/hytec1.jpg"
import day51 from "../../assets/LRT.jpg"
import day61 from "../../assets/pma.jpg"
import day71 from "../../assets/smbaguio.jpg"
import day81 from "../../assets/depart.jpg"

// Updated blog data with the travel journal entries
const blogPosts = [
  {
    id: 1,
    title: "Manila Arrival & Historic Exploration",
    date: "April 7, 2025",
    day: "Monday",
    excerpt:
      "Our journey began as our Cebu Pacific flight touched down in Manila at 10:20 AM, greeted by the gentle embrace of a warm morning sun...",
    image: day11,
  },
  {
    id: 2,
    title: "Journey to Subic & Maritime Operations",
    date: "April 8, 2025",
    day: "Tuesday",
    excerpt:
      "The day began long before the sun rose, with breakfast served at 5:00 AM, preparing us for the road to Subic...",
    image: day21,
  },
  {
    id: 3,
    title: "Museums & Natural History Exploration",
    date: "April 9, 2025",
    day: "Wednesday",
    excerpt:
      "We allowed ourselves a slightly slower start, with breakfast at 6:30 AM. By 7:30 AM, we were off to the Museo ni Manuel Quezon...",
    image: day31,
  },
  {
    id: 4,
    title: "Banking Systems & Power Technology",
    date: "April 10, 2025",
    day: "Thursday",
    excerpt:
      "The morning began with another early rise, but excitement replaced any lingering sleepiness. Our first stop was the Bangko Sentral ng Pilipinas...",
    image: day41,
  },
  {
    id: 5,
    title: "Transit Systems & Traffic Engineering",
    date: "April 11, 2025",
    day: "Friday",
    excerpt:
      "Our bus carried us to the Light Rail Transit Authority Line 2, where the veil was lifted on the world behind the trains I had so often ridden...",
    image: day51,
  },
  {
    id: 6,
    title: "Journey to Baguio City",
    date: "April 12, 2025",
    day: "Saturday",
    excerpt:
      "At the hour when most of the city still slept, we departed at 1:00 AM for Baguio City. The long road, embraced by darkness...",
    image: day61,
  },
  {
    id: 7,
    title: "Leisure Day in Baguio",
    date: "April 13, 2025",
    day: "Sunday",
    excerpt:
      "A slower, more leisurely day welcomed us. After breakfast, we were granted free time, and a few friends and I wandered to SM Baguio...",
    image: day71,
  },
  {
    id: 8,
    title: "Return to Zamboanga & Reflections",
    date: "April 14, 2025",
    day: "Monday",
    excerpt:
      "Our final morning arrived gently. After breakfast, we packed our belongings and boarded the bus, taking one last drive through the familiar streets...",
    image: day81,
  },
]

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.date.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <section id="blog" className="section blog">
      <div className="container">
        <h2 className="section-title">Travel Journal</h2>

        <div className="blog-search">
          <input
            type="text"
            placeholder="Search journal entries..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="blog-grid">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <div className="blog-card" key={post.id}>
                <div className="blog-card-image">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} />
                </div>
                <div className="blog-card-content">
                  <span className="blog-date">
                    {post.date} ({post.day})
                  </span>
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="blog-read-more">
                    Read More
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <p>No journal entries found matching "{searchTerm}"</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Blog
