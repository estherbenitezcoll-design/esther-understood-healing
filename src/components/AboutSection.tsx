import { CheckCircle, Brain, Heart, Users } from "lucide-react";
import estherProfile from "@/assets/esther-profile.jpg";
import { useState } from "react";

const AboutSection = () => {
  const [selectedSpec, setSelectedSpec] = useState<number | null>(null);
  
  const specializations = [
    {
      icon: Brain,
      title: "Trauma complejo y TEPT",
      description: "Especialización en traumas de desarrollo y experiencias adversas repetidas"
    },
    {
      icon: Heart,
      title: "Terapia EMDR",
      description: "Certificación europea en EMDR para procesamiento de traumas"
    },
    {
      icon: Users,
      title: "Neurodivergencia en adultos",
      description: "Apoyo especializado a personas neurodivergentes incomprendidas"
    }
  ];

  const approaches = [
    "Enfoque integrador no centrado únicamente en TCC",
    "Terapia centrada en la persona y sus necesidades únicas",
    "Comprensión profunda del trauma y la neurodivergencia",
    "Ambiente seguro y libre de juicios",
    "Validación de experiencias y emociones"
  ];

  return (
    <section className="section-padding bg-gradient-to-r from-primary to-accent">
      <div className="container-warm">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
            Sobre <span className="text-white/90">mí</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto relative">
  
          
          {/* Layout reorganizado: texto arriba, foto y tarjetas abajo */}
          <div className="space-y-8 mb-12 relative z-20">
            {/* Texto de presentación */}
            <div className="text-center">
              <p className="text-white text-lg sm:text-xl lg:text-2xl font-light leading-relaxed max-w-4xl mx-auto">
                Creo firmemente que cada persona tiene una historia única que merece ser escuchada y validada. Mi trabajo se basa en la comprensión profunda del trauma y la neurodivergencia.
              </p>
            </div>
          </div>

          {/* Foto centrada con enfoque terapéutico y especializaciones */}
          <div className="grid lg:grid-cols-3 gap-8 items-center relative z-20">

            {/* Enfoque terapéutico */}
            <div className="bg-white backdrop-blur-sm p-8 rounded-2xl shadow-2xl min-h-[400px] flex flex-col">
              <h3 className="text-xl font-heading font-semibold mb-6 text-gray-800">
                Mi enfoque terapéutico:
              </h3>
              <div className="space-y-3 flex-grow">
                {approaches.map((approach, index) => {
                    const colors = ['text-blue-200', 'text-purple-200', 'text-teal-200', 'text-pink-200', 'text-indigo-200'];
                    return (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className={`h-5 w-5 ${colors[index % colors.length]} mt-0.5 flex-shrink-0`} />
                        <span className="text-sm text-gray-700">{approach}</span>
                      </div>
                    );
                  })}
              </div>
            </div>

            {/* Foto centrada */}
            <div className="flex justify-center">
              <img
                src={estherProfile}
                alt="Esther - Psicóloga especializada en trauma y neurodivergencia"
                className="w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover object-top shadow-2xl border-4 border-white"
              />
            </div>

            {/* Especializaciones */}
            <div className="bg-white backdrop-blur-sm p-8 rounded-2xl shadow-2xl min-h-[400px] flex flex-col">
              <h3 className="text-xl font-heading font-semibold mb-6 text-gray-800">
                Especializaciones:
              </h3>
              <div className="space-y-3 flex-grow">
                {specializations.map((spec, index) => {
                  const IconComponent = spec.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => setSelectedSpec(selectedSpec === index ? null : index)}
                      className="w-full bg-gradient-to-r from-primary to-accent text-white px-4 py-3 rounded-xl font-medium text-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <IconComponent className="h-4 w-4" />
                        <span>{spec.title}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
              
              {selectedSpec !== null && (
                <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                  <p className="text-sm text-gray-700">
                    {specializations[selectedSpec].description}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;