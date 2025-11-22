import React from 'react'

const Contact = () => {
  return (
    <>

      {/* CONTACT SECTION */}
       {/* <section id="contact" className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>

          <form className="bg-white shadow-lg p-6 rounded-lg space-y-4">
            <input type="email" placeholder="Enter your email" className="w-full p-3 border rounded" />
            <textarea placeholder="Write your comment" rows="4" className="w-full p-3 border rounded"></textarea>
            <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700">Submit</button>
          </form>
        </div>
      </section> */}

      <div className="bg-gray-100 mt-16 flex items-center justify-center min-h-screen p-4">
<form
action="https://api.web3forms.com/submit"
method="POST"
className="bg-white shadow-xl rounded-2xl p-6 md:p-10 w-full max-w-lg space-y-5"
>
<input
type="hidden"
name="access_key"
value="7a907100-0d09-41a8-adc5-f7b1de221320"
/>


<h2 className="text-2xl font-semibold text-center text-gray-800">
Contact Us
</h2>


<input
type="text"
name="name"
required
placeholder="Enter Your Name"
className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
/>


<input
type="email"
name="email"
required
placeholder="Enter Your E-mail"
className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
/>


<textarea
name="message"
placeholder="Enter Your Comment"
required
className="w-full px-4 py-3 h-32 border border-gray-300 rounded-lg resize-none focus:ring-blue-500 focus:border-blue-500 outline-none"
></textarea>


<input type="hidden" name="redirect" value="https://mywebsite.com/thanks.html" />


<button
type="submit"
className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
>
Submit
</button>
</form>
</div>
      

    </>
  )
}

export default Contact
