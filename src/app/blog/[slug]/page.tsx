import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeftIcon,
  CalendarIcon,
  ClockIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Header from "@/components/Header";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  // Simulation d'un article de blog basé sur le slug
  const blogPost = {
    title: "Les bienfaits de la vitamine C pour la peau",
    excerpt:
      "Découvrez comment la vitamine C peut transformer votre routine de soins et illuminer votre teint naturellement.",
    content: `
      <p class="mb-6 text-lg leading-relaxed text-gray-700">
        La vitamine C est l'un des ingrédients les plus populaires et efficaces dans les soins de la peau. 
        Cet antioxydant puissant offre de nombreux bienfaits pour maintenir une peau saine et éclatante.
      </p>
      
      <h2 class="text-2xl font-playfair font-light text-black mb-4 mt-8">Les propriétés de la vitamine C</h2>
      <p class="mb-6 text-lg leading-relaxed text-gray-700">
        La vitamine C, également connue sous le nom d'acide ascorbique, est un antioxydant naturel qui aide à :
      </p>
      <ul class="mb-6 list-disc list-inside text-lg leading-relaxed text-gray-700 space-y-2">
        <li>Protéger la peau contre les radicaux libres</li>
        <li>Stimuler la production de collagène</li>
        <li>Éclaircir les taches pigmentaires</li>
        <li>Améliorer l'éclat naturel du teint</li>
        <li>Renforcer la barrière cutanée</li>
      </ul>
      
      <h2 class="text-2xl font-playfair font-light text-black mb-4 mt-8">Comment intégrer la vitamine C dans votre routine</h2>
      <p class="mb-6 text-lg leading-relaxed text-gray-700">
        Pour maximiser les bienfaits de la vitamine C, il est recommandé de l'appliquer le matin, 
        après le nettoyage et avant votre crème hydratante. Commencez par une concentration de 10% 
        et augmentez progressivement selon la tolérance de votre peau.
      </p>
      
      <h2 class="text-2xl font-playfair font-light text-black mb-4 mt-8">Nos recommandations</h2>
      <p class="mb-6 text-lg leading-relaxed text-gray-700">
        Chez Carré Santé Beauté, nous sélectionnons avec soin les produits contenant de la vitamine C 
        pour vous garantir efficacité et tolérance. Nos experts vous accompagnent dans le choix du 
        produit le plus adapté à votre type de peau.
      </p>
    `,
    date: "15 décembre 2024",
    readTime: "5 min",
    category: "Soins du visage",
    author: "Jérémy Naphay",
    authorRole: "Expert beauté",
    image: "/assets/blog/vitamine-c-skin.jpg",
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center text-gray-600 hover:text-black transition-colors mb-8"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Retour au blog
          </Link>

          <div className="mb-8">
            <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700">
              {blogPost.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-playfair font-light text-black mb-6 tracking-tight">
            {blogPost.title}
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {blogPost.excerpt}
          </p>

          <div className="flex items-center justify-between text-sm text-gray-500 mb-8">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <CalendarIcon className="w-4 h-4 mr-2" />
                {blogPost.date}
              </div>
              <div className="flex items-center">
                <ClockIcon className="w-4 h-4 mr-2" />
                {blogPost.readTime}
              </div>
            </div>
            <div className="flex items-center">
              <UserIcon className="w-4 h-4 mr-2" />
              <span>{blogPost.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Image Placeholder */}
          <div className="relative h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-12">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-gray-500 text-lg">Image à venir</span>
            </div>
          </div>

          {/* Article Text */}
          <article
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />

          {/* Author Bio */}
          <div className="mt-16 p-8 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                <UserIcon className="w-8 h-8 text-gray-500" />
              </div>
              <div>
                <h3 className="text-xl font-playfair font-light text-black mb-1">
                  {blogPost.author}
                </h3>
                <p className="text-gray-600">{blogPost.authorRole}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-playfair font-light text-black mb-12 text-center">
            Articles similaires
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <article key={i} className="group">
                <Link href={`/blog/article-${i}`} className="block">
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 delay-0 ease-out group-hover:scale-[1.02]">
                    <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">
                          Image à venir
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700 mb-3 inline-block">
                        Soins du visage
                      </span>

                      <h3 className="text-lg font-playfair font-light text-black mb-3 group-hover:text-gray-700 transition-colors">
                        Article similaire {i}
                      </h3>

                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        Découvrez nos conseils d&apos;experts pour prendre soin
                        de votre peau...
                      </p>

                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center">
                          <CalendarIcon className="w-4 h-4 mr-1" />
                          10 décembre 2024
                        </div>
                        <div className="flex items-center">
                          <ClockIcon className="w-4 h-4 mr-1" />6 min
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  // Génère quelques pages de blog statiques
  return [
    { slug: "vitamine-c-peau" },
    { slug: "routine-soins" },
    { slug: "produits-naturels" },
    { slug: "conseils-beaute" },
    { slug: "tendances-2024" },
  ];
}
