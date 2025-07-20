import Link from "next/link";
import {
  ArrowRightIcon,
  CalendarIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

export default function BlogSection() {
  const featuredPosts = [
    {
      id: 1,
      title: "A chaque âge sa crème de jour. (Problème et solution)",
      excerpt:
        "Que notre peau soit grasse, mixte ou sèche, la cosmétique nous propose des formules à tous les prix, faites pour nous, en fonction de nos objectifs et de notre âge.",
      date: "30 décembre 2024",
      readTime: "10 min",
      category: "Conseils beauté",
      slug: "chaque-age-creme-jour-probleme-solution",
      author: "Jérémy Naphay",
    },
    {
      id: 2,
      title: "ABBI personnalise le soin à partir d'un selfie",
      excerpt:
        "Un selfie sur la borne d'un de nos 4 magasins et obtenez votre diagnostic de peau et votre routine sur mesure.",
      date: "10 janvier 2025",
      readTime: "5 min",
      category: "Technologie beauté",
      slug: "abbi-personnalise-soin-selfie",
      author: "Jérémy Naphay",
    },
    {
      id: 3,
      title: "Notre concept en Vidéo",
      excerpt:
        "Découvrez notre concept de Parapharmacie et Institut de beauté en vidéo !!",
      date: "8 janvier 2025",
      readTime: "3 min",
      category: "Notre concept",
      slug: "notre-concept-video",
      author: "Jérémy Naphay",
    },
  ];

  return (
    <section className="py-32 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-playfair font-light text-black mb-8 tracking-tight">
            Nos
            <br />
            <span className="font-light">Conseils</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Découvrez nos articles d&apos;experts pour prendre soin de votre
            beauté au quotidien
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {featuredPosts.map((post) => (
            <article key={post.id} className="group">
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <div className="bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 delay-0 ease-out group-hover:scale-[1.02] h-full flex flex-col">
                  {/* Image Placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex-shrink-0">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">
                        Image à venir
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span className="bg-gray-100 px-3 py-1 text-xs font-medium">
                        {post.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-playfair font-light text-black mb-3 group-hover:text-gray-700 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto">
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center">
                          <CalendarIcon className="w-4 h-4 mr-1" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <ClockIcon className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <div className="mt-3 text-xs text-gray-500">
                        Par {post.author}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link
            href="/blog"
            className="group inline-flex items-center justify-center px-12 py-6 border-2 border-black text-black font-medium hover:bg-black hover:text-white transition-all duration-300 delay-0 ease-out text-lg relative overflow-hidden cursor-pointer"
          >
            <span className="relative z-10 group-hover:text-white group-hover:scale-110 transition-all duration-300 delay-0 ease-out">
              Voir tous nos articles
            </span>
            <ArrowRightIcon className="ml-3 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300 delay-0" />
            <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 delay-0 origin-left"></div>
          </Link>
        </div>
      </div>
    </section>
  );
}
