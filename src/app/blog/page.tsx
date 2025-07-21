import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeftIcon,
  CalendarIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import Header from "@/components/Header";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title:
        "Adieu poux et lentes : Astuces naturelles pour des cheveux éclatants !",
      excerpt:
        "Découvrez des astuces naturelles pour dire adieu aux poux et aux lentes ! L'huile de coco, le vinaigre blanc et les huiles essentielles sont vos alliés pour éliminer ces parasites.",
      image: "/assets/blog/poux-lentes-naturel.jpg",
      date: "15 janvier 2025",
      readTime: "8 min",
      category: "Soins capillaires",
      slug: "adieu-poux-lentes-astuces-naturelles",
      author: "Jérémy Naphay",
    },
    {
      id: 2,
      title: "POURQUOI UTILISER UN SÉRUM ANTI-TACHES BRUNES ?",
      excerpt:
        "Au fil des années et des expositions solaires, des taches brunes peuvent apparaître sur le visage et le corps. Sans gravité, ces taches brunes sont un marqueur visible de l'âge.",
      image: "/assets/blog/serum-anti-taches.jpg",
      date: "12 janvier 2025",
      readTime: "6 min",
      category: "Soins du visage",
      slug: "pourquoi-utiliser-serum-anti-taches-brunes",
      author: "Jérémy Naphay",
    },
    {
      id: 3,
      title: "ABBI personnalise le soin à partir d'un selfie",
      excerpt:
        "Un selfie sur la borne d'un de nos 4 magasins et obtenez votre diagnostic de peau et votre routine sur mesure.",
      image: "/assets/blog/abbi-selfie-diagnostic.jpg",
      date: "10 janvier 2025",
      readTime: "5 min",
      category: "Technologie beauté",
      slug: "abbi-personnalise-soin-selfie",
      author: "Jérémy Naphay",
    },
    {
      id: 4,
      title: "Notre concept en Vidéo",
      excerpt:
        "Découvrez notre concept de Parapharmacie et Institut de beauté en vidéo !!",
      image: "/assets/blog/concept-video.jpg",
      date: "8 janvier 2025",
      readTime: "3 min",
      category: "Notre concept",
      slug: "notre-concept-video",
      author: "Jérémy Naphay",
    },
    {
      id: 5,
      title: "Nouveauté Esthederm Photoreverse",
      excerpt:
        "Comment Esthéderm Photo Reverse parvient-il à corriger les tâches solaires ?",
      image: "/assets/blog/esthederm-photoreverse.jpg",
      date: "5 janvier 2025",
      readTime: "7 min",
      category: "Nouveautés",
      slug: "nouveaute-esthederm-photoreverse",
      author: "Jérémy Naphay",
    },
    {
      id: 6,
      title: "Phytomer Bio - Les Atouts de la ligne Cyfolia",
      excerpt: "Une beauté saine et naturelle certifiée Bio",
      image: "/assets/blog/phytomer-bio-cyfolia.jpg",
      date: "3 janvier 2025",
      readTime: "6 min",
      category: "Marques bio",
      slug: "phytomer-bio-atouts-ligne-cyfolia",
      author: "Jérémy Naphay",
    },
    {
      id: 7,
      title: "Visage : Gardez votre peau douce, souple et lumineuse",
      excerpt:
        "L'un des secrets afin de garder une belle peau, ainsi qu'un teint parfait, repose essentiellement sur l'hydratation de votre visage. Découvrez nos conseils pour sélectionner le type de crème idéal.",
      image: "/assets/blog/peau-douce-souple-lumineuse.jpg",
      date: "1 janvier 2025",
      readTime: "9 min",
      category: "Soins du visage",
      slug: "visage-garde-peau-douce-souple-lumineuse",
      author: "Jérémy Naphay",
    },
    {
      id: 8,
      title: "A chaque âge sa crème de jour. (Problème et solution)",
      excerpt:
        "Que notre peau soit grasse, mixte ou sèche, la cosmétique nous propose des formules à tous les prix, faites pour nous, en fonction de nos objectifs et de notre âge.",
      image: "/assets/blog/chaque-age-creme-jour.jpg",
      date: "30 décembre 2024",
      readTime: "10 min",
      category: "Conseils beauté",
      slug: "chaque-age-creme-jour-probleme-solution",
      author: "Jérémy Naphay",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Link
              href="/"
              className="inline-flex items-center text-gray-600 hover:text-black transition-colors mb-8"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              Retour à l&apos;accueil
            </Link>
            <h1 className="text-5xl md:text-7xl font-playfair font-light text-black mb-8 tracking-tight">
              Notre
              <br />
              <span className="font-light">Blog</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Conseils d&apos;experts, astuces beauté et découvertes pour votre
              bien-être au quotidien
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="group">
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 delay-0 ease-out group-hover:scale-[1.02]">
                    {/* Image */}
                    <div className="relative h-64 bg-gray-100">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">
                          Image à venir
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <span className="bg-gray-100 px-3 py-1 text-xs font-medium">
                          {post.category}
                        </span>
                      </div>

                      <h3 className="text-xl font-playfair font-light text-black mb-3 group-hover:text-gray-700 transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {post.excerpt}
                      </p>

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
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
