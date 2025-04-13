export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Shadow Guardian Command</h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
          Elite. Adaptive. Unseen. We are the line between chaos and order—rescue and resolve.
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-2 mt-12">
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p>
            SGC is a Bermuda-based humanitarian and tactical response command unit dedicated to protecting life, aiding emergency services, and standing ready to deploy when the world needs us most.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Become a Guardian</h2>
          <p>
            Are you ready to train, lead, and serve? Start your journey as a Guardian Cadet. Learn skills, build discipline, and become part of something bigger than yourself.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p>Email: command@sgc.bermuda<br />Instagram: @shadowguardiancommand</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Motto</h2>
          <p className="italic">
            "He lit the path. We carry the flame."
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg md:col-span-2">
          <h2 className="text-2xl font-semibold mb-2">Photo Gallery</h2>
          <p>Coming soon: Images of our emblem, uniforms, training missions, and more.</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg md:col-span-2">
          <h2 className="text-2xl font-semibold mb-2">Guardian Cadet Application</h2>
          <form action="https://formspree.io/f/mqapnoqd" method="POST" className="space-y-4">
            <input type="text" name="name" placeholder="Full Name" className="w-full p-2 rounded bg-black border border-gray-600 text-white" required />
            <input type="email" name="email" placeholder="Email Address" className="w-full p-2 rounded bg-black border border-gray-600 text-white" required />
            <textarea name="message" placeholder="Why do you want to become a Guardian Cadet?" className="w-full p-2 rounded bg-black border border-gray-600 text-white" required></textarea>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit Application</button>
          </form>
        </div>
      </section>
    </main>
  );
}
