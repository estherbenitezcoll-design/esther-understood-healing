import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageSquare, Mail, Clock, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensaje enviado",
      description: "Me pondré en contacto contigo lo antes posible. ¡Gracias por confiar en mí!",
    });
    setFormData({ name: "", email: "", message: "" });
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

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  <div>
                    <h4 className="font-heading font-semibold">WhatsApp 24/7</h4>
                    <p className="text-sm text-muted-foreground">Respuesta rápida</p>
                  </div>
                </div>
                <Button className="btn-healing w-full">
                  Escribir por WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-secondary" />
                  <div>
                    <h4 className="font-heading font-semibold">Email</h4>
                    <p className="text-sm text-muted-foreground">contacto@estherbenitez.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-accent" />
                  <div>
                    <h4 className="font-heading font-semibold">Horarios</h4>
                    <p className="text-sm text-muted-foreground">Lunes a viernes: 9:00 - 20:00</p>
                    <p className="text-sm text-muted-foreground">Sábados: 9:00 - 15:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <h4 className="font-heading font-semibold">Modalidad</h4>
                    <p className="text-sm text-muted-foreground">100% Online</p>
                    <p className="text-sm text-muted-foreground">Desde cualquier lugar</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm shadow-soft">
              <CardHeader>
                <CardTitle className="text-2xl font-heading font-bold text-center">
                  Envíame un mensaje
                </CardTitle>
                <p className="text-muted-foreground text-center">
                  Cuéntame brevemente sobre tu situación y cómo puedo ayudarte
                </p>
              </CardHeader>
              <CardContent>
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
                      className="min-h-[120px] bg-background/50 border-border/50 focus:border-primary transition-gentle resize-none"
                    />
                  </div>

                  <div className="space-y-4">
                    <Button type="submit" className="btn-healing w-full text-lg py-6">
                      Enviar mensaje
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Te responderé en menos de 24 horas. Tu privacidad y confidencialidad 
                      están completamente protegidas.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 space-y-6 p-8 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl border border-border/50">
          <h3 className="text-2xl font-heading font-semibold">
            ¿Prefieres hablar directamente?
          </h3>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Si te sientes más cómodo/a con una conversación telefónica o por WhatsApp, 
            estaré encantada de atenderte y resolver todas tus dudas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-healing">
              WhatsApp directo
            </Button>
            <Button variant="outline" className="bg-background border-primary text-primary hover:bg-primary hover:text-white transition-gentle">
              Agendar llamada
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;