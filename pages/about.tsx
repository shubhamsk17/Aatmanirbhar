import Layout from '../components/Layout';
import Card from '../components/Card';
import Button from '../components/Button';
import Link from 'next/link';

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">Aatmanirbhar</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Aatma Nirbhar Society stands as a testament to the collective spirit of individuals striving for positive change. Rooted in the ethos of self-reliance and inspired by the ancient wisdom of India, our organization embodies the resilience and determination of the human spirit. With a focus on environmental sustainability and community welfare, we endeavor to pave the way for a brighter future. Through collaborative efforts and unwavering dedication, we aim to inspire others to join us in our mission for a better world.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Who are we?</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  We at Aatma Nirbhar Society are a diverse group of passionate individuals committed to making a difference. Our team includes environmentalists, social workers, educators, and volunteers from all walks of life. United by our dedication to self-reliance and sustainability, and inspired by India's rich cultural heritage and ancient wisdom, we combine traditional knowledge with modern science to address today's challenges faced by our communities and environment.
                </p>
                <p>
                  We value integrity, compassion, and respect, fostering an inclusive environment where every voice matters. Our initiatives range from environmental clean-up campaigns to educational workshops, empowering individuals to take actionable steps towards sustainability.
                </p>
                <p>
                  We believe that change begins with each of us. Join us in our mission to create a better, more sustainable world for future generations
                </p>
              </div>
            </div>
            <div className="relative">
              <Card className="p-8">
                <div className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-6xl font-bold">आ</span>
                    </div>
                    <p className="text-2xl font-bold gradient-text">आत्मनिर्भर भारत</p>
                    <p className="text-gray-600">Self-Reliant India</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>


      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Founder</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Shree Ranjeet Chaturvedi (Pathak), affectionately known as Yamuna Putra, is the visionary leader driving Aatma Nirbhar Society towards its noble goals. Hailing from the sacred land of BrajBhoomi, Vrindavan, his journey embodies resilience, innovation, and unwavering commitment to social change.
                </p>
                <p>
                  However, it was during the challenging times of the Covid-19 pandemic that his inner calling for social service and environmental stewardship truly emerged. Witnessing the plight of millions, he was deeply moved by the selfless acts of individuals and communities across India. Inspired by the resilience of migrant workers, the courage of everyday heroes, and the spirit of compassion, he founded the Aatma Nirbhar Society as a beacon of hope and collective action.
                </p>
                
              </div>
            </div>
            <div className="relative">
              <Card className="p-8">
                <div className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-6xl font-bold">आ</span>
                    </div>
                    <p className="text-2xl font-bold gradient-text">आत्मनिर्भर भारत</p>
                    <p className="text-gray-600">Self-Reliant India</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <div className="p-8">
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4">Our दृष्टिकोण(Vision)</h3>
                <p className="text-gray-600 leading-relaxed">
                  We envision a world where every individual embraces self-reliance, leading to resilient communities and a flourishing planet. Through collaborative efforts, we aspire to leave a legacy of positive impact for generations to come.
                </p>
              </div>
            </Card>
            <Card>
              <div className="p-8">
                <div className="w-16 h-16 bg-secondary-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4">Our उद्देश्य(Mission)</h3>
                <p className="text-gray-600 leading-relaxed">
                 Empowering communities through self-reliance, we aim to revive ancient wisdom and promote environmental sustainability. Together, we strive to create a future where humanity thrives in harmony with nature.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h2>
            <p className="text-xl text-gray-600">एकता में शक्ति (Strength in Unity)</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Priyanka Bhandari', role: 'Project Manager', expertise: 'Nursery Development' },
              { name: 'Prashant Shrivastav', role: 'Chief Project Manager'},
              { name: 'Dr.Subhash Nautiyal', role: 'Advisor'},
            ].map((member) => (
              <Card key={member.name}>
                <div className="p-6">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary-700">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary-600 font-semibold mb-2">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.expertise}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Movement</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Be part of the change. Together, we can build a stronger, self-reliant India.
          </p>
          <Link href="/contact">
            <Button variant="secondary" className="bg-white text-black">
              Get Involved Today
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
