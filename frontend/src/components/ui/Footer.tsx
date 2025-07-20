import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Colonne 1 */}
          <div>
            <ul className="space-y-3 text-sm text-gray-600 font-light">
              <li>
                <Link
                  href="/livraison"
                  className="hover:text-black transition-colors duration-300"
                >
                  Livraison
                </Link>
              </li>
              <li>
                <Link
                  href="/mentions-legales"
                  className="hover:text-black transition-colors duration-300"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="/cgv-cgu"
                  className="hover:text-black transition-colors duration-300"
                >
                  CGV/CGU
                </Link>
              </li>
              <li>
                <Link
                  href="/a-propos"
                  className="hover:text-black transition-colors duration-300"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/paiement-securise"
                  className="hover:text-black transition-colors duration-300"
                >
                  Paiement sécurisé
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-black transition-colors duration-300"
                >
                  Contactez-nous
                </Link>
              </li>
              <li>
                <Link
                  href="/plan-du-site"
                  className="hover:text-black transition-colors duration-300"
                >
                  Plan du site
                </Link>
              </li>
              <li>
                <Link
                  href="/nos-parapharmacies-instituts"
                  className="hover:text-black transition-colors duration-300"
                >
                  Nos Parapharmacies et Instituts
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 2 */}
          <div>
            <ul className="space-y-3 text-sm text-gray-600 font-light">
              <li>
                <Link
                  href="/promotions"
                  className="hover:text-black transition-colors duration-300"
                >
                  Promotions
                </Link>
              </li>
              <li>
                <Link
                  href="/nouveaux-produits"
                  className="hover:text-black transition-colors duration-300"
                >
                  Nouveaux produits
                </Link>
              </li>
              <li>
                <Link
                  href="/meilleures-ventes"
                  className="hover:text-black transition-colors duration-300"
                >
                  Meilleures ventes
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 - CUSTOMER SERVICE */}
          <div>
            <h4 className="text-lg font-medium text-black mb-6 uppercase tracking-wide">
              Customer Service
            </h4>
            <ul className="space-y-3 text-sm text-gray-600 font-light">
              <li>
                <Link
                  href="/livraison"
                  className="hover:text-black transition-colors duration-300"
                >
                  Livraison
                </Link>
              </li>
              <li>
                <Link
                  href="/mentions-legales"
                  className="hover:text-black transition-colors duration-300"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="/cgv-cgu"
                  className="hover:text-black transition-colors duration-300"
                >
                  CGV/CGU
                </Link>
              </li>
              <li>
                <Link
                  href="/a-propos"
                  className="hover:text-black transition-colors duration-300"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/paiement-securise"
                  className="hover:text-black transition-colors duration-300"
                >
                  Paiement sécurisé
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-black transition-colors duration-300"
                >
                  Contactez-nous
                </Link>
              </li>
              <li>
                <Link
                  href="/plan-du-site"
                  className="hover:text-black transition-colors duration-300"
                >
                  Plan du site
                </Link>
              </li>
              <li>
                <Link
                  href="/nos-parapharmacies-instituts"
                  className="hover:text-black transition-colors duration-300"
                >
                  Nos Parapharmacies et Instituts
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 4 - RÉSEAUX SOCIAUX */}
          <div>
            <h4 className="text-lg font-medium text-black mb-6 uppercase tracking-wide">
              Réseaux sociaux
            </h4>
            <div className="flex items-center justify-start space-x-4">
              <i className="fab fa-instagram text-3xl text-pink-500"></i>
              <i className="fab fa-facebook text-3xl text-blue-600"></i>
              <i className="fab fa-tiktok text-3xl text-black"></i>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-100 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-600 font-light">
            &copy; 2025 Carré Santé Beauté. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
