import React from 'react'

const Contact = () => {
  return (
    <>

      {/* CONTACT SECTION */}
       <section id="contact" className="py-16 px-6 mt-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>

          <form className="bg-white shadow-lg p-6 rounded-lg space-y-4">
            <input type="email" placeholder="Enter your email" className="w-full p-3 border rounded" />
            <textarea placeholder="Write your comment" rows="4" className="w-full p-3 border rounded"></textarea>
            <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700">Submit</button>
          </form>
        </div>
      </section>
      

    </>
  )
}

export default Contact
