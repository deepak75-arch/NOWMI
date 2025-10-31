import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Salon",
      details: ["Shop No. 8, Ground Floor, Tech Park Avenue", "OMR, Sholinganallur, Chennai - 600119"],
      link: "https://maps.google.com/?q=NOWMI+OMR+Sholinganallur" // Example link
    },
    {
      icon: Phone,
      title: "Call / WhatsApp",
      details: ["+91-44-1234-5678"],
      link: "https://wa.me/914412345678"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["omr@nowmi.in", "contact@nowmiomr.com"],
      link: "mailto:omr@nowmi.in"
    },
    {
      icon: Clock,
      title: "Opening Hours",
      details: ["Mon-Sat: 9:00 AM – 9:00 PM", "Sunday: 10:00 AM – 7:00 PM"],
      link: "#"
    }
  ]

  const services = [
    "Haircut & Styling",
    "Skin & Facial Treatment",
    "Men's Grooming",
    "Spa & Massage",
    "Nail Care",
    "Bridal & Event Styling",
    "Other"
  ]

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Book Your Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your look? Schedule your appointment today and let us take care of the rest.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-2xl font-bold text-primary mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.title}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 p-4 bg-card rounded-lg shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
                >
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <item.icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    {item.details.map((detail, i) => (
                      <p key={i} className="text-muted-foreground text-sm">{detail}</p>
                    ))}
                  </div>
                </a>
              ))}
            </div>

            {/* Map Placeholder */}
            <motion.div
              className="mt-8 rounded-lg overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.110507797745!2d80.2206776152382!3d12.96472899086046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d8d6f9f2d5b%3A0x6b6045a85f4efe9a!2sSholinganallur%2C%20Chennai%2C%20Tamil%20Nadu%20600119!5e0!3m2!1sen!2sin!4v1678886555123!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NOWMI OMR Location"
              ></iframe>
            </motion.div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="bg-card rounded-xl shadow-lg p-8">
              <h3 className="font-display text-2xl font-bold text-primary mb-6">Book an Appointment</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text" name="name" value={formData.name} onChange={handleChange} required
                    className="w-full px-4 py-3 bg-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                    placeholder="Full Name *"
                  />
                  <input
                    type="email" name="email" value={formData.email} onChange={handleChange} required
                    className="w-full px-4 py-3 bg-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                    placeholder="Email Address *"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                    className="w-full px-4 py-3 bg-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                    placeholder="Phone Number *"
                  />
                  <select
                    name="service" value={formData.service} onChange={handleChange} required
                    className="w-full px-4 py-3 bg-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                  >
                    <option value="">Select a service</option>
                    {services.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <input
                  type="date" name="date" value={formData.date} onChange={handleChange} required
                  className="w-full px-4 py-3 bg-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                />

                <textarea
                  name="message" value={formData.message} onChange={handleChange} rows={3}
                  className="w-full px-4 py-3 bg-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
                  placeholder="Additional message..."
                />

                <motion.button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground py-3 rounded-lg font-bold text-base hover:bg-accent/90 transition-colors flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={18} />
                  <span>Book Appointment</span>
                </motion.button>

                <p className="text-xs text-muted-foreground text-center">
                  We'll confirm your appointment within 2 hours.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact