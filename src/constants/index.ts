import image1 from '@/assets/images/project-1.jpg';
import image2 from '@/assets/images/project-2.jpg';
import image3 from '@/assets/images/project-3.jpg';
import image4 from '@/assets/images/project-4.jpg';
import image5 from '@/assets/images/project-5.jpg';
import testimonialImage1 from '@/assets/images/testimonial-1.jpg';
import testimonialImage2 from '@/assets/images/testimonial-2.jpg';
import testimonialImage3 from '@/assets/images/testimonial-3.jpg';

export const faqs = [
    {
        question: 'How long does it take to build a website?',
        answer: 'It depends on the complexity of the website and the scope of the project.',
    },
    {
        question: 'What is your development process like?',
        answer: 'I follow a hands-on approach starting with project planning, building out the core features, and regular check-ins to make sure everything matches your needs.',
    },
    {
        question: 'Do you work with international clients?',
        answer: 'Yes, I work with clients globally and can accommodate different time zones for meetings and communication.',
    },
    {
        question: 'What industries do you specialize in?',
        answer: 'I have experience across various industries including technology, retail, hospitality, and professional services, bringing fresh perspectives to each project.',
    },
];

export const headerNavItems = [
    {
        label: 'About',
        href: '#intro',
    },
    {
        label: 'Selected Works',
        href: '#projects',
    },
    {
        label: 'Testimonials',
        href: '#testimonials',
    },
    {
        label: 'FAQs',
        href: '#faqs',
    },
    {
        label: 'Contact',
        href: '#contact',
    },
];

export const foooterNavItems = [
    { href: '#', label: 'Home' },
    { href: '#', label: 'Projects' },
    { href: '#', label: 'Testimonials' },
    { href: '#', label: 'Faqs' },
    { href: '#', label: 'Contacts' },
];

export const projects = [
    {
        name: 'Artisan Brew Co.',
        image: image1,
    },
    {
        name: 'Wavelength Studios',
        image: image2,
    },
    {
        name: 'Nova Fitness',
        image: image3,
    },
    {
        name: 'Urban Plates',
        image: image4,
    },
    {
        name: 'Bloom Botanicals',
        image: image5,
    },
];

export const testimonials = [
    {
        name: 'Sarah Chen',
        company: 'Pixel Perfect',
        role: 'Head of Design',
        quote: "Alex's expertise in both technical development and design created a beautiful, high-performing website.",
        image: testimonialImage1,
        imagePositionY: 0.2,
    },
    {
        name: 'Marcus Rodriguez',
        company: 'Craft Coffee Co.',
        role: 'Founder',
        quote: 'Alex transformed our boutique coffee brand with a website that perfectly balances aesthetics and functionality.',
        image: testimonialImage2,
        imagePositionY: 0.1,
    },
    {
        name: 'Emily Watson',
        company: 'Studio Minimal',
        role: 'Creative Director',
        quote: 'The collaborative process was amazing. Alex brought lots of fresh perspectives and innovative solutions.',
        image: testimonialImage3,
        imagePositionY: 0.55,
    },
];
