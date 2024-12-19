import React, { useState } from 'react';
import { Rocket, LineChart, Users, Briefcase, Building2, Coins } from 'lucide-react';
import { ServiceButton } from './components/ServiceButton';
import { ContactForm } from './components/ContactForm';

interface Service {
  id: string;
  name: string;
  icon: React.ReactNode;
  isComingSoon?: boolean;
}

function App() {
  const [selectedServices, setSelectedServices] = useState<Set<string>>(new Set());

  const services: Service[] = [
    { id: 'audit', name: 'Audit', icon: <LineChart className="w-6 h-6" /> },
    { id: 'market-maker', name: 'Market Maker', icon: <Briefcase className="w-6 h-6" />, isComingSoon: true },
    { id: 'launchpad', name: 'Launchpad', icon: <Rocket className="w-6 h-6" />, isComingSoon: true },
    { id: 'hiring', name: 'Hiring', icon: <Users className="w-6 h-6" />, isComingSoon: true },
    { id: 'marketing', name: 'Marketing', icon: <Building2 className="w-6 h-6" />, isComingSoon: true },
    { id: 'funding', name: 'Funding', icon: <Coins className="w-6 h-6" />, isComingSoon: true },
  ];

  const toggleService = (serviceId: string) => {
    const newSelected = new Set(selectedServices);
    if (selectedServices.has(serviceId)) {
      newSelected.delete(serviceId);
    } else {
      newSelected.add(serviceId);
    }
    setSelectedServices(newSelected);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      services: Array.from(selectedServices),
      website: formData.get('website'),
      github: formData.get('github'),
      budget: formData.get('budget'),
      telegram: formData.get('telegram'),
      comment: formData.get('comment'),
    };
    console.log('Form submitted:', data);
    alert('Thank you for your submission! We will contact you soon.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-600 to-teal-700 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-10 bg-cover bg-center" />
      
      <div className="relative container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-white mb-8 tracking-tight">
              Find Your Perfect Partner NOW!
            </h1>
            <p className="text-xl text-emerald-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              Automated tool for web3 startups on their way to successful public sale! 
              Find launchpad, audit and market maker partners quickly and easily.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16 max-w-3xl mx-auto">
              {services.map((service) => (
                <ServiceButton
                  key={service.id}
                  name={service.name}
                  icon={service.icon}
                  isSelected={selectedServices.has(service.id)}
                  isComingSoon={service.isComingSoon}
                  onClick={() => !service.isComingSoon && toggleService(service.id)}
                />
              ))}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-2xl mx-auto max-w-2xl border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Find Partners Now!
            </h2>
            <ContactForm onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;