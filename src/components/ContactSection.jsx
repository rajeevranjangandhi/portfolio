import { Mail, MapPin, Phone, Send} from "lucide-react"
import {cn} from '@/lib/utils';
import {useToast} from '@/hooks/use-toast';
import { useState } from "react";
import { Description } from "@radix-ui/react-toast";

export const ContactSection =()=>{
    const {toast} = useToast();
    const [isSumbitting, setIsSubmitting] = useState(false);
    const handleSubmit = (e) =>{
        e.preventDefault()
        setIsSubmitting(true);
        setTimeout(()=>{
            toast({
                title:"Message Sent!",
                description:"Thankyou for the message, I'll get back to you soon.",
            })
            setIsSubmitting(false)
        },1500);
    }
    return <section id="contact" className="py-24 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In<span>Touch</span></h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Want to connect? Feel free to reach out. I'm always open to discuss.

        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
                <h3 className="text-2xl font-semibold mb-6">
                    Contact Information
                </h3>
                <div className="space-y-6 justify-center">
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                        <Mail className="h-6 w-6 text-primary"/>

                        </div>
                        <div>
                            <h4 className="font-medium">Email</h4>
                            <a href="mailto:rranjangandhi@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">rranjangandhi@gmail.com</a>
                        </div>
                    </div>


                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                        <Phone className="h-6 w-6 text-primary"/>

                        </div>
                        <div>
                            <h4 className="font-medium">Phone</h4>
                            <a href="tel:8517826879" className="text-muted-foreground hover:text-primary transition-colors">+91 8517826879</a>
                        </div>
                    </div>


                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                        <MapPin className="h-6 w-6 text-primary"/>

                        </div>
                        <div>
                            <h4 className="font-medium">Location</h4>
                            <a className="text-muted-foreground hover:text-primary transition-colors">Anand Vihar New-Delhi</a>
                        </div>
                    </div>

                </div>

                <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
                    <h3 className="text-2xl font-semibold mb-6">Send A Message</h3>
                    <form className="space-y-6" >
                        <div>
                            <label className="block text-sm font-medium mb-2" htmlFor="name">Your Name</label>
                            <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="Rajeev Ranjan.."/>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2" htmlFor="email">Your Email</label>
                            <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="rranjangandhi@gmail.com"/>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2" htmlFor="message">Your Message</label>
                            <textarea id="message" name="message" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" placeholder="Hello I'd like to talk..."/>
                        </div>
                        <button type="submit" disabled={isSumbitting} className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                            {isSumbitting?"Sending..": "Send Message"}
                            <Send size={16}/>

                        </button>
                    </form>

                </div>

            </div>
        </div>
        </div>
    </section>
}