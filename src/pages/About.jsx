// Import necessary assets and components
import { assets } from "../assets/frontend_assets/assets"
import { NewsLetterBox } from "../components/NewsLetterBox"
import Title from "../components/Title"

// Define the About component
const About = () => {
  return (
    <div>
      {/* Title Section */}
      <div className="text-2xl text-center pt-8 border-t">
        {/* Reusable Title component to display the page title */}
        <Title text1={"ABOUT"} text2={"  US"} />
      </div>

      {/* About Us Section */}
      <div className="my-10 flex flex-col md:flex-row gap-16">
        {/* About Image */}
        <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="About Us Image" />

        {/* Description and Mission Statement */}
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-700">
          <p>At Wear What You Feel, we believe fashion is more than clothing — it’s a reflection of your mood, your story, and your confidence. Our mission is simple: to help you express yourself effortlessly through what you wear.

          </p>
          <p>
          Born from the idea that style should be personal and empowering, Wear What You Feel brings you carefully curated pieces that blend comfort, quality, and individuality. Whether you’re dressing up for a moment that matters or keeping it casual, our collections are designed to make you feel confident, authentic, and unstoppable.</p>

          {/* Mission Statement */}
          <b className="text-gray-800">Our Mission</b>
          <p className="text-gray-700">At Wear What You Feel, our mission is to inspire confidence and self-expression through fashion.
          We believe that what you wear should not just look good — it should feel right, reflect your mood, and tell your story.
          </p>
          <p className="text-gray-700"> 
          Our goal is to create a world where style is personal, inclusive, and effortless. Every piece we design is made to help you express who you are — with comfort, confidence, and authenticity.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-xl py-4 uppercase">
        <Title text1={"Why "} text2={"CHOOSE US"} />
      </div>

      {/* Features Section */}
      <div className="flex flex-col md:flex-row text-sm mb-20">
        {/* Feature 1: Quality Assurance */}
        <div className="border-none px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-700">Our team conducts multiple quality checks before any product reaches you — ensuring that what you receive is not only beautiful but built to last.</p>
        </div>

        {/* Feature 2: Convenience */}
        <div className="border-none px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-700">Our platform is designed with your comfort in mind — from easy navigation to secure payment options and fast, reliable delivery.</p>
        </div>

        {/* Feature 3: Exceptional Customer Service */}
        <div className="border-none px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-700">Our dedicated support team is always ready to assist you with any questions, orders, or concerns. Whether it’s help with sizing, tracking your delivery, or managing a return, we’re here to make every interaction smooth and satisfying.</p>
        </div>
      </div>

      {/* Newsletter Subscription Section */}
      <NewsLetterBox />
    </div>
  )
}

export default About
