import Layout from '../components/Layout';
import Card from '../components/Card';
import Button from '../components/Button';
import Link from 'next/link';

export default function Problems() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-orange-50 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Let’s Make a Difference in the Lives of Others
            </h1>
            {/* <p className="text-xl text-gray-600 leading-relaxed">
              Understanding the problems is the first step toward creating solutions. 
              Here are the key challenges hindering India's path to self-reliance.
            </p> */}
          </div>
        </div>
      </section>

      {/* Main Problems */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {/* Problem 1: Economic Dependency */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                {/* <div className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Critical Issue
                </div> */}
                <h2 className="text-4xl font-bold mb-6">Vayu: Breathing Life into Our Fight for Clean Air</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    In Hinduism, Vayu, also known as Vata or Pavana, is revered as the god of the winds and a divine messenger of the gods. The Sanskrit term for air, vāyu, or wind, pavana, signifies one of the classical elements crucial to existence. Vayu embodies the ‘breath of life,’ with the term Vāta meaning ‘blown’ and Vāyu translating to ‘blower.’ This vital force, often referred to as Mukhya-Vāyu or Mukhya Prāna, represents the chief life force that sustains all living beings.
                  </p>
                  <p>Vayu holds significant importance in Hindu mythology and philosophy. As the father of the gods Hanuman and Bhima, he is central to many revered stories. In East Asian Buddhism, Vayu, known as Fūten in Japan, is included among the Twelve Devas, directional guardians who oversee the northwest direction.</p>
                  <p>Aatmanirbhar Society is committed to combating air pollution through comprehensive measures including legal reforms, policy amendments, advocacy, and public engagement. We aim to breathe life back into our environment by fostering a culture of sustainability and environmental stewardship. Join us in our mission to improve air quality and safeguard the health of our communities for future generations.</p>
                  
                </div>
              </div>
              
            </div>

            {/* Problem 2: Unemployment */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                
              </div>
              <div>
                
                <h2 className="text-4xl font-bold mb-6">Bhoomi: Reviving the Sacred Earth</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    According to Vedic tradition, every village fell into three categories: Mahavan (Great Forest), Tapovan (Forest of Meditation), or Shrivan (Forest of Prosperity). By the third century AD, a new era of town-building had begun in India’s northern regions, shaping the relationship between human settlements and the natural world. The forest, often depicted in Vedic literature, was seen as a distinct realm—a world of untamed nature, rich with creatures, birds, and life forms that contrasted sharply with the orderly life of the city.<br></br>
                    The ancient texts tell us that the land of Aryavarta (the land of the Aryans) was often defined by its association with the black antelope, signifying the sacredness of the northern territories beyond the Vindhya mountains. These lands were revered not only for their natural beauty but also for their spiritual significance, offering a sanctuary for sages and a retreat for warriors like Lord Rama and Lakshmana.
                  </p>
                  <p>At Aatmanirbhar Society, we are committed to reversing the effects of deforestation in Uttarakhand. Our vision is to transform the Yamuna Valley—approximately 180 kilometers from Yamunotri to Vikasnagar—into a thriving landscape filled with medicinal plants. This endeavor is not just about conservation; it is about restoration. By successfully cultivating these valleys with herbal plants and trees, we aim to pave the way for transforming the 24 valleys of Uttarakhand into the world’s herbal basket, a testament to India’s ancient wisdom and commitment to ecological balance.</p>
                  
                </div>
              </div>
            </div>

            {/* Problem 3: Agricultural Crisis */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                {/* <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Rural Issue
                </div> */}
                <h2 className="text-4xl font-bold mb-6">Jal: Reviving the Sacred Flow of Our Rivers</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    In Hinduism, Varuna, or वरुण in Sanskrit, is revered as the deity of the sky, oceans, and water. Often paired with Mitra, Varuna is a symbol of justice and truth, known as an Aditya, a son of the goddess Aditi. In Vedic scriptures, he represents the guardian of moral law and is depicted as a youthful figure mounted on a crocodile, holding a noose and a pitcher, overseeing the waters and the western direction.<br></br>Varuna’s influence extends beyond Hinduism into Japanese Buddhism, where he is known as Suiten, and is recognized in Jainism as well. In Shinto religion, Varuna’s counterpart is worshipped at the Suitengū shrine in Tokyo, reflecting his significant cultural and spiritual presence.
                  </p>
                  <p>Project Aatmanirbhar Society is dedicated to combating river and ocean pollution. We are committed to implementing initiatives to cleanse and revive our sacred rivers and to advocate for stringent measures against ocean pollution. By integrating ancient wisdom with modern action, we aim to restore the purity of our water bodies and ensure a sustainable future for our communities.</p>
                  
                </div>
              </div>
              
            </div>            
               
          </div>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">These Problems Need Solutions</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Understanding the challenges is just the beginning. Now it's time to act. 
            Discover how you can contribute to solving these critical issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/act">
              <Button variant="secondary" className="bg-white text-black">
                See How You Can Help
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" className="border-white text-white ">
                Learn About Our Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
