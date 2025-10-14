import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  return (
    <Button
      onClick={toggleLanguage}
      variant="outline"
      size="sm"
      className="fixed top-24 right-6 z-50 bg-white/90 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <Globe className="w-4 h-4 mr-2" />
      <span className="font-semibold">{language === 'en' ? 'हिंदी' : 'English'}</span>
    </Button>
  );
};
