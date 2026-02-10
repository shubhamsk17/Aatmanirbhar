import Layout from '../components/Layout';
import Button from '../components/Button';
import Card from '../components/Card';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container-custom section-padding relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
                  Building India's Future
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Join the{' '}
                <span className="gradient-text">Aatmanirbhar</span>{' '}
                Movement
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Aatma Nirbhar Society epitomizes the collective endeavor towards positive transformation, drawing inspiration from the wisdom of ancient India. Embracing the spirit of self-reliance, our organization mirrors the resilience and determination inherent in humanity. With a dedicated focus on environmental sustainability and community welfare, we pave the path towards a brighter tomorrow. Through collaborative efforts and steadfast commitment, we inspire others to join us in our quest for a better world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/act">
                  <Button variant="primary" className="w-full sm:w-auto">
                    Get Involved
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" className="w-full sm:w-auto">
                    Learn More
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-8 pt-4">
          
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary-400 to-secondary-400 rounded-3xl opacity-20 absolute inset-0 blur-3xl"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mb-4">
                      <span className="text-white text-6xl font-bold">आ</span>
                      {/* <img src="./child-tree.png"/> */}
                    </div>
                    <p className="text-gray-600 font-large">Aatmanirbhar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our उद्देश्य/ Aim</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering communities towards self-sufficiency through sustainable initiatives rooted in ancient wisdom and modern innovation.
            </p> <br></br>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our कथा / Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The journey of empowerment and restoration, driven by a shared commitment to self-reliance and environmental stewardship...            </p>
          
          </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <div className="p-8">
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12h10a3 3 0 100-6 2 2 0 10-4 0M4 18h13a3 3 0 100-6M17 8a2 2 0 110-4"
                    />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold mb-4">Vayu (Air)</h3>
                <p className="text-gray-600">
                  Join us in the fight for cleaner air as we implement initiatives to improve
                  air quality in our communities.
                </p>
              </div>
            </Card>

            <Card>
              <div className="p-8">
                <div className="w-16 h-16 bg-secondary-100 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3s5 6 5 10a5 5 0 11-10 0c0-4 5-10 5-10z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Jal (Water)</h3>
                <p className="text-gray-600">Ancient rituals meet modern commitment in our mission to cleanse and revive sacred rivers.                </p>
              </div>
            </Card>
            <Card>
              <div className="p-8">
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v6m0 0c-2.5 0-4.5 2-4.5 4.5S9.5 18 12 18s4.5-2 4.5-4.5S14.5 9 12 9zm0 0l-2-2m2 2l2-2"
                    />
                  </svg>

                </div>
                <h3 className="text-2xl font-bold mb-4">Bhumi (land)</h3>
                <p className="text-gray-600">Join hands with communities as we work together for the conservation and protection of our precious land.                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of Indians working towards a self-reliant nation. Your contribution matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="secondary" className="bg-white text-black">
                Join the Movement
              </Button>
            </Link>
            <Link href="/act">
              <Button variant="outline" className="border-white text-black  ">
                Explore Actions
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </Layout>
  );
}
