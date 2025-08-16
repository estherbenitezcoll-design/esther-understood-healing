import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageSquare, Mail, Clock, MapPin, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Usando FormSubmit - no requiere registro, solo confirmación por email
      const response = await fetch("https://formsubmit.co/eb.espacioliminal@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email,
          _subject: `Nuevo mensaje de contacto de ${formData.name}`,
          _captcha: "false",
          _template: "table"
        }),
      });

      if (response.ok) {
        toast({
          title: "¡Mensaje enviado con éxito!",
          description: "Me pondré en contacto contigo lo antes posible. ¡Gracias por confiar en mí!",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Error al enviar el mensaje");
      }
    } catch (error) {
      toast({
        title: "Error al enviar el mensaje",
        description: "Por favor, inténtalo de nuevo o contáctame directamente por WhatsApp o email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="section-padding bg-gradient-to-br from-muted/20 to-background">
      <div className="container-warm">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold">
            Estoy aquí para <span className="text-gradient">acompañarte</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Da el primer paso hacia tu bienestar. Contacta conmigo para agendar 
            tu sesión o resolver cualquier duda sobre el proceso terapéutico.
          </p>
        </div>

        {/* Simplified Contact Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm shadow-soft">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-medium">
                      Nombre completo
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary transition-gentle"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-medium">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary transition-gentle"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-medium">
                    Mensaje
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntame brevemente sobre tu situación y cómo puedo acompañarte en tu proceso..."
                    required
                    className="min-h-[140px] bg-background/50 border-border/50 focus:border-primary transition-gentle resize-none"
                  />
                </div>

                <div className="space-y-4">
                   <Button 
                     type="submit" 
                     disabled={isSubmitting}
                     className="btn-healing w-full text-lg py-6"
                   >
                     {isSubmitting ? (
                       <>
                         <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                         Enviando...
                       </>
                     ) : (
                       "Enviar mensaje"
                     )}
                   </Button>
                 </div>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Options */}
        <div className="text-center mt-8 space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button 
              className="btn-healing flex-1"
              onClick={() => window.open('https://wa.me/34611016295?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20tus%20servicios%20de%20psicolog%C3%ADa', '_blank')}
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
            <Button 
              variant="outline" 
              className="bg-background border-primary/30 text-primary hover:bg-primary/10 transition-gentle flex-1"
              onClick={() => window.open('mailto:eb.espacioliminal@gmail.com?subject=Consulta%20desde%20la%20web&body=Hola%20Esther%2C%0A%0AMe%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20tus%20servicios.%0A%0AGracias.', '_blank')}
            >
              <Mail className="mr-2 h-4 w-4" />
              Email directo
            </Button>
          </div>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
             Te responderé en menos de 24 horas. Tu privacidad y confidencialidad están completamente protegidas.
           </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;