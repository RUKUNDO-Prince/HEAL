import React from "react";
import { ArrowRight, Heart, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-r from-green-600 via-green-700 to-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">{t("cta.title")}</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              {t("cta.description")}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* <Button 
              size="lg" 
              className="bg-white text-green-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Heart className="mr-2 h-5 w-5" />
              {t('cta.primary')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button> */}
            <Link to="/projects">
              <Button
                // variant="outline"
                size="lg"
                // className="border-2 border-white text-white hover:bg-white hover:text-green-700 px-8 py-4 text-lg font-semibold transition-all duration-300"
                className="bg-white text-green-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Users className="mr-2 h-5 w-5" />
                {t("cta.secondary")}
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50K+</div>
              <div className="text-lg opacity-90">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">30</div>
              <div className="text-lg opacity-90">Districts Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-lg opacity-90">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
