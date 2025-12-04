'use client';

import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { trackContactClick } from './actions';

interface WhatsAppButtonProps {
    teacherId: string;
    phoneNumber: string;
    className?: string;
    label?: string;
}

export default function WhatsAppButton({
    teacherId,
    phoneNumber,
    className,
    label = 'Contacter sur WhatsApp',
}: WhatsAppButtonProps) {
    const whatsappLink = `https://wa.me/${phoneNumber}`;

    const handleClick = () => {
        // Non-blocking tracking
        trackContactClick(teacherId);
    };

    return (
        <Button
            asChild
            size="lg"
            className={className}
            onClick={handleClick}
        >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" /> {label}
            </a>
        </Button>
    );
}
