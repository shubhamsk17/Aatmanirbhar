import Layout from '../components/Layout';
import Card from '../components/Card';
import Button from '../components/Button';
import Link from 'next/link';

export default function Act() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-50 to-primary-50 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              How <span className="gradient-text">You Can Act</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Every action counts. Here are practical ways you can contribute to building 
              a self-reliant India, whether you're a student, professional, or entrepreneur.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Start Today</h2>
            <p className="text-xl text-gray-600">Simple actions with big impact</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group cursor-pointer">
              <div className="p-8">
                <div className="w-16 h-16 bg-primary-100 group-hover:bg-primary-200 rounded-xl flex items-center justify-center mb-6 transition-colors">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Mera Kartavya</h3>
                <p className="text-gray-600 mb-6">
                  The mission was to minimize waste generation in Mathura on the Janamashtmi Mahotsav 2024 in which, as per media reports, 2.5 million visitors were expected in Mathura. Each member of Project Aatmanirbhar and NCC Cadets embarked on a door-to-door campain, visiting every commercial space in Mathura, armed with stickers containing an Oath and Yamuna Rakshak (Protectors of Yamuna) Hand bands. Each shop keeper took an oath to ensure that no waste was generated around them and proper use of dust bins would be ensured. 
                </p>
                
              </div>
            </Card>

            <Card className="group cursor-pointer">
              <div className="p-8">
                <div className="w-16 h-16 bg-secondary-100 group-hover:bg-secondary-200 rounded-xl flex items-center justify-center mb-6 transition-colors">
                  <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">VICHAR GOSHTI</h3>
                <p className="text-gray-600 mb-6">
                  Project Aatmanirbhar had come together with several NGOs and social workers in new Delhi to discuss the individual and collective efforts being taken on the Yamuna cleanliness campaign. The meeting was attended by people from all walks of life. Project Aatmanirbhar Society introduced its plan for conducting the 620 km yatra from Yamunotri to Mathura and sought the cooperation of various NGOs and organisations.
                </p>
                
              </div>
            </Card>

            <Card className="group cursor-pointer">
              <div className="p-8">
                <div className="w-16 h-16 bg-primary-100 group-hover:bg-primary-200 rounded-xl flex items-center justify-center mb-6 transition-colors">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Volunteer</h3>
                <p className="text-gray-600 mb-6">
                  Join our volunteer programs and contribute your time and expertise to 
                  community development initiatives across India.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>Teach in rural schools and communities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>Organize awareness campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>Mentor aspiring entrepreneurs</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* For Different Groups */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {/* <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Actions by Role</h2>
            <p className="text-xl text-gray-600">Tailored suggestions for different groups</p>
          </div> */}
          
          <div className="space-y-12">
            {/* For Students */}
            <Card>
              <div className="p-8 md:p-12">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-4xl">🎓</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-3xl font-bold mb-4">620 km Yamuna Jal Kalash Pad-Yatra</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-lg mb-2 text-primary-600">Lord Shri Krishna performed infinite pastimes on the banks of Shri Yamuna. 
                        Shri Yamuna ji is the first born daughter of Lord Shri Suryanarayan a diety worshipped across in the world in different cultures. Lord Surya is known as Ra in Egyptian, Sol in Norse, Helios in Greece, Arinna in Hittite, Surya in Vedas, Huitzilopochtli in The Aztec, Inti in Incan, Kinich Ahau in Mayan.
                        In vedas Shri Yamuna is referred to as Yami, the twin-sister of Yama, the God of Death and also the sister of Lord Shani, the God of Justice. It is also mentioned that both Yama and Yami were the first born twins and Yama was the first mortal who ruled the realm of the dead (pitrus) whereas, Yami was immortal. Hence, Yamuna is considered Life whereas her twin brother Yama is Death.
                        </h4>
                        
                      </div>
                      <div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* For Professionals */}
            

            {/* For Entrepreneurs */}
            

            {/* For Everyone */}
            
          </div>
        </div>
      </section>

      {/* Campaign Actions */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Join Our Campaigns</h2>
            <p className="text-xl text-gray-600">Ongoing initiatives you can participate in</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Construction of Yamunotri MahaDev Temple',
        
                status: 'Active'
              },
              {
                name: 'Launching of Yamunashtak',
                
                status: 'Active'
              },
              {
                name: 'Walkathon',
                
                status: 'Active'
              },
              {
                name: 'Yamuna Cleaning Campaign',
                
                status: 'Active'
              },
              
            ].map((campaign) => (
              <Card key={campaign.name}>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`
                      px-3 py-1 rounded-full text-xs font-semibold
                      ${campaign.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}
                    `}>
                      {campaign.status}
                    </span>
                    {/* <span className="text-sm text-gray-600">{campaign.participants} participants</span> */}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{campaign.name}</h3>
                  {/* <p className="text-gray-600 mb-4">{campaign.description}</p> */}
                  <Link href="/contact">
                    <Button variant="outline" className="w-full">
                      Join Campaign
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Take Action?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Don't wait for change—be the change. Join the Aatmanirbhar movement today 
            and contribute to building a stronger, self-reliant India.
          </p>
          <Link href="/contact">
            <Button variant="secondary" className="bg-white text-black">
              Join the Movement Now
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
